/*eslint-disable*/
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Menu from '../components/Menu/Menu';
import PrivateRouteGuest from '../app/PrivateRouteGuest';
import PrivateRouteUser from '../app/PrivateRouteUser';
import PrivateRoute from '../app/PrivateRoute';
import Admin from '../components/Admin/Admin';
import User from '../components/User/User';;
import NavBar from '../components/NavBar/NavBar';
import Home from '../components/Home/Home';
import Browser from '../components/Browser/Browser.jsx';
import AboutUs from '../components/About/AboutUs.jsx';
import Checkout from '../components/Checkout/Checkout';
import Payment from '../components/Checkout/Payment';
import Order from '../components/Checkout/Order.jsx';
import ProductDetails from '../components/ProductDetails/ProductDetails';
import SignIn from '../components/UserAccount/SignIn';
import Register from '../components/UserAccount/Register';


const routes = () => (
  
  <Router>
    <Route path="/" component={NavBar} />
    <Menu/>
    <PrivateRoute path="/Admin" component={Admin} />
    <PrivateRouteUser path="/user" component={User} />
    <Route exact path="/" component={Home} />
    <Route path="/browser" component={Browser} />
    <Route path='/about' component={AboutUs} />
    <Route path="/checkout" component={Checkout} />
    <Route path="/checkout/payment" component={Payment} />
    <Route path="/checkout/information" component={Order} />
    <Route path="/product/:id" component={ProductDetails} />
    <PrivateRouteGuest path="/signin" component={SignIn} />
    <PrivateRouteGuest path="/register" component={Register} />
  </Router>
);

export default routes;
