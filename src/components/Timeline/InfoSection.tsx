import React, { useEffect, useState } from "react";
import "./InfoSection.css";

interface InfoSectionProps {
  caption: string;
  imgPath: string;
}

const InfoSection = ({ caption, imgPath }: InfoSectionProps) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };

  const useWidth = width > 760 ? 350 : 250;
  const useFontSize = width > 760 ? 3 : 5;

  return (
    <div className="container">
      <div className="row content">
        <div className="col-sm-6 col-md-6 order-2">
          <div className={`my-auto fs-${useFontSize}`}>
            <div className="text-center p-4">{caption}</div>
          </div>
        </div>
        <div className="col-sm-6 col-md-6 text-center order-1 p-4">
          <img alt={caption} src={imgPath} width={useWidth} />
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
