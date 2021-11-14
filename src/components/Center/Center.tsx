import React from "react";

interface CenterProps {
  children: React.ReactNode;
}

const Center = ({ children }: CenterProps) => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      {children}
    </div>
  );
};

export default Center;
