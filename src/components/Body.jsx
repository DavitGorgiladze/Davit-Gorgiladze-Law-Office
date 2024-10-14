import React from "react";
import classes from "./Body.module.css";


export default function Body() {
  return (
    <div className={classes.body}>
      <div className={classes.bodycontainer}>
        <div className={classes.namefield}>
          <div className={classes.name}>Davit Gorgiladze</div>
          <div className={classes.field}>
            Lawyer on Civil and Administrative Cases
          </div>
        </div>
        <div className={classes.principles}>
          Principles are Loyalty, Quality, Effectiveness
        </div>
        <div className={classes.callcontainer}>
          <div className={classes.call}>
            Need Assistance ? CALL ME (+995) 577 382 997
          </div>
          <div className={classes.consultation}>
            Consultation is <p>FREE OF CHARGE</p>
          </div>
        </div>
      </div>
    </div>
  );
}
