import React, { useEffect, useState, useCallback } from 'react'
import "./workouts.css"
import WorkoutCard  from "../components/cards/WorkoutCard"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { DateCalendar } from "@mui/x-date-pickers"
import { getWorkouts }  from "../api/apiCall.js"
import { CircularProgress } from '@mui/material'

 const Workouts = () => {
  const [todaysWorkouts, setTodaysWorkouts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState("");

  const getTodaysWorkout = useCallback(async () => {
    setLoading(true);
    const token = localStorage.getItem("fittrack-app-token");
    await getWorkouts(token, date ? `?date=${date}` : "").then((res) => {
      setTodaysWorkouts(res?.data?.todaysWorkouts);
      console.log(res.data);
      setLoading(false);
    });
  },[date]);

  useEffect(() => {
    getTodaysWorkout();
  }, [date,getTodaysWorkout]);
  
  return (
    <div className='Workcontainer'>
      <div className='Workwrapper'>
        <div className='Workleft'>
          <div className='Worktitle'>Select Date</div>
          <LocalizationProvider dateAdapter ={AdapterDayjs}>
            <DateCalendar 
            onChange={(e) => setDate(`${e.$M + 1}/${e.$D}/${e.$y}`)} />
          </LocalizationProvider>
        </div>
        <div className='Workright'>
          <div className='Worksection'>
            <div className='Worksectitle'>Todays Workout</div>
            {loading ? (
              <CircularProgress />
            ) : (
              <div className='Workcardwrapper'>
                <WorkoutCard/>
                {todaysWorkouts.map((workout) => (
                  <WorkoutCard key={workout._id} workout={workout} />
                ))}
              </div>
              )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Workouts