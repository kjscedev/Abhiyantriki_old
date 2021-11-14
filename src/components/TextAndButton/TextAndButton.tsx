import React from "react";
import SpaceButton from "../Buttons/SpaceButton";
import Center from "../Center/Center";

interface TextAndButtonProps {
  paraText: string;
  buttonText: string;
  buttonHref: string;
  fontSize?: 1 | 2 | 3 | 4 | 5 | 6;
}

const TextAndButton = ({
  paraText,
  buttonText,
  buttonHref,
  fontSize = 4,
}: TextAndButtonProps) => {
  return (
    <Center>
      <p className={"responsive-para text-center" + ` fs-${fontSize}`}>
        {paraText}
      </p>
      <div className="mt-4 mb-5">
        <SpaceButton href={buttonHref} text={buttonText} />
      </div>
    </Center>
  );
};

export default TextAndButton;
