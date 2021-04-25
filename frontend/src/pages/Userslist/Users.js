import React,{useEffect} from 'react'
import { ListUsers,DeleteUser } from '../../actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import HashLoader from "react-spinners/HashLoader";
import './Users.css'

import {
    Button, Input, Table,  Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Stack,
    Box,
  } from "@chakra-ui/react"
  import { Helmet } from 'react-helmet';

import { Link } from 'react-router-dom';
import { AiFillDelete, AiOutlineEdit } from 'react-icons/ai';

const Users = ({history}) => {
    const dispatch = useDispatch()
    const userList = useSelector(state => state.userList)
    const {loading,error,users} = userList
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin
    const userDelete = useSelector(state => state.userDelete)
    const {success:successDelete} = userDelete

    useEffect(()=>{
        if(userInfo && userInfo.isAdmin){
            dispatch(ListUsers())

        }else{
            history.push('/login')
        }
    },[dispatch,history,successDelete,userInfo])

    const deletehandler = (id) =>{
        if(window.confirm('Are You Sure?')){
            dispatch(DeleteUser(id))
        }
    }
    return (
        <div className = 'Users'>
            <Helmet>
                <title>Users</title>
            </Helmet>
        <h1 className = 'titlepanel'> Users :</h1>
        {loading ?  <div className='loading'>
                     <HashLoader   color={"#1e1e2c"}  loading={loading} size={40} />
                   </div> : 
                   error ? <h1>error</h1> :
                   <Box overflowX = 'auto'>
                   <Table  className = 'tableusers' variant="striped">
                       <Thead>
                        <Tr>
                            <Th textAlign = 'center'w = '10%'>ID</Th>
                            <Th textAlign = 'center' w = '20%'>Name</Th>
                            <Th textAlign = 'center' w = '50%'>Email</Th>
                            <Th textAlign = 'center' w = '10%'>Admin</Th>
                            <Th textAlign = 'center' w = '10%'></Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                            {users.map(user =>(
                                <Tr key = {user._id}>
                                    <Td>{user._id}</Td>
                                    <Td>{user.name}</Td>
                                    <Td><a href = {`mailto:${user.email}`}></a>{user.email}</Td>
                                    <Td>{user.isAdmin ? <div className ='paid'>YES</div> : <div className = 'notpaid'>NO</div>}</Td>
                                    <Td>
                                        <Stack>
                                        <Link to ={ `/admin/user/${user._id}/edit`}>
                                             <Button leftIcon = {<AiOutlineEdit size = '16' />} colorScheme ='blue' size="xs"  >EDIT</Button>
                                        </Link>
                                             <Button colorScheme ='red' leftIcon = {<AiFillDelete size = '16' />} size="xs" onClick= {()=>{deletehandler(user._id)}}>DELETE</Button>
                                        </Stack>
                                    </Td>

                                </Tr>
                            ))}
                      </Tbody>
                    </Table>
                    </Box>
                   }
            
        </div>
    )
}

export default Users
