 import React from "react";

const Login = (props) => {
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
    <section className="login">
      <div className="loginContainer">
        <label>User name :</label>
        <input
          type="text"
          //outoFocus
          required
          name="username"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        <p className="errorMsg">{emailError}</p>
        <label>password :</label>
        <input
          type="password"
          name="password"
         // outoFocus
          required
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        <p className="errorMsg">{passwordError}</p>
        <div className="btnContainer">
          {hasAccount ? (
            <>
              <button className="button111" onClick={handleSignup}>
                Sign up
              </button>
              <p>
                have an account ?
                <span onClick={() => sethasAccount(!hasAccount)}>sign in</span>
              </p>
            </>
          ) : (
            <>
              <button className="button111" onClick={handleLogin}>
                sign in
              </button>
              <p>
                Don't have an account ?
                <span onClick={() => sethasAccount(!hasAccount)}>Sign up</span>
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Login;
