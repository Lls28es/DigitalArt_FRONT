/*eslint-disable*/
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import DashboardAdmin from './DashboardAdmin.jsx'
import { getAllUsers, getAllrRoles } from '../../redux/actions/actionUsers-Roles'
import { getAllOrders } from "../../redux/actions/actionOrder"

import '../../scss/components/_admin.scss';

function Admin() {

  const dispatch = useDispatch();
  
  useEffect(() => {
 
    dispatch(getAllUsers());
    dispatch(getAllOrders());
    dispatch(getAllrRoles());

  }, []);

  return (
    <div className="Admin" id="Admin">
      <DashboardAdmin />
    </div>
  );
}

export default Admin;
