import React, { useEffect } from "react";
import { useAoneStore } from "../store/AoneStore";
import Mainlogo from "../assets/img/logo.svg";
import EyeHide from "../assets/img/eye_hide.svg";
import EyeShow from "../assets/img/eye_show.svg";
import {useNavigate} from "react-router-dom";

const Login = ({}) => {
    const navigate = useNavigate();
  return (
    <>
      <div className="fullBg">
        <div className="login_sec">
          <div className="textAlignCenter">
            <img src={Mainlogo} alt="mainlogo" className="login_logo" />
          </div>
          <h2>
            Welcome to <span>AJEX</span>
          </h2>
          <p> Sign in to continue</p>
          <div class="title_border"></div>
          <label className="inputTitle">Email Address</label>
          <div className="mb_24 ">
            <input
              placeholder="Enter the Email Address"
              className="Maininput"
            />
          </div>
          <label className="inputTitle">Password</label>

          <div className="mb_24">
            <div className="InputGroup">
              <input placeholder="Enter the Password" type="password" />
              <div className="InputGroup-append">
                <span className="InputGroupText">
                  <img src={EyeHide} />
                  {/* <img src={EyeShow} /> */}
                </span>
              </div>{" "}
            </div>
          </div>

          <div className="mb_16">
            <button className="login_btn" onClick={()=>navigate('/ondemand')}>Login</button>
          </div>

          <p>Version : 0.0.0</p>
        </div>
      </div>
    </>
  );
};

export default Login;
