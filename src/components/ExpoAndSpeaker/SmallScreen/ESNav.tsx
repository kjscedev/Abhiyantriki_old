import React from "react";
import { exposAndSpeakersDataJson } from "../../../data/exposAndSpeakers";
import "../ES.css";

interface Props {
  navContainerRef?: React.MutableRefObject<HTMLDivElement | null>;
}

const ESNav = (props: Props) => {
  const onPress = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const target = window.document.getElementById(
      e.currentTarget.href.split("#")[1]
    );
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      ref={props.navContainerRef}
      style={{
        display: "flex",
        justifyContent: "center",
        overflowX: "scroll",
      }}
      className="small-nav-div pb-2"
    >
      {exposAndSpeakersDataJson.map((element) => (
        <a
          key={element.linkHash}
          onClick={(e) => onPress(e)}
          href={`#${element.linkHash}`}
        >
          <div
            style={{ textAlign: "center" }}
            data-to-scrollspy-id={element.linkHash}
            className="ss-item"
          >
            {element.linkName}
          </div>
        </a>
      ))}
    </div>
  );
};

export default ESNav;
