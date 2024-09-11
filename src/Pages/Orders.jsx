import React, { useState, useEffect } from "react";
import axios from "axios";

import moment from "moment";
import { useAuth } from "../context/auth";



const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [auth, setAuth] = useAuth();


 const getOrders = async () => {
  try {
    const { data } = await axios.get("http://localhost:3000/api/auth/orders");
    setOrders(Array.isArray(data) ? data : []);
  } catch (error) {
    console.error("Error fetching orders:", error);
  }
};


  useEffect(() => {
    if (auth?.token) getOrders();
  }, [auth?.token]);

  return (
    <div className="container-fluid p-3 m-3 dashboard">
      <div className="row">
        <div className="col-md-9">
          <h1 className="text-center">All Orders</h1>
          {orders.length === 0 ? (
            <p className="text-center">No orders found</p>
          ) : (
            orders.map((o, i) => (
              <div className="border shadow mb-3" key={o._id}>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Status</th>
                      <th scope="col">Buyer</th>
                      <th scope="col">Date</th>
                      <th scope="col">Payment</th>
                      <th scope="col">Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{i + 1}</td>
                      <td>{o?.status}</td>
                      <td>{o?.buyer?.name}</td>
                      <td>{moment(o?.createAt).fromNow()}</td>
                      <td>{o?.payment?.success ? "Success" : "Failed"}</td>
                
                      <td>{o?.products?.length}</td>
                    </tr>
                  </tbody>
                </table>
                {/* <div className="container">
                  {o?.product?.map((products) => (
                    <div className="row mb-2 p-3 card flex-row" key={products._id}>
                      <div className="col-md-4">
                        <img
                          src={`/api/product/product-photo/${products._id}`}
                          className="card-img-top"
                          alt={products.name}
                          width="100px"
                          height="100px"
                        />
                      </div>
                      <div className="col-md-8">
                        <p>{products.name}</p>
                        <p>{products.description.substring(0, 30)}</p>
                        <p>Price: {products.price}</p>
                      </div>
                    </div>
                  ))}
                </div> */}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Orders;