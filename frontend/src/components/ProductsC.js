import React,{useEffect,useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import CardProduct from './CardProduct'
import {listProducts,ListproductbyCg} from '../actions/productActions'
import {BsFilter,AiOutlineSearch,IoMdClose} from 'react-icons/all'
import Filter from './Filter';
import Search from './Search';
import HashLoader from "react-spinners/HashLoader";
import { Link } from 'react-router-dom'
const ProductsC = () => {
    let Cg = window.location.search ? window.location.search.split('=')[1] : null
    const dispatch = useDispatch()
    const productList = useSelector((state) => state.productList)
    const productbycg = useSelector((state)=>{
        return state.ListproductbyCg
    })
    const {loading,error,products} = productbycg ? productbycg : productList;
    useEffect(()=>{

        if(Cg){
            dispatch(ListproductbyCg(Cg))
        }else{
            dispatch(listProducts())
        }

    },[dispatch,Cg])
    const [showfilter,setshowfilter] = useState(false);
    const [showsearch,setshowsearch] = useState(false);
    const filterfunc = () =>{
        setshowfilter(!showfilter);
        if(showsearch){
            setshowsearch(false)
        }
 
    }
    const searchfunc=()=>{
        setshowsearch(!showsearch);
        if(showfilter){
            setshowfilter(false)
        }
    }

    return (
        <>
        <div className = 'Cgfilter'>
            <h1>{Cg ? Cg : 'All'} Products</h1>
            <div className = 'filtersbtn '>
            <button className = {`filterbtn ${showfilter ? 'activebtn' : ''}` }  
            onClick = {filterfunc} > {showfilter ?  <IoMdClose  size = '20'/>: <BsFilter size = '20'/> } 
            Filter
            </button>
       
            <button className = {`searchbtn ${showsearch ? 'activebtn' : ''}` } onClick = {searchfunc}>{showsearch ?  <IoMdClose  size = '20'/>:<AiOutlineSearch size = '20'/>}Search</button>
            </div>
        
            <div className = 'filters'> 
            <ul>
                    <Link className = 'lined' to = '?cg'>All</Link>
                    <Link className = 'lined'  to = '?cg=Men'>Men</Link>
                    <Link className = 'lined'  to = '?Cg=Women'>Women</Link>
                    <Link className = 'lined'  to = '?Cg=Watches'>Watches</Link>
                    <Link className = 'lined' to = '?Cg=Shoes'>Shoes</Link>
                    <Link to = '?Cg=Bag' className = 'lined'>Bag</Link>
            </ul>
            </div>
        </div>
        {showsearch ? <Search /> : null}
        <Filter classac = {showfilter ? 'filter' : 'filteroff' } /> 
            {loading ?
               <div className='loading'>
                          <HashLoader   color={"#fff"}  loading={loading} size={40} />
                     </div> 
            : error ? <h2>{error} </h2> 
            :  <div className='cardsProduct'>
                       {products.map((product) =>(
                             //  <CardProduct key={product._id} titilebottomcard={product.name} prixbottomcard={`${product.price} $`}  imgsrc={product.image}/>
                               <CardProduct key={product._id} product={product} />

                          )  )}

                  
                 </div> }
                   
        </> 
    )
}

export default ProductsC
