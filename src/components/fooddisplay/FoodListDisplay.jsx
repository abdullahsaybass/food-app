import React, { useContext } from 'react'
import './FoodListDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../fooditem/FoodItem'
import './FoodListDisplay.css'
const FoodListDisplay = ({catergory}) => {

    const {food_list} = useContext(StoreContext);

  return (
    <div className='foodlistdisplay' id = 'food-display'>
      <h2>Top dishes near you</h2>
        <div className="food-display-list">
        {food_list.map((item) =>{
           
              if(catergory === 'All' || catergory === item.category){
                return (  
                  <FoodItem key={item._id} id = {item._id} description={item.description} 
                  price={item.price} name={item.name} image={item.image} />
                );
              }
            return null;
        })}
        </div>
    </div>
  );
}

export default FoodListDisplay