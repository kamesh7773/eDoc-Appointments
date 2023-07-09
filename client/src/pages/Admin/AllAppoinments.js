import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Layout from "../../components/Layout";
import { showLoading, hideLoading } from "../../redux/alertsSlice";
import { toast } from "react-hot-toast";
import axios from "axios";
import { Table } from "antd";
import moment from "moment";

function AllAppoinments() {

  const [appointments, setAppointments] = useState([]);
  const dispatch = useDispatch();
  
    // function for fetching all Appoinments form backend side

    const getAppointmentsData = async () => {
      try {
        dispatch(showLoading());
        const resposne = await axios.get("/api/admin/get-all-appointments",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        dispatch(hideLoading());
        if (resposne.data.success) {
          setAppointments(resposne.data.data);
        }
      } catch (error) {
        dispatch(hideLoading());
      }
    };
  

  const columns = [
    {
      title: 'S.N',
      key: 'index',
      render: (text, record,index) => index + 1,
    },
    {
      title: "Patient name",
      dataIndex: "name",
      render: (text, record) => <span>{record.userInfo.name}</span>,
    },
    {
      title: "Doctor Name",
      dataIndex: "name",
      render: (text, record) => (
        <span>
          {record.doctorInfo.firstName} {record.doctorInfo.lastName}
        </span>
      ),
    },
    {
      title: "Phone",
      dataIndex: "phoneNumber",
      render: (text, record) => <span>{record.doctorInfo.phoneNumber}</span>,
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
      title: "Status",
      dataIndex: "status",
    },

  ];
  useEffect(() => {
    getAppointmentsData();
  }, []);


  return (
    <Layout>
      <h1 className="page-title" style={{textAlign:"center"}}>Patient's to Doctors Appointments</h1>
      <hr />
      <Table columns={columns} dataSource={appointments} />
    </Layout>
  );
}

export default AllAppoinments;