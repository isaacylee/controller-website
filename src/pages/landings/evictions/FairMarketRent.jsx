"use client";

import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

export default function FairMarketRent() {
  const [fairMarket, setFairMarket] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.sheety.co/2996d79e2117ff0d746768a9b29ec03c/evictionNoticesAnalysisMonthly/fmr"
      )
      .then((response) => {
        const data = response.data.fmr;
        console.log("rent owed", data);
        setFairMarket(data);
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
                Number of Eviction Notices - Rent Owed
                <br />
                Under the Fair Market Rent Limit
              </th>
            </tr>
          </thead>
          <thead
            className="text-black"
            style={{ border: "1px solid black", backgroundColor: "#41ffca" }}
          >
            <tr>
              <th
                className="text-black p-2 text-xl"
                style={{ border: "1px solid black" }}
              >
                Bedroom Size
              </th>
              <th
                className="text-black p-2 text-xl"
                style={{ border: "1px solid black" }}
              >
                FMR
              </th>
              <th
                className="text-black p-2 text-xl"
                style={{ border: "1px solid black" }}
              >
                # of Notices
              </th>
            </tr>
          </thead>
          <tbody className="text-black" style={{ border: "1px solid black" }}>
            {fairMarket.map((row) => (
              <tr key={row.id}>
                <td
                  className="text-black p-2 font-bold text-xl"
                  style={{ border: "1px solid black" }}
                >
                  {row.bedroomSize}
                </td>
                <td
                  className='text-black p-2 text-xl'
                  style={{ border: "1px solid black" }}
                >
                  ${row.fmrLimit.toLocaleString()}
                </td>
                <td
                  className='text-black p-2 text-right text-xl'
                  style={{ border: "1px solid black" }}
                >
                  {row['#OfNotices'].toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
          <tbody className="text-black" style={{border: "1px solid black"}}>
            <tr>
                <td className="text-black p-2 font-bold text-xl" colSpan={2}>Total</td>
                <td className="text-right font-bold p-2 text-xl">6,062</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
