import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import LoginSignup from './Pages/LoginSignup';
import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer';
import stationary_banner from './Components/Assets/stationary_banner.png'
import kitchenware_banner from './Components/Assets/kitchenware_banner.jpg'
import promotion_banner from './Components/Assets/promotion_banner.png'
import About from './Components/About/About';
import Offices from './Components/Offices/Offices';
import Contact from './Components/Contact/Contact';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path ='/' element = {<Shop/>}/>
        <Route path ='/stationary' element = {<ShopCategory banner={stationary_banner} category="stationary"/>}/>
        <Route path ='/kitchenware' element = {<ShopCategory banner={kitchenware_banner} category="kitchenware"/>}/>
        <Route path ='/promotion' element = {<ShopCategory banner={promotion_banner} category="promotion"/>}/>
        <Route path="/product" element={<Product/>}>
           <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path ='/cart' element = {<Cart/>}/>
        <Route path ='/login' element = {<LoginSignup/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/offices' element={<Offices/>}/>
        <Route path='/contact' element={<Contact/>}/>

      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
