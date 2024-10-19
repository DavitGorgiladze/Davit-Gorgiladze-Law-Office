import React from "react";
import classes from "./Footer.module.css";
import { useTranslation } from "react-i18next";
import "./i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <div className={classes.footercontainer}>
      <div>
        <div>
          <a href="https://matsne.gov.ge/" target="_blank">
            {t("matsne")}
          </a>
        </div>
        <div>
          <a href="https://www.parliament.ge/" target="_blank">
            {t("parliament")}
          </a>
        </div>
        <div>
          <a href="https://www.gov.ge/index.php?sec_id=1" target="_blank">
            {t("government")}
          </a>
        </div>
        <div>
          <a href="https://www.supremecourt.ge/" target="_blank">
            {t("court")}
          </a>
        </div>
      </div>

      <div>
        <a href="https://napr.gov.ge/" target="_blank">
          {t("registry")}
        </a>
      </div>
      <div>
        <a href="https://ecd.court.ge/" target="_blank">
          {t("case")}
        </a>
      </div>
      <div className={classes.icons}>
        <div>
          <a
            href="https://www.facebook.com/profile.php?id=100077929936079"
            target="_blank"
          >
            <img src="../src/assets/facebook.png" alt="" />
          </a>
        </div>
        <div>
          <a href="https://wa.me/995577382997" target="_blank">
            {" "}
            <img src="../src/assets/whatsapp.png" alt="" />
          </a>
        </div>
        <div>
          <a
            href="https://www.instagram.com/david__gorgiladze/"
            target="_blank"
          >
            <img src="../src/assets/insta.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
