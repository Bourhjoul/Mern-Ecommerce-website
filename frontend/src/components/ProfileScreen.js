import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Form, Image} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import avatarRegister from './img/avatarRegister.svg'
import login from '../actions/userActions'
import addUs from './img/new.svg'
import wave from './img/wavev.png'
import {getUserDetails, updateUserProfile} from '../actions/userActions'


import {
  Button, Input
} from "@chakra-ui/react"

const ProfileScreen = ({location, history}) => {
    const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [confirmPassword,setConfirmPassword] = useState('')
  const [message,setMessage] = useState(null) 

  const dispatch = useDispatch()

  const userDetails = useSelector(state => state.userDetails)

  const { error, user } = userDetails


  const userLogin = useSelector(state => state.userLogin)

  const {userInfo } = userLogin



  const userUpdateProfile = useSelector(state => state.userUpdateProfile)

  const {success } = userUpdateProfile

  useEffect(() => {
    if(!userInfo) {
      history.push('/login')
    }else{
        if(!user.name)
        {
            dispatch(getUserDetails('profile'))
        }else{
            setName(user.name)
            setEmail(user.email)
        }
    }
  }, [dispatch, history, userInfo, user])

  const submitHandler = (e) => {
    e.preventDefault()
    if(password !== confirmPassword){
        setMessage('Password do not match')
    }
    else{
        dispatch(updateUserProfile({ id:user._id, name, email, password }))
    }
    
  }

  const inputs = document.querySelectorAll(".inputa");


  function addcl(){
    let parent = this.parentNode.parentNode;
    parent.classList.add("focus");
  }
  
  function remcl(){
    let parent = this.parentNode.parentNode;
    if(this.value == ""){
      parent.classList.remove("focus");
    }
  }
  
  
  inputs.forEach(inputa => {
    inputa.addEventListener("focus", addcl);
    inputa.addEventListener("blur", remcl);
  });
  




    return (
        <div className="registerSc">
          	<Image className="wave" src={wave} />

            <div className="containera">
              
		<div className="imga">
			<Image src={addUs} />
		</div>
		<div className="login-content">
			<form onSubmit={submitHandler}>
				<Image src={avatarRegister} />
				{error && <h4>{error}</h4>}
                {success && <h4>Profile Updated</h4>}
                



                <div className="input-div zz">
                       <div className="i">
           		   		<i className="fas fa-user"></i>
           		   </div>
                   <div className="div">
           		   		
           		   		<input type="text" value={name} className="inputa" placeholder="Enter name"  onChange={(e) => setName(e.target.value)}/>
           		   </div>

           		   
           		</div>




           		<div className="input-div one">
                       

           		   <div className="i">
           		   		<i className="fas fa-envelope"></i>
           		   </div>
           		   <div className="div">
           		   		
           		   		<input type="text" value={email} className="inputa" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
           		   </div>
           		</div>



                

           		<div className="input-div pass">
           		   <div className="i"> 
           		    	<i className="fas fa-lock"></i>
           		   </div>
           		   <div className="div">
           		    	
           		    	<input type="password" value={password} className="inputa" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)}/>
            	   </div>
            	</div>


                <div className="input-div passconf">
           		   <div className="i"> 
           		    	<i className="fas fa-lock"></i>
           		   </div>
           		   <div className="div">
           		    	
           		    	<input type="password" value={confirmPassword} className="inputa" placeholder="Confirm password" onChange={(e) => setConfirmPassword(e.target.value)}/>
            	   </div>
            	</div>
                {message && <h4>{message}</h4>}
                <input type="submit" className="btna2" value="Update"/>
               
            	
                
              
            </form>
        </div>
    </div>
        </div>
    )
}

export default ProfileScreen
