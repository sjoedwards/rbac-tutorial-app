import React, {useContext} from "react";
import { Redirect } from "react-router-dom";

import { AuthContext } from "../authContext";
import Login from "../components/Login";
import PostsList from "../components/PostsList";

const HomePage = () => {
  const {authenticated} = useContext(AuthContext)
  return (
    <React.Fragment>
      {authenticated ? (
        <Redirect to="/dashboard" />
      ) : (
        <div>
          <h2>Welcome to React RBAC Tutorial.</h2>
          <Login />
          <PostsList />
        </div>
      )}
    </React.Fragment>
  )
}


export default HomePage;