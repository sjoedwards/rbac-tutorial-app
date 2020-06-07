import React, {useContext} from "react";
import { Redirect } from "react-router-dom";

import { AuthContext } from "../authContext";
import Can from "../components/Can";
import Logout from "../components/Logout";
import Profile from "../components/Profile";
import PostsList from "../components/PostsList";

const DashboardPage = () => {

  const {user} = useContext(AuthContext)

  return (
    <>
    <Can
        role={user.role}
        perform="dashboard-page:visit"
        yes={() => (
          <div>
            <h1>Dashboard</h1>
            <Logout />
            <Profile />
            <PostsList />
          </div>
        )}
        no={() => <Redirect to="/" />}
      />
    </>
  );
}


export default DashboardPage;