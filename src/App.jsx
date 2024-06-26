import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import './App.css'
import Cart from './pages/cart/Cart'
import PlaceOrder from './pages/placeorder/PlaceOrder'
import Footer from './components/footer/Footer'
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import Loginpage from './components/Loginpage/Loginpage'


function App() {

  const[showLogin,setShowLogin] = useState(false);

  return (
    <>
    {showLogin ? <Loginpage setShowLogin={setShowLogin} /> : <></>}
    <div className="app">
      <Navbar setShowLogin={setShowLogin} showLogin={showLogin}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='Cart' element={<Cart />} />
        <Route path='placeorder' element={<PlaceOrder />} />
      </Routes>
    </div>
    <Footer />
    </>
      
  )
}

export default App
