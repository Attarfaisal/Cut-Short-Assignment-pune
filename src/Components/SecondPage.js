import React from "react";
import { NavLink } from "react-router-dom";
import logo2 from "../Images/2.png";
import "./Pages.css";

const SecondPage = () => {
  return (
    <div className="card">
      <div>
        <NavLink to="/">
          {" "}
          <img src={logo2} alt="logo"></img>
        </NavLink>
        <h2>Let's set up a home for all your work</h2>
        <p>You can always create another workspace later.</p>
      </div>
      <div className="secondPage-div">
        <ol className="order-list">
          <li className="label-list">
            <label>Workspace Name</label>
          </li>
          <li className="input-list">
            <input type="text" placeholder="Eden" className="first-input"></input>
          </li>
          <li className="label-list">
            <label>
              Workspace URL <span>(optional)</span>
            </label>
          </li>
          <div className="second-div">
        
              <span className="example-para">www.eden.com/</span>
              <input type="text" placeholder="Example" className="input-field"></input>
        
          </div>
          <li className="input-list">
            <NavLink to="/thirdpage">
              <button type="submit">Create Workspace</button>
            </NavLink>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default SecondPage;
