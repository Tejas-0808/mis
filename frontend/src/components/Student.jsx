import React from "react";
import Navigation from "./Navbar/navbar";
import StuNavbar from './Student/Profile/student_navbar';
import SideBar from "./Sidebar/sidebar";

const Student = () => {
  return (
    <>
      <Navigation />
      <div className='d-flex'>
        <SideBar />
        <StuNavbar />
      </div>
    </>
  )
}

export default Student
