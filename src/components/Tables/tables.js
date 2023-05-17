import {useState} from "react"





const CusTable = ({tableData})=>{

const [column,SetCoulmn] = useState([])

 if(tableData.length>0 && column.length == 0){
    SetCoulmn(Object.keys(tableData[0]));
 }

 const ThData =()=>{
    
     return column.map((data)=>{
         return <th key={data}>{data}</th>
     })
 }

const tdData =() =>{
   
     return tableData.map((data)=>{
       return(
           <tr>
                {
                   column.map((v)=>{
                       return <td>{data[v]}</td>
                   })
                }
           </tr>
       )
     })
}
  return (
    <>
    <div style={{overflowX:"auto"}}>
      <table className="table">
        <thead>
         <tr>{ThData()}</tr>
        </thead>
        <tbody>
        {tdData()}
        </tbody>
       </table>
       </div>
       </>
  )

}




export default  CusTable;