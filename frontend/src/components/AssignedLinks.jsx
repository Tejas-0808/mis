import React, { useState, useEffect } from "react";
import axios from "axios";

function AssignedLinks({ children }) {
  const [assignedLinks, setAssignedLinks] = useState([]);

  useEffect(() => {
    // Fetch the assigned links for the current user
    const currentUser = localStorage.getItem("username");
    
    // axios.get("http://localhost:3001//assigned-links/"+ currentUser).then((response))=>{
    axios.get(`http://localhost:3001/assigned-links?staff_username=${currentUser}`).then((response)=>{
        console.log(response.data);
    // axios.get(`/api/assigned-links?staff_username=${currentUser}`).then((response) => {
      setAssignedLinks(response.data);
    });
  }, []);

  // Check if the current page's link is in the assigned links list
  // const currentLink = window.location.pathname;
  // const isLinkAssigned = assignedLinks.some((link) => link.filePath === currentLink);
  
  const currentLink = window.location.pathname;
const isLinkAssigned = assignedLinks.some((link) => {
  const linkPath = link.filePath.replace(/\/:\w+/g, '/\\d+');
  const linkRegex = new RegExp(`^${linkPath}$`);
  console.log(linkRegex);
  return linkRegex.test(currentLink);
});


console.log(currentLink);
  // Render the page if the link is assigned, otherwise show an error message
  return (
    <>
      {isLinkAssigned ? (
        <>{children}</>
      ) : (
        <p>You do not have access to this page....</p>
      )}
    </>
  );
}

export default AssignedLinks;
