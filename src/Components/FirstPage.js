import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../Images/home.png";
import './Pages.css'

const FirstPage = () => {
  return (
    <div className="card">
        <div>
      <NavLink to='/'><img src={logo} alt='logo'></img></NavLink>
         
      <h2>Welcome! First things first...</h2>
      <p>You can always change them later.</p>
      </div>
       <div>
        <ol className="order-list">
          <li className="label-list">
            <label>Full Name</label>
          </li>
          <li className="input-list">
            <input type="text" placeholder="Steve Jobs"></input>
          </li>
          <li className="label-list">
            <label>Display Name</label>
          </li>
          <li className="input-list">
            <input type="text" placeholder="Steve "></input>
          </li>
          <li className="input-list">
           <NavLink to='/create'> <button type="submit" >Create Workspace</button></NavLink>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default FirstPage;
