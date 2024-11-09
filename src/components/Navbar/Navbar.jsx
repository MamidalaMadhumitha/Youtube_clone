import React from "react";
import { useState } from "react";
import './Navbar.css';
import menu_icon from '../../assets/menu.png';
import logo from '../../assets/logo.png';
import search_icon from '../../assets/search.png';
import upload_icon from '../../assets/upload.png';
import more_icon from '../../assets/more.png';
import madhu from '../../assets/madhu.png';
import notification_icon from '../../assets/notification.png';
import sign_icon from '../../assets/sign.png';
import { Link } from "react-router-dom";



function Navbar({ setSidebar }) {

  const [visible, setVisible] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [isLogin, setIsloggedIn] = useState(false);

  const openModal = () => {
    setVisible(false);
  };

  const closeModal = () => {
    setVisible(false);
  };

  const logout = () => {
    sessionStorage.removeItem("access token");
    setIsloggedIn(false);
  }

  // function to target the input of updated text
  function updateSearch(e) {
    setSearchText(e.target.value);
    filteredVideos(e.target.value);
  }
  //function for search filter for coverting into lowercase to uppercase
  function filteredVideos(searchText) {
    const filtered = search.filter((video) =>
      video.title.toLowerCase().includes(searchText.toLowerCase())
    );
    props.filterFunction(filtered);
  }
  return (
    <>
      {/* creating navbar */}
      <nav className="flex-div">
        <div className="side-div flex-div">
          <img className='menu-icon' alt="" onClick={() => setSidebar(prev => prev === false ? true : false)} src={menu_icon} />
          <Link to='/'> <img className="logo" src={logo} height="50px" alt="" /></Link>

        </div>
        {/* Created a middle navbar for search function  */}
        <div className="nav-middle flex-div">
          <div className="search-box flex-div" >
            <input type="text" placeholder="search"
              onChange={updateSearch} />
            <img src={search_icon} alt="" onClick={() => filteredVideos(searchText)} />
          </div>
        </div>
        <div className="nav-right flex-div">
          <img src={upload_icon} alt="" className="upload_icon" />
          <img src={more_icon} alt="" />
          <img src={notification_icon} alt="" />
          {/* Created a link for login for routing */}
          <Link to="/login"><img src={sign_icon} />
            {<li >

              {isLogin ? (
                <button
                  onClick={logout}>
                  logout
                </button>
              ) : (
                <div className="login"
                  onClick={openModal} >
                </div>
              )}

            </li>
            }
          </Link>
          {/* created a account for creating a channel */}
          <Link to='/useraccount'><img src={madhu} alt="" className="user-icon" /></Link>

        </div>
      </nav>
    </>
  )
}

export default Navbar;

