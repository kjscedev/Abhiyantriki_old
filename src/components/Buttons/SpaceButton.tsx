import React from "react";
import "./SpaceButton.css";

interface SpaceButtonProps {
  text: string;
  href: string;
  onPress?: () => void;
  noPlus?: boolean;
}

const SpaceButton = ({ text, href, onPress, noPlus }: SpaceButtonProps) => {
  return (
    <div onClick={onPress} className="mt-4 mb-5" style={{ display: "flex" }}>
      <a className="holo-btn-fed" href={href}>
        <span className={noPlus ? "mx-4" : "cta-e"}>{text}</span>
        <span className="skew top"></span>
        <span className="skew bottom"></span>
      </a>
    </div>
  );
};

export default SpaceButton;
