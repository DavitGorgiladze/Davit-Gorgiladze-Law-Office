import React from "react";
import classes from "./Services.module.css";

export default function Services() {
  return (
    <div className={classes.servicescontainer}>
      <div className={classes.servicelist}>
        <ul>
          <li>Lands and Real Estate</li>
          <li>Building Disputes</li>
          <li>Heritage and Family</li>
        </ul>

        <ul>
          <li>Contracts</li>
          <li>Labour</li>
          <li>Immigration</li>
        </ul>

        <ul>
          <li>Social Security</li>
          <li> Refugees</li>
          <li>Ecomigrants</li>
        </ul>
        <ul>
          <li>Licenses</li>
          <li>Permissions</li>
          <li>Accreditations</li>
        </ul>
      </div>
      <div className={classes.servicepopup}>MAKE A CALL AND FINISH YOUR PROBLEM</div>
    </div>
  );
}
