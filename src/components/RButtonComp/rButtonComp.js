import { useNavigate } from "react-router-dom";
import React from "react";

export const ReusableButton = (props) => {
  const navigate = useNavigate();

  function redirectToPath(path) {
    navigate(path);
  }
  
  return (
    <button 
      className="text-yellow-300 hover:text-[#181818] bg-[#181818] hover:bg-transparent shadow px-8 py-2 font-sans text-xl tracking-wider mt-8 flex justify-end border-2 border-[#181818] transition-all duration-500 ease-in-out hover:border-2 hover:border-yellow-300"
      onClick={() => redirectToPath(props.path)}>
      {props.buttonText}
    </button>
  );
}