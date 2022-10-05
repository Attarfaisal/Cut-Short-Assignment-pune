import React from 'react'
import { NavLink } from "react-router-dom";
import logo3 from "../Images/3.png";
import './Pages.css'


const ThirdPage = () => {
    return(
<div className="card">
        <div>
        <NavLink to='/'> <img src={logo3} alt='logo'></img></NavLink>
      <h2>How are you planning to use Eden?</h2>
      <p>We'll streamline your setup experience accordingly</p>
      </div>
       <div className="thirdpage-div">
       
        <card className='first-card'>
        <h3>For myself</h3>
        <p>Write better.Think more clearly.Stay organized</p>
        </card>
        <card className='second-card'>
            <h3>With my team</h3>
            <p>Wikis, docs, tasks & projects, all in one place.</p>
        </card>
        
      </div>
      <NavLink to='/fourthpage'><button type="submit" >Create Workspace</button></NavLink>
    </div>
  );
}

export default ThirdPage
