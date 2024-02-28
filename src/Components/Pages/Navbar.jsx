import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="header_parent">
        <div class="header_all">
          <div class="header_flex">
            <div class="header_text">
              <Link className="navigatelink" to="/">
                Karma <span>Tracker</span> 
              </Link>
            </div>
            <div class="header_logo">
              <button className="header_account">
                Account
                <svg
                className="account_svg"
                  width="16"
                  height="9"
                  viewBox="0 0 16 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.01133 6.9179C8.1263 6.76709 8.18629 6.66634 8.26689 6.58562C10.3433 4.5068 12.4228 2.43049 14.4991 0.351682C14.6966 0.153938 14.904 -0.00187979 15.2033 0.00813286C15.5264 0.0181455 15.7601 0.167079 15.9057 0.447425C16.0538 0.731525 16.0244 1.01312 15.8394 1.27157C15.7669 1.37231 15.6745 1.4593 15.5864 1.54753C13.2938 3.83723 11.0012 6.12755 8.70804 8.41725C8.19691 8.92725 7.79951 8.92788 7.28901 8.41725C4.99581 6.12755 2.70262 3.83785 0.41068 1.5469C0.322577 1.45867 0.23135 1.37106 0.157618 1.27094C-0.072326 0.958678 -0.047332 0.549424 0.210729 0.265949C0.466292 -0.0143961 0.883067 -0.0857338 1.20611 0.112635C1.32796 0.187728 1.43418 0.292857 1.53666 0.394858C3.60178 2.45615 5.66503 4.51869 7.72765 6.58249C7.80826 6.66321 7.87574 6.75645 8.01071 6.91665L8.01133 6.9179Z"
                    fill="#D9D9D9"
                  />
                </svg>
                <div className="dropdown-content fixed-content">
                  <div className="account-create">
                    <div className="account-create-ican">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_106_49)">
                          <path
                            d="M11.9723 24C5.35845 23.9953 -0.00562124 18.6059 4.42096e-06 11.9723C0.00563008 5.35938 5.39501 -0.00562124 12.0286 4.42019e-06C18.6613 0.00563008 24.015 5.40532 24.0009 12.0755C23.9869 18.6528 18.5872 24.0056 11.9733 24.0009L11.9723 24ZM12.9193 20.8534C14.0885 20.8459 15.9975 20.1539 17.6168 18.8394C18.0706 18.4709 18.3068 18.0134 18.3134 17.4264C18.3359 15.3843 16.6651 13.5616 14.6286 13.4997C12.9128 13.4472 11.1941 13.45 9.4783 13.4941C7.63777 13.541 6.11416 14.8611 5.75224 16.666C5.59285 17.4583 5.62285 18.2243 6.32887 18.801C7.98375 20.1521 9.87397 20.8478 12.9193 20.8534ZM8.04751 7.55714C8.04751 9.75396 9.80459 11.5242 11.9892 11.5289C14.1757 11.5335 15.945 9.77365 15.9553 7.58152C15.9656 5.36688 14.186 3.57042 11.9902 3.58074C9.80365 3.59105 8.04751 5.36219 8.04751 7.55714Z"
                            fill="white"
                          />
                          <path
                            d="M12.9194 20.8534C9.87401 20.8477 7.98379 20.152 6.32891 18.8009C5.62289 18.2243 5.59289 17.4583 5.75228 16.666C6.11514 14.8611 7.63875 13.541 9.47834 13.4941C11.1942 13.45 12.9137 13.4472 14.6286 13.4997C16.6651 13.5616 18.335 15.3852 18.3134 17.4264C18.3069 18.0134 18.0706 18.4709 17.6168 18.8394C15.9966 20.1539 14.0886 20.8459 12.9194 20.8534Z"
                            fill="#1B1C1D"
                          />
                          <path
                            d="M8.04761 7.55714C8.04761 5.36219 9.80375 3.59105 11.9903 3.58073C14.1852 3.57042 15.9657 5.36688 15.9554 7.58151C15.9451 9.77365 14.1768 11.5345 11.9893 11.5289C9.80469 11.5242 8.04855 9.75302 8.04761 7.55714Z"
                            fill="#1B1C1D"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_106_49">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className="account-create-heading">
                      <p> Create Acoount</p>
                    </div>
                  </div>
                  <div className="account-create-para">
                    <p className="paragraph">
                      {" "}
                      Creating an account is free and allows you to save your
                      quiz to the leaderboard.{" "}
                    </p>
                  </div>
                  <div className="account-create-loginSign">
                    <button className="createbutton">
                      <Link to="/signup">Create Account</Link>
                      {/* Create Account */}
                    </button>
                    <button className="loginbutton">
                      <Link to="/login">Login</Link>
                    </button>
                  </div>
                </div>
              </button>
              <button className="header_Hi-En">
                <span className="hindi">Hi</span> <span className="En">En</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
