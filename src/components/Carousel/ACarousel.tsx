import React, { useEffect, useRef, useState } from "react";
import "./ACarousel.css";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import { carouselData } from "../../data/carouselData";
// import AOS from "aos";
// import 'normalize.css/normalize.css';

interface ACarouselProps {}

const ACarousel = ({}: ACarouselProps) => {
  const [index, setIndex] = useState<number>(0);
  const [anim, setAnim] = useState<boolean | null>(false);

  const textRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLDivElement | null>(null);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    setAnim(true);
  }, [index]);

  // AOS.init();
  const useWidth = width > 750 ? 350 : 200;

  return (
    <div className="mt-5" style={width < 750 ? { paddingTop: "90px" } : {}}>
      <div className="d-sm-flex justify-content-around align-items-center slides">
        <div className="text-grid w-90">
          <a href={carouselData[index].href}>
            <div
              ref={textRef}
              // className={anim ? "anim-loader" : ""}
              id="grid-title"
            >
              {carouselData[index].title}
            </div>
          </a>
          <div
            ref={textRef}
            // className={anim ? "anim-loader" : ""}
            id="grid-text"
          >
            {carouselData[index].text}
          </div>
        </div>
        <div
          ref={imgRef}
          className={anim ? "anim-loader image-ka-baap" : "image-ka-baap"}
        >
          <a href={carouselData[index].href}>
            <img
              src={carouselData[index].imgPath}
              // width={useWidth}
              height={width > 768 ? 300: 200}
            />
          </a>
        </div>
      </div>
      <div className="d-md-flex justify-content-end align-items-center navigate">
        <i
          className="arrows fas fa-chevron-left m-5"
          onClick={() => {
            // get min and max of all keys in our dict
            const keys = Object.keys(carouselData);
            const max = parseInt(keys[keys.length - 1]);
            const min = parseInt(keys[0]);

            if (index == min) {
              setIndex(max);
            } else {
              setIndex((prev) => prev - 1);
            }
            setAnim(false);
          }}
        ></i>

        <i
          className="arrows fas fa-chevron-right m-5"
          onClick={() => {
            // get min and max of all keys in our dict
            const keys = Object.keys(carouselData);
            const max = parseInt(keys[keys.length - 1]);
            const min = parseInt(keys[0]);

            if (index == max) {
              setIndex(min);
            } else {
              setIndex((prev) => prev + 1);
            }
            setAnim(false);
          }}
        ></i>
      </div>
    </div>
  );
};

export default ACarousel;
