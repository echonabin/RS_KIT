import React from "react";

const Wrapper = ({ children }) => {
  return (
    <div className="bg-lime-300 px-3 py-3 h-screen w-screen">{children}</div>
  );
};

export default Wrapper;
