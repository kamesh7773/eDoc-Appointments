import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Layout from "../../components/Layout";
import { showLoading, hideLoading } from "../../redux/alertsSlice";
import {toast} from 'react-hot-toast'
import axios from "axios";
import { Table } from "antd";
import moment from "moment";

function DoctorsList() {
  const [doctors, setDoctors] = useState([]);
  const dispatch = useDispatch();
  
  const getDoctorsData = async () => {
    try {
      dispatch(showLoading());
      const resposne = await axios.get("/api/admin/get-all-doctors", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      dispatch(hideLoading());
      if (resposne.data.success) {
        setDoctors(resposne.data.data);
      }
    } catch (error) {
      dispatch(hideLoading());
    }
  };


  // This method is used to change the User's Doctors status approve , block , approve
  const changeDoctorStatus = async (record, status) => {
    try {
      dispatch(showLoading());
      const resposne = await axios.post("/api/admin/change-doctor-account-status",
        { doctorId: record._id, userId: record.userId, status: status },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());
      if (resposne.data.success) {
        toast.success(resposne.data.message);
        getDoctorsData();
      }
    } catch (error) {
      toast.error('Error changing doctor account status');
      dispatch(hideLoading());
    }
  };
  useEffect(() => {
    getDoctorsData();
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
      title: "Phone",
      dataIndex: "phoneNumber",
    },
    {
      title: "created At",
      dataIndex: "createdAt",
      render: (text, record) => (
        <span>
          {moment(record.createdAt).format("DD-MM-YYYY")}{" "}
          {moment(record.createdAt).format("hh:mm a")}
        </span>
      ),
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
          {record.status === "pending" && (<h1 className="approve-btn" onClick={() => changeDoctorStatus(record, "approved")}>Approve</h1>)}
          {record.status === "approved" && (<h1 className="block-btn" onClick={() => changeDoctorStatus(record, "blocked")}>Block</h1>)}
          {record.status === "blocked" && (<h1 className="approve-btn" onClick={() => changeDoctorStatus(record, "approved")}>UnBlock</h1>)}
        </div>
      ),
    },
  ];


  return (
    <Layout>
      <h1 className="page-title" style={{textAlign:"center"}}>Doctors List</h1>
      <hr />
      <Table columns={columns} dataSource={doctors} />
    </Layout>
  );
}

export default DoctorsList;
