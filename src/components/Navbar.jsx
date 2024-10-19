import React from "react";
import classes from "./Navbar.module.css";
import NightlightRoundOutlinedIcon from "@mui/icons-material/NightlightRoundOutlined";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./i18next";

export default function Navbar({ darkmode, toggle }) {
  const { t, i18n } = useTranslation();
  const languages = [
    { code: "en", name: "ENG" },
    { code: "ge", name: "GEO" },
    { code: "ru", name: "RUS" },
  ];

  const [menuClicked, setMenuClicked] = useState(false);

  // 

  // const [navBlack, setNavBlack] = useState(false);

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     window.scrollY > 80 ? setNavBlack(true) : setNavBlack(false);
  //   });
  // }, []);

  // 

  const handleMenu = () => {
    setMenuClicked((menu) => !menu);
  };

  return (
    <>
      <nav
        className={`${classes.navbar} ${menuClicked ? "" : classes.mobilebar}`}
        // 
        // className={`${classes.navbar} ${navBlack ? classes["nav-black"] : ""}`}

        // 
      >
        <div className={classes.logocontainer}>
          <Link to="/">
            <img className={classes.logo} src="../src/assets/logo.png" alt="" />
          </Link>
          <div>
            <div> {t("logoName")}</div>
            <div>{t("logoOffer")}</div>
          </div>
        </div>
        {/* <div className={classes.sidebar}>TRIGGER</div> */}
        <ul
          className={`${classes.lists} ${menuClicked ? "" : classes.hidemenu} `}
        >
          <li>
            <Link to="/">{t("home")}</Link>
          </li>
          <li>
            {" "}
            <Link to="/about">{t("about")}</Link>
          </li>
          <li>
            {" "}
            <Link to="/services">{t("services")}</Link>
          </li>
          <li>
            <Link to="/contact">{t("contact")}</Link>
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
            {!darkmode ? (
              <NightlightRoundOutlinedIcon fontSize="medium" onClick={toggle} />
            ) : (
              <LightModeIcon fontSize="medium" onClick={toggle} />
            )}
          </div>
          <div>
            <button onClick={() => i18n.changeLanguage(languages[0].code)}>
              ENG
            </button>
          </div>
          <div>
            <button onClick={() => i18n.changeLanguage(languages[1].code)}>
              GEO
            </button>
          </div>
          <div>
            <button onClick={() => i18n.changeLanguage(languages[2].code)}>
              RUS
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
