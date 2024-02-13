import React from 'react'
import { useParams } from 'react-router-dom' //use params will provide the value from link to the page 

const Profile = () => {
    const {handle}=useParams();

  return (
    <div>
      <h1>Wlcome to your profile: &lt; {handle} &gt;</h1>
    </div>
  )
}

export default Profile
