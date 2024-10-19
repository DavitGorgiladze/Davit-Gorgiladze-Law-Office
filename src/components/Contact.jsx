import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import classes from "./Contact.module.css";
import { useTranslation } from "react-i18next";
import "./i18next";

export default function Contact() {
  const [nameValue, setNameValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [messageValue, setMessageValue] = useState("");

  const { t } = useTranslation();
  //
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_a85tfrd", "template_f4vg8zt", form.current, {
        publicKey: "lhMp3bKH-sxYHIbQG",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );

    setNameValue("");
    setPhoneValue("");
    setEmailValue("");
    setMessageValue("");
  };

  return (
    <div className={classes.contactcontainer}>
      <div className={classes.contactheading}>{t("getintouch")}</div>
      <div className={classes.contactinfo}>
        <img
          className={classes.phone}
          src="../../src/assets/phone.png"
          alt=""
        />
        <div className={classes.phonenum}>+995 577 382 997</div>
        <img
          className={classes.gmail}
          src="../../src/assets/gmail.png"
          alt=""
        />
        <div className={classes.mailaddr}>d.gorgiladze1@gmail.com</div>
        <img
          className={classes.location}
          src="../../src/assets/location.png"
          alt=""
        />
        <div className={classes.locaddr}>{t("address")}</div>
      </div>

      <form ref={form} action="" onSubmit={sendEmail} className={classes.form}>
        <input
          type="text"
          name="from_name"
          id="namesurname"
          placeholder={`${t("entername")}`}
          value={nameValue}
          onChange={(e) => setNameValue(e.target.value)}
          required
        />
        <input
          type="text"
          name="phone"
          id="phone"
          placeholder={`${t("enterphone")}`}
          value={phoneValue}
          onChange={(e) => setPhoneValue(e.target.value)}
          required
        />
        <input
          type="text"
          name="from_email"
          id="email"
          placeholder={`${t("enteremail")}`}
          value={emailValue}
          onChange={(e) => setEmailValue(e.target.value)}
          required
        />
        <textarea
          required
          name="message"
          id=""
          placeholder={` ${t("enterquestion")}`}
          value={messageValue}
          onChange={(e) => setMessageValue(e.target.value)}
        ></textarea>
        <button
          onClick={
            nameValue.length > 2 &&
            phoneValue.length > 8 &&
            emailValue.length > 8 &&
            messageValue.length > 20
              ? sendEmail
              : null
          }
        >
          {t("sendform")}
        </button>
      </form>
    </div>
  );
}
