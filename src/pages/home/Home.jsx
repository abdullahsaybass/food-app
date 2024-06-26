import React from 'react'
import Header from '../../components/header/Header'
import ExploreMenu from '../../components/exploremenu/ExploreMenu'
import FoodListDisplay from '../../components/fooddisplay/FoodListDisplay'
import { useState } from 'react'
import Appdownload from '../../components/appdownload/Appdownload'

const Home = () => {
  const [catergory,setCatergory] = useState("All")
  return (
    <div>
      <Header />
      <ExploreMenu catergory={catergory} setCatergory={setCatergory}/>
      <FoodListDisplay catergory={catergory}/>
      <Appdownload />
    </div>
  )
}

export default Home