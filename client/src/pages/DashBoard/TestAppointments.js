import React from 'react'
import Layout from "../../components/Layout";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../../redux/alertsSlice";
import axios from "axios";
import { Table } from "antd";
import moment from "moment";


function TestAppointments() {

  const [tests, setTests] = useState([]);
  const dispatch = useDispatch();

  const getTestsData = async () => {
    try {
      dispatch(showLoading());
      const resposne = await axios.get("/api/tests/get-test-by-user-id", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      dispatch(hideLoading());
      if (resposne.data.success) {
        setTests(resposne.data.data);
      }
    } catch (error) {
      dispatch(hideLoading());
    }
  };

  useEffect(() => {
    getTestsData();
  }, []);

  const columns = [
    {
      title: 'S.N',
      key: 'index',
      render: (text, record,index) => index + 1,
    },
    {
      title: "Name",
      dataIndex: "name",
      render: (text, record) => (
        <span>
          {record.firstName} {record.lastName}
        </span>
      ),
    },
    {
      title: "selected Test",
      dataIndex: "selectTest",
    },
    {
      title: "Phone",
      dataIndex: "phoneNumber",
    },
    {
      title: "Booked At",
      dataIndex: "createdAt",
      render: (text, record) => (
        <span>
          {moment(record.createdAt).format("DD-MM-YYYY")}{" "}
          {moment(record.createdAt).format("hh:mm a")}
        </span>
      ),
    },
    {
      title: "Date Booked",
      dataIndex: "date",
      render: (text, record) => (
        <span>
          {moment(record.date).format("DD-MM-YYYY")}{" "}
        </span>
      ),
    },
    {
      title: "Booking Time",
      dataIndex: "time",
      render: (text, record) => (
        <span>
          {moment(record.time).format("hh:mm a")}
        </span>
      ),
    },
    {
      title: "status",
      dataIndex: "status",
    },
  ];


  return (
    <Layout>
      <h1 className="page-title" style={{textAlign:"center"}}>Test appointments status</h1>
      <hr />
      <Table columns={columns} dataSource={tests} />
    </Layout>
  )
}

export default TestAppointments