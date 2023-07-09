import React from 'react'
import Layout from "../../components/Layout";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../../redux/alertsSlice";
import {toast} from 'react-hot-toast'
import axios from "axios";
import { Table } from "antd";
import moment from "moment";


function Testslist() {

  const [tests, setTests] = useState([]);
  const dispatch = useDispatch();

  const getTestsData = async () => {
    try {
      dispatch(showLoading());
      const resposne = await axios.get("/api/tests/get-all-tests", {
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

  // ------------------------------------------------------------------------
  // This method is used to change the User's Test Booking appoinments status
  // ------------------------------------------------------------------------

  const changeTestsStatus = async (record, status) => {
    try {
      dispatch(showLoading());
      const resposne = await axios.post("/api/admin/change-user-test-status",
        { testsId: record._id, userId: record.userId, status: status },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());
      if (resposne.data.success) {
        toast.success(resposne.data.message);
        getTestsData();
      }
    } catch (error) {
      toast.error('Error changing Test Booking status');
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
      title: "Patient",
      dataIndex: "name",
      render: (text, record) => (
        <span>
          {record.firstName} {record.lastName}
        </span>
      ),
    },
    {
      title: "Age",
      dataIndex: "age",
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
      title: "Booking Date",
      dataIndex: "createdAt",
      render: (text, record) => (
        <span>
          {moment(record.date).format("DD-MM-YYYY")}{" "}
        </span>
      ),
    },
    {
      title: "Booking Time",
      dataIndex: "createdAt",
      render: (text, record) => (
        <span>
          {moment(record.time).format("hh:mm a")}
        </span>
      ),
    },
    {
      title: "selected Test",
      dataIndex: "selectTest",
    },
    {
      title: "Testing Purpose",
      dataIndex: "testingPurpose",
    },
    {
      title: "status",
      dataIndex: "status",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (text, record) => (
        <div className="d-flex">
          {record.status === "pending" && (<h1 className="approve-btn" style={{paddingRight:"20px"}} onClick={() => changeTestsStatus(record , "Approve")}>Approve</h1>)}
          {record.status === "Approve" && (<h1 className="block-btn" style={{paddingRight:"20px"}} onClick={() => changeTestsStatus(record , "Reject")}>Reject</h1>)}
          {record.status === "Reject" && (<h1 className="approve-btn" style={{paddingRight:"20px"}} onClick={() => changeTestsStatus(record , "Approve")}>Approve</h1>)}
        </div>
      ),
    },
  ];

{
  return (
    <Layout>
      <h1 className="page-title" style={{textAlign:"center"}}>Patient's Medical Test Requests</h1>
      <hr />
      <Table style={{width:"auto"}} columns={columns} dataSource={tests} />
    </Layout>
  )
}
}
export default Testslist

