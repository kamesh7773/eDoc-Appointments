import { Button, Form, Input } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import toast from "react-hot-toast";
import { hideLoading, showLoading } from "../../redux/alertsSlice";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      dispatch(showLoading());
      const response = await axios.post("/api/user/register", values);
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
        <h1 className="card-title">Nice To Meet U</h1>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item label="Username" name="name" rules={[{ required: true },{ whitespace:true }]} hasFeedback>
            <Input placeholder="Username" />
          </Form.Item>
          <Form.Item label="Email" name="email" rules={[{ required: true },{ whitespace:true },{type:"email"}]} hasFeedback>
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item label="Password" name="password1" rules={[{ required: true },{ whitespace:true }]} hasFeedback>
            <Input.Password placeholder="Password" type="password" />
          </Form.Item>
          <Form.Item label="Confirm Password" name="password" rules={[{ required: true },{ whitespace:true },({getFieldValue})=>({
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
            REGISTER
          </Button>

          <Link to="/login" className="login-anchor mt-2">
            CLICK HERE TO LOGIN
          </Link>
        </Form>
      </div>
    </div>
  );
}

export default Register;
