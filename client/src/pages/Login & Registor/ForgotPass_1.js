import { Button, Form, Input } from "antd";
import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { hideLoading, showLoading } from "../../redux/alertsSlice";


function ForgotPass_1() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      console.log(values);
      dispatch(showLoading());
      const response = await axios.post("/api/user/finding-registered-email-id", values);
      dispatch(hideLoading());
      if (response.data.success) {
        toast.success(response.data.message);
        navigate("/forgot-Pass_2");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="authentication" >
      <div className="authentication-form card p-3">
        <h1 className="card-title">Forgot Password</h1>
        <Form layout="vertical" onFinish={onFinish}>

          <Form.Item required label="Please Enter you Registerd Email" name="email" rules={[{ required: true },{ whitespace:true },{type:"email"}]} hasFeedback>
            <Input placeholder="Email" />
          </Form.Item>

          <Button
            className="primary-button my-2 full-width-button"
            htmlType="submit"
          >
            NEXT
          </Button>
        
          <Link to="/login" className="login-anchor mt-2">
            CLICK HERE TO LOGIN
          </Link><br/>
          <Link to="/register" className="login-anchor mt-2">
            CLICK HERE TO REGISTER
          </Link>
        </Form>
      </div>
    </div>
  );
}

export default ForgotPass_1;
