import React from "react";
import "./YearButton.css";

interface YearButtonProps {
  year: string;
}

const YearButton = ({ year }: YearButtonProps) => {
  return <div className="year-btn"><span className="year-txt">{year}</span></div>;
};

export default YearButton;
