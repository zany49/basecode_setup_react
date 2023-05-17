import React, { useEffect, useState, useRef } from "react";
import { useAoneStore } from "../store/AoneStore";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import CusTable from "../components/Tables/tables";
import MainTable from "../components/Tables/mtable";
import Select from "react-select";
import { DateRangePicker } from "rsuite";
import exportFromJSON from "export-from-json";
import EyeHide from "../assets/img/eye_hide.svg";
import DotboldIcon from "../assets/img/dotsbold.svg";

import Dropdown from "react-bootstrap/Dropdown";

const Ondemand = ({}) => {
  const getDashboardDummy = useAoneStore((state) => state?.getDummy);
  const getDashboardData = useAoneStore((state) => state?.userData);
  const [customerCode, setCustomerCode] = useState("");
  const [statusFil, setStatusFil] = useState("");
  const [wayBill, setWaybill] = useState([]);
  const [wayBillString, setWaybillString] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [dateRange, setDateRange] = useState([]);
  const [dateRangefil, setDateRangefil] = useState([]);
  const ref = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const fileName = "onDemandDetails";
  const exportType = "csv";
  const [column, SetCoulmn] = useState([]);
  const [checkedCol, setCheckedCol] = useState([]);
  const [customdropdownOne, setCustomdropdownone] = useState(null);

  var data = [
    {
      waybillnumber: "123456422",
      bookingHub: "Main hub",
      deliveryHub: "hub 10",
      creationTime: "05/08/2023",
      pickUpTime: "08-05-2023-12:03hrs",
      pickby: "ajex v1",
      OfdTime: "08-05-2023-12:03hrs",
      deliveredBy: "delguy1",
      deliveryTime: "12-05-2023",
      serviceType: "Air Ways",
      status: "onProgress",
      sla: "du121111111",
      customerName: "mark",
      customerCode: "du1",
      timeSinceCreation: "19:18hrs",
      timeSincePickup: "12:03hrs",
      pickupDuration: "12:03hrs",
      deliveryDuration: "12hrs",
    },
    {
      waybillnumber: "123456322",
      bookingHub: "Branch hub",
      deliveryHub: "hub 05",
      creationTime: "05/07/2023",
      pickUpTime: "09-05-2023-12:03hrs",
      pickby: "ajex v2",
      OfdTime: "08-05-2023-12:03hrs",
      deliveredBy: "delguy2",
      deliveryTime: "14-05-2023",
      serviceType: "Sea Ways",
      status: "deliverd",
      sla: "du131111111111111",
      customerName: "antony",
      customerCode: "du12",
      timeSinceCreation: "21:02hrs",
      timeSincePickup: "12:03hrs",
      pickupDuration: "12:03hrs",
      deliveryDuration: "20hrs",
    },
    {
      waybillnumber: "123456522",
      bookingHub: "Branch hub",
      deliveryHub: "hub 05",
      creationTime: "05/10/2023",
      pickUpTime: "09-05-2023-12:03hrs",
      pickby: "ajex v2",
      OfdTime: "08-05-2023-12:03hrs",
      deliveredBy: "delguy2",
      deliveryTime: "14-05-2023",
      serviceType: "Sea Ways",
      status: "deliverd",
      sla: "du131111111111111",
      customerName: "antony",
      customerCode: "dup12",
      timeSinceCreation: "21:02hrs",
      timeSincePickup: "12:03hrs",
      pickupDuration: "12:03hrs",
      deliveryDuration: "20hrs",
    },
    {
      waybillnumber: "123456622",
      bookingHub: "Branch hub",
      deliveryHub: "hub 05",
      creationTime: "05/10/2023",
      pickUpTime: "09-05-2023-12:03hrs",
      pickby: "ajex v2",
      OfdTime: "08-05-2023-12:03hrs",
      deliveredBy: "delguy2",
      deliveryTime: "14-05-2023",
      serviceType: "Sea Ways",
      status: "deliverd",
      sla: "du131111111111111",
      customerName: "antony",
      customerCode: "dup12",
      timeSinceCreation: "21:02hrs",
      timeSincePickup: "12:03hrs",
      pickupDuration: "12:03hrs",
      deliveryDuration: "20hrs",
    },
    {
      waybillnumber: "123456722",
      bookingHub: "Branch hub",
      deliveryHub: "hub 05",
      creationTime: "05/10/2023",
      pickUpTime: "09-05-2023-12:03hrs",
      pickby: "ajex v2",
      OfdTime: "08-05-2023-12:03hrs",
      deliveredBy: "delguy2",
      deliveryTime: "14-05-2023",
      serviceType: "Sea Ways",
      status: "deliverd",
      sla: "du131111111111111",
      customerName: "antony",
      customerCode: "dup12",
      timeSinceCreation: "21:02hrs",
      timeSincePickup: "12:03hrs",
      pickupDuration: "12:03hrs",
      deliveryDuration: "20hrs",
    },
    {
      waybillnumber: "123456822",
      bookingHub: "Branch hub",
      deliveryHub: "hub 05",
      creationTime: "05/10/2023",
      pickUpTime: "09-05-2023-12:03hrs",
      pickby: "ajex v2",
      OfdTime: "08-05-2023-12:03hrs",
      deliveredBy: "delguy2",
      deliveryTime: "14-05-2023",
      serviceType: "Sea Ways",
      status: "deliverd",
      sla: "du131111111111111",
      customerName: "antony",
      customerCode: "dup12",
      timeSinceCreation: "21:02hrs",
      timeSincePickup: "12:03hrs",
      pickupDuration: "12:03hrs",
      deliveryDuration: "20hrs",
    },
  ];

  if (data.length > 0 && column.length == 0) {
    SetCoulmn(Object.keys(data[0]));
  }

  const fil = (data) => {
    return data?.filter((d) => {
      console.log("data--->", d, d["customerCode"].includes(customerCode));
      return (
        (customerCode?.length === 0
          ? d?.customerCode?.includes("")
          : d["customerCode"]?.includes(customerCode?.toLowerCase())) &&
        (statusFil?.length === 0
          ? d?.status?.includes("")
          : d["status"]?.includes(statusFil)) &&
        (wayBill?.length === 0
          ? d?.waybillnumber?.includes("")
          : wayBill.some((key) => d["waybillnumber"].includes(key))) &&
        (serviceType?.length === 0
          ? d?.serviceType?.includes("")
          : d["serviceType"]
              ?.toLowerCase()
              ?.includes(serviceType?.toLowerCase())) &&
        (dateRangefil.length === 0
          ? d?.creationTime?.includes("")
          : new Date(d?.creationTime)?.toLocaleDateString() >=
              dateRangefil.start &&
            new Date(d?.creationTime)?.toLocaleDateString() <= dateRangefil.end)
      );
    });
  };

  const waybilSelect = () => {
    var waybilOption = [];
    for (let i = 0; i <= data.length; i++) {
      waybilOption.push({
        value: data[i]?.waybillnumber,
        label: data[i]?.waybillnumber,
      });
    }
    return waybilOption;
  };

  const waybilChange = (e) => {
    console.log("e---->", e);
    let newArray = [];
    for (let i = 0; i < e.length; i++) {
      newArray.push(e[i].label);
    }
    setWaybill(newArray);
  };
  const handleDateRangeChange = (value) => {
    if (value !== null) {
      setDateRange(value);
      setDateRangefil({
        start: value[0].toLocaleDateString(),
        end: value[1].toLocaleDateString(),
      });
    } else {
      setDateRange([]);
      setDateRangefil([]);
    }
  };

  const exportToExcel = () => {
    exportFromJSON({ data, fileName, exportType });
  };

  const handleSelect = (d) => {
    let val = checkedCol.includes(d);
    if (val === true) {
      // alert("true")
      setCheckedCol(checkedCol.filter((dat) => dat !== d));
    } else {
      setCheckedCol([...checkedCol, d]);
    }
  };

  useEffect(() => {
    // getDashboardDummy();
    console.log("getDashboardData---->", getDashboardData);
  }, []);

  return (
    <div className="whiteFrame">
      {/* <Container> */}
      <div className="mb_24">
        <Row>
          <Col>
            <div>
              <label className="fontSize14 mb_12">Waybill Number</label>
              <div className="customSelect">
                <Select
                  options={waybilSelect()}
                  placeholder="Search"
                  isMulti
                  hideSelectedOptions={false}
                  closeMenuOnSelect={true}
                  onChange={waybilChange}
                  components={{
                    DropdownIndicator: () => (
                      <>
                        <i class="fa fa-search icon" aria-hidden="true"></i>
                      </>
                    ),
                    Menu: () => <></>,
                  }}
                />
                {/* IndicatorSeparator:() => null,   */}
              </div>
            </div>
          </Col>
          <Col>
            <div>
              <label className="fontSize14 mb_12">Service Type </label>

              <div className="smallGroupInput">
                <div className="smallGroup-prepent">
                  <span className="smallGroupText">
                    <i
                      class="fa fa-search"
                      style={{ color: "#7a869a" }}
                      aria-hidden="true"
                    ></i>
                  </span>
                </div>
                <input
                  type="text"
                  placeholder="Search"
                  value={serviceType}
                  onChange={(e) => {
                    setServiceType(e.target.value);
                  }}
                />
              </div>
            </div>
          </Col>

          <Col>
            <div>
              <label className="fontSize14 mb_12">Customer Code </label>

              <div className="smallGroupInput">
                <div className="smallGroup-prepent">
                  <span className="smallGroupText">
                    <i
                      class="fa fa-search"
                      style={{ color: "#7a869a" }}
                      aria-hidden="true"
                    ></i>
                  </span>
                </div>
                <input
                  type="text"
                  placeholder="Search"
                  value={customerCode}
                  onChange={(e) => {
                    setCustomerCode(e.target.value);
                  }}
                />
              </div>
            </div>
          </Col>
          <Col>
            <div>
              <label className="fontSize14 mb_12">Status </label>

              <div className="positionRelative">
                <input
                  type="text"
                  placeholder={statusFil === "" ? "Select Status" : statusFil}
                  className="seletDropdownIcOn"
                  onClick={() => setCustomdropdownone(!customdropdownOne)}
                />
                {customdropdownOne && (
                  <div className="dropdownResult">
                    <div
                      className="dropdownResultItem"
                      onClick={() => {
                        setStatusFil("onProgress");
                        setCustomdropdownone(!customdropdownOne);
                      }}
                    >
                      onProgress
                    </div>
                    <div
                      className="dropdownResultItem"
                      onClick={(e) => {
                        setStatusFil("deliverd");
                        setCustomdropdownone(!customdropdownOne);
                      }}
                    >
                      Deliverd
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Col>
          <Col>
            <div>
              <label className="fontSize14 mb_12">Select Date Range</label>
              <div className="customDateRange">
                <DateRangePicker
                  placeholder="Select Date Range"
                  value={dateRange}
                  onChange={handleDateRangeChange}
                  placement="auto"
                />
              </div>
            </div>
          </Col>
        </Row>
      </div>

      <div className="displayFlex alignItemCenter justifyContent_end gap_16 mb_24">
        <div>
          <button onClick={exportToExcel} className="filterBtn">
            Export CSV
          </button>
        </div>
        <div ref={ref} className="customFilter">
          <Dropdown autoClose="outside">
            <Dropdown.Toggle id="dropdown-basic">
              <img src={DotboldIcon} />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>
                <ul className="listColumn">
                  {column.map((d, i) => {
                    return (
                      <>
                        <li key={d}>
                          <div class="smallCheckbox mb_4">
                            <input
                              id={`product${i}`}
                              type="checkbox"
                              checked={checkedCol?.includes(d)}
                            />

                            <label
                              htmlFor={`product${i}`}
                              onClick={() => handleSelect(d)}
                            >
                              {" "}
                              {d}{" "}
                            </label>
                          </div>
                        </li>
                      </>
                    );
                  })}
                </ul>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      {/* </Container> */}

      {/* <CusTable tableData={data} /> */}
      <MainTable tableData={fil(data)} tbl="onDemand" restrict={checkedCol} />
    </div>
  );
};

export default Ondemand;
