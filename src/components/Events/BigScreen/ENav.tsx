import React from "react";
import { eventData } from "../../../data/eventsData";
import "../ES.css";

interface Props {}

const ESNav = (props: Props) => {
  const onPress = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const target = window.document.getElementById(
      e.currentTarget.href.split("#")[1]
    );
    if (target) {
      var headerOffset = 20;
      var elementPosition = target.getBoundingClientRect().top;
      var offsetPosition = elementPosition - headerOffset;

      window.scrollBy({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
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
