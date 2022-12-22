import React from "react";
import "@pages/popup/Popup.css";

const Popup = () => {
  const openOptionHandler = () => {
    chrome.runtime.openOptionsPage();
  };
  const openWindowHandler = () => {
    chrome.windows.create();
  };
  return (
    <div className="bg-teal-200 flex flex-col items-center w-full h-screen py-3 px-3 shadow">
      <h1>Welcome to Rs kit.</h1>
      <img src="device_128" alt="" />
      <div>welcome aboard</div>
      <div className="text-blue-400" onClick={openWindowHandler}>
        open new window
      </div>
    </div>
  );
};

export default Popup;
