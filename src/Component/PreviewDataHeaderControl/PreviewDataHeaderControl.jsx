import React from "react";
import { useSelector } from "react-redux";
import GetDataFromStore from "../GetDataFromStore/GetDataFromStore";

const PreviewDataHeaderControl = () => {
  const flight = useSelector((state) => state);
  console.log(flight.booking);
  return <div>{flight.booking.length !== 0 && <GetDataFromStore />}</div>;
};

export default PreviewDataHeaderControl;
