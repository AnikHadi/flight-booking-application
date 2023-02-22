import React from "react";
import { useSelector } from "react-redux";
import DataPreviewSection from "../DataPreviewSection/DataPreviewSection";

const GetDataFromStore = () => {
  const flight = useSelector((state) => state.booking);

  return (
    <div className="table-container">
      <table className="booking-table">
        <thead className="bg-gray-100/50">
          <tr className="text-black text-left">
            <th>Destination From</th>
            <th>Destination To</th>
            <th className="text-center">Journey Date</th>
            <th className="text-center">Guests</th>
            <th className="text-center">Class</th>
            <th className="text-center">Delete</th>
          </tr>
        </thead>
        {flight.map((flt) => (
          <DataPreviewSection key={flt.id} flight={flt} />
        ))}
      </table>
    </div>
  );
};

export default GetDataFromStore;
