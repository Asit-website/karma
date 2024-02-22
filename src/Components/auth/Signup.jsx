import React from "react";
import Signphoto from "../../Assest/signup.png";
import signgoogle from "../../Assest/search.svg";
import signfacebook from "../../Assest/facebook.svg";
import "./style.css";

const Signup = () => {
  return (
    <>
      <div>
        <div>
          <div className="parentSignup">
            <div className="signupImg">
              <img src={Signphoto} alt="img" />
            </div>
            <div className="signupform">
              <div className="subsignupform">
                <form>
                  <h1>SignUp</h1>
                  <div className="forminput">
                    <div className="inputfont">
                      <svg
                        className="svgfont"
                        width="18"
                        height="20"
                        viewBox="0 0 24 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19 0H5C3.67441 0.00158786 2.40356 0.528882 1.46622 1.46622C0.528882 2.40356 0.00158786 3.67441 0 5L0 17C0.00158786 18.3256 0.528882 19.5964 1.46622 20.5338C2.40356 21.4711 3.67441 21.9984 5 22H19C20.3256 21.9984 21.5964 21.4711 22.5338 20.5338C23.4711 19.5964 23.9984 18.3256 24 17V5C23.9984 3.67441 23.4711 2.40356 22.5338 1.46622C21.5964 0.528882 20.3256 0.00158786 19 0ZM5 2H19C19.5988 2.00118 20.1835 2.18151 20.679 2.5178C21.1744 2.85409 21.5579 3.33095 21.78 3.887L14.122 11.546C13.5584 12.1073 12.7954 12.4225 12 12.4225C11.2046 12.4225 10.4416 12.1073 9.878 11.546L2.22 3.887C2.44215 3.33095 2.82561 2.85409 3.32105 2.5178C3.81648 2.18151 4.40121 2.00118 5 2ZM19 20H5C4.20435 20 3.44129 19.6839 2.87868 19.1213C2.31607 18.5587 2 17.7957 2 17V6.5L8.464 12.96C9.40263 13.8963 10.6743 14.422 12 14.422C13.3257 14.422 14.5974 13.8963 15.536 12.96L22 6.5V17C22 17.7957 21.6839 18.5587 21.1213 19.1213C20.5587 19.6839 19.7956 20 19 20Z"
                          fill="#1B1C1D"
                        />
                      </svg>
                      <input type="text" placeholder="Email" />
                    </div>
                    <div className="inputfont">
                      <svg
                        className="svgfont"
                        width="20"
                        height="24"
                        viewBox="0 0 20 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17 8.424V7C17 5.14348 16.2625 3.36301 14.9497 2.05025C13.637 0.737498 11.8565 0 10 0C8.14348 0 6.36301 0.737498 5.05025 2.05025C3.7375 3.36301 3 5.14348 3 7V8.424C2.10936 8.81271 1.35129 9.45252 0.818499 10.2652C0.285705 11.0779 0.00127838 12.0282 0 13V19C0.00158786 20.3256 0.528882 21.5964 1.46622 22.5338C2.40356 23.4711 3.67441 23.9984 5 24H15C16.3256 23.9984 17.5964 23.4711 18.5338 22.5338C19.4711 21.5964 19.9984 20.3256 20 19V13C19.9987 12.0282 19.7143 11.0779 19.1815 10.2652C18.6487 9.45252 17.8906 8.81271 17 8.424ZM5 7C5 5.67392 5.52678 4.40215 6.46447 3.46447C7.40215 2.52678 8.67392 2 10 2C11.3261 2 12.5979 2.52678 13.5355 3.46447C14.4732 4.40215 15 5.67392 15 7V8H5V7ZM18 19C18 19.7956 17.6839 20.5587 17.1213 21.1213C16.5587 21.6839 15.7956 22 15 22H5C4.20435 22 3.44129 21.6839 2.87868 21.1213C2.31607 20.5587 2 19.7956 2 19V13C2 12.2044 2.31607 11.4413 2.87868 10.8787C3.44129 10.3161 4.20435 10 5 10H15C15.7956 10 16.5587 10.3161 17.1213 10.8787C17.6839 11.4413 18 12.2044 18 13V19Z"
                          fill="#1B1C1D"
                        />
                      </svg>
                      <input type="Password" placeholder="password" />
                    </div>
                    <div className="achortag">
                      <a href=""> Forget Password </a>
                    </div>

                    <br></br>
                    <button>Sign up</button>
                    <p className="termcondition">
                      {" "}
                      <a href="">Terms</a> of Use and{" "}
                      <a href=""> privacy Policy </a>
                    </p>
                    <div className="horizontal">
                      <div className="para">
                        <hr />
                      </div>
                      <div className="paraor">
                        {" "}
                        <p>OR</p>{" "}
                      </div>
                      <div className="para">
                        {" "}
                        <hr />
                      </div>
                    </div>
                    <div className="formgoogle">
                      <div className="facebook">
                        <img src={signfacebook} alt="" />
                      </div>
                      <div className="facebook">
                        <img src={signgoogle} alt="" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
