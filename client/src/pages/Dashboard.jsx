import React, { useEffect, useState } from "react";
import "./dashboard.css";
import CountsCard from "../components/cards/CountsCard";
import { counts } from "../utils/data";
import WeeklyStatCard from "../components/cards/WeeklyStatCard";
import CategoryChart from "../components/cards/CategoryChart";
import AddWorkout from "../components/AddWorkout";
import WorkoutCard from "../components/cards/WorkoutCard";
import { addWorkout, getDashboardDetails, getWorkouts } from "../api/apiCall.js";

const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [buttonLoading, setButtonLoading] = useState(false);
  const [todaysWorkouts, setTodaysWorkouts] = useState([]);
  const [workout, setWorkout] = useState(`#Legs
-Back Squat
-5 setsX15 reps
-30 kg
-10 min`);

  const dashboardData = async () => {
    setLoading(true);
    const token = localStorage.getItem("fittrack-app-token");
    await getDashboardDetails(token).then((res) => {
      setData(res.data);
      // console.log(res.data);
      setLoading(false);
    });
  };
  const getTodaysWorkout = async () => {
    setLoading(true);
    const token = localStorage.getItem("fittrack-app-token");
    await getWorkouts(token, "").then((res) => {
      setTodaysWorkouts(res?.data?.todaysWorkouts);
      // console.log(res.data);
      // console.log("Today's Workouts: ", res.data.todaysWorkouts);
      setLoading(false);
    });
  };

  const addNewWorkout = async () => {
    setButtonLoading(true);
    const token = localStorage.getItem("fittrack-app-token");
    await addWorkout(token, { workoutString: workout })
      .then((res) => {
        dashboardData();
        getTodaysWorkout();
        setButtonLoading(false);
      })
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    dashboardData();
    getTodaysWorkout();
  }, []);

  return (
    <div className="dashboardcontainer">
      <div className="dashboardWrapper">
        <div className="dashboardtitle">Dashbord</div>
        <div className="dashboardflexwrap">
          {counts.map((item) => (
            <CountsCard key={item.name} item={item} data={data} />
          ))}
        </div>
        <div className="dashboardflexwrap">
          <WeeklyStatCard data={data} />
          <CategoryChart data={data} />
          <AddWorkout workout={workout} setWorkout={setWorkout} addNewWorkout = {addNewWorkout} buttonLoading={buttonLoading} />
        </div>
        <div className="dashboardsection">
          <div className="dashboardtitle">Todays Workout</div>
          <div className="dashboardcardwrapper">
             {todaysWorkouts.length > 0 ? (
      todaysWorkouts.map((workout) => (
        <WorkoutCard key={workout._id} workout={workout} />
      ))
    ) : (
      <div>No workouts for today</div>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
