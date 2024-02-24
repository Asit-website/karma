import React from "react";
import "./style.css";
import space from "../../Assest/space.png";
import fiftypercentage from "../../Assest/50%.png";

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
          {/* <div className="parentscore">
            <div className="scoredes">
              <div className="subscoredes-para">
                <h1>Prarabdha Karma Dosh</h1>
                <p>
                  This refers to the karma from past lives that is currently
                  active and influencing one's present life.
                </p>
              </div>
              <div className="subscoredes-img">
                <img src={fiftypercentage} alt="" />
              </div>
            </div>
            <div className="horizontal">
              <hr />
            </div>
          </div> */}
          <div className="scoredes">
            <div className="subscoredes-para">
                <h1>
                  Prarabdha Karma Dosh
                </h1> 
               <p>
                 This refers to the karma from past lives that is currently
                active and influencing one's present life.
                </p> 
            
            </div>
            <div className="subscoredes-img">
              <img src={fiftypercentage} alt="" />
            </div>
          </div>
          <div className="horizontal">
            <hr />
          </div>
          <div className="scorecontact">
            <button className="scorecontact-button">
              <p>Contact Us for remedies</p>
            </button>
            <div className="scorecontact-a">
              <a href=""> Retake The Quiz </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default karmascore;
