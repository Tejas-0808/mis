import React from 'react'
import PersonalDetails from './Profile/Personaldetails'
import Educationdetails from './Profile/Educationdetails'
import Contactdetails from './Profile/Contactdetails'

function studentinformation() {
  return (
    <div>
      <PersonalDetails/>
      <Educationdetails/>
      <Contactdetails/>
    </div>
  )
}

export default studentinformation
