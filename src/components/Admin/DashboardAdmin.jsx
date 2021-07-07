/*eslint-disable*/
import React from 'react';
import { Route } from 'react-router-dom';
// import ModifyProduct from './ModifyProduct/FilterProductByAuthor';
import Category from './Admin-Category/Admin-Category.jsx';
import Author from './Admin-Author/Admin-Author.jsx';
import Order from './Admin-Order/Admin-Order.jsx';
import ModifyUser from './Admin-User/Admin-User';
import Product from './Admin-Product/Admin-Product.jsx'

import '../../scss/components/_dashboard.scss';

const DashboardAdmin = () => {
  
  const currentUser = JSON.parse(localStorage.getItem("CurrentUser"))
    return ( 
       <div className='Dashboard' id="DashboardAdmin">
                <div className="maincontainer">
                    <Route exact path="/Admin/Product" component={Product} />
                    <Route exact path="/Admin/Product/Edit/:id" component={Product} />
                    <Route path="/Admin/Category" component={Category} />
                    <Route path="/Admin/Author" component={Author} />
                    <Route path="/Admin/Order" component={Order} />
                    <Route path="/Admin/User" component={ModifyUser} />
                </div>
        </div>
    );
}

export default DashboardAdmin;

