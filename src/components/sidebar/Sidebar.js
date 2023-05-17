import React,{useState} from 'react'
import Mainlogo from "../../assets/img/logo.svg";
import DashboardIcon from "../../assets/img/dashboard_icon.svg";
import {useNavigate,useLocation } from "react-router-dom";
import Arrowleft from "../../assets/img/arrowleft.svg";
import ArrowRight from "../../assets/img/arrowright.svg";
import ReportIcon from "../../assets/img/report_icon.svg";
import Arrowdown from "../../assets/img/arrowdown.svg";
import Arrowup from "../../assets/img/arrowup.svg";
import DemandIcon from "../../assets/img/demand_icon.svg";




const Adminsidebar = ({setWrapper}) => {
  const [toggleIcon, setToggleIcon] = useState(false);
    const navigate = useNavigate();
    const queryParams = useLocation();
    const pathname = queryParams.pathname

      const [log, setLog] = useState(false)
      const [product, setProduct] = useState(false)



  return (
       <div className="admin_sidebar">

        <div className="desktoptogglemenu">
              <button
                className="empty_btn displayFlex alignItemCenter justifyContent_center"
                onClick={() => {
                    setToggleIcon((prev) => !prev)
                    setWrapper((prev) => !prev)
                }}
              >
                {toggleIcon ? (
                  <img src={ArrowRight}  />
                ) : (
                  <img src={Arrowleft} />
                )}
              </button>
            </div>

            <ul styles={{paddingTop: '10px'}}>
        <li onClick={() => 
          {setProduct(!product)
            }
          }>
          <button  className={pathname.includes("/products/sla") ? "active" : " "}>
            <img src={ReportIcon} />
            <span>Products</span>
            {product ? <img className='ml_auto dropdownIcon' src={Arrowup} />   :  <img className='ml_auto dropdownIcon' src={Arrowdown} /> }
            
             
          </button>
        </li>
        {(product || pathname.includes("/products/sla")) && (
                <ul className="adminsubmenu">
            <li onClick={() => 
          {
            setLog(false)}
          }>
              <button className={pathname.includes("/products/sla") ? "active" : " "} onClick={() => navigate("/products/sla")}>
                <img src={DemandIcon} />
                <span>SLA</span>
              </button>
            </li>
          

          </ul>
            )}
       </ul>

      <ul style={{paddingTop: '10px',marginTop: '20px'}}>
        <li onClick={() => {
          setLog(!log)
          }}>
          <button  className={pathname.includes("/ondemand") ? "active" : " "}>
            <img src={ReportIcon} />
            <span>Reports</span>
            {log ? <img className='ml_auto dropdownIcon' src={Arrowup} />   :  <img className='ml_auto dropdownIcon' src={Arrowdown} /> }
            
             
          </button>
        </li>
  {(log || pathname.includes("/ondemand")) && (
                <ul className="adminsubmenu">
            <li onClick={() => 
          {setProduct(false)}}>
              <button className={pathname.includes("/ondemand") ? "active" : " "} onClick={() => navigate("/ondemand")}>
                <img src={DemandIcon} />
                <span>On Demand</span>
              </button>
            </li>
          

          </ul>
            )}

</ul>

      </div>
  )
}

export default Adminsidebar
