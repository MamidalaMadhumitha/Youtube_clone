import "./createAccount.css";
import madhu from "../assets/madhu.png"
import profile_icon from "../assets/user_profile.jpg"
import { Link } from "react-router-dom";
import { useState } from "react";


// creating  a function  for creating  a channel
function CreateAccount() {
  const [name, setName] = useState("");
  const [handle, setHandle] = useState("");
  const handleAccount = () => {
    console.log(name, handle);
  }

  return (
    <>
      <Link to="/" ><h3 className="backtohome" >Back to Home</h3></Link>
      <section className="profile-section" >
        <form className="create-profile-box">
          {/*  channel creation page for the user */}
          <h3 >How you'll appear</h3>
          <div className="image-div" >
            <img src={profile_icon} alt="profile_image" width="150px" height="150px" />
            <label type="file" >Select Image</label>
          </div>
          {/* inputs for the user data */}
          <div className="inputs" >
            <input type="text" name="name" id="" placeholder="Name" onChange={(e) => { setName(e.target.value) }} />
            <input type="text" name="handle" id="" placeholder="Handle" onChange={(e) => { setHandle(e.target.value) }} />
          </div>
          {/* submit buttons */}
          <div className="submit-data" >
            <Link to="/" ><p className="cancel" >Cancel</p></Link>
            <Link to="/useraccount" ><button onClick={handleAccount} type="button">Create Account</button></Link>
          </div>
        </form>
      </section>
    </>
  );
}
export default CreateAccount;