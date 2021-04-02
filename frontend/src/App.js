import Nav from './components/Nav'
import Home from './pages/Home'
import About from './pages/About/About'
import Shop from './pages/Shop'
import Contactus from './pages/Contactus/Contactus'
import Productpage from './pages/Product/Productpage'
import Cartpage from './pages/Cart/Cartpage'
import Footer from './pages/Footer/Footer'
import React, {useState,useEffect} from 'react'
import {BrowserRouter as Router , Switch ,Route } from 'react-router-dom'
import { ChakraProvider } from "@chakra-ui/react"
import ScrollIntoView from "./components/Scrollintoview";
import HashLoader from "react-spinners/HashLoader";


 const App = () => { 
  const  [loading,setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout( ()=> {
      setLoading(false)
    },3000)

  }, [])

  return (
   
     <ChakraProvider>
       <Router>
         <ScrollIntoView>
         {loading ?   
            <div className='loading'>
                 <HashLoader   color={"#fff"}  loading={loading} size={40} />
            </div>
          :
         <>
                 <Nav/>
                 <Switch>              
                 <Route path="/" exact component={Home}/>
                 <Route path="/about" component={About}/>
                 <Route path="/shop" component={Shop}/>
                 <Route path="/contactus" component={Contactus}/>
                 <Route path="/product/:id" component={Productpage}/>
                 <Route path="/cart/:id?" component={Cartpage}/>
                 </Switch>
                 <Footer/>
          </>
         }
        </ScrollIntoView>
      </Router>
   </ChakraProvider>
    
  )
}
export default App;
