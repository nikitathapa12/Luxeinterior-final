import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomeComponent/Home';
import NavBar from './NavBarComponent/NavBar';
import RegistrationForm from './Pages/Register';

import Features from './Pages/Features';
import ForgetPassword from './Pages/ForgetPassword';
import Shop from './Pages/Shop';
import Contact from './Contact';
import FooterComponent from './Footer/Footer';
import About from './HomeComponent/About';
import LoginPage from './Pages/LoginPage';
import ProfilePage from './Pages/Profile/ProfilePage';
import Private from './Routes/Private';
import Dashboard from './Pages/User/Dashboard';
import AdminDashboard from './Pages/admin/AdminDashboard';
import AdminRoute from './Routes/AdminRoute'
import AddCategory from './Pages/admin/AddCategory';
import AddProduct from './Pages/admin/AddProduct';
import Aos from 'aos';
import "aos/dist/aos.css";
import {useEffect} from 'react';
// import CategoryPage from './Pages/Category';
import DetailedProductView from './Component/DetailedProductView';

import CartPage from './Pages/CartPage';
import ProfileEditPage from './Pages/Profile/ProfileEditPage';
import AboutUsPage from './Pages/AboutUsPage';
import Orders from './Pages/Orders';


function App() {

  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={
          <>
            <HomePage />
            
            {/* <ShopSection /> */}
            <About />
            <FooterComponent />
          </>
        } />
        {/* <Route path="/category" element={<CategoryPage />} /> */}
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/features" element={<Features />} />
        <Route path="/forget-password" element={<ForgetPassword />} /> 
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/aboutus' element={<AboutUsPage/>}/>
        <Route path='/profile' element={<ProfilePage />} />
       
        <Route path="/product/:productId" component={DetailedProductView} />
        <Route path='/cart' element={<CartPage/>}/>
        <Route path="/profile/edit" element={<ProfileEditPage />} />
        <Route path='/orders' element={<Orders />} />
     
        
        {/* User Dashboard */}
        <Route path='/dashboard' element={<Private />}>
          <Route path='user' element={<Dashboard />} />
          
        
        </Route>
        
        {/* Admin Dashboard */}
        <Route path="/dashboard/admin" element={<AdminRoute />}>
          <Route path="" element={<AdminDashboard />}>
            <Route path="add-category" element={<AddCategory />} />
            <Route path="add-product" element={<AddProduct />} />
            
           
          
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
