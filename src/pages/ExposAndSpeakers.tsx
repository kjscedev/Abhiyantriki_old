import { useEffect, useState } from "react";
import ESBigScreen from "../components/ExpoAndSpeaker/ESBigScreen";
import ESSmallScreen from "../components/ExpoAndSpeaker/ESSmallScreen";

interface ExposAndSpeakersProps {}

const ExposAndSpeakers = ({}: ExposAndSpeakersProps) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };

  return <>{width > 992 ? <ESBigScreen /> : <ESSmallScreen />}</>;
};

export default ExposAndSpeakers;
