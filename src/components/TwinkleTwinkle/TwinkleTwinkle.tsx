import React, { CSSProperties } from "react";
import Particles from "react-tsparticles";
import { COLORS } from "../../constants/constants";

interface Props {
  title: string;
  containerStyles?: CSSProperties;
  titleStyles?: CSSProperties;
  height?: string;
  width?: string;
  center?: boolean;
  noFontSize?: boolean;
}

const TwinkleTwinkle = ({
  title,
  containerStyles = {},
  titleStyles = {},
  height = "120px",
  width = "350px",
  center = true,
  noFontSize = false,
}: Props) => {
  const particlesInit = () => {};
  const particlesLoaded = () => {};

  if (center) {
    containerStyles = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      ...containerStyles,
    };
  }

  const fontSize = noFontSize ? {} : { fontSize: 50 };

  return (
    <div style={containerStyles}>
      <Particles
        canvasClassName="particles"
        height={height}
        width={width}
        id="tsparticles"
        url={`${process.env.PUBLIC_URL}/particles.json`}
        init={particlesInit}
        loaded={particlesLoaded}
      ></Particles>
      <h1
        style={{
          margin: 20,
          fontFamily: "Roboto",
          color: COLORS.YELLOW,
          ...fontSize,
          ...titleStyles,
        }}
      >
        {title}
      </h1>
    </div>
  );
};

export default TwinkleTwinkle;
