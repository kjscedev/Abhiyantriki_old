import React, { useEffect, useState } from "react";

interface Props {
  heading: string;
  text: string;
  image: string;
  noTextCenter?: boolean;
  cardHref?: string;
}

const TextAndImage = ({
  heading,
  text,
  image,
  cardHref,
  noTextCenter = false,
}: Props) => {
  const noImage = image.length < 2;
  const noText = text.length > 0;

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };

  return (
    <a href={cardHref}>
      {noText && (
        <div className="container p-3 text-white">
          {noImage && (
            <>
              <div
                className={
                  noTextCenter ? "fs-4 fw-bold" : "fs-4 fw-bold text-center"
                }
              >
                {heading}
              </div>
              <div
                className={noTextCenter ? "" : "text-center"}
                style={{
                  fontSize: 14,
                  fontFamily: "Roboto",
                }}
              >
                {text}
              </div>
            </>
          )}
          {!noImage && (
            <div className="row">
              <div className="col-sm-6 col-md-6">
                <div
                  style={{
                    marginTop: 30,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <img className="w-100" src={image} alt="Beach Clean-up" />
                </div>
              </div>
              <div className="col-sm-6 col-md-6 flex-column d-flex justify-content-center">
                <div
                  className={
                    noTextCenter ? "fs-4 fw-bold" : "fs-4 fw-bold text-center"
                  }
                >
                  {heading}
                </div>
                <div
                  className={noTextCenter ? "" : "text-center"}
                  style={{
                    fontSize: 14,
                    fontFamily: "Roboto",
                  }}
                >
                  {text}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
      {!noText && (
        <div
          className={width > 700 ? "w-50 mx-auto" : "w-100"}
          style={{
            marginTop: 30,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img className="w-100" src={image} alt="Beach Clean-up" />
        </div>
      )}
    </a>
  );
};

export default TextAndImage;
