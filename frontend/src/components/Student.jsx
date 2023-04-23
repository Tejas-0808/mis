import React from "react";
import Navigation from "./Navbar/navbar";
import StuNavbar from './Student/Profile/student_navbar';
import Add_per_d from "./Student/Profile/AddPersonalDetails";
import SecondaryNavbar from "./Student/Profile/student_navbar1";

const Student = () => {

  return (
    <>
      {/* <Navigation /> */}
      {/* <div className='d-flex'>
        <SideBar /> */}
      <div className='d-flex flex'>
        {/* <StuNavbar /> */}
        <SecondaryNavbar />
      </div>
      {/* </div> */}
    </>
  )
}

export default Student
