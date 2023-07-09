import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Doctor({ doctor }) {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);


  
  const redirect = () =>{

    // If the ADMIN is login then he cannot book appointment
    if(user?.isAdmin){
      navigate(`/available-doctors`)
    }
    // If the DOCTOR is login then he cannot book appointment
    else if(user?.isDoctor){
      navigate(`/available-doctors`)
    }
    // If the Normal user is login then can redirected to the book appointment
    else{
      navigate(`/book-appointment/${doctor._id}`)
    }
  } 



  return (
    <div
      className="card p-4 cursor-pointer"
      onClick={() => redirect()}
    >
      <h1 className="card-title">
        {doctor.firstName} {doctor.lastName}
      </h1>
      <hr />
      <p>
        <b>Phone Number : </b>
        {doctor.phoneNumber}
      </p>
      <p>
        <b>Website : </b>
        {doctor.website}
      </p>
      <p>
        <b>Address : </b>
        {doctor.address}
      </p>
      <p>
        <b>specialization : </b>
        {doctor.specialization}
      </p>
      <p>
        <b>Experience : </b>
        {doctor.experience}
      </p>
      <p>
        <b>Fee per Visit : </b>
        {doctor.feePerCunsultation}
      </p>
      <p>
        <b>Timings : </b>
        {doctor.timings[0]} - {doctor.timings[1]}
      </p>
    </div>
  );
}

export default Doctor;
