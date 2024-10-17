import React from "react";
import classes from "./About.module.css";
import { useTranslation } from "react-i18next";
import "./i18next";

export default function About() {
  const { t } = useTranslation();
  return (
    <div className={classes.aboutcontainer}>
      <div>
        <div className={classes.davit}></div>
      </div>
      <div className={classes.namecont}>
        <h1>{t("nameDavit")}</h1>
        <h2>{t("job")}</h2>
        <h3>N9568</h3>
      </div>
      <div className={classes.cont}>
        <div>{t("description")}</div>
        <hr />
        <div>
          <ul>
            <li>{t("exp2022")}</li>
            <br />
            <li>{t("exp2021")}</li>
            <br />
            <li>{t("expo2020")}</li>
            <br />
            <li>{t("exp2019a")}</li>
            <br />
            <li>{t("expo2019b")}</li>
            <br />
            <li>{t("expo2018")}</li>
            <br />
            <li>{t("exp2017")}</li>
          </ul>
        </div>
        <hr />
        <div>
         <p>{t("university2")}</p> 
         <br />
         <p>{t("university1")}</p>
        </div>
      </div>
    </div>
  );
}
