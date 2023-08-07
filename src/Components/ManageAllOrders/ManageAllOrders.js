import React, { useEffect, useState } from "react";
import { GrUserAdmin, FaUserAstronaut, HiOutlineMail } from "react-icons/all";
import useAuth from "../Hooks/useAuth";
import AllOrderCard from "./AllOrderCard";
import CircularProgress from "@mui/material/CircularProgress";

const ManageAllOrders = () => {
  const { user } = useAuth();
  const [allOrders, setAllOrders] = useState([]);
  useEffect(() => {
    fetch("https://camera-bazar-node-server.onrender.com/all-orders")
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, []);

  const deleteOrder = (id) => {
    const proceed = window.confirm("Are You Sure Want to Delete Thir Order ?");
    if (proceed) {
      const url = `https://camera-bazar-node-server.onrender.com/all-orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted Successfully");
            const remainingProducts = allOrders.filter(
              (item) => item._id !== id
            );
            setAllOrders(remainingProducts);
          }
        });
    }
  };
  return (
    <div className="container mx-auto my-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 my-5 py-5 mx-8 justify-items-center md:border-2 rounded-3xl text-base md:text-xl font-semibold">
        <h2 className="flex items-center">
          {" "}
          <GrUserAdmin className="inline-block mr-2" /> UserType:{" "}
          <span className=" md:ml-3"> Admin </span>
        </h2>
        <h2 className="flex items-center">
          {" "}
          <FaUserAstronaut className="inline-block mr-2" /> UserName:{" "}
          <span className=" md:ml-3"> {user?.displayName || "Admin Name"}</span>
        </h2>
        <h2 className="flex items-center">
          {" "}
          <HiOutlineMail className="inline-block mr-2" /> UserEmail:{" "}
          <span className=" md:ml-3"> {user?.email || "Admin Email"}</span>
        </h2>
      </div>

      <h2 className="text-xl font-bold">Manage All Orders: </h2>

      <div>
          {
              allOrders.length===0 && <p className='text-center font-bold'> <CircularProgress /> Loading..  </p>
              
          }
      </div>
      <div className="flex flex-wrap mx-2">
        {allOrders.map((item) => (
          <AllOrderCard key={item._id} item={item} deleteOrder={deleteOrder} />
        ))}
      </div>
    </div>
  );
};

export default ManageAllOrders;
