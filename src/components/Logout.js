import React, {useContext} from "react";

import { AuthContext } from "../authContext";

const Logout = () => {
  const {logout} = useContext(AuthContext)
    return (
      <button className="btn btn-sm btn-default" onClick={logout}>
        Logout
      </button>
    )
}

export default Logout;