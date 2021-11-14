import React from "react";
import { exposAndSpeakersDataJson } from "../../../data/exposAndSpeakers";
import ScrollSpy from "react-ui-scrollspy";
import TextAndButton from "../../TextAndButton/TextAndButton";
import TextAndImage from "../../TextAndImage/TextAndImage";

export interface SectionNodeProps {
  parentScrollContainerRef?: React.MutableRefObject<HTMLDivElement | null>;
}

const ESScrollSpy = ({ parentScrollContainerRef }: SectionNodeProps) => {
  return (
    <ScrollSpy
      parentScrollContainerRef={parentScrollContainerRef}
      scrollThrottle={100}
      // offsetTop={35}
      useBoxMethod
    >
      {exposAndSpeakersDataJson.map((element, i) => (
        <div
          id={element.linkHash}
          key={element.linkHash}
          style={
            i === 3 ? { paddingBottom: 200, padding: 50 } : { padding: 50 }
          }
        >
          {/* <h1 className="mt-5 text-center" style={{ fontSize: "50px" }}>
            {element.heading}
          </h1> */}
          <img
            src={process.env.PUBLIC_URL + "/assets/gifs/" + element.gifName}
            alt={element.heading}
            style={{ width: "100%" }}
          />
          <TextAndButton
            paraText={element.paraText}
            buttonHref={element.buttonHref}
            buttonText={element.buttonText}
          />
          {element.cards.map((card) => (
            <TextAndImage
              noTextCenter
              key={card.heading}
              image={card.image}
              text={card.text}
              heading={card.heading}
              cardHref={card.cardHref}
            />
          ))}
        </div>
      ))}
    </ScrollSpy>
  );
};

export default ESScrollSpy;
