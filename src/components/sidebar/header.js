import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Mainlogo from "../../assets/img/logo.svg";
import Arrowleft from "../../assets/img/arrowleft.svg";
import ArrowRight from "../../assets/img/arrowright.svg";
import {useNavigate} from "react-router-dom";




const Headers = ({setWrapper})=>{
      const [toggleIcon, setToggleIcon] = useState(false);
      const navigate = useNavigate();

      
    return(
        <>
        <div className="topHeader">

                  <div className="admin_logo">
        <img src={Mainlogo} />

        </div>
          <div>

          
            {/* <div className="desktoptogglemenu">
              <button
                className="empty_btn"
                onClick={() => {
                    setToggleIcon((prev) => !prev)
                    setWrapper((prev) => !prev)
                }}
              >
                {toggleIcon ? (
                  <img src={ArrowRight} />
                ) : (
                  <img src={Arrowleft} />
                )}
              </button>
            </div> */}
            <div className="mobileAdminlogo">
              <img src={Mainlogo} />
            </div>
          </div>
          <div>
            <Dropdown className="userProfile">
              <Dropdown.Toggle
                id="dropdown-basic"
                className="displayFlex alignItem_center"
              >
                Ajex Portal
              </Dropdown.Toggle>

              <Dropdown.Menu style={{transform:'translate("22px", "20px") !important'}}>
                <Dropdown.Item onClick={()=>navigate('/')}>Sign out</Dropdown.Item>
                <Dropdown.Item href="#">Another action</Dropdown.Item>
                <Dropdown.Item href="#">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        </>
    )
}



export default Headers