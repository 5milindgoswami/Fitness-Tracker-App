import React from "react";
import "./addworkout.css";
import TextInput from "./TextInput";
import Button from "./Button";

const AddWorkout = ({workout, setWorkout, addNewWorkout, buttonLoading}) => {

  return (
    <div className="workoutcard">
      <div className="workouttitle">Add New Workout</div>
      <TextInput
        textArea
        rows={10}
        value={workout}
        placeholder={`Enter in this format:

        #Category
        -Workout Name
        -Sets
        -Reps
        -Weight
        -Duration`}
        handelChange={(e) => setWorkout(e.target.value)}
      />
      <Button text="Add Workout" onClick={() => addNewWorkout()} isLoading={buttonLoading} isDisabled={buttonLoading}/>
    </div>
  );
};

export default AddWorkout;
