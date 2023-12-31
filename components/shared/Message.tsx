"use client";

import { useState } from "react";

const Message = ({warningMessage,btnLabel}:{warningMessage:string,btnLabel:string}) => {
  const [accepted, setAccepted] = useState(JSON.parse(localStorage.getItem("accepted") as string));

  const handleClick = () =>{
    setAccepted(true);
    localStorage.setItem("accepted","true")
  }

  if(accepted) return
  return (
    <div className="w-screen h-screen fixed top-0 right-0 bg-sky-100/20 backdrop-blur-[2px] flex items-center justify-center">
      <div className="bg-sky-500 rounded-xl w-[700px] h-60 p-5 max-w-[95vw] flex flex-col justify-between">
        <p className="text-lg">{warningMessage}</p>
        <button className="py-2.5 px-5 rounded-full bg-green-500" onClick={handleClick}>
          {btnLabel}
        </button>
      </div>
    </div>
  );
};

export default Message;
