import React, { useState, useEffect } from "react";
import VisibilityIcon from "@material-ui/icons/Visibility";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";

const Auth = (props) => {

  const {
    email,
    setemail,
    password,
    setpassword,
    handleLogin,
    handleSignup,
    hasAccount,
    sethasAccount,
    emailError,
    passwordError
  } = props;


    return (
      <React.Fragment>
     
          <label>Diver Registration..</label>
          <div className="form-group input-group">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <AssignmentIndIcon />
              </div>
            </div>
            <input
               type="text"
          //outoFocus
          required
          name="username"
          value={email}
          onChange={(e) => setemail(e.target.value)}
            />
          </div>
          <div className="form-group input-group">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <VisibilityIcon />
              </div>
            </div>
            <input
            type="password"
          name="password"
          //outoFocus        
          value={password}
          onChange={(e) => setpassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <button className="button111" onClick={handleSignup}>
                Registration
              </button>
          </div>
       
      </React.Fragment>
    );
}

export default Auth;