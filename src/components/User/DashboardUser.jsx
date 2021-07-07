/*eslint-disable*/
import React, { Fragment } from 'react'
import { Route } from 'react-router-dom';
import PrivateRouteUser from '../../app/PrivateRouteUser'
import Library from './User-Admin/User-Library';
import Wishlist from './User-Admin/User-Wishlist'
import Profile from './User-Admin/User-Profile'
import UserOrder from './User-Admin/User-Orders'
import OrderDetail from './User-Admin/User-OrderDetail';


import '../../scss/containers/_dashboardUser.scss'


export default function DashboardUser() {
  
  return (
    <Fragment>
      <Route>
        <div className="container-dashboard" id="DashboardUser">
          <div className='container-inner'>
            <PrivateRouteUser path="/user/library" component={Library} />
            <PrivateRouteUser path="/user/wishlist" component={Wishlist} />
            <PrivateRouteUser path="/user/profile" component={Profile} />
            <PrivateRouteUser path="/user/orders" component={UserOrder} />
            <PrivateRouteUser path="/user/orders/:id" component={OrderDetail} />
          </div>
        </div>
      </Route>
    </Fragment>
  )
}
