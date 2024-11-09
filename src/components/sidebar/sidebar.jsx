import React from "react";
import './sidebar.css';
import home from '../../assets/home.png'
import game_icon from '../../assets/game_icon.png'
import automobiles from '../../assets/automobiles.png'
import sports from '../../assets/sports.png'
import entertainment from '../../assets/entertainment.png'
import tech from '../../assets/tech.png'
import music from '../../assets/music.png'
import blogs from '../../assets/blogs.png'
import news from '../../assets/news.png'
import tom from '../../assets/tom.png'
import megan from '../../assets/megan.png'
import krishna from '../../assets/krishnaa.png'
import madhu from '../../assets/madhu.png'

function Sidebar({sidebar,category,setCategory}){
    return (
        // created a sidebar for all different category's
        <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
            <div className="links">
                <div className={`side-link ${category === 0 ? "active" : ""}`} onClick={() => setCategory(0)}>
                    <img src={home} alt="" /><p>Home</p>
                </div>
                <div className={`side-link ${category === 20 ? "active" : ""}`} onClick={() => setCategory(20)}>
                    <img src={game_icon} alt="" /><p>Gaming</p>
                </div>
                <div className={`side-link ${category === 2 ? "active" : ""}`} onClick={() => setCategory(2)}>
                    <img src={automobiles} alt="" /><p>Automobiles</p>
                </div>
                <div className={`side-link ${category === 17 ? "active" : ""}`} onClick={() => setCategory(17)}>
                    <img src={sports} /><p>Sports</p>
                </div>
                <div className={`side-link ${category === 24 ? "active" : ""}`} onClick={() => setCategory(24)}>
                    <img src={entertainment} alt="" /><p>Entertainment</p>
                </div>
                <div className={`side-link ${category === 28 ? "active" : ""}`} onClick={() => setCategory(28)}>
                    <img src={tech} alt="" /><p>Technology</p>
                </div>
                <div className={`side-link ${category === 10 ? "active" : ""}`} onClick={() => setCategory(10)}>
                    <img src={music} alt=" " /><p>Music</p>
                </div>
                <div className={`side-link ${category === 22 ? "active" : ""}`} onClick={() => setCategory(22)}>
                    <img src={blogs} alt=" " /><p>Blogs</p>
                </div>
                <div className={`side-link ${category === 25 ? "active" : ""}`} onClick={() => setCategory(25)}>
                    <img src={news} alt="" /><p>news</p>
                </div>
                <hr />
            </div>
            {/* channel subscribers */}
            <div className="subscrib-list">
                <h3>Subscribed</h3>
                <div className="side-link">
                    <img src={madhu} alt="" height="30px" width="30px" /><p>Health vlogs</p>
                </div>
                <div className="side-link">
                    <img src={tom} alt="" /><p>Healing soul</p>
                </div>
                <div className="side-link">
                    <img src={megan} alt="" /><p>5-minutes craft</p>
                </div>
                <div className="side-link">
                    <img src={krishna} alt="" height="30px" width="30px" /><p>Krishna's vlogs</p>
                </div>
            </div>
        </div>
    )
}
export default Sidebar;