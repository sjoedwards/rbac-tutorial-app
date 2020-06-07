import React, {useContext} from "react";
import {Redirect} from "react-router-dom";

import {AuthContext} from "../authContext";

const Callback = props => {
  const {handleAuthentication} = useContext(AuthContext)

  const test = (/access_token|id_token|error/.test(props.location.hash))
  return (
    <React.Fragment>
      {test && (handleAuthentication())}
      <Redirect to="/"/>;
    </React.Fragment>

  )
}

export default Callback;