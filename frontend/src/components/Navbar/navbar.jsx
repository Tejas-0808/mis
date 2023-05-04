import React, { useState, useEffect } from "react";
import { IoMdNotifications } from 'react-icons/io';
import { IoSettingsOutline } from 'react-icons/io5';
import { BiSearchAlt } from 'react-icons/bi';
import { BiUser } from 'react-icons/bi';
import { FaUser } from 'react-icons/fa';
import "../../styles/navigation.css";


export default function Navigation() {
  // const [username, setUsername] = useState("");
  // useEffect(() => {
  //     // replace this with your actual database fetch code
  //     setUsername("John Doe");
  //   }, []);
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState("");

  const fetchAllPersonalDetails = async () => {
    try {

      const username = localStorage.getItem('username');
      // setUsername(username);
      // rest of the code
    } catch (error) {
      console.error(error);
    }
  };


  function toggle() {
    setIsOpen(!isOpen);
    setUsername(localStorage.getItem('username'));
  }

  function handleProfileClick() {
    setIsNavExpanded(!isNavExpanded);
  }


  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
        Government College of Engineering, Aurangabad
      </a>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        {/* icon from Heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <a href="/home"><BiSearchAlt size={30} /></a>
          </li>
          <li>
            <a href="/about"><IoMdNotifications size={30} /></a>
          </li>
          <li>
            <a href="/contact"><IoSettingsOutline size={30} /></a>
          </li>
          {/* <li>
            <a href="/profile"><BiUser size={30} /></a>
        // </li> */}
          {/* <li>
        //   <div className="profile-icon" onClick={handleProfileClick}>
        //     <BiUser size={30} />
        //   </div>
        //   {isNavExpanded && (
        //     <ul className="profile-dropdown">
        //       {/* <li><a href="#">Logout</a></li> */}
          {/* //       <div className="logout-container">
        //         <a href="/loginform">Logout</a>
        //       </div>
        //     </ul>
        //   )}
        //     </li> */}
          {/* <li>
          <div className="profile-container" onClick={handleProfileClick}>
            <div className="profile-icon">
              <BiUser size={30} />
            </div>
            {isNavExpanded && (
              <ul className="profile-dropdown"> */}
          {/* <li>
        <strong>{username}</strong>
      </li> */}
          {/* <li>
                  <a href="/loginform">Logout</a>
                </li> */}
          {/* <div className="logout-container">
                <a href="/loginform">Logout</a>
               </div>
              </ul>
            )}
          </div>
        </li> */}
          <li>
            <div className="profile-container" onClick={handleProfileClick}>
              {/* <div className="profile-icon">
        <button onClick={toggle}>
      <BiUser size={30} />
    </button>
            </div> */}
              <div className="profile-icon">
                <button onClick={toggle}>
                  <FaUser size={30} />
                </button>
              </div>

              {isOpen && (
                <div className="profile-dropdown">
                  Signed in as <strong>{username}</strong>

                  <a href="#">My Account</a>

                  <a href="loginform" onClick={() => { localStorage.clear() }}>Logout</a>
                </div>
              )}
            </div>
          </li>
        </ul>

      </div>

    </nav>
  );
}

