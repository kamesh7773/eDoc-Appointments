import React from "react";
import Layout from "../../components/Layout";
import { Button, Col, Form, Input, Row, Select, TimePicker ,DatePicker } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { showLoading, hideLoading } from "../../redux/alertsSlice";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function BookTests() {

  const dispatch = useDispatch();
  const {user} = useSelector(state => state.user);
  const navigate = useNavigate()


  const onFinish = async (values) => {

    try {
      dispatch(showLoading());
      const response = await axios.post("/api/user/apply-for-test",
        {
          ...values,
          userId: user._id,
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
        navigate("/test-appointments");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      toast.error("Something went wrong");
    }
  };

  // select options
  const Tests = ["MRI" , "BLOOD TEST" , "URINE PH TEST" , "LIVER TEST" , "CT SCAN" , "SONOGRAPHY", "HEART TESTS" , "COVID TEST" , "LUNG TEST" , "X-RAY"]

  return (
    <Layout>
      <h1 className="page-title" style={{textAlign:"center"}}>Book Test Slot</h1>
      <hr />

      <Form layout="vertical" onFinish={onFinish}>
        <h1 className="card-title mt-3">Personal Information</h1>
        {/* gutter is propertie for provideing the space betten input columns */}
        <Row gutter={20}>
          <Col span={8} xs={24} sm={24} lg={8}>
            <Form.Item required label="First Name" name="firstName" rules={[{ required: true }]} >
              <Input placeholder="First Name" />
            </Form.Item>
          </Col>
          <Col span={8} xs={24} sm={24} lg={8}>
            <Form.Item required label="Last Name" name="lastName" rules={[{ required: true }]} >
              <Input placeholder="Last Name" />
            </Form.Item>
          </Col>
          <Col span={8} xs={24} sm={24} lg={8}>
            <Form.Item required label="Phone Number" name="phoneNumber" rules={[{ required: true }]} >
              <Input placeholder="Phone Number" />
            </Form.Item>
          </Col>
          <Col span={8} xs={24} sm={24} lg={8}>
            <Form.Item required label="Age" name="age" rules={[{ required: true }]} >
              <Input placeholder="Age" />
            </Form.Item>
          </Col>
          <Col span={8} xs={24} sm={24} lg={8}>
            <Form.Item required label="Address" name="address" rules={[{ required: true }]} >
              <Input placeholder="Address" />
            </Form.Item>
          </Col>
        </Row>
        <hr />
        <h1 className="card-title mt-3">Test Related Imformation</h1>
        {/* gutter is propertie for provideing the space betten input columns */}
        <Row gutter={20}>
          <Col span={8} xs={24} sm={24} lg={8}>
            <Form.Item required label="Select Test" name="selectTest" rules={[{ required: true }]} >
              <Select placeholder="Select Test">
                {Tests.map((Tests , index ) => {
                  return <Select.Option key={index} value={Tests}></Select.Option>
                })}
              </Select>
            </Form.Item>
          </Col>
          <Col span={8} xs={24} sm={24} lg={8}>
            <Form.Item required label="Testing Purpose" name="testingPurpose" rules={[{ required: true }]} >
              <Input placeholder="Testing Purpose" />
            </Form.Item>
          </Col>
          <Col span={8} xs={24} sm={24} lg={8}>
            <Form.Item required label="Illnest Histoy" name="illnestHistoy" rules={[{ required: true }]} >
              <Input placeholder="Illnest Histoy" />
            </Form.Item>
          </Col>
          <Col span={8} xs={24} sm={24} lg={3}>
            <Form.Item required label="timing" name="time" rules={[{ required: true }]} >
            <TimePicker format="hh:mm a" />
            </Form.Item>
          </Col>
          <Col span={8} xs={24} sm={24} lg={4}>
            <Form.Item required label="Date" name="date" rules={[{ required: true }]} >
            <DatePicker format="DD-MM-YYYY"/>
            </Form.Item>
          </Col>
        </Row>

        <div className="d-flex justify-content-end">
          <Button className="primary-button" htmlType="submit">SUBMIT</Button>
        </div>
      </Form>

      <hr />
    </Layout>
  );
}

export default BookTests;
