import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import Login from "./pages/Login & Registor/Login";
import Register from "./pages/Login & Registor/Register";
import AvailableDoctors from "./pages/DashBoard/AvailableDoctors";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import ApplyDoctor from "./pages/DashBoard/ApplyDoctor";
import Notifications from "./pages/DashBoard/Notifications";
import Userslist from "./pages/Admin/Userslist";
import DoctorsList from "./pages/Admin/DoctorsList";
import Profile from "./pages/Doctor/Profile";
import BookAppointment from "./pages/DashBoard/BookAppointment";
import DocAppointments from "./pages/DashBoard/DocAppointments";
import DoctorAppointments from "./pages/Doctor/DoctorAppointments";
import ApplyForTest from "./pages/DashBoard/BookTests";
import Home from "./pages/UI/Home";
import AboutUs from "./pages/UI/AboutUs";
import DoctorInfo from "./pages/UI/DoctorInfo";
import Tests from "./pages/UI/Tests";
import Testslist from "./pages/Admin/Testslist";
import AllAppoinments from "./pages/Admin/AllAppoinments";
import TestAppointments from "./pages/DashBoard/TestAppointments";
import ForgotPass_1 from "./pages/Login & Registor/ForgotPass_1";
import ForgotPass_2 from "./pages/Login & Registor/ForgotPass_2";




function App() {
  const { loading } = useSelector((state) => state.alerts);
  return (
    <BrowserRouter>
      {loading && (
        <div className="spinner-parent">
          <div class="spinner-border" role="status"></div>
        </div>
      )}
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/doctor-info" element={<DoctorInfo />}/>
        <Route path="/about-us" element={<AboutUs />}/>
        <Route path="/tests" element={<Tests />}/>
        <Route path="/login" element={<PublicRoute><Login /></PublicRoute>}/>
        <Route path="/register" element={<PublicRoute><Register /></PublicRoute> } />
        <Route path="/forgot-pass_1" element={<PublicRoute><ForgotPass_1 /></PublicRoute> } />
        <Route path="/forgot-pass_2" element={<PublicRoute><ForgotPass_2 /></PublicRoute> } />
        <Route path="/available-doctors" element={<ProtectedRoute><AvailableDoctors /></ProtectedRoute> } />
        <Route path="/apply-doctor" element={<ProtectedRoute><ApplyDoctor /></ProtectedRoute> } />
        <Route path="/apply-for-test" element={<ProtectedRoute><ApplyForTest /></ProtectedRoute> } />
        <Route path="/notifications" element={<ProtectedRoute><Notifications /></ProtectedRoute> } />
        <Route path="/admin/userslist" element={<ProtectedRoute><Userslist /> </ProtectedRoute> } />
        <Route path="/admin/doctorslist" element={<ProtectedRoute><DoctorsList /></ProtectedRoute> } />
        <Route path="/admin/testslist" element={<ProtectedRoute><Testslist /></ProtectedRoute> } />
        <Route path="/admin/allappoinments" element={<ProtectedRoute><AllAppoinments /></ProtectedRoute> } />
        <Route path="/doctor/profile/:userId" element={<ProtectedRoute><Profile /></ProtectedRoute> } />
        <Route path="/book-appointment/:doctorId" element={<ProtectedRoute><BookAppointment /></ProtectedRoute> } />
        <Route path="/appointments" element={<ProtectedRoute> <DocAppointments /></ProtectedRoute> } />
        <Route path="/test-appointments" element={<ProtectedRoute> <TestAppointments /></ProtectedRoute> } />
        <Route path="/doctor/appointments" element={<ProtectedRoute><DoctorAppointments /> </ProtectedRoute> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
