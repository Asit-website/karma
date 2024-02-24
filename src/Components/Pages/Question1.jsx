import React, { useState } from "react";
import "./style.css";
import photo from "../../Assest/image 32.png";
import ican from "../../Assest/ican.png";

const Question1 = () => {
  const [count, setCount] = useState(1);
  const [currentTab, setCurrentTab] = useState(1);

  const increaseCount = () => {
    // setCount(count + 1);
    // setCurrentTab(currentTab + 1);
    if (currentTab < 3) {
      setCount(count + 1);
      setCurrentTab(currentTab + 1);
    }
  };

  return (
    <>
      <div className="parentlordshiva">
        {currentTab === 1 && (
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
                <p className="headingright">Question {count} of 5 </p>
                <div className="lordsubquestion">
                  <p className="headingheading">
                    What does karma mean in Sanskrit?
                  </p>
                  <div className="lordquestionflex">
                    <div className="borderA"> 
                      <svg width="30" height="30" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="17.5" cy="17.5" r="17" fill="white" stroke="#E0D7C8"/>
                      <path d="M12.8267 24H10.4972L15.7315 9.45455H18.267L23.5014 24H21.1719L17.0597 12.0966H16.946L12.8267 24ZM13.2173 18.304H20.7741V20.1506H13.2173V18.304Z" fill="#926D57"/>
                      </svg>
                    </div>
                    <div>
                      <p> Action </p>
                    </div>
                  </div>
                  <div className="lordquestionflex">
                    <div className="borderA">
                    <svg width="30" height="30" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="17.5" cy="17.5" r="17" fill="white" stroke="#E0D7C8"/>
                      <path d="M12.8267 24H10.4972L15.7315 9.45455H18.267L23.5014 24H21.1719L17.0597 12.0966H16.946L12.8267 24ZM13.2173 18.304H20.7741V20.1506H13.2173V18.304Z" fill="#926D57"/>
                      </svg>
                    </div>
                    <div>
                      <p> Bird </p>
                    </div>
                  </div>
                  <div className="lordquestionflex">
                    <div className="borderA">
                    <svg width="30" height="30" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="17.5" cy="17.5" r="17" fill="white" stroke="#E0D7C8"/>
                      <path d="M12.8267 24H10.4972L15.7315 9.45455H18.267L23.5014 24H21.1719L17.0597 12.0966H16.946L12.8267 24ZM13.2173 18.304H20.7741V20.1506H13.2173V18.304Z" fill="#926D57"/>
                      </svg>
                    </div>
                    <div>
                      <p> Tree </p>
                    </div>
                  </div>
                  <div className="lordquestionflex">
                    <div className="borderA">
                    <svg width="30" height="30" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="17.5" cy="17.5" r="17" fill="white" stroke="#E0D7C8"/>
                      <path d="M12.8267 24H10.4972L15.7315 9.45455H18.267L23.5014 24H21.1719L17.0597 12.0966H16.946L12.8267 24ZM13.2173 18.304H20.7741V20.1506H13.2173V18.304Z" fill="#926D57"/>
                      </svg>
                    </div>
                    <div>
                      <p> Accident </p>
                    </div>
                  </div>
                  <div className="questionbutton">
                    <button onClick={increaseCount}> Next </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* <div className="lordshiva">
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
           
            <div className="lordquestion">
              <p className="headingright">Question {count} of 5 </p>
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
                  <button onClick={increaseCount}> Next </button>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {currentTab === 2 && (
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
            <div className="question2lordshivaright">
              <div className="lordquestion">
                <p className="headingright">Question {count} of 5 </p>
                <div className="lordsubquestion">
                  <p className="headingheading">
                    What does karma mean in Sanskrit?
                  </p>
                  <div className="lordquestionflex">
                    <div className="borderA">
                    <svg width="30" height="30" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="17.5" cy="17.5" r="17" fill="white" stroke="#E0D7C8"/>
                      <path d="M12.8267 24H10.4972L15.7315 9.45455H18.267L23.5014 24H21.1719L17.0597 12.0966H16.946L12.8267 24ZM13.2173 18.304H20.7741V20.1506H13.2173V18.304Z" fill="#926D57"/>
                      </svg>
                    </div>
                    <div>
                      <p> Dinesh  </p>
                    </div>
                  </div>
                  <div className="lordquestionflex">
                    <div className="borderA">
                    <svg width="30" height="30" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="17.5" cy="17.5" r="17" fill="white" stroke="#E0D7C8"/>
                      <path d="M12.8267 24H10.4972L15.7315 9.45455H18.267L23.5014 24H21.1719L17.0597 12.0966H16.946L12.8267 24ZM13.2173 18.304H20.7741V20.1506H13.2173V18.304Z" fill="#926D57"/>
                      </svg>
                    </div>
                    <div>
                      <p> Ankit </p>
                    </div>
                  </div>
                  <div className="lordquestionflex">
                    <div className="borderA">
                    <svg width="30" height="30" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="17.5" cy="17.5" r="17" fill="white" stroke="#E0D7C8"/>
                      <path d="M12.8267 24H10.4972L15.7315 9.45455H18.267L23.5014 24H21.1719L17.0597 12.0966H16.946L12.8267 24ZM13.2173 18.304H20.7741V20.1506H13.2173V18.304Z" fill="#926D57"/>
                      </svg>
                    </div>
                    <div>
                      <p> Shivam </p>
                    </div>
                  </div>
                  <div className="lordquestionflex">
                    <div className="borderA">
                    <svg width="30" height="30" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="17.5" cy="17.5" r="17" fill="white" stroke="#E0D7C8"/>
                      <path d="M12.8267 24H10.4972L15.7315 9.45455H18.267L23.5014 24H21.1719L17.0597 12.0966H16.946L12.8267 24ZM13.2173 18.304H20.7741V20.1506H13.2173V18.304Z" fill="#926D57"/>
                      </svg>
                    </div>
                    <div>
                      <p> Ram </p>
                    </div>
                  </div>
                  <div className="questionbutton">
                    <button onClick={increaseCount}> Next </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* <div className="lordshiva">
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
          <div className="question2lordshivaright">
          
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
        </div> */}
        {currentTab ===3 &&(
            <div className="lordshiva">
              <div className="lordshivaleft">
                <div className="sublord">
                  <img src={photo} alt="" className="img" />
                  <div className="lordDesc">
                    <p className="paraIns"> Instructions: </p>
                    <p className="paraChoose">
                      Choose an answer and hit 'next'. You will receive your
                      score and answers at the end.
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
              <div className="question3lordshivaright">
                <div className="lordquestion">
                  <p className="headingright">Question {count} of 5 </p>
                  <div className="lordsubquestion">
                    <p className="headingheading">
                      What does karma mean in Sanskrit?
                    </p>
                    <div className="lordquestionflex">
                      <div className="borderA">
                      <svg width="30" height="30" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="17.5" cy="17.5" r="17" fill="white" stroke="#E0D7C8"/>
                      <path d="M12.8267 24H10.4972L15.7315 9.45455H18.267L23.5014 24H21.1719L17.0597 12.0966H16.946L12.8267 24ZM13.2173 18.304H20.7741V20.1506H13.2173V18.304Z" fill="#926D57"/>
                      </svg>
                      </div>
                      <div>
                        <p> Sandeep </p>
                      </div>
                    </div>
                    <div className="lordquestionflex">
                      <div className="borderA">
                      <svg width="30" height="30" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="17.5" cy="17.5" r="17" fill="white" stroke="#E0D7C8"/>
                      <path d="M12.8267 24H10.4972L15.7315 9.45455H18.267L23.5014 24H21.1719L17.0597 12.0966H16.946L12.8267 24ZM13.2173 18.304H20.7741V20.1506H13.2173V18.304Z" fill="#926D57"/>
                      </svg>
                      </div>
                      <div>
                        <p> Aakash </p>
                      </div>
                    </div>
                    <div className="lordquestionflex">
                      <div className="borderA">
                      <svg width="30" height="30" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="17.5" cy="17.5" r="17" fill="white" stroke="#E0D7C8"/>
                      <path d="M12.8267 24H10.4972L15.7315 9.45455H18.267L23.5014 24H21.1719L17.0597 12.0966H16.946L12.8267 24ZM13.2173 18.304H20.7741V20.1506H13.2173V18.304Z" fill="#926D57"/>
                      </svg>
                      </div>
                      <div>
                        <p> Tree </p>
                      </div>
                    </div>
                    <div className="lordquestionflex">
                      <div className="borderA">
                      <svg width="30" height="30" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="17.5" cy="17.5" r="17" fill="white" stroke="#E0D7C8"/>
                      <path d="M12.8267 24H10.4972L15.7315 9.45455H18.267L23.5014 24H21.1719L17.0597 12.0966H16.946L12.8267 24ZM13.2173 18.304H20.7741V20.1506H13.2173V18.304Z" fill="#926D57"/>
                      </svg>
                      </div>
                      <div>
                        <p> Accident </p>
                      </div>
                    </div>
                    <div className="questionbutton">
                      <button onClick={increaseCount}> Next </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}


        {/* <div className="lordshiva">
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
          <div className="question3lordshivaright">
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
        </div> */}
      </div>
    </>
  );
};

export default Question1;
