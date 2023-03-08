import React from "react";
import useDragger from "../../hooks/drag";

const Circle = () => {
  
  useDragger("circle");

  return <div id="circle" className="circle"></div>
};

export default Circle;