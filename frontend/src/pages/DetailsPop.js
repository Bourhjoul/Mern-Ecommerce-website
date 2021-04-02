import React from 'react'
import ReactDom from 'react-dom'
import {IoCloseOutline} from "react-icons/all"
import { Image } from "@chakra-ui/react"
import { hidden } from 'colorette'
const STYLE_MODAL ={
    position: 'fixed',
    top: '50%',
    left: '50%',
    maxWidth: "500px",
    maxHeight: "900px",
    margin: '0 auto',
    transform: 'translate(-50% , -50%)',
    backgroundColor: '#FFF',
    padding: '50px',
    zIndex: 1000
}
const STYLE_OVERLAY = {
    position: 'fixed',
    top: 0, 
    left:0, 
    right: 0, 
    bottom: 0,
    backgroundColor: 'rgba(0,0,0, .7)',
    zIndex: 1000
}
const BTN_MODAL ={
    position: 'absolute',
    top: '16px',
    right: '16px',
    outline: 'none',
    cursor: 'pointer'
}
const PRODUCTS_IMGS={
   
}
const img= {
  
    display: 'block'
}
const img_display={
    overflow: 'hidden',
    maxHeight: '100%',
    margin: '10px auto'

}
const img_showcase={
    display: 'flex',
    transition: 'all 0.5s ease'
}
img_showcase .img={
minWidth:'100%'
}
const img_select={
    display: 'flex'
}
const img_item={
    margin: '0.3 rem'
}
export default function DetailsPop({open,children,OnClose}) {
    if(!open) return null
    return ReactDom.createPortal(
        <>
        <div style={STYLE_OVERLAY}/>
         <div style={STYLE_MODAL}>
            <IoCloseOutline style={BTN_MODAL} onClick={OnClose}/>
           
           <div style={PRODUCTS_IMGS}>
               <div style={img_display}>
                   <div style={img_showcase}>
                   <Image style={img}  src={'https://preview.colorlib.com/theme/cozastore/images/product-detail-03.jpg'} />  
                   <Image style={img}   src={'https://preview.colorlib.com/theme/cozastore/images/product-detail-01.jpg'} />  
                   <Image style={img}   src={'https://preview.colorlib.com/theme/cozastore/images/product-detail-02.jpg'} /> 
                   <Image style={img}  src={'https://preview.colorlib.com/theme/cozastore/images/product-11.jpg'} /> 
                   </div>
               </div>
               <div style={img_select}>
                    <div style={img_item}>
                        <a href ="#" data-id ="1"></a>
                        <Image  src={'https://preview.colorlib.com/theme/cozastore/images/product-detail-03.jpg'} />  
                    </div>
                    <div style={img_item}>
                        <a href ="#" data-id ="2">
                            <Image  src={'https://preview.colorlib.com/theme/cozastore/images/product-detail-02.jpg'} />
                            </a>
                    </div>
                    <div style={img_item}>
                        <a href ="#" data-id ="3">
                            <Image   src={'https://preview.colorlib.com/theme/cozastore/images/product-detail-01.jpg'} />
                            </a>
                    </div>
                    <div style={img_item}>
                        <a href ="#" data-id ="4">
                            <Image    src={'https://preview.colorlib.com/theme/cozastore/images/product-11.jpg'} />
                            </a>
                    </div>
    
               </div>
           </div>
        </div>
    </>,
    document.getElementById('portal')
    )
}

