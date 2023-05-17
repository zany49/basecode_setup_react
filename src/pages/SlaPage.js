import React, { useEffect,useState } from "react";
import MainTable from "../components/Tables/mtable";
import CusModal from "../components/modal/modal";



const SlaPage = ({}) => {
  const [slaData,setSlaData] = useState({
    serviceType: "",
    customerCode: "",
    SLAhours:0,
    country:"",
    origin_city:"",
    destination:"",
    id:`${Math.random(100000000 + Math.random() * 900000000)}`
  })
    const [tblData,setTblData] = useState([
      {
        serviceType: "AJEX DSD",
        customerCode: "AJ1000100011",
        SLAhours:4,
        country:"saudi",
        origin_city:"Riyadh",
        destination:"Dommam",
        id:`${Math.random(100000000 + Math.random() * 900000000)}`
      },
      {
        serviceType: "AJEX DD",
        customerCode: "AJ1000100033",
        SLAhours:15,
        country:"UAE",
        origin_city:"dubai",
        destination:"Sharjah",
        id:`${Math.random(100000000 + Math.random() * 900000000)}`
      }
    ]);

    const  [tblDataDup,setTblDataDup] = useState(tblData)

    const captureData = (key,value)=>{
      console.log(key,value)
      setSlaData((prevState) => ({
        ...prevState,
        [key]: value,
      }));
    }

    const saveData = (e)=>{
      e.preventDefault();
      setTblData([...tblData,slaData]);
    }

    
  const updateName = (key,value,id) => {
    console.log("tblDataDup------>",tblDataDup)
    setTblDataDup(prevState => {
        return prevState.map(item => {
          if (item.id === id) {
            return { ...item, [key]: value };
          }
          return item;
        });
      });
    };
  
    const saveChange = (e)=>{
      e.preventDefault();
      setTblData(tblDataDup)
    }
    const cancleChange = ()=>{
      setTblDataDup(tblData)
    }
  return (
    <>
      <div className="whiteFrame">
      <div className="displayFlex alignItemCenter justifyContent_end gap_16 mb_24">
        <CusModal title="Add New SLA" btnName="Add" setStateData={captureData} initialData={slaData} submit={saveData}/>
      </div>
      <MainTable tableData={tblData} tblDataDup={tblDataDup} tbl="sla" updateName={updateName} submit={saveChange} cancleChange={cancleChange}/>
      </div>
    
    </>
  );
};

export default SlaPage;
