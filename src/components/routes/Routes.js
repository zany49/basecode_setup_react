import { useRoutes, useLocation } from "react-router-dom";
import Ondemand from "../../pages/Ondemand";
import Login from "../../pages/login";
import Admin from "../sidebar/Admin";
import SlaPage from "../../pages/SlaPage";




export const Routes = ()=>{
    
    const routes = useRoutes([
    {
      path: "/",
      element: <Login />,
    },
    {
    element: <Admin />,
    children: [
      
      {
        path: "ondemand",
        element: <Ondemand />,
      },{
        path: "/products/sla",
        element: <SlaPage />,
      }
    ]}
    ])
    return (
        <>
          {routes}
        </>
      );
}