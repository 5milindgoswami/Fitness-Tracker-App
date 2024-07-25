import React, { useEffect, useState } from"react"
import { useDispatch } from "react-redux";
import "./signup.css"
import { UserSignIn, UserSignUp } from "../api/apiCall";
import { loginSuccess } from "../redux/reducers/userSlice";

export default function SignUp(){
	const dispatch = useDispatch();
    const [email, setEmail] =useState("");
	const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isSignIn, setIsSignIn] = useState(true);
	const [loading, setLoading] = useState(false);
	const [buttonDisabled, setButtonDisabled] = useState(false);
    const [message, setMessage] = useState("");


    const validateInputs = () => {
		if (!name || !email || !password) {
		  setMessage("Please fill in all fields");
		  return false;
		}
		if (password !== confirmPassword) {
            setMessage("Passwords do not match");
            return false;
        }
		return true;
	  };

	  const validatelogininput = () => {
		if (!email || !password) {
		  setMessage("Please fill in all fields");
		  return false;
		}
		return true;
	  };
	
	
	  const SignUpUser = async (e) => {
		e.preventDefault();
		setLoading(true);
		setButtonDisabled(true);
		setMessage("")
		if (validateInputs()) {
		  await UserSignUp({ name, email, password })
			.then((res) => {
			  dispatch(loginSuccess(res.data));
			  console.log("Account Created Success");
			  setLoading(false);
			  setButtonDisabled(false);
			})
			.catch((err) => {
			  setMessage(err.response.data.message);
			  setLoading(false);
			  setButtonDisabled(false);
			});
		}
	}


    const Login = async (e)=> {
		e.preventDefault();
		setLoading(true);
		setButtonDisabled(true);
		setMessage("");
		if (validatelogininput()) {
		  await UserSignIn({ email, password })
			.then((res) => {
			  dispatch(loginSuccess(res.data));
			  console.log(dispatch(loginSuccess(res.data)))
			  console.log("Login Success")
			  setLoading(false);
			  setButtonDisabled(false);
			})
			.catch((err) => {
				setMessage(err.response.data.message);
			  setLoading(false);
			  setButtonDisabled(false);
			});
		}
    }


    const toggle = () => {
        const container = document.getElementById('container');
        container.classList.toggle('sign-in');
        container.classList.toggle('sign-up');
      };
    
      useEffect(() => {
        setTimeout(() => {
          document.getElementById('container').classList.add('sign-in');
        }, 200);
      }, []);
    
      const toggleHandler = () => {
        setIsSignIn(!isSignIn);
        toggle();
      };

    return (

    <div id="container" className={`container ${isSignIn ? 'sign-in' : 'sign-up'}`}>
		{/* <!-- FORM SECTION --> */}
		<div className="row">
			{/* <!-- SIGN UP --> */}
			<div className="col align-items-center flex-col sign-up"  >
				<div className="form-wrapper align-items-center">
					<form className="form sign-up" onSubmit={SignUpUser}>
						<div className="input-group">
							<i className='bx bxs-user'></i>
							<input type="text" value={name} placeholder="FullName" onChange={(e) => setName(e.target.value)}/>
						</div>
						<div className="input-group">
							<i className='bx bx-mail-send'></i>
							<input type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e)=> setEmail(e.target.value)}/>
						</div>
						<div className="input-group">
							<i className='bx bxs-lock-alt'></i>
							<input type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e)=> setPassword(e.target.value)}/>
						</div>
						<div className="input-group">
							<i className='bx bxs-lock-alt'></i>
							<input type="password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}/>
						</div>
						<button type="submit"
						 disabled={buttonDisabled}>
							{loading ? 'Loading...' : 'Sign Up'}
						</button>
                        {message && <p className="error-message">{message}</p>}
						<p>
							<span>
								Already have an account?{" "} 
							</span>
							<b onClick={toggleHandler} className="pointer">
								Sign in here
							</b>
						</p>
					</form>
				</div>
			
			</div>
			{/* <!-- END SIGN UP --> */}
			{/* <!-- SIGN IN --> */}
			<div className="col align-items-center flex-col sign-in" >
				<div className="form-wrapper align-items-center">
					<form className="form sign-in" onSubmit={Login}>
						<div className="input-group">
							<i className='bx bxs-user'></i>
							<input type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e)=> setEmail(e.target.value)}/>
						</div>
						<div className="input-group">
							<i className='bx bxs-lock-alt'></i>
							<input type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e)=> setPassword(e.target.value)}/>
						</div>
						<button type="submit"
						 disabled={buttonDisabled}>
							{loading ? 'Loading...' : 'Sign In'}
						</button>
                        {message && <p className="error-message">{message}</p>}
						<p>
							<b>
								Forgot password?
							</b>
						</p>
						<p>
							<span>
								Don't have an account?{" "}
							</span>
							<b onClick={toggleHandler} className="pointer">
								Sign up here
							</b>
						</p>
					</form>
                    
				</div>
				<div className="form-wrapper">
		
				</div>
			</div>
			{/* <!-- END SIGN IN --> */}
		</div>
		{/* <!-- END FORM SECTION --> */}
		{/* <!-- CONTENT SECTION --> */}
		<div className="row content-row">
			{/* <!-- SIGN IN CONTENT --> */}
			<div className="col align-items-center flex-col">
				<div className="text sign-in">
					<h2>
						Welcome
					</h2>
					<p className="p-title"> FITNESS-TRACKER</p>
				</div>
				<div className="img sign-in">
		
				</div>
			</div>
			{/* <!-- END SIGN IN CONTENT --> */}
			{/* <!-- SIGN UP CONTENT --> */}
			<div className="col align-items-center flex-col">
				<div className="img sign-up">
				
				</div>
				<div className="text sign-up">
					<h2>
						Join 
					</h2>
					<p className="p-title"> FITNESS-TRACKER</p>
				</div>
			</div>
			{/* <!-- END SIGN UP CONTENT --> */}
		</div>
		{/* <!-- END CONTENT SECTION --> */}
	</div>
    
    )

	  }