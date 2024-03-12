import React from "react";
import "./style.css";
import space from "../../Assest/space.png";
import fiftypercentage from "../../Assest/50%.png";
import { NavLink } from "react-router-dom";

const karmascore = () => {
  return (
    <>
      <div className="karmaScore">
        <div className="karmaSubscore">
          <div className="scorelogo">
            <div className="scorelogo-img">
              <img src={space} alt="" />
            </div>
            <div className="scorelogo-heading">
              <h1>karma score</h1>
            </div>
          </div>
          <div className="scoredes">
            <div className="subscoredes-para">
                <h1>
                  Prarabdha Karma Dosh
                </h1> 
               <p className="subecoredes_parageaph">
                 This refers to the karma from past lives that is currently
                active and <br /> influencing one's present life.
                </p> 
            
            </div>
            <div className="subscoredes-img">
              <div className="percentage">
                  <p>50%</p>
              </div>
              {/* <img src={fiftypercentage} alt="" /> */}
            </div>
          </div>
          <div className="horizontal hh">
            <hr className="ytyt" />
          </div>
          <div className="scorecontact">
            <button onClick={()=>{
              alert("please login to continue")
            }} className="scorecontact-button">
              <p>Contact Us for remedies</p>
            </button>
            {/* <div className="scorecontact-a">
              <NavLink to="/question"> Retake The Quiz </NavLink>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default karmascore;
