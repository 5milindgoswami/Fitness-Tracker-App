import React from "react";
import "./workoutcard.css";
import { FitnessCenterRounded, TimelapseRounded } from "@mui/icons-material";
const WorkoutCard = ({ workout }) => {
  return (
    <div className="cardworkout">
      <div className="categoryworkout">#{workout?.category}</div>
      <div className="nameworkout">{workout?.workoutName}</div>
      <div className="setsworkout"> Count: {workout?.sets} sets X {workout?.reps} reps</div>
      <div className="flexworkout">
        <div className="detailsworkout">
          <FitnessCenterRounded sx={{ fontSize: "20px" }} />
          {workout?.weight} kg
        </div>
        <div className="detailsworkout">
          <TimelapseRounded sx={{ fontSize: "20px" }} />
          {workout?.duration} min
        </div>
      </div>
    </div>
  );
};

export default WorkoutCard;
