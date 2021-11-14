import React from "react";
import { eventData } from "../../../data/eventsData";
import ScrollSpy from "react-ui-scrollspy";
import EventCard from "../EventCard/EventCard";

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
      {eventData.map((element, i) => (
        <div
          id={element.linkHash}
          key={element.linkHash}
          style={
            i === 3 ? { paddingBottom: 200, padding: 50 } : { padding: 50 }
          }
        >
          <h1>
            <img src={element.eventNamePath} className="section-gifs"/>
          </h1>
          {element.events.map((element) => {
            return <EventCard event={element} />;
          })}
        </div>
      ))}
    </ScrollSpy>
  );
};

export default ESScrollSpy;
