import React from "react";
import Particles from "react-tsparticles";
import TwinkleTwinkle from "../../TwinkleTwinkle/TwinkleTwinkle";

interface Props {}

const Header = (props: Props) => {
  return (
    <div className="position-relative">
      <TwinkleTwinkle title="Events" noFontSize />
    </div>
  );
};

export default Header;
