import React from "react";
import "./weeklystatcard.css";
import { BarChart } from "@mui/x-charts/BarChart";

const WeeklyStatCard = ({ data }) => {
  return (
    <div className="weeklycard">
      <div className="weeklytitle">Weekly calories burned</div>
      {data?.totalWeeksCaloriesBurnt && (
         <BarChart
         xAxis={[
           { scaleType: "band", data: data?.totalWeeksCaloriesBurnt?.weeks },
         ]}
         series={[{ data: data?.totalWeeksCaloriesBurnt?.caloriesBurned }]}
         height={300}
       />
      )}
    </div>
  );
};

export default WeeklyStatCard;
