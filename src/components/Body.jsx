import React from "react";
import classes from "./Body.module.css";
import { useTranslation } from "react-i18next";
import "./i18next";

export default function Body() {
  const { t } = useTranslation();

  return (
    <div className={classes.body}>
      <div className={classes.bodycontainer}>
        <div className={classes.namefield}>
          <div className={classes.name}>{t("namesurname")}</div>
          <div className={classes.field}>{t("field")}</div>
        </div>
        <div className={classes.principles}>{t("principles")}</div>
        <div className={classes.callcontainer}>
          <div className={classes.call}>{t("call")}</div>
          <div className={classes.consultation}>{t("consultation")}</div>
        </div>
      </div>
    </div>
  );
}
