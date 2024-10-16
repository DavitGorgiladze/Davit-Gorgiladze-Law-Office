import React from "react";
import classes from "./Navbar.module.css";
import NightlightRoundOutlinedIcon from "@mui/icons-material/NightlightRoundOutlined";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [menuClicked, setMenuClicked] = useState(false);
  // const [navBlack, setNavBlack] = useState(false);

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     window.scrollY > 80 ? setNavBlack(true) : setNavBlack(false);
  //   });
  // }, []);

  const handleMenu = () => {
    setMenuClicked((menu) => !menu);
  };

  return (
    <>
      <nav
        className={`${classes.navbar} ${menuClicked ? "" : classes.mobilebar}`}
        // className={`${classes.navbar} ${navBlack ? classes["nav-black"] : ""}`}
      >
        <div className={classes.logocontainer}>
          <Link to="/">
            <img className={classes.logo} src="../src/assets/logo.png" alt="" />
          </Link>
          <div>
            <div>Davit Gorgiladze Law Office</div>
            <div>Make your best deals work in here!</div>
          </div>
        </div>
        {/* <div className={classes.sidebar}>TRIGGER</div> */}
        <ul
          className={`${classes.lists} ${menuClicked ? "" : classes.hidemenu} `}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            {" "}
            <Link to="/about">About</Link>
          </li>
          <li>
            {" "}
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <span>
          <img
            onClick={handleMenu}
            className={classes.menu}
            src="../../src/assets/menu.png"
            alt=""
          />
        </span>
        <div
          className={`${classes.imgs} ${menuClicked ? "" : classes.hidemenu}`}
        >
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
