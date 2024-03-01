import React, { useEffect, useState } from "react";
import "./style.css";
import photo from "../../Assest/image 32.png";
import ican from "../../Assest/ican.png";
import { NavLink, useNavigate } from "react-router-dom";
import Loading from "../Loading";
import Karmascore from "./karmascore";

const Question1 = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(1);
  const [currentTab, setCurrentTab] = useState(0);
  const [clickedOption, setClickedOption] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const increaseCount = () => {
    // setCount(count + 1);
    // setCurrentTab(currentTab + 1);
    // if (currentTab < 3) {
    //   setCurrentQuestion(currentQuestion+1)
    //   setCount(count + 1);
    //   setCurrentTab(currentTab + 1);
    // }

    if (currentTab < QuizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setCount(count + 1);
      setClickedOption(0);
      setCurrentTab(currentTab + 1);
      // setShowResult(false)
    } else {
      setShowResult(true);
      setCurrentTab(0)
      //  setClickedOption(0) ? setCurrentTab(0) : setCurrentTab(currentTab+1)
      // clickedOption(0)
      // setCurrentTab(0)
      // setCurrentQuestion(0);
    }
  };

  const submitButton = () => {
    navigate("/karmascore");
  };

  useEffect(() => {
    if (currentTab < 3) {
      <Loading />;
    }
  }, []);



  

  const QuizData = [
    {
      question: "Which language runs in a web browser?",
      options: [
        // "Central Style Sheets",
        // "Cascading Style Sheets",
        // "Cascading Simple Sheets",
        // "Cars SUVs Sailboats",
        {
          id:1,
          name:"Central Style Sheets",
           img:"images/df.svg"
        },
        {
          id:2,
          name:"Song the site",
          svg:"svg",
          img:"images/df6.svg"
        },
        {
          id:3,
          name:"Song is good",
          svg:"svg1",
          img:"images/df7.svg"
        },
        {
          id:4,
          name:"the title is good",
          svg:"svg5",
          img:"images/df8.svg"
        }
      ],
      answer: 4,
    },
    {
      question: "What does CSS stand for?",
      options: [
        // "Central Style Sheets",
        // "Cascading Style Sheets",
        // "Cascading Simple Sheets",
        // "Cars SUVs Sailboats",
        {
          id:1,
          name:"side",
           img:"images/df.svg"
        },
        {
          id:2,
          name:"side1",
          svg:"svg",
          img:"images/df6.svg"
        },
        {
          id:3,
          name:"This site",
          svg:"svg1",
          img:"images/df7.svg"
        },
        {
          id:4,
          name:"lite",
          svg:"svg5",
          img:"images/df8.svg"
        }
      ],
      answer: 2,
    },
    {
      question: "What does HTML stand for?",
      options: [
        // "Central Style Sheets",
        // "Cascading Style Sheets",
        // "Cascading Simple Sheets",
        // "Cars SUVs Sailboats",
        {
          id:1,
          name:"Central Style Sheets",
           img:"images/df.svg"
        },
        {
          id:2,
          name:"Central Stylse Sheets",
          svg:"svg",
          img:"images/df6.svg"
        },
        {
          id:3,
          name:"hdhdhd",
          svg:"svg1",
          img:"images/df7.svg"
        },
        {
          id:4,
          name:"namdhdh",
          svg:"svg5",
          img:"images/df8.svg"
        }
      ],
      answer: 1,
    },
    {
      question: "What year was JavaScript launched?",
      options: [
        // "Central Style Sheets",
        // "Cascading Style Sheets",
        // "Cascading Simple Sheets",
        // "Cars SUVs Sailboats",
        {
          id:1,
          name:"Central Style Sheets",
           img:"images/df.svg"
        },
        {
          id:2,
          name:"Central Stylse Sheets",
          svg:"svg",
          img:"images/df6.svg"
        },
        {
          id:3,
          name:"hdhdhd",
          svg:"svg1",
          img:"images/df7.svg"
        },
        {
          id:4,
          name:"namdhdh",
          svg:"svg5",
          img:"images/df8.svg"
        }
      ],
      answer: 2,
    },
  ];

  return (
    <>
      <div className="parentlordshiva">
        {/* {currentTab === 1 && ( */}
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
                    <p className="paraquestion"> No. of Questions: 0{count} </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {showResult ? (
            <>
                {
                  navigate("/karmascore")
                }
            </>
          ) : (
            <>
              <div className="lordshivaright">
                <div className="lordquestion">
                  <p className="headingright">Question {count} of 4 </p>

                  <div className="lordsubquestion">

                    <p className="headingheading">
                      {/* What does karma mean in Sanskrit? */}
                      {

                      QuizData[currentQuestion].question
                      }
                    </p>

                    {QuizData[currentQuestion].options.map((prop, i) => {
                      return (
                        <>
                          <button
                            className={`lordquestionflex ${
                              clickedOption == i + 1 ? "checked" : null
                            }`}
                            key={i}
                            onClick={() => setClickedOption(i + 1)}
                          >
                            <div className="borderA">
                             
                              {/* <svg
                                width="30"
                                height="30"
                                viewBox="0 0 35 35"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <circle
                                  cx="17.5"
                                  cy="17.5"
                                  r="17"
                                  fill="white"
                                  stroke="#E0D7C8"
                                />
                                <path
                                  d="M12.8267 24H10.4972L15.7315 9.45455H18.267L23.5014 24H21.1719L17.0597 12.0966H16.946L12.8267 24ZM13.2173 18.304H20.7741V20.1506H13.2173V18.304Z"
                                  fill="#926D57"
                                />
                              </svg> */}
                             <img src={prop.img} alt="" />
                            </div>
                            <div className="singer">
                              <p    className={` ${
                              clickedOption == i + 1 ? "checked1" : null
                            }`}
                            key={i}
                            onClick={() => setClickedOption(i + 1)}> {prop.name} </p>
                            </div>
                          </button>
                        </>
                      );
                    })}
                   


                    <div className="questionbutton">
                      <button  onClick={increaseCount}> {count == 4 ? "Submit" : "Next"} </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
          
          {/* <div className="lordshivaright">
            <div className="lordquestion">
              <p className="headingright">Question {count} of 3 </p>
              
              <div className="lordsubquestion">
                <p className="headingheading">
                  What does karma mean in Sanskrit?
                </p>
                {QuizData[currentQuestion].options.map((prop, i) => {
                  return (
                    <>
                      <button
                        className={`lordquestionflex ${
                          clickedOption == i + 1 ? "checked" : null
                        }`}
                        key={i}
                        onClick={() => setClickedOption(i + 1)}
                      >
                        <div className="borderA">
                          <svg
                            width="30"
                            height="30"
                            viewBox="0 0 35 35"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="17.5"
                              cy="17.5"
                              r="17"
                              fill="white"
                              stroke="#E0D7C8"
                            />
                            <path
                              d="M12.8267 24H10.4972L15.7315 9.45455H18.267L23.5014 24H21.1719L17.0597 12.0966H16.946L12.8267 24ZM13.2173 18.304H20.7741V20.1506H13.2173V18.304Z"
                              fill="#926D57"
                            />
                          </svg>
                        </div>
                        <div className="singer">
                          <p> {prop} </p>
                        </div>
                      </button>
                    </>
                  );
                })} */}

          {/* <button  className="lordquestionflex" >
                    <div className="borderA">
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 35 35"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="17.5"
                          cy="17.5"
                          r="17"
                          fill="white"
                          stroke="#E0D7C8"
                        />
                        <path
                          d="M12.8267 24H10.4972L15.7315 9.45455H18.267L23.5014 24H21.1719L17.0597 12.0966H16.946L12.8267 24ZM13.2173 18.304H20.7741V20.1506H13.2173V18.304Z"
                          fill="#926D57"
                        />
                      </svg>
                    </div>
                    <div className="singer">
                      <p> Action </p>
                    </div>
                  </button> */}

          {/* <div className="lordquestionflex">
                    <div className="borderA">
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 35 35"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="17.5"
                          fill="white"
                          cy="17.5"
                          r="17"
                          stroke="#E0D7C8"
                        />
                        <path
                          d="M12.598 25V10.4545H17.9247C18.9569 10.4545 19.8116 10.625 20.4886 10.9659C21.1657 11.3021 21.6723 11.759 22.0085 12.3366C22.3447 12.9096 22.5128 13.5559 22.5128 14.2756C22.5128 14.8816 22.4015 15.393 22.179 15.8097C21.9564 16.2216 21.6581 16.553 21.2841 16.804C20.9148 17.0502 20.5076 17.2301 20.0625 17.3438V17.4858C20.5455 17.5095 21.0166 17.6657 21.4759 17.9545C21.9399 18.2386 22.3234 18.6435 22.6264 19.169C22.9295 19.6946 23.081 20.3338 23.081 21.0866C23.081 21.83 22.9058 22.4976 22.5554 23.0895C22.2098 23.6766 21.6747 24.143 20.9503 24.4886C20.2259 24.8295 19.3002 25 18.1733 25H12.598ZM14.7926 23.1179H17.9602C19.0114 23.1179 19.7642 22.9143 20.2188 22.5071C20.6733 22.0999 20.9006 21.5909 20.9006 20.9801C20.9006 20.5208 20.7846 20.0994 20.5526 19.7159C20.3205 19.3324 19.9891 19.027 19.5582 18.7997C19.1321 18.5724 18.6255 18.4588 18.0384 18.4588H14.7926V23.1179ZM14.7926 16.7472H17.733C18.2254 16.7472 18.6681 16.6525 19.0611 16.4631C19.4588 16.2737 19.7737 16.0085 20.0057 15.6676C20.2424 15.322 20.3608 14.9148 20.3608 14.446C20.3608 13.8447 20.1501 13.3404 19.7287 12.9332C19.3073 12.526 18.661 12.3224 17.7898 12.3224H14.7926V16.7472Z"
                          fill="#926D57"
                        />
                      </svg>
                    </div>
                    <div className="singer">
                      <p> Bird </p>
                    </div>
                  </div>
                  <div className="lordquestionflex">
                    <div className="borderA">
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 35 35"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="17.5"
                          fill="white"
                          cy="17.5"
                          r="17"
                          stroke="#E0D7C8"
                        />
                        <path
                          d="M23.679 14.1847H21.4631C21.3778 13.7112 21.2192 13.2945 20.9872 12.9347C20.7552 12.5748 20.4711 12.2694 20.1349 12.0185C19.7988 11.7675 19.4223 11.5781 19.0057 11.4503C18.5938 11.3224 18.1558 11.2585 17.6918 11.2585C16.8537 11.2585 16.1032 11.4692 15.4403 11.8906C14.7822 12.312 14.2614 12.9299 13.8778 13.7443C13.4991 14.5587 13.3097 15.553 13.3097 16.7273C13.3097 17.911 13.4991 18.91 13.8778 19.7244C14.2614 20.5388 14.7846 21.1544 15.4474 21.571C16.1103 21.9877 16.8561 22.196 17.6847 22.196C18.1439 22.196 18.5795 22.1345 18.9915 22.0114C19.4081 21.8835 19.7846 21.6965 20.1207 21.4503C20.4569 21.2041 20.741 20.9034 20.973 20.5483C21.2098 20.1884 21.3731 19.7765 21.4631 19.3125L23.679 19.3196C23.5606 20.0346 23.331 20.6927 22.9901 21.294C22.6539 21.8906 22.2206 22.4067 21.6903 22.8423C21.1648 23.2732 20.5634 23.607 19.8864 23.8438C19.2093 24.0805 18.4706 24.1989 17.6705 24.1989C16.411 24.1989 15.2888 23.9006 14.304 23.304C13.3191 22.7027 12.5426 21.8433 11.9744 20.7259C11.411 19.6084 11.1293 18.2756 11.1293 16.7273C11.1293 15.1742 11.4134 13.8414 11.9815 12.7287C12.5497 11.6113 13.3262 10.7543 14.3111 10.1577C15.2959 9.55634 16.4157 9.25568 17.6705 9.25568C18.4422 9.25568 19.1619 9.36695 19.8295 9.58949C20.5019 9.80729 21.1056 10.1293 21.6406 10.5554C22.1757 10.9768 22.6184 11.4929 22.9688 12.1037C23.3191 12.7098 23.5559 13.4034 23.679 14.1847Z"
                          fill="#926D57"
                        />
                      </svg>
                    </div>
                    <div className="singer">
                      <p> Tree </p>
                    </div>
                  </div>
                  <div className="lordquestionflex">
                    <div className="borderA">
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 35 35"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="17.5"
                          fill="white"
                          cy="17.5"
                          r="17"
                          stroke="#E0D7C8"
                        />
                        <path
                          d="M17.3068 25H12.598V10.4545H17.456C18.8812 10.4545 20.1051 10.7457 21.1278 11.3281C22.1506 11.9058 22.9342 12.7367 23.4787 13.821C24.0279 14.9006 24.3026 16.1955 24.3026 17.706C24.3026 19.2211 24.0256 20.5232 23.4716 21.6122C22.9223 22.7012 22.1269 23.5393 21.0852 24.1264C20.0436 24.7088 18.7841 25 17.3068 25ZM14.7926 23.0824H17.1861C18.294 23.0824 19.215 22.8741 19.9489 22.4574C20.6828 22.036 21.232 21.4276 21.5966 20.6321C21.9612 19.8319 22.1435 18.8565 22.1435 17.706C22.1435 16.5649 21.9612 15.5966 21.5966 14.8011C21.2367 14.0057 20.6993 13.402 19.9844 12.9901C19.2694 12.5781 18.3816 12.3722 17.321 12.3722H14.7926V23.0824Z"
                          fill="#926D57"
                        />
                      </svg>
                    </div>
                    <div className="singer">
                      <p> Accident </p>
                    </div>
                  </div> */}

          {/* <div className="questionbutton">
                  <button onClick={increaseCount}> Next </button>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        {/* // )} */}

        {/* {currentTab === 2 && (
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
                      <p className="paraquestion"> No. of Questions: 02 </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lordshivaright">
              <div className="lordquestion">
                <p className="headingright">Question {count} of 3 </p>
                <div className="lordsubquestion">
                  <p className="headingheading">
                    What does karma mean in Sanskrit?
                  </p>
                  <div className="lordquestionflex">
                    <div className="borderA">
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 35 35"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="17.5"
                          cy="17.5"
                          r="17"
                          fill="white"
                          stroke="#E0D7C8"
                        />
                        <path
                          d="M12.8267 24H10.4972L15.7315 9.45455H18.267L23.5014 24H21.1719L17.0597 12.0966H16.946L12.8267 24ZM13.2173 18.304H20.7741V20.1506H13.2173V18.304Z"
                          fill="#926D57"
                        />
                      </svg>
                    </div>
                    <div className="singer">
                      <p> Action </p>
                    </div>
                  </div>
                  <div className="lordquestionflex">
                    <div className="borderA">
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 35 35"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="17.5"
                          fill="white"
                          cy="17.5"
                          r="17"
                          stroke="#E0D7C8"
                        />
                        <path
                          d="M12.598 25V10.4545H17.9247C18.9569 10.4545 19.8116 10.625 20.4886 10.9659C21.1657 11.3021 21.6723 11.759 22.0085 12.3366C22.3447 12.9096 22.5128 13.5559 22.5128 14.2756C22.5128 14.8816 22.4015 15.393 22.179 15.8097C21.9564 16.2216 21.6581 16.553 21.2841 16.804C20.9148 17.0502 20.5076 17.2301 20.0625 17.3438V17.4858C20.5455 17.5095 21.0166 17.6657 21.4759 17.9545C21.9399 18.2386 22.3234 18.6435 22.6264 19.169C22.9295 19.6946 23.081 20.3338 23.081 21.0866C23.081 21.83 22.9058 22.4976 22.5554 23.0895C22.2098 23.6766 21.6747 24.143 20.9503 24.4886C20.2259 24.8295 19.3002 25 18.1733 25H12.598ZM14.7926 23.1179H17.9602C19.0114 23.1179 19.7642 22.9143 20.2188 22.5071C20.6733 22.0999 20.9006 21.5909 20.9006 20.9801C20.9006 20.5208 20.7846 20.0994 20.5526 19.7159C20.3205 19.3324 19.9891 19.027 19.5582 18.7997C19.1321 18.5724 18.6255 18.4588 18.0384 18.4588H14.7926V23.1179ZM14.7926 16.7472H17.733C18.2254 16.7472 18.6681 16.6525 19.0611 16.4631C19.4588 16.2737 19.7737 16.0085 20.0057 15.6676C20.2424 15.322 20.3608 14.9148 20.3608 14.446C20.3608 13.8447 20.1501 13.3404 19.7287 12.9332C19.3073 12.526 18.661 12.3224 17.7898 12.3224H14.7926V16.7472Z"
                          fill="#926D57"
                        />
                      </svg>
                    </div>
                    <div className="singer">
                      <p> Bird </p>
                    </div>
                  </div>
                  <div className="lordquestionflex">
                    <div className="borderA">
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 35 35"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="17.5"
                          fill="white"
                          cy="17.5"
                          r="17"
                          stroke="#E0D7C8"
                        />
                        <path
                          d="M23.679 14.1847H21.4631C21.3778 13.7112 21.2192 13.2945 20.9872 12.9347C20.7552 12.5748 20.4711 12.2694 20.1349 12.0185C19.7988 11.7675 19.4223 11.5781 19.0057 11.4503C18.5938 11.3224 18.1558 11.2585 17.6918 11.2585C16.8537 11.2585 16.1032 11.4692 15.4403 11.8906C14.7822 12.312 14.2614 12.9299 13.8778 13.7443C13.4991 14.5587 13.3097 15.553 13.3097 16.7273C13.3097 17.911 13.4991 18.91 13.8778 19.7244C14.2614 20.5388 14.7846 21.1544 15.4474 21.571C16.1103 21.9877 16.8561 22.196 17.6847 22.196C18.1439 22.196 18.5795 22.1345 18.9915 22.0114C19.4081 21.8835 19.7846 21.6965 20.1207 21.4503C20.4569 21.2041 20.741 20.9034 20.973 20.5483C21.2098 20.1884 21.3731 19.7765 21.4631 19.3125L23.679 19.3196C23.5606 20.0346 23.331 20.6927 22.9901 21.294C22.6539 21.8906 22.2206 22.4067 21.6903 22.8423C21.1648 23.2732 20.5634 23.607 19.8864 23.8438C19.2093 24.0805 18.4706 24.1989 17.6705 24.1989C16.411 24.1989 15.2888 23.9006 14.304 23.304C13.3191 22.7027 12.5426 21.8433 11.9744 20.7259C11.411 19.6084 11.1293 18.2756 11.1293 16.7273C11.1293 15.1742 11.4134 13.8414 11.9815 12.7287C12.5497 11.6113 13.3262 10.7543 14.3111 10.1577C15.2959 9.55634 16.4157 9.25568 17.6705 9.25568C18.4422 9.25568 19.1619 9.36695 19.8295 9.58949C20.5019 9.80729 21.1056 10.1293 21.6406 10.5554C22.1757 10.9768 22.6184 11.4929 22.9688 12.1037C23.3191 12.7098 23.5559 13.4034 23.679 14.1847Z"
                          fill="#926D57"
                        />
                      </svg>
                    </div>
                    <div className="singer">
                      <p> Tree </p>
                    </div>
                  </div>
                  <div className="lordquestionflex">
                    <div className="borderA">
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 35 35"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="17.5"
                          fill="white"
                          cy="17.5"
                          r="17"
                          stroke="#E0D7C8"
                        />
                        <path
                          d="M17.3068 25H12.598V10.4545H17.456C18.8812 10.4545 20.1051 10.7457 21.1278 11.3281C22.1506 11.9058 22.9342 12.7367 23.4787 13.821C24.0279 14.9006 24.3026 16.1955 24.3026 17.706C24.3026 19.2211 24.0256 20.5232 23.4716 21.6122C22.9223 22.7012 22.1269 23.5393 21.0852 24.1264C20.0436 24.7088 18.7841 25 17.3068 25ZM14.7926 23.0824H17.1861C18.294 23.0824 19.215 22.8741 19.9489 22.4574C20.6828 22.036 21.232 21.4276 21.5966 20.6321C21.9612 19.8319 22.1435 18.8565 22.1435 17.706C22.1435 16.5649 21.9612 15.5966 21.5966 14.8011C21.2367 14.0057 20.6993 13.402 19.9844 12.9901C19.2694 12.5781 18.3816 12.3722 17.321 12.3722H14.7926V23.0824Z"
                          fill="#926D57"
                        />
                      </svg>
                    </div>
                    <div className="singer">
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

        {currentTab === 3 && (
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
                      <p className="paraquestion"> No. of Questions: 03 </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lordshivaright">
              <div className="lordquestion">
                <p className="headingright">Question {count} of 3 </p>
                <div className="lordsubquestion">
                  <p className="headingheading">
                    What does karma mean in Sanskrit?
                  </p>
                  <div className="lordquestionflex">
                    <div className="borderA">
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 35 35"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="17.5"
                          cy="17.5"
                          r="17"
                          fill="white"
                          stroke="#E0D7C8"
                        />
                        <path
                          d="M12.8267 24H10.4972L15.7315 9.45455H18.267L23.5014 24H21.1719L17.0597 12.0966H16.946L12.8267 24ZM13.2173 18.304H20.7741V20.1506H13.2173V18.304Z"
                          fill="#926D57"
                        />
                      </svg>
                    </div>
                    <div className="singer">
                      <p> Action </p>
                    </div>
                  </div>
                  <div className="lordquestionflex">
                    <div className="borderA">
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 35 35"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="17.5"
                          fill="white"
                          cy="17.5"
                          r="17"
                          stroke="#E0D7C8"
                        />
                        <path
                          d="M12.598 25V10.4545H17.9247C18.9569 10.4545 19.8116 10.625 20.4886 10.9659C21.1657 11.3021 21.6723 11.759 22.0085 12.3366C22.3447 12.9096 22.5128 13.5559 22.5128 14.2756C22.5128 14.8816 22.4015 15.393 22.179 15.8097C21.9564 16.2216 21.6581 16.553 21.2841 16.804C20.9148 17.0502 20.5076 17.2301 20.0625 17.3438V17.4858C20.5455 17.5095 21.0166 17.6657 21.4759 17.9545C21.9399 18.2386 22.3234 18.6435 22.6264 19.169C22.9295 19.6946 23.081 20.3338 23.081 21.0866C23.081 21.83 22.9058 22.4976 22.5554 23.0895C22.2098 23.6766 21.6747 24.143 20.9503 24.4886C20.2259 24.8295 19.3002 25 18.1733 25H12.598ZM14.7926 23.1179H17.9602C19.0114 23.1179 19.7642 22.9143 20.2188 22.5071C20.6733 22.0999 20.9006 21.5909 20.9006 20.9801C20.9006 20.5208 20.7846 20.0994 20.5526 19.7159C20.3205 19.3324 19.9891 19.027 19.5582 18.7997C19.1321 18.5724 18.6255 18.4588 18.0384 18.4588H14.7926V23.1179ZM14.7926 16.7472H17.733C18.2254 16.7472 18.6681 16.6525 19.0611 16.4631C19.4588 16.2737 19.7737 16.0085 20.0057 15.6676C20.2424 15.322 20.3608 14.9148 20.3608 14.446C20.3608 13.8447 20.1501 13.3404 19.7287 12.9332C19.3073 12.526 18.661 12.3224 17.7898 12.3224H14.7926V16.7472Z"
                          fill="#926D57"
                        />
                      </svg>
                    </div>
                    <div className="singer">
                      <p> Bird </p>
                    </div>
                  </div>
                  <div className="lordquestionflex">
                    <div className="borderA">
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 35 35"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="17.5"
                          fill="white"
                          cy="17.5"
                          r="17"
                          stroke="#E0D7C8"
                        />
                        <path
                          d="M23.679 14.1847H21.4631C21.3778 13.7112 21.2192 13.2945 20.9872 12.9347C20.7552 12.5748 20.4711 12.2694 20.1349 12.0185C19.7988 11.7675 19.4223 11.5781 19.0057 11.4503C18.5938 11.3224 18.1558 11.2585 17.6918 11.2585C16.8537 11.2585 16.1032 11.4692 15.4403 11.8906C14.7822 12.312 14.2614 12.9299 13.8778 13.7443C13.4991 14.5587 13.3097 15.553 13.3097 16.7273C13.3097 17.911 13.4991 18.91 13.8778 19.7244C14.2614 20.5388 14.7846 21.1544 15.4474 21.571C16.1103 21.9877 16.8561 22.196 17.6847 22.196C18.1439 22.196 18.5795 22.1345 18.9915 22.0114C19.4081 21.8835 19.7846 21.6965 20.1207 21.4503C20.4569 21.2041 20.741 20.9034 20.973 20.5483C21.2098 20.1884 21.3731 19.7765 21.4631 19.3125L23.679 19.3196C23.5606 20.0346 23.331 20.6927 22.9901 21.294C22.6539 21.8906 22.2206 22.4067 21.6903 22.8423C21.1648 23.2732 20.5634 23.607 19.8864 23.8438C19.2093 24.0805 18.4706 24.1989 17.6705 24.1989C16.411 24.1989 15.2888 23.9006 14.304 23.304C13.3191 22.7027 12.5426 21.8433 11.9744 20.7259C11.411 19.6084 11.1293 18.2756 11.1293 16.7273C11.1293 15.1742 11.4134 13.8414 11.9815 12.7287C12.5497 11.6113 13.3262 10.7543 14.3111 10.1577C15.2959 9.55634 16.4157 9.25568 17.6705 9.25568C18.4422 9.25568 19.1619 9.36695 19.8295 9.58949C20.5019 9.80729 21.1056 10.1293 21.6406 10.5554C22.1757 10.9768 22.6184 11.4929 22.9688 12.1037C23.3191 12.7098 23.5559 13.4034 23.679 14.1847Z"
                          fill="#926D57"
                        />
                      </svg>
                    </div>
                    <div className="singer">
                      <p> Tree </p>
                    </div>
                  </div>
                  <div className="lordquestionflex">
                    <div className="borderA">
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 35 35"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="17.5"
                          fill="white"
                          cy="17.5"
                          r="17"
                          stroke="#E0D7C8"
                        />
                        <path
                          d="M17.3068 25H12.598V10.4545H17.456C18.8812 10.4545 20.1051 10.7457 21.1278 11.3281C22.1506 11.9058 22.9342 12.7367 23.4787 13.821C24.0279 14.9006 24.3026 16.1955 24.3026 17.706C24.3026 19.2211 24.0256 20.5232 23.4716 21.6122C22.9223 22.7012 22.1269 23.5393 21.0852 24.1264C20.0436 24.7088 18.7841 25 17.3068 25ZM14.7926 23.0824H17.1861C18.294 23.0824 19.215 22.8741 19.9489 22.4574C20.6828 22.036 21.232 21.4276 21.5966 20.6321C21.9612 19.8319 22.1435 18.8565 22.1435 17.706C22.1435 16.5649 21.9612 15.5966 21.5966 14.8011C21.2367 14.0057 20.6993 13.402 19.9844 12.9901C19.2694 12.5781 18.3816 12.3722 17.321 12.3722H14.7926V23.0824Z"
                          fill="#926D57"
                        />
                      </svg>
                    </div>
                    <div className="singer">
                      <p> Accident </p>
                    </div>
                  </div>
                  <div className="questionbutton">
                    <NavLink to="/karmascore">
                      {" "}
                      <button onClick={increaseCount}> Submit </button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )} */}
      </div>
    </>
  );
};

export default Question1;
