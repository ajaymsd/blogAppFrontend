import React from 'react'
import { Link,useNavigate } from 'react-router-dom'

function Header() {
  const navigate=useNavigate();
  const token=localStorage.getItem("token");
  const username=localStorage.getItem("user");
  const handleLogout=()=>{
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    alert("Logout Done Successfully");
    navigate("/login");
  }
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark p-3">
  <a class="navbar-brand " >Delightful Blogs</a>
  
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <Link to="/" class="nav-link">Home <span class="sr-only"></span></Link>
      </li>
      <li class="nav-item active">
        <Link to="/userblog" class="nav-link">My Blogs <span class="sr-only"></span></Link>
      </li>
      <li class="nav-item">
        <Link to="/add-blog" class="nav-link" >Add Blog</Link>
      </li>
      <li class="nav-item">
        <Link to="/add-category" class="nav-link" >Add Category</Link>
      </li>
      
    </ul>
  </div>
  <div className='div-inline mx-auto my-2  my-lg-0'>
    {token && token !=null ? (
    <>
    <button className='btn btn-dark btn-md'>Welcome {username}</button>
    <button className='btn btn-danger btn-md' onClick={handleLogout}>Logout</button>
    </>):
   (<>
    <Link to="/login"><button className="btn btn-primary mx-2">Login</button></Link>
    <Link to="/register"><button className="btn btn-success">Register</button></Link>
    </>)
  }
  </div>
</nav>
    </>
  )
}

export default Header