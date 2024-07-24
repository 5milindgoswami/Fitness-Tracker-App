import React, { useState } from "react";
import logo from "../pages/images/logo.png";
import "./navbar.css";
import { MenuRounded } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import { Avatar } from "@mui/material";
import { useDispatch } from "react-redux";
import { logout } from "../redux/reducers/userSlice"


const Navbar = ({currentUser}) => {
  const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav>
      <div className="Navcontainer">
        <div className="mobile">
        <MenuRounded className="menu" onClick = {toggleMenu}/>
        </div>
        <div className="navlogo">
          <img src={logo} alt="logo" className="logo" />
          <p>Fitness-Tracker</p>
        </div>
        <ul className={`mobileitems ${isOpen ? 'open' : 'closed'}`}>
        <NavLink to={"/"} className="Navlink">Dashboard</NavLink>
        <NavLink to={"/workouts"} className="Navlink">Workouts</NavLink>
        <NavLink to={"/blogs"} className="Navlink">Blogs</NavLink>
        <NavLink to={"/contact"} className="Navlink">Contact</NavLink>
        </ul>
        <ul className="navitems">
        <NavLink to={"/"} className="Navlink">Dashboard</NavLink>
        <NavLink to={"/workouts"} className="Navlink">Workouts</NavLink>
        <NavLink to={"/blogs"} className="Navlink">Blogs</NavLink>
        <NavLink to={"/contact"} className="Navlink">Contact</NavLink>
        </ul>
        <div className="usercontainer">
            <Avatar src={currentUser?.img}>{currentUser?.name[0]}</Avatar>
            <div className="logout" onClick={() => dispatch(logout())}>Logout</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
