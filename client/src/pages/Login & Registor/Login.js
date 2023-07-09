import { Button, Form, Input } from "antd";
import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import { hideLoading, showLoading } from "../../redux/alertsSlice";

function Login() {
  const dispatch = useDispatch();

  const onFinish = async (values) => {
    try {
      dispatch(showLoading());
      const response = await axios.post("/api/user/login", values);
      dispatch(hideLoading());
      if (response.data.success) {
        toast.success(response.data.message);
        localStorage.setItem("token", response.data.data);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="background-image">
      <div className="authentication">

        <Link to="/">
          <div className="gobackhome-container">
            <svg className="gobackhome" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path d="M19.0003 13.9999L19.0004 5.00003L17.0004 5L17.0003 11.9999L6.82845 12L10.7782 8.05027L9.36396 6.63606L3 13L9.36396 19.364L10.7782 17.9498L6.8284 14L19.0003 13.9999Z" ></path></svg>
          </div>
        </Link>

        <div className="authentication-form card p-3">
          <h1 className="card-title">Welcome Back</h1>

          <Form layout="vertical" onFinish={onFinish}>
            <Form.Item label="Email" name="email" rules={[{ required: true },{ whitespace:true },{type:"email"}]} hasFeedback>
              <Input placeholder="Email" />
            </Form.Item>
            <Form.Item label="Password" name="password" rules={[{ required: true },{ whitespace:true }]} hasFeedback>
              <Input.Password placeholder="Password" type="password" />
            </Form.Item>

    
            <Button className="primary-button my-2 full-width-button" htmlType="submit" >LOGIN</Button>

            <Link to="/register" className="login-anchor mt-2">CLICK HERE TO REGISTER</Link><br/>
            <Link to="/forgot-pass_1" className="login-anchor mt-2">FORGOT PASSWORD</Link>
   
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;
