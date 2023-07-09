import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Layout from "../../components/Layout";
import { showLoading, hideLoading } from "../../redux/alertsSlice";
import axios from "axios";
import { Table } from "antd";
import moment from "moment";
import {toast} from 'react-hot-toast'


function Userslist() {
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();

  const getUsersData = async () => {
    try {
      dispatch(showLoading());
      const resposne = await axios.get("/api/admin/get-all-users", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      dispatch(hideLoading());
      if (resposne.data.success) {
        setUsers(resposne.data.data);
      }
    } catch (error) {
      dispatch(hideLoading());
    }
  };

  // This method is used to change the User's status approve , block , approve
  const changeUserStatus = async (record, status) => {
    try {
      dispatch(showLoading());
      const resposne = await axios.post("/api/admin/change-user-account-status",
        { email: record.email, status: status },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());
      if (resposne.data.success) {
        toast.success(resposne.data.message);
        getUsersData();
      }
    } catch (error) {
      toast.error("Error changing User account status");
      dispatch(hideLoading());
    }
  };

  useEffect(() => {
    getUsersData();
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
    },
    {
      title: "Email",
      dataIndex: "email",
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
      title: "Actions",
      dataIndex: "actions",
      render: (text, record) => (
        <div className="d-flex">
          {record.status === "approve" && (<h1 className="block-btn" onClick={() => changeUserStatus(record, "block")}>Block</h1>)}
          {record.status === "block" && (<h1 className="approve-btn" onClick={() => changeUserStatus(record, "approve")}>Unblock</h1>)}
        </div>
      ),
    },
  ];

  return (
    <Layout>
      <h1 className="page-title" style={{ textAlign: "center" }}>
        Users List
      </h1>
      <hr />
      <Table columns={columns} dataSource={users} />
    </Layout>
  );
}

export default Userslist;
