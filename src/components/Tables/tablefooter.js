import React, { useEffect } from "react";


const TableFooter = ({ range, setPage, page, slice,setRowsPerPage,rowsPerPage }) => {
  useEffect(() => {
    if (slice.length < 1 && page !== 1) {
      setPage(page - 1);
    }
  }, [slice, page, setPage]);
  return (
    <div>
      {range.map((el, index) => {
        console.log("el----->",el)
        return(
        <button
          key={index}
          onClick={() => setPage(el)}
        >
          {el}
        </button>
        //  className={`${styles.button} ${
        //     page === el ? styles.activeButton : styles.inactiveButton
        //   }`})
        )})}  

         

    </div>
  );
};

export default TableFooter;



