import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import PlayVideo from './components/Playvideo/PlayVideo';
import {Route,Routes } from 'react-router-dom';
import Video from './pages/Home/Video/Video';
import Login from './components/login/login';

import {lazy,Suspense} from 'react'
import CreateAccount from './CreateAccount/CreateAccount.jsx';
 


function App() {
  const Login = lazy(()=>import("./components/login/login.jsx"))
  const[sidebar,setSidebar]= useState(true);
  const [filteredVideosAre,setFilteredVideosAre]= useState([])
  function filteringVideos(filtered) {
    setFilteredVideosAre(filtered);
  }
  return (
    <>
     <Navbar setSidebar={setSidebar} filterfunction = {filteringVideos}/>
     <Routes>
      <Route path='/' element={<Home sidebar={sidebar} filteredVideosAre={filteredVideosAre}/>}/>
      <Route path='/video/:categoryId/:videoId' element={<Video/>}/>
      <Route path='/login' element={  <Suspense fallback={<h2>Loading...</h2>}>
      <Login/>
       </Suspense>}/>
       <Route path='/useraccount' element={<CreateAccount/>}/>
     </Routes>
     
    </>
  )
}

export default App
