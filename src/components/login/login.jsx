import { useState } from 'react';
import './login.css'
import { Link } from 'react-router-dom';


function Login(){
  const [isSignup,setIsSignup] = useState(true);
  // state management to trigger the input value of following fields
  const [email, setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [username,setUsername] = useState("");

  
  // To handle the user registration
  function handleRegister() {
      
      const response = fetch("http://localhost:3200/register",{
        method:"POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username:username,
          email:email,
          password:password
        })
      })
      const result = response.then(data => data.json())
      result.then(data => {console.log(data)
      })
  }
  // to handle user login details using token verification
  function handleLogin() {
   
    const response = fetch("http://localhost:3200/login",{
       method:"POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email:email,
        password:password
      })
    })
    const result = response.then(res => res.json())
    result.then(data => {console.log(data)
      
      // storing the user detaqils in local storage
      localStorage.setItem("accessToken",data.accessToken)
    })
}
  return (
    <>
      {/* entire registration and login form which is displaying according to the state updation */}
      <Link to="/" ><h3 className="backtohome" >Back to Home</h3></Link>
      <section className="signin-section" >
        <div className="signin-form"  >

          <form className="form" >
            <p className="form-title">Sign in to your account</p>
            {!isSignup &&
              <div className="input-container">
                <input type="text" value={username} name="username" onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Enter Fullname" />
                <span></span>
              </div>
            }
            <div className="input-container">
              <input type="email" value={email} name="Email" onChange={(e) => setEmail(e.target.value)} className="input" placeholder="Enter email" />
              <span></span>
            </div>
            <div className="input-container">
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" name="password" placeholder="Enter password" />
            </div>
            <div className="checkbox">
              <label className="checkbox">Remember Me <input type="checkbox" name="" id="" /></label>
            </div>
            <Link to="/" ><button type="button" className="submit" onClick={!isSignup ? handleRegister : handleLogin} >
              {!isSignup ? "Register" : "Login to your account"}
            </button></Link>
            <p className="signup-link">
              Not registered ?
              <Link to="" className="create" onClick={() => setIsSignup(false)} >Create account</Link>
            </p>
          </form>

        </div>
      </section>
    </>
  );
}
  export default Login;
  