import React from "react";
import { useNavigate } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";

function BackButton() {
  const navigate = useNavigate();
  return (
    <div
      className="bg-white w-9 h-9 rounded-full p-2 flex items-center justify-center shadow-lg cursor-pointer"
      onClick={() => navigate(-1)}
    >
      <IoArrowBackOutline />
    </div>
  );
}

export default BackButton;
