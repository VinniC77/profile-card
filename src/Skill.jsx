/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import React from "react";
import ReactDOM from "react-dom/client";

function Skill({ skill, level, color }) {
  // if (level === "advanced") {
  //   level = "💪";
  // } else if (level === "intermediate") {
  //   level = "👍";
  // } else {
  //   level = "👨‍🦰";
  // }

  // We could replace the IF/ELSE by the && operator when we hava more than 2 options

  return (
    <div className="skill" style={{ backgroundColor: color, color: "#222" }}>
      <span>{skill}</span>
      <span>
        {level === "advanced" && "💪"}
        {level === "intermediate" && "👍"}
        {level === "beginner" && "👨‍🦰"}
      </span>
    </div>
  );
}

export default Skill;
