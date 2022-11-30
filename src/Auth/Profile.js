import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import React from "react";

const Profile = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated, logout, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  if(isAuthenticated) {
     return localStorage.getItem('url') && navigate(JSON.parse(localStorage.getItem('url')))
  }

};

export default Profile;