import React , {useRef,useState,useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { Route } from 'react-router-dom';
import {Link, NavLink } from 'react-router-dom'
import { Button, Input,InputGroup,InputRightElement, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react"
import {RiShoppingCart2Line,IoCloseOutline,MdSearch,BsArrowRightShort,MdKeyboardArrowRight,IoLogOutOutline,CgProfile, IoChevronDownCircleOutline, IoMdArrowDropdown} from "react-icons/all"

import {logout} from '../actions/userActions'
import { keyword } from 'color-convert'
import Searchnav from './Searchnav';

 const Nav = ({history}) => {
    const [incart,setincart] = useState(0);
    const cart = useSelector(state => state.cart)
    const {cartItems} = cart
    const[nav,setNav]=useState(false)
    const Nav = useRef(null)


     //search
     const searchRef = useRef(null)
     const [showSearchIc,setShowSearchIc] = useState(false)
     //Burger
     const Buric = useRef(null)
     const navLinks = useRef(null)
     const rightItems = useRef(null)
     //signin
     const [signin,setSignin] = useState(null)





     const onSeacrhFun= () =>
        {

                //Search Icon state + Bar
            setShowSearchIc(!showSearchIc) //false
            console.log(showSearchIc)
            searchRef.current.classList.toggle('searchActive')
            searchRef.current.style.animation = 'moving 0.3s ease both 0.3s'
        }  
        const onDelSeacrh =  () =>{
            
            setShowSearchIc(!showSearchIc) //true
            searchRef.current.classList.toggle('searchActive')

        }

        const onBurgActive = () =>{
            //Toggle Nav

            const links = document.querySelectorAll('.navLinks li')
            navLinks.current.classList.toggle('burgerActive')
            rightItems.current.classList.toggle('burgerActive')
            //Animate Links
            links.forEach((link,index) => {
             if(link.style.animation)
                  {
                        link.style.animation = "";
                        rightItems.current.style.animation = "";
                   }
                else 
                { 
                       
                        link.style.animation = `moving 0.5s ease forwards ${index / 5 }s`
                        rightItems.current.style.animation = `moving 0.5s ease forwards ${index / 5 }s`
                       
                    }
            });
            //Burger Animation
            Buric.current.classList.toggle('toggle')
        }
        const onChangeBack= () =>{
            if(window.scrollY >= 60){
               setNav(true)
            }
            else  setNav(false)
        }
        window.addEventListener('scroll',onChangeBack)

        useEffect(() => {
            const cart = cartItems.length ? cartItems.length : 0 ;
            setincart(cart);
            return () => {
                setincart(0)
            }
        },[cart])


        const dispatch= useDispatch()
        const userLogin = useSelector(state => state.userLogin)
        const {userInfo} = userLogin
        
        const logoutHandler = () => {
            dispatch(logout())
        }
    
    return (
       <nav ref = {Nav}  className={`nav ${nav ? 'active' : ''}`} >
           <div className="logo"><Link to =''>EAST CLOTHING</Link></div>
            <ul className="navLinks" ref= {navLinks}>
                <NavLink to="/" exact  activeClassName='activlink' ><li>Home</li></NavLink>
                <NavLink to="/shop" activeClassName='activlink' ><li>Shop</li></NavLink>
                <NavLink to="/contactus"activeClassName='activlink' ><li>Contact us</li></NavLink>
                <NavLink to="/about" activeClassName='activlink'><li>About</li></NavLink>  
            </ul>
            <div className="burger" ref= {Buric} onClick = {onBurgActive}>
                <div className='line1'></div>
                <div className='line2'></div>
                <div className='line3'></div>
            </div>
        <div className = "rightComp" ref = {rightItems}>
        <div  ref={searchRef} className="search">
        <Route render={({history}) => <Searchnav history ={history}/>}/>

        </div>


                { !showSearchIc && <MdSearch className='iconSearch' size='26' onClick={onSeacrhFun}/>  }
                <Link to='/cart' > <RiShoppingCart2Line className='iconCart' size='26' />
                {userInfo && !userInfo.isAdmin && 
                <div className='dotcart'>
                    {incart}
                </div>
                }

                 </Link>

                            {userInfo ? (<div className="ic_sett_dis"><Link to="/profile"><CgProfile size="25" className="settingIcon"/></Link>
                                <IoLogOutOutline size='28' className="displayIcon" onClick={logoutHandler}/>
                                </div>
                                
                            ) : <Link to='/login' > <div className='signin' onMouseOver={ () => setSignin(!signin)}  onMouseOut={ ()=> setSignin(!signin) }  > Sign in 
                            { !signin ? <BsArrowRightShort  size='25'/>  : <MdKeyboardArrowRight size='25'  /> }

                        </div>
                        </Link>}
                        {userInfo && userInfo.isAdmin && (
                            <Menu>
                                  <MenuButton as = {Button}  rightIcon={<IoMdArrowDropdown />}>
                                      Admin
                                  </MenuButton>
                                  <MenuList>
                                  <MenuItem>
                                  <Link to = '/admin/userlist'>
                                        Users
                                     </Link>
                                  </MenuItem>
                                  <MenuItem>
                                  <Link to = '/admin/productlist'>
                                        Products
                                  </Link>
                                  </MenuItem>
                                  <MenuItem>
                                  <Link to = '/admin/orderlist'>
                                        Orders
                                  </Link>
                                  </MenuItem>
                                  </MenuList>

                            </Menu>
                        )}
            
        </div>
       </nav>
    )                   
}
export default Nav                      