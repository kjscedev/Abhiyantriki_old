import { useEffect, useState } from "react";
import About from "../components/About/About";
import ACarousel from "../components/Carousel/ACarousel";
import HomePage from "../components/HomePage/HomePage";
import Sidebar from "../components/Sidebar/Sidebar";
import TextAndButton from "../components/TextAndButton/TextAndButton";
import Timeline from "../components/Timeline/Timeline";
import { getWindowDimensions } from "../utils/getWindowDimensions";
import "./Home.css";

interface HomeProps {}

const Home = ({}: HomeProps) => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="main-home">
      <HomePage />
      <ACarousel />
      <About />
      <Timeline />
      <Sidebar />
      <div
        style={windowDimensions.width > 400 ? { padding: 50 } : { padding: 30 }}
      >
        <div className="d-flex justify-content-around align-items-center text-center mb-5 parvaah">
          <img
            src={process.env.PUBLIC_URL + "/assets/logos/Parvaah Logo.png"}
            alt=""
            className="parvaah logo"
          />
          <div className="vl"></div>
          <img
            src={
              process.env.PUBLIC_URL +
              "/assets/logos/Sustainable Reality logo.png"
            }
            alt=""
            className="parvaah logo"
          />
        </div>
        <TextAndButton
          paraText="Parvaah, the social wing of K.J Somaiya College of Engineering works
              towards the social causes of the society and improving the
              conditions of the less privileged. Team Parvaah, through its various
              initiatives, has been striving to spread maximum social awareness in
              the community."
          buttonText="Know More"
          buttonHref={process.env.PUBLIC_URL + "/parvaah"}
        />
      </div>
    </div>
  );
};

export default Home;
