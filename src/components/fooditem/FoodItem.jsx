import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import './FoodItem.css'
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({id,description,name,price,image}) => {

  const{cartItems,addtoCart,removefromCart} = useContext(StoreContext);

  return (
    <div className="fooditem">
        <div className="food-item-img-container">
            < img className="food-item-image" src = {image} alt = "" />
            {!cartItems[id] ?
              <img className='add' onClick ={()=>addtoCart(id)} src = {assets.add_icon_white} alt = "" /> :
             <div className="food-item-counter">
               <img onClick ={()=>addtoCart(id)} src= {assets.add_icon_green} alt = "" />
               <p>{cartItems[id]}</p>
               <img onClick ={()=>removefromCart(id)} src = {assets.remove_icon_red } alt = "" />
             </div>
            }
        </div>
        <div className="food-item-info">
          <div className="food-item-name-rating">
            <p>{name}</p>
            <img src={assets.rating_starts} alt="" />
          </div>
          <p className="food-item-description">{description}</p>
          <p className="food-item-price">${price}</p>
        </div>
    </div>
  )
}

export default FoodItem
