import React from "react";
import "../CSS/DashBoard/layout.css";
import "../CSS/Navbars/DashboardNavbar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Badge } from "antd";

function Layout({ children }) {
  // destructring the user
  const { user } = useSelector((state) => state.user);
  //importing navigate hook
  const navigate = useNavigate();
  // This code is for when the menu will be active ( jis menu item per click hoga wo highlighted show hoga )
  const location = useLocation();

  // ------------------------
  // This layout for usermenu
  // ------------------------

  const userMenu = [
    {
      name: "Home",
      path: "/",
      icon: "M19 21.0001H5C4.44772 21.0001 4 20.5524 4 20.0001V11.0001L1 11.0001L11.3273 1.61162C11.7087 1.26488 12.2913 1.26488 12.6727 1.61162L23 11.0001L20 11.0001V20.0001C20 20.5524 19.5523 21.0001 19 21.0001ZM6 19.0001H18V9.15757L12 3.70302L6 9.15757V19.0001Z",
    },
    {
      name: "Book Appointment",
      path: "/available-doctors",
      icon: "M17 2V4H20.0066C20.5552 4 21 4.44495 21 4.9934V21.0066C21 21.5552 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5551 3 21.0066V4.9934C3 4.44476 3.44495 4 3.9934 4H7V2H17ZM7 6H5V20H19V6H17V8H7V6ZM9 16V18H7V16H9ZM9 13V15H7V13H9ZM9 10V12H7V10H9ZM15 4H9V6H15V4Z",
    },
    {
      name: "Book Test",
      path: "/apply-for-test",
      icon: "M17 2V4H16V18C16 20.2091 14.2091 22 12 22C9.79086 22 8 20.2091 8 18V4H7V2H17ZM14 10H10V18C10 19.1046 10.8954 20 12 20C13.1046 20 14 19.1046 14 18V10ZM13 15C13.5523 15 14 15.4477 14 16C14 16.5523 13.5523 17 13 17C12.4477 17 12 16.5523 12 16C12 15.4477 12.4477 15 13 15ZM11 12C11.5523 12 12 12.4477 12 13C12 13.5523 11.5523 14 11 14C10.4477 14 10 13.5523 10 13C10 12.4477 10.4477 12 11 12ZM14 4H10V8H14V4Z",
    },
    {
      name: "Doc Appointments",
      path: "/appointments",
      icon: "M20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22ZM19 20V4H5V20H19ZM7 6H11V10H7V6ZM7 12H17V14H7V12ZM7 16H17V18H7V16ZM13 7H17V9H13V7Z",
    },
    {
      name: "Test Appointments",
      path: "/test-appointments",
      icon: "M20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22ZM19 20V4H5V20H19ZM7 6H11V10H7V6ZM7 12H17V14H7V12ZM7 16H17V18H7V16ZM13 7H17V9H13V7Z",
    },
    {
      name: "Apply as Doctor",
      path: "/apply-doctor",
      icon: "M16 1C16.5523 1 17 1.44772 17 2V5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V6C2 5.44772 2.44772 5 3 5H7V2C7 1.44772 7.44772 1 8 1H16ZM20 7H4V19H20V7ZM13 9V12H16V14H12.999L13 17H11L10.999 14H8V12H11V9H13ZM15 3H9V5H15V3Z",
    },
  ];

  // --------------------------
  // This layout for DoctorMenu
  // --------------------------

  const doctorMenu = [
    {
      name: "Home",
      path: "/",
      icon: "M19 21.0001H5C4.44772 21.0001 4 20.5524 4 20.0001V11.0001L1 11.0001L11.3273 1.61162C11.7087 1.26488 12.2913 1.26488 12.6727 1.61162L23 11.0001L20 11.0001V20.0001C20 20.5524 19.5523 21.0001 19 21.0001ZM6 19.0001H18V9.15757L12 3.70302L6 9.15757V19.0001Z",
    },
    {
      name: "All Doctors",
      path: "/available-doctors",
      icon: "M16 1C16.5523 1 17 1.44772 17 2V5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V6C2 5.44772 2.44772 5 3 5H7V2C7 1.44772 7.44772 1 8 1H16ZM20 7H4V19H20V7ZM13 9V12H16V14H12.999L13 17H11L10.999 14H8V12H11V9H13ZM15 3H9V5H15V3Z",
    },
    {
      name: "Appointments",
      path: "/doctor/appointments",
      icon: "M17 2V4H20.0066C20.5552 4 21 4.44495 21 4.9934V21.0066C21 21.5552 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5551 3 21.0066V4.9934C3 4.44476 3.44495 4 3.9934 4H7V2H17ZM7 6H5V20H19V6H17V8H7V6ZM9 16V18H7V16H9ZM9 13V15H7V13H9ZM9 10V12H7V10H9ZM15 4H9V6H15V4Z",
    },
    {
      name: "Profile Update",
      path: `/doctor/profile/${user?._id}`,
      icon: "M21.0082 3C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082ZM20 5H4V19H20V5ZM18 15V17H6V15H18ZM12 7V13H6V7H12ZM18 11V13H14V11H18ZM10 9H8V11H10V9ZM18 7V9H14V7H18Z",
    },
  ];

  // ------------------------
  // This layout for Admin
  // ------------------------

  const adminMenu = [
    {
      name: "Home",
      path: "/",
      icon: "M19 21.0001H5C4.44772 21.0001 4 20.5524 4 20.0001V11.0001L1 11.0001L11.3273 1.61162C11.7087 1.26488 12.2913 1.26488 12.6727 1.61162L23 11.0001L20 11.0001V20.0001C20 20.5524 19.5523 21.0001 19 21.0001ZM6 19.0001H18V9.15757L12 3.70302L6 9.15757V19.0001Z",
    },
    {
      name: "Available doctors",
      path: "/available-doctors",
      icon: "M16 1C16.5523 1 17 1.44772 17 2V5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V6C2 5.44772 2.44772 5 3 5H7V2C7 1.44772 7.44772 1 8 1H16ZM20 7H4V19H20V7ZM13 9V12H16V14H12.999L13 17H11L10.999 14H8V12H11V9H13ZM15 3H9V5H15V3Z",
    },
    {
      name: "Users",
      path: "/admin/userslist",
      icon: "M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z",
    },
    {
      name: "Doctors",
      path: "/admin/doctorslist",
      icon: "M16 1C16.5523 1 17 1.44772 17 2V5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V6C2 5.44772 2.44772 5 3 5H7V2C7 1.44772 7.44772 1 8 1H16ZM20 7H4V19H20V7ZM13 9V12H16V14H12.999L13 17H11L10.999 14H8V12H11V9H13ZM15 3H9V5H15V3Z",
    },
    {
      name: "Test appointment",
      path: "/admin/testslist",
      icon: "M20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22ZM19 20V4H5V20H19ZM7 6H11V10H7V6ZM7 12H17V14H7V12ZM7 16H17V18H7V16ZM13 7H17V9H13V7Z",
    },
    {
      name: "Doctors appointment",
      path: "/admin/allappoinments",
      icon: "M20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22ZM19 20V4H5V20H19ZM7 6H11V10H7V6ZM7 12H17V14H7V12ZM7 16H17V18H7V16ZM13 7H17V9H13V7Z",
    }
  ];

  const menuToBeRendered = user?.isAdmin? adminMenu: user?.isDoctor? doctorMenu: userMenu;

  const role = user?.isAdmin ? "Admin" : user?.isDoctor ? "Doctor" : "User";

  return (
    <div className="main">
      <div className="d-flex layout">
        {/* This is side Bar start */}

        <div className="humburger-menu">
          <input type="checkbox" />

          <div className="humburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>

          <div className="menu menu-items">

            <h1 className="logo">eDOC</h1>
            <h1 className="role">{`Logged in as ${role}`}</h1>
            
            {menuToBeRendered.map((menu) => {
              // This code is for when the menu will be active ( jis menu item per click hoga wo highlighted show hoga )
              const isActive = location.pathname === menu.path;
              return (
                <div className={`d-flex menu-item ${ isActive && "active-menu-item" }`}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d={menu.icon} fill="#fff"></path></svg>
                  {<Link to={menu.path}>{menu.name}</Link>}
                </div>
              );
            })}

            {/* ------------------------------------------------------------------ */}
            {/* This is Static Logout button not created with render.map() method  */}
            {/* ------------------------------------------------------------------ */}

            <div className={`d-flex menu-item `} onClick={() => { localStorage.clear(); navigate("/login"); window.location.reload(true);}}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M4 18H6V20H18V4H6V6H4V3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V18ZM6 11H13V13H6V16L1 12L6 8V11Z" fill="#fff"></path></svg>
              {<Link to="/login">Logout</Link>}
            </div>
          </div>
        </div>

        {/* Side bar end */}

        <div className="DashBoard-content">
          <div className="header">
            <div className="mobile">
              <i className="ri-menu-2-fill menuBar"></i>
            </div>

            <div className="d-flex align-items-center role-and-noti px-4">
              <Badge
              className="notification-icon"
                count={user?.unseenNotifications.length}
                onClick={() => navigate("/notifications")}
              >
                <svg className="px-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="35" height="35"><path d="M20 17H22V19H2V17H4V10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10V17ZM18 17V10C18 6.68629 15.3137 4 12 4C8.68629 4 6 6.68629 6 10V17H18ZM9 21H15V23H9V21Z" fill="#000"></path></svg>
              </Badge>

              <h1 className="log-in-as" style={{ paddingLeft: "20px" }}>
                {user?.name}
              </h1>
            </div>
          </div>

          <div className="body flex-wrap" >{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
