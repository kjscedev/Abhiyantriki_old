import React from "react";
import { eventData } from "../../../data/eventsData";
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
      className="small-nav-div"
      ref={props.navContainerRef}
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        overflowX: "scroll",
      }}
    >
      {eventData.map((element) => (
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
            {element.eventName}
          </div>
        </a>
      ))}
    </div>
  );
};

export default ESNav;
