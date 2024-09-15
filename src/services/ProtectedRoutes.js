import React from 'react'
import { Navigate, Outlet,useNavigate } from 'react-router-dom'
function ProtectedRoutes() {
    const auth=localStorage.getItem("token");
  return auth && auth!= null ? <Outlet></Outlet> : <Navigate to="/login"></Navigate>
}

export default ProtectedRoutes