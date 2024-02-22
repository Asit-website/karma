import React from "react";
import "./style.css";
import photo from "../../Assest/image 32.png";
import ican from "../../Assest/ican.png";
import lordshiva from "../../Assest/Bhagwan-Shiva-.png";

const Question1 = () => {
  return (
    <>
      <div className="parentlordshiva">
        <div className="lordshiva">
          <div className="lordshivaleft">
            <div className="sublord">
              <img src={photo} alt="" className="img" />
              <div className="lordDesc">
                <p className="paraIns"> Instructions: </p>
                <p className="paraChoose">
                  Choose an answer and hit 'next'. You will receive your score
                  and answers at the end.
                </p>
                <div className="numberquestion">
                  <div>
                    <img src={ican} alt="" className="imgquestion" />
                  </div>
                  <div>
                    <p className="paraquestion"> No. of Questions: 05 </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lordshivaright">
            {/* <img src={lordshiva} alt="alt" /> */}
            <div className="lordquestion">
              <p className="headingright">Question 1 of 5 </p>
              <div className="lordsubquestion">
                <p className="headingheading">
                  What does karma mean in Sanskrit?
                </p>
                <div className="lordquestionflex">
                  <div className="borderA">A</div>
                  <div>
                    <p> Action </p>
                  </div>
                </div>
                <div className="lordquestionflex">
                  <div className="borderA">B</div>
                  <div>
                    <p> Bird </p>
                  </div>
                </div>
                <div className="lordquestionflex">
                  <div className="borderA">C</div>
                  <div>
                    <p> Tree </p>
                  </div>
                </div>
                <div className="lordquestionflex">
                  <div className="borderA">D</div>
                  <div>
                    <p> Accident </p>
                  </div>
                </div>
                <div className="questionbutton">
                  <button> Next </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Question1;
