import React from "react";
import classes from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={classes.footercontainer}>
      <div>
        <div>
          <a href="https://matsne.gov.ge/" target="_blank">
            Matsne
          </a>
        </div>
        <div>
          <a href="https://www.parliament.ge/" target="_blank">
            Parliament of Georgia
          </a>
        </div>
        <div>
          <a href="https://www.gov.ge/index.php?sec_id=1" target="_blank">
            Goverment of Georgia
          </a>
        </div>
        <div>
          <a href="https://www.supremecourt.ge/" target="_blank">
            Supreme Court of Georgia
          </a>
        </div>
      </div>

      <div>
        <a href="https://napr.gov.ge/" target="_blank">
          Public Registry of Georgia
        </a>
      </div>
      <div>
        <a href="https://ecd.court.ge/" target="_blank">
          Find your Case
        </a>
      </div>
      <div className={classes.icons}>
        <div>
          <img src="../src/assets/facebook.png" alt="" />
        </div>
        <div>
          <img src="../src/assets/whatsapp.png" alt="" />
        </div>
        <div>
          <img src="../src/assets/insta.png" alt="" />
        </div>
      </div>
    </div>
  );
}
