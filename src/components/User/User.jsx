/*eslint-disable*/
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import DashboardUser from './DashboardUser'
import { getAllUserOrders } from "../../redux/actions/actionOrder";


export default function User() {
    
  const dispatch = useDispatch()
    const currentUser = JSON.parse(localStorage.getItem("CurrentUser"));

    useEffect(() => {
     if (currentUser) {
        dispatch(getAllUserOrders(currentUser.id))      } 
    }, []);
  
    return (
        <div id="User">
            <DashboardUser/>
        </div>
    )
}
