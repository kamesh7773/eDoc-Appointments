import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Layout from "../../components/Layout";
import { showLoading, hideLoading } from "../../redux/alertsSlice";
import { toast } from "react-hot-toast";
import axios from "axios";
import { Table } from "antd";
import moment from "moment";

function DoctorAppointments() {

  const [appointments, setAppointments] = useState([]);
  const dispatch = useDispatch();
  
  const getAppointmentsData = async () => {
    try {
      dispatch(showLoading());
      const resposne = await axios.get("/api/doctor/get-appointments-by-doctor-id",
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

  const changeAppointmentStatus = async (record, status) => {
    try {
      dispatch(showLoading());
      const resposne = await axios.post("/api/doctor/change-user-appointment-status",
        { appointmentId : record._id, status: status },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());
      if (resposne.data.success) {
        toast.success(resposne.data.message);
        getAppointmentsData();
      }
    } catch (error) {
      toast.error("Error changing user account status");
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
    {
      title: "Actions",
      dataIndex: "actions",
      render: (text, record) => (
        <div className="d-flex">
            <div className="d-flex">
              {record.status === "pending" && (<h1 className="approve-btn px-2" onClick={() => changeAppointmentStatus(record, "Approve")} >Approve</h1>)} 
              {record.status === "Approve" && (<h1 className="block-btn px-2" onClick={() => changeAppointmentStatus(record, "Reject")} >Reject</h1>)} 
              {record.status === "Reject" && (<h1 className="approve-btn px-2" onClick={() => changeAppointmentStatus(record, "Approve")} >Approve</h1>)} 
            </div>
        </div>
      ),
    },
  ];
  useEffect(() => {
    getAppointmentsData();
  }, []);
  return (
    <Layout>
      <h1 className="page-title" style={{textAlign:"center"}}>Appointments</h1>
      <hr />
      <Table columns={columns} dataSource={appointments} />
    </Layout>
  );
}

export default DoctorAppointments;
