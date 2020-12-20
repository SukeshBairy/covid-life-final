import React from "react";
import "./About.css";
import { selectDarkmode, setDarkMode } from "./features/userSlice";
import { useDispatch, useSelector } from "react-redux";

function About() {
  const darkmode = useSelector(selectDarkmode);

  return (
    <div className="about">
      <h1 className={darkmode === true ? "darkAbout__header" : "about__header"}>
        Covid-19 Pandemic
      </h1>
      <div className="aboutContainer">
        <div className="aboutContainer__left">
          <p className="aboutInfo">
            Coronavirus disease (COVID-19) is an infectious disease caused by a
            newly discovered coronavirus. <br />
            <br />
            Most people infected with the COVID-19 virus will experience mild to
            moderate respiratory illness and recover without requiring special
            treatment. Older people, and those with underlying medical problems
            like cardiovascular disease, diabetes, chronic respiratory disease,
            and cancer are more likely to develop serious illness.
            <br />
            <br />
            The best way to prevent and slow down transmission is to be well
            informed about the COVID-19 virus, the disease it causes and how it
            spreads. Protect yourself and others from infection by washing your
            hands or using an alcohol based rub frequently and not touching your
            face.
            <br />
            <br />
            The COVID-19 virus spreads primarily through droplets of saliva or
            discharge from the nose when an infected person coughs or sneezes,
            so it’s important that you also practice respiratory etiquette (for
            example, by coughing into a flexed elbow).{" "}
          </p>
        </div>
        <div className="aboutContainer__right">
          <img className="aboutPic" src="/images/Covid-19.jpeg" alt="" />{" "}
        </div>
      </div>
      <h2
        className={
          darkmode === true
            ? "darkAbout__Prevention aboutMeasure"
            : "about__Prevention aboutMeasure"
        }
      >
        Measures to prevent Covid-19
      </h2>
      <div className="containerPrevent">
        <div className="containerPrevent__left">
          <p>
            Protect yourself and others around you by knowing the facts and
            taking appropriate precautions. Follow advice provided by your local
            health authority. To prevent the spread of COVID-19:
            <br />
            <br />
            <ul>
              <li>
                Clean your hands often. Use soap and water, or an alcohol-based
                hand rub.
              </li>
              <br />
              <li>
                Maintain a safe distance from anyone who is coughing or
                sneezing.
              </li>
              <br />

              <li>Wear a mask when physical distancing is not possible.</li>
              <br />
              <li>Don’t touch your eyes, nose or mouth.</li>

              <br />
              <li>
                {" "}
                Cover your nose and mouth with your bent elbow or a tissue when
                you cough or sneeze.{" "}
              </li>
              <br />
              <li>Stay home if you feel unwell.</li>
              <br />
              <li>
                If you have a fever, cough and difficulty breathing, seek
                medical attention.
              </li>
              <br />
            </ul>
            Calling in advance allows your healthcare provider to quickly direct
            you to the right health facility. This protects you, and prevents
            the spread of viruses and other infections. Masks Masks can help
            prevent the spread of the virus from the person wearing the mask to
            others. Masks alone do not protect against COVID-19, and should be
            combined with physical distancing and hand hygiene. Follow the
            advice provided by your local health authority.
          </p>
        </div>
        <div className="containerPrevent__right">
          <img
            className="imagePrevention"
            src="/images/Prevention.jpeg"
            alt=""
          />{" "}
        </div>
      </div>
    </div>
  );
}

export default About;
