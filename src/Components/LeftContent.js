import React from "react";

const LeftContent = ({ isSubmitted }) => {
  return (
    <div className="form-content-left">
      <img
        src={!isSubmitted ? "img/img-2.svg" : "img/img-4.svg"}
        className="form-img"
      />
    </div>
  );
};

export default LeftContent;
