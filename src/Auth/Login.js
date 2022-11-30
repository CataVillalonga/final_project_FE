import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import React from "react";

const LoginButton = () => {
  const navigate = useNavigate();
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  const loginHandler = () => {
    localStorage.setItem('url', JSON.stringify(window.location.pathname))
    navigate('/Profile')
    loginWithRedirect();
  }

  return (
   <>
    {!isAuthenticated ? 
    <button className="button" onClick={loginHandler}>Log In</button> : 
    <button className="button" onClick={() => logout({ returnTo: window.location.origin })}>Log Out</button>}
   </>
   
    )
    
};


export default LoginButton;