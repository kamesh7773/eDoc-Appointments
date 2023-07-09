import { Button, Form, Input } from "antd";
import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { hideLoading, showLoading } from "../../redux/alertsSlice";

function ForgotPass_2() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      dispatch(showLoading());
      const response = await axios.post("/api/user/creating-new-password", values);
      dispatch(hideLoading());
      if (response.data.success) {
        toast.success(response.data.message);
        navigate("/login");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="authentication">
      <div className="authentication-form card p-3">
        <h1 className="card-title">New password</h1>
        <Form layout="vertical" onFinish={onFinish}>

          <Form.Item required label="Please Enter you Registerd Email" name="email" rules={[{ required: true },{ whitespace:true },{type:"email"}]} hasFeedback>
            <Input placeholder="Email" />
          </Form.Item>
          
          <Form.Item label="Enter New Password" name="password1" rules={[{ required: true },{ whitespace:true }]} hasFeedback>
            <Input.Password placeholder="Password" type="password" />
          </Form.Item>
          
          <Form.Item label="Confirm New Password" name="password" rules={[{ required: true },{ whitespace:true },({getFieldValue})=>({
            validator(_,value){
              if(!value || getFieldValue("password1") === value){
                return Promise.resolve()
              }
              return Promise.reject("Password's does not matched")
            }
          })]} hasFeedback>
            <Input.Password placeholder="Confirm Password" type="password" />
          </Form.Item>

          <Button
            className="primary-button my-2 full-width-button"
            htmlType="submit"
          >
            RESET PASSWORD
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

export default ForgotPass_2;
