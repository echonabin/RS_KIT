import React from "react";

const InitialLayout = () => {
  return (
    <div className="w-full h-full">
      <div className="flex space-x-4 flex-wrap">
        <div className="w-[390px] h-[673px]">
          <iframe
            src="https://google.com"
            className="w-full h-full rounded-xl"
            frameBorder="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default InitialLayout;
