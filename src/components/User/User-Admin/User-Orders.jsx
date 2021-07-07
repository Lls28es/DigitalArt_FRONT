/*eslint-disable*/
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as AiIcons from 'react-icons/ai';

import "../../../scss/components/_userOrder.scss";
import "./_UserStyle.scss";


export default function UserOrders() {

  const userOrders = useSelector((store) => store.reducerOrderUser.userOrders);
  const [active, setActive] = useState(null);

  const handleActive = (e, index) => {
    e.preventDefault();
    if (active === index) {
      setActive(null);
    } else {
      setActive(index);
    }
  };

  let createdAt;
  let createdDate;
  let createdTime;
  const setDate = (order) => {
    createdAt = new Date(order.date);
    createdDate = createdAt.toLocaleDateString("es-AR");
    createdTime = createdAt.toLocaleTimeString("es-AR");
    return (<h4>{createdDate} at {createdTime}</h4>)
  };
  return (
    <div className="profile-UserStyle" id="UserOrders">
      <div className="title-UserStyle">
        <h1>Orders</h1>
        <h2>Check your previous purchases </h2>
      </div>
      <hr className="divisor-UserStyle" />

      <table className="table-UserStyle" id="boleta" border="0">
        <tr className="headtable-UserStyle">
          <td className="tableheaderdate-UserStyle"><th>Date</th></td>
          <td className="tableheadertate-UserStyle"><th>State</th></td>
          <td className="tableheaderprice-UserStyle"><th>Price</th></td>
        </tr>
       
          {userOrders.length !== 0 &&
            userOrders.map((order, index) => (
              <>
                <tr className="bodytable-UserStyle" >
                  <td>
                    <th className="option-UserStyle">
                      {setDate(order)}
                    </th>
                  </td>

                  <td className="option-UserStyle">
                    <th className="orderID1"> {order.state}</th>
                  </td>
                  <td className="price-UserStyle">
                
                    <th className="seemore-UserStyle">
                      <th className="seemoreText-UserStyle">${order.total}</th>
                      <Link className="orderIDVisualize" to={`/user/orders/${order.id}`}>
                        <AiIcons.AiFillEye />
                      </Link>
                    </th>
                  </td>

                  {active === index &&
                    order.products.length !== 0 &&
                    order.products.map((n) => (
                      <div className="description">
                        <div className="productinfo">
                          <h4 className="pr1">Description: {n.name}</h4>
                          <Link className="link" to={`/product/${n.id}`}>
                            <img src={n.preview} alt={n.name} width="50" />
                          </Link>
                          <h4 className="pr1">${n.price}</h4>
                        </div>
                      </div>
                    ))}
                </tr>
              </>
            ))}
      
      </table>

    </div>
  );
}
