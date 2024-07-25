import { BrowserRouter, Route, Routes,  Navigate  } from "react-router-dom";
import Authentication from "./pages/Authentication";
import { useSelector} from "react-redux"
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Workouts from "./pages/Workouts";
import SignUp from "./components/SignUp"

// add footer name built by milind and also contact us
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
