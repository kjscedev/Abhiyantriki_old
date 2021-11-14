import React from "react";
import "./YearCarousal.css";

interface Props {}

const YearCarousal = ({}: Props) => {
  const years = [2021, 2020, 2019, 2018];

  return (
    <div className="d-flex justify-content-around align-items-center font-size p-5">
      <i className="arrows fas fa-chevron-left"></i>
      <span className="displaying-year">{years[0]}</span>
      <i className="arrows fas fa-chevron-right"></i>
    </div>
  );
};

export default YearCarousal;
