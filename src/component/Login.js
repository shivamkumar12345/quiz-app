import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import {GoogleOAuthProvider} from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Login = () => {
  const clientId = "213016984793-b544ef3a5fs77i9oc4inj3ilnuvibfa1.apps.googleusercontent.com"; 
    const navigate = useNavigate();
  const handleSuccess = (response) => {
    console.log(response);
    navigate("/home")
  };

  const handleFailure = (error) => {
    console.log(error);
  };

  return (
    <div className="login_react_task">
        <GoogleOAuthProvider clientId={clientId}>
        <GoogleLogin
          buttonText="Sign in with Google"
          onSuccess={handleSuccess}
          onFailure={handleFailure}
          cookiePolicy={"single_host_origin"}
        />
        </GoogleOAuthProvider>    
    </div>
  );
};

export default Login;
