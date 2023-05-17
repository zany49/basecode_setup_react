import React, { useEffect,useState } from "react";


const AddnewSla = ({
  initialData,
  handleInputChange,
  onSub,
  handleClose,
  title,
  handleCancel
}) => {
    const[edit,setEdit] = useState(false)
    const[editCancel,setEditCancel] = useState(false)





    const editable = ()=>{
        setEdit(!edit)
        setEditCancel(!editCancel)
    }

    const subfun = (e)=>{
        onSub(e)
    }

  return (
    <>
      <form onSubmit={subfun}>
        <div className="row">
        <div className="col-md-6 mb_24">
          <label className="inputTitle">Service Type:</label>
          <input
            type="text"
            className="Maininput"
            placeholder="Service Type"
            value={initialData?.serviceType}
            onChange={(e) =>
              handleInputChange("serviceType", e, initialData.id)
            }
            disabled={(title == "View SLA" && edit == false) ? true:false}
          />
          </div>
          <div className="col-md-6 mb_24">
            <label className="inputTitle">Customer Code:</label>
            <input
              type="text"
              className="Maininput"
              placeholder="Customer Code"
              value={initialData?.customerCode}
              onChange={(e) =>
                handleInputChange("customerCode", e, initialData.id)
              }
              disabled={(title == "View SLA" && edit == false) ? true:false}
            />
          </div>
          <div className="col-md-6 mb_24">
            <label className="inputTitle">SLA Hours:</label>
            <input
              type="number"
              className="Maininput"
              placeholder="SLA Hours"
              value={initialData?.SLAhours}
              onChange={(e) => handleInputChange("SLAhours", e, initialData.id)}
              disabled={(title == "View SLA" && edit == false) ? true:false}
              max={24}
            />
          </div>
          <div className="col-md-6 mb_24">
            <label className="inputTitle">Country:</label>
            <input
              type="text"
              className="Maininput"
              placeholder="country"
              value={initialData?.country}
              onChange={(e) => handleInputChange("country", e, initialData.id)}
              disabled={(title == "View SLA" && edit == false) ? true:false}
            />
          </div>
          <div className="col-md-6 mb_24">
            <label className="inputTitle">Origin City:</label>
            <input
              type="text"
              className="Maininput"
              placeholder="Origin City"
              value={initialData?.origin_city}
              onChange={(e) =>
                handleInputChange("origin_city", e, initialData.id)
              }
              disabled={(title == "View SLA" && edit == false) ? true:false}
            />
          </div>
          <div className="col-md-6 mb_24">
            <label className="inputTitle">Desitination City:</label>
            <input
              type="text"
              className="Maininput"
              placeholder="Destination"
              value={initialData?.destination}
              onChange={(e) =>
                handleInputChange("destination", e, initialData.id)
              }
              disabled={(title == "View SLA" && edit == false) ? true:false}
            />
          </div>
        </div>
       {(title == "Add New SLA"|| edit == true ) &&(
        <>
         <div className="displayFlex alignItemCenter justifyContent_end gap_16">
            <div>
          <button type="reset" onClick={editCancel==true?handleCancel:handleClose} className="MainHoverbutton">
            Cancel
          </button>
          </div>
          <div>
          <button className="Mainbutton" type="submit">
            submit
          </button>
          </div>
        </div>
        </>)}
        </form>

        {(title == "View SLA" && edit == false) &&(
        <>
         <div className="displayFlex alignItemCenter justifyContent_end gap_16 mb_24">
          <button type="reset" onClick={handleCancel} className="MainHoverbutton">
            Cancel
          </button>{" "}
          <button className="Mainbutton" onClick={editable}>
            Edit
          </button>
        </div>
        </>)}
    </>
  );
};

export default AddnewSla;
