import React from "react";
import AuthIamge from "./images/AuthImage.jpg";
import "./Auth.css";
import { useNavigate } from "react-router-dom";
import logo from "../pages/images/logo.png";


const Authentication = () => {

const navigate = useNavigate();

  const handleJoinUsClick = () => {
    navigate("/signup");
  };
  return (
    <div className="Container">
      <div className="leftimg">
        <img src={AuthIamge} alt="Fitness" className="startimg"></img>
      </div>
      <div className="rightside">
      <img src={logo} alt="logo" className="logos" />
        <p className="welcometext">
          Welcome to our website! This platform is dedicated to helping you
          track your fitness journey and monitor your progress. Embrace your
          journey and join us for free. Improve your health and enhance your
          performance with our support.
          <br />
            <span className="joinbutton" onClick={handleJoinUsClick}>Join us today! 👋</span>
        </p>
      </div>
    </div>
  );
};

export default Authentication;
