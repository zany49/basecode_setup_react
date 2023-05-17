import React, { useEffect,useState } from "react";
import Modal from "react-bootstrap/Modal";
import AddnewSla from "./bodyContent/Addsla";



const CusModal = ({children,title,btnName,setStateData,initialData,submit,cancleChange}) =>{
    const [show, setShow] = useState(false);

    const  handleShow = () => setShow(true);
    const handleClose = () => {
        setShow(false);

      }

      const handleCancel = () => {
        handleClose()
        cancleChange()
      }

      const handleInputChange = (key,e,id) => {
        const newName = e.target.value;
        if(title === "Add New SLA" ){
          setStateData(key,newName);
        }else{
          setStateData(key,newName,id);
        }
      };

      const onSub = (e)=>{
          submit(e)
        handleClose()
      }


    return(
        <>

        {btnName==""?(
          <tr onClick={handleShow}>
            {children}
          </tr>
        ):(
          <div>
          <button onClick={handleShow} className="filterBtn">
            {btnName}
          </button>
          </div>)}
        <>
             <Modal show={show} onHide={handleClose} className="addnewpopup" backdrop="static" centered>
          <Modal.Header closeButton>
            <h4 className="fontSize16 blackText fontWeight500">{title}</h4>
          </Modal.Header>

          <Modal.Body>
           <div>
           {title === "Add New SLA" || title === "View SLA" ? (
           <AddnewSla 
           initialData={initialData} 
           handleInputChange={handleInputChange} 
           onSub={onSub} 
           handleClose={handleClose}
           handleCancel={handleCancel}
           title={title}
           />)
           :(
            <>
            </>
           )}
           </div>
          </Modal.Body>
        </Modal>

        </>
        </>
    )
}

export default CusModal