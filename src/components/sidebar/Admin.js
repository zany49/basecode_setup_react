import React, { useState } from "react";
import { useRoutes, useLocation,useParams,Outlet } from "react-router-dom";
import Adminsidebar from "./Sidebar";
import Headers from "./header"

const Admin = () => {
  const [wrapper, setWrapper ]= useState(false);
  const queryParams = useLocation();
  const pathname = queryParams.pathname
 
  return (
    <>
     <Headers  />
     <div className={wrapper ? "layoutWrapper show" : "layoutWrapper"}>
      <Adminsidebar setWrapper={setWrapper} />
      <div className="Main_wrapper">
       
        <Outlet />
      </div>
     </div>
     {/* <div className="layoutfooter">

     </div> */}
    </>

  );
};

export default Admin;
