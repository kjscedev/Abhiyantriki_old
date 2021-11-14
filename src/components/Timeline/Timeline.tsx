import React, { useEffect, useState } from "react";
import "./Timeline.css";
import InfoSection from "./InfoSection";
import YearButton from "./YearButton";

interface TimelineProps {}

const Timeline = ({}: TimelineProps) => {
  const [caption, setCaption] = useState(
    "Abhiyantriki introduced as an individual, standalone festival of technical grandeur and pomp."
  );
  const [path, setPath] = useState("/assets/images/timeline/1998.png");
  const [year, setYear] = useState(2020);
  const [anim, setAnim] = useState<boolean | null>(false);

  const changeTo1998 = () => {
    setCaption(
      "Abhiyantriki introduced as an individual, standalone festival of technical grandeur and pomp."
    );
    setPath(process.env.PUBLIC_URL + "/assets/images/timeline/1998.png");
  };
  const changeTo2008 = () => {
    setCaption(
      "Funds collected this year were all donated for the rehabilitation of the flood struck Bihar and Abhiyantriki rose in popularity with extensive media coverage."
    );
    setPath(process.env.PUBLIC_URL + "/assets/images/timeline/2008.png");
  };
  const changeTo2009 = () => {
    setCaption(
      "KJSCE marks 25 years since its inauguration,  and the closing ceremony of Abhiyantriki was ornamented by the presence of late Dr. A.P.J. Abdul Kalam."
    );
    setPath(process.env.PUBLIC_URL + "/assets/images/timeline/2009.png");
  };
  const changeTo2014 = () => {
    setCaption(
      "The maiden year for Start-up and Auto Expo, Abhiyantriki this year also encompassed Rohit Suri, the Jagaur India CEO as one of the keynote speakers"
    );
    setPath(process.env.PUBLIC_URL + "/assets/images/timeline/2014.png");
  };
  const changeTo2016 = () => {
    setCaption(
      "Abhiyantriki extended by a day, now was a two-day long fest with its flagship event being a technical exhibition presided over by ISRO."
    );
    setPath(process.env.PUBLIC_URL + "/assets/images/timeline/2016.png");
  };
  const changeTo2017 = () => {
    setCaption(
      "Attending to the likes of DRDO, DAE and BARC, Abhiyantriki gamered a running footfall of over 15,000 for the first time in its history!"
    );
    setPath(process.env.PUBLIC_URL + "/assets/images/timeline/2017.png");
  };
  const changeTo2018 = () => {
    setCaption(
      "Abhiyantriki had the Indian Army exhibiting their artillery as the highlight, along with prominent personalities like Dr S. Christopher and Mr. Vilas Shinde gracing the occasion."
    );
    setPath(process.env.PUBLIC_URL + "/assets/images/timeline/2018.png");
  };
  const changeTo2019 = () => {
    setCaption(
      "This year witnessed the Indian Navy rolling out an array of Naval armaments at Abhiyantriki along with a riveting talk on the Big Bang by Dr. Bikash Chandra Sinha"
    );
    setPath(process.env.PUBLIC_URL + "/assets/images/timeline/2019.png");
  };
  const changeTo2020 = () => {
    setCaption(
      "Owing to the COVID-19 pandemic, Abhiyantriki was conducted through the virtual mode of interaction for the first time. The fest welcomed IAF as its Chief Guest."
    );
    setPath(process.env.PUBLIC_URL + "/assets/images/timeline/2020.png");
  };

  const years = [2020, 2019, 2018, 2017, 2016, 2014, 2009, 2008, 1998];

  // const [ticking, setTicking] = useState(true),
  //   [count, setCount] = useState(0);

  // useEffect(() => {
  //   const timer = setTimeout(
  //     () => ticking && setCount(count + 1) && onPressRight(),
  //     500
  //   );
  //   return () => clearTimeout(timer);
  // });

  const onPressLeft = () => {
    const max = years[0];
    const min = years[years.length - 1];

    if (year == max) {
      setYear(min);
    } else {
      setYear((prev) => {
        const next = years.indexOf(prev) - 1;
        return years[next];
      });
    }
    setAnim(false);
  };

  const onPressRight = () => {
    const max = years[0];
    const min = years[years.length - 1];

    if (year == min) {
      setYear(max);
    } else {
      setYear((prev) => {
        const next = years.indexOf(prev) + 1;
        return years[next];
      });
    }

    setAnim(false);
  };

  useEffect(() => {
    switch (year) {
      case 1998:
        changeTo1998();
        break;
      case 2008:
        changeTo2008();
        break;
      case 2009:
        changeTo2009();
        break;
      case 2014:
        changeTo2014();
        break;
      case 2016:
        changeTo2016();
        break;
      case 2017:
        changeTo2017();
        break;
      case 2018:
        changeTo2018();
        break;
      case 2019:
        changeTo2019();
        break;
      case 2020:
        changeTo2020();
        break;
      default:
        break;
    }
  }, [year]);

  useEffect(() => {
    setAnim(true);
  }, [year]);

  return (
    <div className="tl mb-5">
      <h1 className="text-center m-10 my-5 fw-bold">Timeline</h1>
      <div className="d-inline">
        <div className="d-flex justify-content-around align-items-center font-size p-5">
          <i className="arrows fas fa-chevron-left" onClick={onPressLeft}></i>
          <span
            style={{ fontSize: 30 }}
            className={anim ? "anim-loader displaying-year" : "displaying-year"}
          >
            {year}
          </span>
          <i className="arrows fas fa-chevron-right" onClick={onPressRight}></i>
        </div>

        <div className={"d-flex justify-content-center w-100"}>
          <InfoSection caption={caption} imgPath={path} />
        </div>
      </div>
    </div>
  );
};

export default Timeline;
