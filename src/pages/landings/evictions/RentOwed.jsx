"use client";

import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

export default function RentOwed() {
  const [rentOwed, setRentOwed] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.sheety.co/2996d79e2117ff0d746768a9b29ec03c/evictionNoticesAnalysisMonthly/rentOwed"
      )
      .then((response) => {
        const data = response.data.rentOwed;
        // console.log("rent owed", data);
        setRentOwed(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div>
      <div className="bg-white p-2">
        <table className="table-auto w-full">
          <thead
            className=" text-black font-bold text-3xl"
            style={{ border: "1px solid black", backgroundColor: "#41ffca" }}
          >
            <tr>
              <th
                className="text-black p-2 text-center"
                style={{ border: "1px solid black" }}
                colSpan="3" // Set colspan to cover 3 columns
              >
                Eviction Notices for Non-Payment of Rent
                <br />
                Total Rent Owed
              </th>
            </tr>
          </thead>
          <thead
            className="text-black"
            style={{ border: "1px solid black", backgroundColor: "#41ffca" }}
          >
            <tr>
              <th
                className="text-black p-2 text-left text-xl"
                style={{ border: "1px solid black" }}
              >
                Rent Owed ($)
              </th>
              <th
                className="text-black p-2 text-left text-xl"
                style={{ border: "1px solid black" }}
              >
                # of Eviction Notices
              </th>
              <th
                className="text-black p-2 text-xl"
                style={{ border: "1px solid black" }}
              >
                Total
              </th>
            </tr>
          </thead>
          <tbody className="text-black" style={{ border: "1px solid black" }}>
            {rentOwed.map((row) => (
              <tr key={row.id}>
                <td
                  className="text-black p-2 font-bold text-xl"
                  style={{ border: "1px solid black" }}
                >
                  {row["rentOwed ($)"]}
                </td>
                <td
                  className={`text-black p-2 text-xl ${row["#OfEvictionNotices"] === 48058 ? "font-bold" : ""}`}
                  style={{ border: "1px solid black" }}
                >
                  {row["#OfEvictionNotices"].toLocaleString()}
                </td>
                <td
                  className={`text-black p-2 text-right text-xl ${row.total === 186491100.99 ? "font-bold" : ""}`}
                  style={{ border: "1px solid black" }}
                >
                   $ {parseFloat(row.total).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
