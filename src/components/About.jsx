import React from "react";
import classes from "./About.module.css";

export default function About() {
  return (
    <div className={classes.aboutcontainer}>
      <div>
        <div className={classes.davit}></div>
      </div>
      <div className={classes.namecont}>
        <h1>DAVIT GORGILADZE</h1>
        <h2>LAWYER</h2>
        <h3>N9568</h3>
      </div>
      <div className={classes.cont}>
        <div>
          Davit Gorgiladze is an active licensed lawyer with 7 years of
          experience in civil and administrative disputes. His distinctive side
          is representation in court and knowledge of judicial law. You may be
          wondering why? David familiarized himself with all the decisions
          issued by the Supreme Court of Georgia in the form of collections on
          civil and administrative cases. Taking this into account, he can make
          a preliminary conclusion with maximum accuracy, and on the other hand,
          the court regulations used by him are often the basis for satisfying
          the claim and setting the appropriate result for the interests of the
          client.
        </div>
        <hr />
        <div>
          <ul>
            <li>
              In 2022-2024, Davit was the lawyer of Batumi International
              Airport, namely TAV Georgia, where he ensured the preparation and
              consultation of various types of legal documents needed by the
              company on a daily basis.
            </li>
            <br />
            <li>
              In 2021, he worked as a lawyer for "Sami Oksana" LLC, which was
              engaged in the transportation of automobiles in Georgia.{" "}
            </li>
            <br />
            <li>
              {" "}
              In 2020-2021, he was a practicing lawyer at Temur Kavshbaya's law
              office, where he prepared legal documents for the office's
              clients.
            </li>
            <br />
            <li>
              {" "}
              In 2019, he was an intern at the Civil Affairs Chamber of the
              Tbilisi Court of Appeals, where he dealt with current civil cases
              and prepared drafts of judge's acts.{" "}
            </li>
            <br />
            <li>
              In 2019, he was an intern at the Ethics Commission of the Bar
              Association, where he discussed and prepared drafts of acceptable
              decisions of the relevant commission on current cases.
            </li>
            <br />
            <li>
              In 2018-2021, he was the director of "Di N Shop" LLC (the same as
              Universum), where he managed the business and arranged legal
              issues.
            </li>
            <br />
            <li>
              In 2017, he was an intern at Revaz Futkaradze's law office, where
              he learned about a number of cases and discussed them together
              with other members of the group, as well as drawing up various
              types of documents.
            </li>
          </ul>
        </div>
        <hr />
        <div>
          Davit is a Master of Private Law at Ivane Javakhishvili Tbilisi State
          University, 2019-2021. <br />
          David studied at the Caucasus University in 2015-2019, where he was
          awarded a bachelor's degree in law.
        </div>
      </div>
    </div>
  );
}
