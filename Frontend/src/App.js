
import './App.css';
import HomePage from './customer/Pages/HomePage/HomePage';
import Navigation from './customer/components/Navigation/Navigation';
// import { Navigation } from '@mui/icons-material';

import Footer from './customer/components/Footer/Footer';
import ProductCard from './customer/components/Product/ProductCard';
import Product from './customer/components/Product/Product';

import ProductDetail from './customer/components/ProductDetail/ProductDetail';
import Cart from './customer/components/Cart/Cart';
import Checkout from './customer/components/Checkout/Checkout';
import Order from './customer/components/Order/Order';
import OrderDetails from './customer/components/Order/OrderDetails';
import { Route, Routes } from 'react-router-dom';
import CustomerRoutes from './Routers/CustomerRoutes';
function App() {
  return (
    <div className=''>

      <Routes>
        <Route path='/*' element={<CustomerRoutes/>}></Route>
        </Routes>
      
      
      {/* <Navigation /> */}

        {/* <HomePage/> */}
        {/* <Product/> */}
        {/* <ProductDetail/>  */}
        {/* <Cart/> */}
        {/* <Checkout/> */}
        {/* <Order/> */}
        {/* <OrderDetails/> */}
      
     {/* <Footer/> */}
  
      </div>
  );
}

export default App;
