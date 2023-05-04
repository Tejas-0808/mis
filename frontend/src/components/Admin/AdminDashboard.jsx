import { Link } from "react-router-dom";
import React, { useState } from "react";

const AdminDashboard = () => {
  return (
    <>
      <p>
        <button>
          <Link to="/createuserlogin">Create logins</Link>
        </button>
      </p>
      <p>
        <button>
          <Link to="/addsession">Add Session</Link>
        </button>
      </p>
    </>
  );
};
export default AdminDashboard;
