// ---------------------------------------------------------------------------------------------------------------------------------------------
// Ye Component issliye created kyuki ager user already login hai to ye component local storage me present token ko fetch karke user ko homepage 
// per redirect kar dega and ager token exepire hai to firr redired to the login page.
// ---------------------------------------------------------------------------------------------------------------------------------------------

import React from "react";
import { Navigate } from "react-router-dom";

function PublicRoute(props) {
  if (localStorage.getItem("token")) {
    return <Navigate to="/available-doctors" />;
  } else {
    return props.children;
  }
}

export default PublicRoute;
