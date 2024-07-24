import { BrowserRouter, Route, Routes,  Navigate  } from "react-router-dom";
import Authentication from "./pages/Authentication";
import { useState } from "react";
import { useSelector} from "react-redux"
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Workouts from "./pages/Workouts";
import SignUp from "./components/SignUp"

function App() {
  const {currentUser} = useSelector((state)=> state.user)
  return(
    <>
      <BrowserRouter>
        {currentUser ? (
          <div className="Containers">
            <Navbar currentUser = {currentUser}/>
            <Routes>
              <Route path="/" exact element = {<Dashboard/>}/>
              <Route path="/workouts" exact element = {<Workouts/>}/>
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </div>
        ) : (
          <div className="Containers">
               <Routes>
               <Route path="/signup" element={<SignUp />} />
              <Route path="/" element={<Authentication />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </div>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
