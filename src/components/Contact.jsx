import React from "react";
import classes from "./Contact.module.css";

export default function Contact() {
  return (
    <div className={classes.contactcontainer}>
      <div className={classes.contactheading}>GET IN TOUCH</div>
      <div className={classes.contactinfo}>
        <div>Davit Gorgiladze Law Office</div>
        <div>+995 577 382 997</div>
        <div>+995 577 999 329</div>
        <div>d.gorgiladze1@gmail.com</div>
        <div>Batumi, Gr. Eliava 29</div>
        <div></div>
      </div>
    </div>
  );
}
