import {Form, Button, Col, DatePicker, Row, TimePicker } from "antd";
import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { showLoading, hideLoading } from "../../redux/alertsSlice";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function BookAppointment() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const [doctor, setDoctor] = useState(null);
  const params = useParams();
  const dispatch = useDispatch();

  // method for fecthing doctor's data
  const getDoctorData = async () => {
    try {
      dispatch(showLoading());
      const response = await axios.post(
        "/api/doctor/get-doctor-info-by-id",
        {
          doctorId: params.doctorId,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      dispatch(hideLoading());
      if (response.data.success) {
        setDoctor(response.data.data);
      }
    } catch (error) {
      console.log(error);
      dispatch(hideLoading());
    }
  };


  // method for booking appoment
  const onFinish = async (values) => {
    try {
      dispatch(showLoading());
      const response = await axios.post("/api/user/book-appointment",
        {
          ...values,
          doctorId: params.doctorId,
          userId: user._id,
          doctorInfo: doctor,
          userInfo: user,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      dispatch(hideLoading());
      if (response.data.success) {
        toast.success(response.data.message);
        navigate("/appointments");
      }
    } catch (error) {
      console.log(error);
      dispatch(hideLoading());
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    getDoctorData();
  }, []);

  return (
    <Layout>
      {doctor && (
        <div className="d-flex flex-column pt-2 mt-2">
          <h1 className="page-title">
            {doctor.firstName} {doctor.lastName}
          </h1>
          <hr />
          <Row gutter={20} className="mt-5" align="middle">
            <Col span={8} sm={24} xs={24} lg={8}>
              <img
                src="https://png.pngtree.com/png-clipart/20230313/original/pngtree-book-now-button-in-black-gray-rounded-rectangle-shape-with-white-png-image_8987043.png"
                alt="Book Now IMG"
                width="100%"
                height="auto"
              />
            </Col>
            <Col span={8} sm={24} xs={24} lg={8}>
              <h1 className="timings">
                <b>Timings :</b> {doctor.timings[0]} - {doctor.timings[1]}
              </h1>
              <p>
                <b>Phone Number : </b>
                {doctor.phoneNumber}
              </p>
              <p>
                <b>Website : </b>
                {doctor.website}
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
                <b>Address : </b>
                {doctor.address}
              </p>
              <p>
                <b>Fee per Visit : </b>
                {doctor.feePerCunsultation}
              </p>
              <div className="d-flex flex-column pt-2 mt-2">
              <Form layout="vertical" onFinish={onFinish}>
              <Row gutter={20}>
                <Col span={8} xs={24} sm={24} lg={24}>
                  <Form.Item required name="time" rules={[{ required: true }]} >
                   <TimePicker format="hh:mm a" className="modifiedInputs"/>
                  </Form.Item>
                </Col>
                <Col span={8} xs={24} sm={24} lg={24}>
                  <Form.Item required name="date" rules={[{ required: true }]} >
                  <DatePicker format="DD-MM-YYYY" className="modifiedInputs"/>
                  </Form.Item>
                </Col>
              </Row>
              <Button className="primary-button mt-3 full-width-button" htmlType="submit">Book Now</Button>
                </Form>
              </div>
            </Col>
          </Row>
        </div>
      )}
    </Layout>
  );
}

export default BookAppointment;

