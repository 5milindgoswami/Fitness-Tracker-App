import React from "react";
import "./categorychart.css";
import { PieChart } from "@mui/x-charts/PieChart";

const CategoryChart = ({ data }) => {
  return (
    <div className="categorycard">
      <div className="categorytitle">Weekly calories burned</div>
      {data?.pieChartData && (
         <PieChart
         series={[{
            data: data?.pieChartData,
            innerRadius:30,
            paddingAngle: 5,
            cornerRadius: 5,
            outerRadius: 120,
         }]}
         height={300}
       />
      )}
    </div>
  );
};

export default CategoryChart