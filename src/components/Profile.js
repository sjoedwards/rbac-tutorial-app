import React, {useContext} from "react";

import {AuthContext} from "../authContext";

const Profile = () => {
  const {user} = useContext(AuthContext)
  return (
    <>
      <div>
        <h2>User Profile</h2>
        <ul>
          <li>ID: {user.id}</li>
          <li>Email: {user.email}</li>
          <li>Role: {user.role}</li>
        </ul>
      </div>
    </>
  )
}


export default Profile;