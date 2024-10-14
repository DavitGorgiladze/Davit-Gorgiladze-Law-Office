import React from "react";
import classes from "./Navbar.module.css";
import NightlightRoundOutlinedIcon from "@mui/icons-material/NightlightRoundOutlined";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className={classes.navbar}>
        <div className={classes.logocontainer}>
          <Link to='/'><img className={classes.logo} src="../src/assets/logo.png" alt="" /></Link>
          <div>
            <div>Davit Gorgiladze Law Office</div>
            <div>Make your best deals work in here!</div>
          </div>
        </div>
        <ul className={classes.lists}>
          
         <li><Link to='/'>Home</Link></li>
          <li> <Link to='/about'>About</Link></li>
          <li> <Link to='/services'>Services</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>
        <div className={classes.imgs}>
          <div className={classes.languages}>
            <NightlightRoundOutlinedIcon fontSize="medium" />
          </div>
          <div>ENG</div>
          <div>GEO</div>
          <div>RUS</div>
        </div>
      </nav>
    </>
  );
}
