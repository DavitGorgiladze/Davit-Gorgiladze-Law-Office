import React from "react";
import classes from "./Services.module.css";
import { useTranslation } from "react-i18next";
import "./i18next";

export default function Services() {
  const { t } = useTranslation();
  return (
    <div className={classes.servicescontainer}>
      <div className={classes.servicelist}>
        <ul>
          <li>{t("lands")}</li>
          <li>{t("building")}</li>
          <li>{t("heritage")}</li>
        </ul>

        <ul>
          <li>{t("contracts")}</li>
          <li>{t("labour")}</li>
          <li>{t("immigration")}</li>
        </ul>

        <ul>
          <li>{t("security")}</li>
          <li>{t("refugees")}</li>
          <li>{t("ecomigrants")}</li>
        </ul>
        <ul>
          <li>{t("licenses")}</li>
          <li>{t("permissions")}</li>
          <li>{t("accreditations")}</li>
        </ul>
      </div>
      <div className={classes.servicepopup}>
        {t(`solveproblem`)}
      </div>
    </div>
  );
}
