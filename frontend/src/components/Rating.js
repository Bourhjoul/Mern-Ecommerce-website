import React from 'react'
import PropTypes from 'prop-types'
import {AiFillStar,BsStarHalf,BsStar}  from "react-icons/all"

const Rating = ({value,text}) => {
    return (
      
        <div className = "product-rating">
            <span>  <i> {value >=1 ? <AiFillStar/> : value >= 0.5 ? <BsStarHalf/> : <BsStar/> } </i></span>
            <span>  <i> {value >=2 ? <AiFillStar/> : value >= 1.5 ? <BsStarHalf/> : <BsStar/> } </i> </span>
            <span><i> {value >=3 ? <AiFillStar/> : value >= 2.5 ? <BsStarHalf/> : <BsStar/> } </i></span>
            <span>  <i> {value >=4 ? <AiFillStar/> : value >= 3.5 ? <BsStarHalf/> : <BsStar/> } </i></span>
            <span>  <i> {value >=5 ? <AiFillStar/> : value >= 4.5 ? <BsStarHalf/> : <BsStar/> } </i> </span>
           {/* <span>{value} ({text && text})</span> */}
          </div>
        
    )
}
Rating.propTypes = {
    value : PropTypes.number.isRequired,
    text : PropTypes.string.isRequired,
}

export default Rating
