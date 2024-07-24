import React from "react";
import "./countcards.css"
const CountsCard = ({ item, data }) => {
  return (
    <div className="Countscard">
      <div className="Countsleft">
        <div className="Countstitle">{item.name}</div>
        <div className="Countsvalue">{data && data[item.key].toFixed(2)}<div className="Countsunit">{item.unit}</div><span className="Countsspan">(+10%)</span></div>
        <div className="Countsdesc">{item.desc}</div>
      </div>
      <div className="Countsicon" style={{ backgroundColor: item.lightColor, color: item.color }}>{item.icon}</div>
    </div>
  );
};

export default CountsCard;
