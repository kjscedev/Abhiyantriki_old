import React from "react";
import { eventData } from "../../../data/eventsData";
import "./EventCard.css";

interface EventCardProps {
  event: typeof eventData[0]["events"][0];
}

const EventCard = ({ event }: EventCardProps) => {
  return (
    <div className="d-flex justify-content-center align-items-center event-card">
      <div className="row w-85 d-flex justify-content-center align-items-center">
        <div className="col">
          <img src={event.eventImgPath} alt="" width="350" className="event-" />
        </div>
        <div className="col event-info">
          <div>
            <h1>{event.name}</h1>
          </div>
          <hr />
          <div>{event.text}</div>
          <hr />
          <div>
            <img
              src={process.env.PUBLIC_URL + "/assets/images/events/team.png"}
              width="20"
              className="event-img"
            />
            <span>{event.memberLimit}</span>
          </div>
          <hr />
          <div>
            <img
              src={process.env.PUBLIC_URL + "/assets/images/events/prize.png"}
              width="20"
              className="event-img"
            />
            {event.prize && <span>{event.prize}</span>}
          </div>
          <hr />
          <div>
            <img
              src={
                process.env.PUBLIC_URL +
                "/assets/images/events/registration.png"
              }
              width="20"
              className="event-img"
            />
            <span>{event.fees}</span>
          </div>
          <hr />
          {event.contactInfo.map((contact) => (
            <div>
              <img
                src={
                  process.env.PUBLIC_URL + "/assets/images/events/contact.png"
                }
                width="20"
                className="event-img"
              />
              <span>{contact}</span>
            </div>
          ))}
          <div className="d-flex justify-content-start align-items-center">
            <div className="text-center reg-btn m-1">
              <span className="btn">
                <a href="https://forms.gle/FweycRFNCkQLVGYt7" target="_blank">
                  Register
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
