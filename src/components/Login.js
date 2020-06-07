import React, {useContext} from "react";

import { AuthContext } from "../authContext";

const Login = () => {
  const {initiateLogin} = useContext(AuthContext)
  return (
    <button className="btn btn-sm btn-primary" onClick={initiateLogin}>
      Login
    </button>
  )
}

export default Login;