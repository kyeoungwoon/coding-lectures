import React from "react";
import "../styles/svg.css";

import PropTypes from "prop-types";

const Svg = ({ text }) => {
  const chars = text.split("");
  const svgWidth = chars.length * 50;

  return (
    <div className="text-box">
      <div className="text-wrap">
        <svg width={svgWidth} height={100} viewBox={`0 0 ${svgWidth} 100`}>
          {chars.map((char, index) => (
            <text
              key={index}
              x={index * 50 + 30}
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              fontSize="50"
            >
              {char}
            </text>
          ))}
        </svg>
      </div>
    </div>
  );
};

Svg.propTtypes = {
  text: PropTypes.string.isRequired,
};

export default Svg;
