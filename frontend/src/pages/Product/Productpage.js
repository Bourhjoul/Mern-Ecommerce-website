import React, {useEffect,useState,useRef} from 'react'
import Rating from '../../components/Rating'
import {useDispatch, useSelector } from 'react-redux'
import {listProductDetails} from '../../actions/productActions'
import {IoLogoFacebook,AiFillTwitterCircle,AiFillInstagram,AiFillShop,MdDoNotDisturb}  from "react-icons/all"
import { Image,Select,Button } from "@chakra-ui/react"
import HashLoader from "react-spinners/HashLoader";
import  './product.css'
import { Link } from 'react-router-dom'
const Productpage = ({history,match}) => {
   const [qty, setQty] = useState(1)
   const imgs = document.querySelectorAll('.img-select a');
   const imgShowcase = useRef(null);
   const imgBtns = [...imgs];
   let imgId = 1;
   const dispatch = useDispatch()
   const productDetails = useSelector(state => state.productDetails)
   const {loading,error,product} = productDetails

  //backend


 imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImage();
    });
});



function slideImage(){
  const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;
    imgShowcase.current.style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
}


useEffect(()=>{
  dispatch(listProductDetails(match.params.id))

}
,[dispatch,match])

  //Handler of button add to cart
  const addToCartHandler = () =>{
    history.push(`/cart/${match.params.id}?qty=${qty}`)
  }
    return (
        <div className = 'productpage'>
          {loading ?  <div className='loading-product'>
                          <HashLoader   color={"#1e1e2c"}  loading={loading} size={50} />
                     </div>  : error ?  <h2>{error} </h2>  : 
     <div className = "card-wrapper">
      <div className = "card">
        <div className = "product-imgs">
        <div className = "img-display">
            <div ref={imgShowcase}  className = "img-showcase">
              {product.images.map(i => (
              <Image src= {i} />  
              ))}


              

             
            </div>
          </div>
          <div className = "img-select">
            <div className = "img-item">
              <a href = "#" data-id = "1">
                <Image  objectFit="cover" boxSize = '200px' src = {product.images[0]} alt = "shoe image"/>


              </a>
            </div>
            <div className = "img-item">
              <a href = "#" data-id = "2">
                <Image  objectFit="cover" boxSize = '200px' src = {product.images[1]} alt = "shoe image"/>

              </a>
            </div>
            <div className = "img-item">
              <a href = "#" data-id = "3">
                <Image  objectFit="cover"  boxSize = '200px' src = {product.images[2]} alt = "shoe image"/>


              </a>
            </div>
        
          </div>
        </div>
 
        <div className = "product-content">
          <h2 className = "product-title">{product.name} </h2>
          <Link to = '/shop' className = "product-link">visit our store</Link>
              <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
              />
          <div className = "product-price">
            <p className = "last-price">Old Price: <span>${product.price + product.price * 0.5}</span></p>
            <p className = "new-price">New Price: <span>${product.price} (5%)</span></p>
          </div>
          
          <div className = "product-detail">
            <h2>about this item: </h2>
            <p>{product.description}</p>
           <div>
           <ul>
             <li>Color</li> <Select  className='select-product' placeholder="Choose an option">
                                    <option value="option1">Red</option>
                                    <option value="option2">Blue</option>
                                    <option value="option3">White</option>
                                    <option value="option3">Grey</option>
                                </Select>
           </ul>
           </div>
           <div>
           <ul>
             <li>Size</li> <Select  className='select-product' placeholder="Choose an option">
                                    <option value="option1">Red</option>
                                    <option value="option2">Blue</option>
                                    <option value="option3">White</option>
                                    <option value="option3">Grey</option>
                                </Select>
           </ul>
           </div>
            <ul>
              <li>Status: <span>{product.countInStock > 0 ? 'ìn stock' :  'Out Of Stock'}</span></li>
              <li>Category: <span>{product.category.map(cg =>' | ' + cg + ' | ')}</span></li>
              <li>Shipping Area: <span>All over the world</span></li>
              <div>
                <ul> <li>Qty :</li>
             {product.countInStock > 0 ?
              <Select as='select' size="md" maxW={20}  value={qty} className='select-product' onChange={(e) => setQty(e.target.value)} >
                {[...Array(product.countInStock).keys()].map((x) => (              
                                    <option key={x+1} value={x+1}>
                                      {x+1}
                                    </option> ))}
                                    
                                </Select>
              :  <span style={{display:'flex'}}><MdDoNotDisturb   size='26'/>   OUT OF STOCK  </span>
              }
                </ul>
              </div>
           
   
          
            </ul>
          </div>

               <div className = "purchase-info">
            <Button onClick={addToCartHandler} type = "button"  className = "btn-shop" disabled={product.countInStock === 0}> <AiFillShop size='24' />Add to Cart </Button>
          </div>

          <div className = "social-links">
            <p>Share On: </p>
            <Link className = 'social' to = "#">
              <i> <IoLogoFacebook size='20'/></i>
            </Link>
            <Link className = 'social' href = "#">
              <i><AiFillTwitterCircle size='20'/></i>
            </Link>
            <Link  className = 'social' href = "#">
              <i><AiFillInstagram size='20'/> </i>
            </Link>
          </div>
        </div>
      </div>
    </div>
    }
        </div>
    )
    
}

export default Productpage
