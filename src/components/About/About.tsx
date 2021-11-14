import React from "react";
import { COLORS } from "../../constants/constants";
import "./About.css";

interface AboutProps {}

const About = ({}: AboutProps) => {
  return (
    <div className="my-5">
      <div className="container about-grid">
        <div className="d-md-flex justify-content-between align-items-center about-item-1">
          <img
            src={process.env.PUBLIC_URL + "/assets/logos/kjsce.png"}
            alt=""
            className="kj-img kjsce m-5"
            width="400"
          />
          <div className="about-kjsce">
            <h1 className="titles kjsce" style={{ color: COLORS.YELLOW }}>
              KJSCE
            </h1>
            <p className="m-3">
              K.J. Somaiya College of Engineering is a nationally reputed
              engineering college under the Somaiya Vidyavihar University (SVU).
              The SVU campus constitutes 34 individual institutes spread across
              a lush land area of 65-acres. KJSCE is accredited grade 'A' by the
              NAAC (National Assessment and Accreditation Council) since 2017.
            </p>
          </div>
        </div>
        <h1
          className="text-center about-item-2"
          style={{ color: "aliceblue", fontWeight: "bolder" }}
        >
          ABOUT
        </h1>
        <div
          className="
          d-sm-flex
          justify-content-between
          align-items-center
          flex-row-reverse
          about-item-3
        "
        >
          <div>
            <img
              src={
                process.env.PUBLIC_URL + "/assets/logos/abhiyantriki_logo.png"
              }
              alt=""
              className="kj-img abhiyantriki mb-5 mt-5"
              width="200"
            />
          </div>
          <div className="about-abhiyantriki">
            <h1
              className="titles abhiyantriki"
              style={{ color: COLORS.YELLOW }}
            >
              ABHIYANTRIKI
            </h1>
            <p className="m-3">
              Abhiyantriki, meaning 'Engineering' in Sanskrit, is the annual
              technical festival of K.J.Somaiya College of Engineering (KJSCE).
              Over 35 events are organized, ranging from workshops to
              exhibitions. The fest also hosts audience engaging events such as
              the Internship Expo, Tech Expo, Auto expo, Speaker sessions and
              Panel sessions. Over the years, Abhiyantriki has established
              itself as one of the premier technical festivals in Mumbai.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
