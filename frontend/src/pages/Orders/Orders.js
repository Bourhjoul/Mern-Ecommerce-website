import React,{useEffect} from 'react'
import { listOrders} from '../../actions/orderActions';
import { useDispatch, useSelector } from 'react-redux';
import HashLoader from "react-spinners/HashLoader";
import { Helmet } from 'react-helmet';


import {
    Button, Input, Table,  Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Stack,
    Box,
  } from "@chakra-ui/react"
import { Link } from 'react-router-dom';
import { AiFillDelete, AiOutlineEdit } from 'react-icons/ai';

const Orders = ({history}) => {
    const dispatch = useDispatch()
    const orderList = useSelector(state => state.orderList)
    const {loading,error,orders} = orderList
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    useEffect(()=>{
        if(userInfo && userInfo.isAdmin){
            dispatch(listOrders())
        }else{
            history.push('/login')
        }
    },[dispatch,history,userInfo])

    return (
        <div className = 'Users'>
            <Helmet>
                <title>Orders</title>
            </Helmet>
        <h1 className = 'titlepanel'> Orders :</h1>
        {loading ?  <div className='loading'>
                     <HashLoader   color={"#1e1e2c"}  loading={loading} size={40} />
                   </div> : 
                   error ? <h1>error</h1> :
                   <Box overflowX = 'auto'>
                   <Table  className = 'tableusers' variant="striped">
                       <Thead>
                        <Tr>
                            <Th textAlign = 'center'w = '10%'>ID</Th>
                            <Th textAlign = 'center' w = '20%'>User</Th>
                            <Th textAlign = 'center' w = '20%'>Date</Th>
                            <Th textAlign = 'center' w = '5%'>TOTAL</Th>
                            <Th textAlign = 'center' w = '10%'>PAID</Th>
                            <Th textAlign = 'center' w = '10%'>Deliverd</Th>

                        </Tr>
                      </Thead>
                      <Tbody>
                            {orders.map(order =>(
                                <Tr key = {order._id}>
                                    <Td>{order._id}</Td>
                                    <Td>{order.user && order.user.name}</Td>
                                    <Td>{order.createdAt.substring(0,10)}</Td>
                                    <Td>{order.totalPrice}</Td>

                                    <Td>{order.isPaid ? <div className ='paid'>{order.paidAt.substring(0,10)}</div> : <div className = 'notpaid'>NO</div>}</Td>
                                    <Td>{order.isDelivered ? <div className ='paid'>{order.deliveredAt.substring(0,10)}</div> : <div className = 'notpaid'>NO</div>}</Td>

                                    <Td>
                                        <Stack>
                                        <Link to ={ `/order/${order._id}`}>
                                             <Button leftIcon = {<AiOutlineEdit size = '16' />} colorScheme ='blue' size="xs"  >Details</Button>
                                        </Link>
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

export default Orders
