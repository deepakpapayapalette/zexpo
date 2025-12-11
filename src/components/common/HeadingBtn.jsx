import React from "react";
import "../../assets/styles/heading.css";

const HeadingBtn = ({ text, styleprops }) => {
  return (
    <div className="relative inline-block group">
      <button className="custom-btn px-10 py-3 font-semibold text-black text-xl md:text-2xl uppercase" style={styleprops}>
        {text || null}
      </button>
      <span className="corner top-left"></span>
      <span className="corner top-right"></span>
      <span className="corner bottom-left"></span>
      <span className="corner bottom-right"></span>
    </div>
  );
};

export default HeadingBtn;
