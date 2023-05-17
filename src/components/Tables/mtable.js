import { useEffect, useState } from "react";
import TableFooter from "./tablefooter";
import useTable from "./hook/tableRange";
import Pagination from "react-js-pagination";
import CusModal from "../modal/modal";

const MainTable = ({ tableData, tbl, restrict,updateName,tblDataDup,submit,cancleChange }) => {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [show, setShow] = useState(Math.ceil(tableData.length / 5));
  const [mul, setMul] = useState([]);
  const { slice, range } = useTable(tableData, page, rowsPerPage);
  const [customdropdownOne, setCustomdropdownone] = useState(null);
  

  const handlePageChange = (e) => {
    setPage(e);
  };

  const loop = () => {
    let ddata = [];
    for (let a = 1; a <= show; a++) {
      console.log(a);
      ddata.push(a);
    }
    setMul(ddata);
  };



  useEffect(() => {
    if (show) {
      loop();
    }
  }, []);


  return (
    <>
      <div className="table_wrapper overflowScroll mb_24">
        <table>
          <thead>
            <tr>
              {tbl === "onDemand" ? (
                <>
                  <th className="fixedCol col_no zIndex999">#</th>
                  {!restrict?.includes("waybillnumber") && (
                    <th className="fixedCol col_Firstname zIndex999">
                      Waybill Number
                    </th>
                  )}
                  {!restrict?.includes("bookingHub") && <th>Booking Hub</th>}
                  {!restrict?.includes("deliveryHub") && <th>Delivery Hub</th>}
                  {!restrict?.includes("creationTime") && (
                    <th>Creation Time</th>
                  )}
                  {!restrict?.includes("pickUpTime") && <th>Pick up Time</th>}
                  {!restrict?.includes("pickby") && <th>Picked By</th>}
                  {!restrict?.includes("OfdTime") && <th>OFD Time</th>}
                  {!restrict?.includes("deliveredBy") && <th>Delivered By</th>}
                  {!restrict?.includes("deliveryTime") && (
                    <th>Delivery Time</th>
                  )}
                  {!restrict?.includes("serviceType") && <th>Service Type</th>}
                  {!restrict?.includes("status") && <th>Status</th>}
                  {!restrict?.includes("sla") && <th>SLA</th>}
                  {!restrict?.includes("customerName") && (
                    <th>Customer Name</th>
                  )}
                  {!restrict?.includes("customerCode") && (
                    <th>Customer code</th>
                  )}
                  {!restrict?.includes("timeSinceCreation") && (
                    <th>Time Since Order Creation</th>
                  )}
                  {!restrict?.includes("timeSincePickup") && (
                    <th>Time Since Pick up</th>
                  )}
                  {!restrict?.includes("pickupDuration") && (
                    <th>Pickup Duration</th>
                  )}
                  {!restrict?.includes("deliveryDuration") && (
                    <th>Delivery Duration</th>
                  )}
                </>
              ) : tbl === "sla" ? (
                <>
                <th>Service Type</th>
                <th>Customer Code</th>
                <th>SLA Hours</th>
                <th>Country</th>
                <th>Origin City</th>
                <th>Destination City</th>
                </>
              ): (
                <td className="textAlignCenter" colSpan={19}>No Data</td>
              )}
            </tr>
          </thead>
          <tbody>
            {slice?.length > 0 ? (
              slice.map((e, i) => {
                return (
                  <>
                
                      {tbl === "onDemand" ? (
                        <>
                          <tr key={e.id}>
                          <td className="fixedCol col_no" scope="row">
                            {i + 1}
                          </td>
                          {!restrict?.includes("waybillnumber") && (
                            <td className="fixedCol col_Firstname" scope="row">
                              {e.waybillnumber}
                            </td>
                          )}
                          {!restrict?.includes("bookingHub") && (
                            <td>{e.bookingHub}</td>
                          )}
                          {!restrict?.includes("deliveryHub") && (
                            <td>{e.deliveryHub}</td>
                          )}
                          {!restrict?.includes("creationTime") && (
                            <td>
                              {new Date(e?.creationTime)?.toLocaleDateString()}
                            </td>
                          )}
                          {!restrict?.includes("pickUpTime") && (
                            <td>{e.pickUpTime}</td>
                          )}
                          {!restrict?.includes("pickby") && <td>{e.pickby}</td>}
                          {!restrict?.includes("OfdTime") && (
                            <td>{e.OfdTime}</td>
                          )}
                          {!restrict?.includes("deliveredBy") && (
                            <td>{e.deliveredBy}</td>
                          )}
                          {!restrict?.includes("deliveryTime") && (
                            <td>{e.deliveryTime}</td>
                          )}
                          {!restrict?.includes("serviceType") && (
                            <td>{e.serviceType}</td>
                          )}
                          {!restrict?.includes("status") && <td>{e.status}</td>}
                          {!restrict?.includes("sla") && <td>{e.sla}</td>}
                          {!restrict?.includes("customerName") && (
                            <td>{e.customerName}</td>
                          )}
                          {!restrict?.includes("customerCode") && (
                            <td>{e.customerCode}</td>
                          )}
                          {!restrict?.includes("timeSinceCreation") && (
                            <td>{e.timeSinceCreation}</td>
                          )}
                          {!restrict?.includes("timeSincePickup") && (
                            <td>{e.timeSincePickup}</td>
                          )}
                          {!restrict?.includes("pickupDuration") && (
                            <td>{e.pickupDuration}</td>
                          )}
                          {!restrict?.includes("deliveryDuration") && (
                            <td>{e.deliveryDuration}</td>
                          )}
                       </tr>
                        </>
                      ) :tbl === "sla" ? (
                        <>
                        <CusModal key={e.id} btnName="" title="View SLA" initialData={tblDataDup[i]}  setStateData={updateName} submit={submit} cancleChange={cancleChange}>
                        <td>{e.serviceType}</td>
                        <td>{e.customerCode}</td>
                        <td>{e.SLAhours}</td>
                        <td>{e.country}</td>
                        <td>{e.origin_city}</td>
                        <td>{e.destination}</td>
                        </CusModal>
                        </>
                      ) : (
                        <></>
                      )}
                  </>
                );
              })
            ) : (
              <>
                <tr>
                  <td>No Data</td>
                </tr>
              </>
            )}
          </tbody>
        </table>
      </div>
      {/* <TableFooter range={range} slice={slice} setPage={setPage} page={page} setRowsPerPage={setRowsPerPage} rowsPerPage={rowsPerPage}/> */}

      <div className="displayFlex alignItemCenter justifyContent_spacebetween">
        <div></div>
        <div className="displayFlex gap_16 alignItemCenter">
          <label className="fontSize14 blackText mb_12">Show </label>
          <div>
          <div className="positionRelative">
          <input type="text" placeholder={rowsPerPage} className="seletDropdownIcOnPage"
                   onClick={() => setCustomdropdownone(!customdropdownOne)}
                  />
                   
                    {customdropdownOne && (
                     mul.map((d) => {
                var count = 5
                if(d > 2 ){
                  count = 10
                }
                return (
                  <>
                    <div className="dropdownResult"  onClick={() => {
                    setRowsPerPage(d*count);
                    setCustomdropdownone(!customdropdownOne)
                  }}>
                    <div className="showPerItem">{d * count}</div></div>
                  </>
                );
              }))}
              </div>
                
          </div>
        </div>
        <div className="customPagination">
          <Pagination
            activePage={page}
            itemsCountPerPage={Number(rowsPerPage)}
            totalItemsCount={tableData.length}
            pageRangeDisplayed={5}
            onChange={handlePageChange}
          />
        </div>
      </div>
    </>
  );
};

export default MainTable;
