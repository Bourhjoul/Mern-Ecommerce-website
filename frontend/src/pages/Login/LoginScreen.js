import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { Helmet } from 'react-helmet';

import {Form, Image} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import {BsArrowRight} from "react-icons/all"
import avatar from './img/avatare.svg'
import login from '../../actions/userActions'
import login_svg from './img/login.svg'
import wave from './img/wavev.png'
import './logincss.css'




const LoginScreen = ({location, history}) => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
   
  const dispatch = useDispatch()

  const userLogin = useSelector(state => state.userLogin)

  const { error, userInfo } = userLogin

  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if(userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
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
        <div>
          <Helmet>
            <title>Login</title>

          </Helmet>
          	<Image className="wave" src={wave} />

            <div className="containera">
              
		<div className="imga">
			<Image src={login_svg} />
		</div>
		<div className="login-content">
			<form onSubmit={submitHandler}>
			<h1>Member Login</h1>
				{error && <h4>{error}</h4>}
           		<div className="input-div one">
           		   <div className="i">
                     <i class="fas fa-envelope"></i>
           		   </div>
           		   <div className="div">
           		   		
           		   		<input type="text" value={email} className="inputa" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
           		   </div>
           		</div>
           		<div className="input-div pass">
           		   <div className="i"> 
           		    	<i className="fas fa-lock"></i>
           		   </div>
           		   <div className="div">
           		    	
           		    	<input type="password" value={password} className="inputa" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
            	   </div>
            	</div>
            	
            	<input type="submit" className="btna" value="Login" />
               
              <div className='div-forgot'>
                              <span>Forgot </span>
                         <Link className ='text-forgot'  to ='/forgot'>Password? </Link>
                         
                         </div>
              <Link className="createAcc" to={redirect ? `/register?redirect=${redirect}` : '/register'}>Create your Account <BsArrowRight size="25"/></Link>
             
            </form>
        </div>
    </div>
        </div>
    )
}

export default LoginScreen
