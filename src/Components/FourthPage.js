import React from 'react'
import { NavLink } from "react-router-dom";
import logo4 from "../Images/4.jpg";
import './Pages.css'


const FourthPage = () => {
  return (
    <div className="card">
        <div>
      <NavLink to='/'><img src={logo4} alt='logo'></img></NavLink>
      <h2>Congratulation, Eren!</h2>
      <p>You have completed onboarding, you can start uding Eden!</p>
    <NavLink to="/"><button type="submit">Launch Eden</button></NavLink>
          
      </div>
      
    </div>
  )
}

export default FourthPage
