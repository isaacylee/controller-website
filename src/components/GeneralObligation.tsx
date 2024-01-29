"use client"
import { csvParse } from "d3";
import React, { useEffect, useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";

interface DataRow {
  "City's Debt Type": string;
  "Rating Agency": string;
  Rating: string;
  Year: string;
}

const MyTable: React.FC = () => {
  const [data, setData] = useState<DataRow[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "/csvsforpafr23/5ratingsofthecitydebtbyratingagencies.csv"
        );
        const csvData = await response.text();
        const sanitizedCsvData = csvData.replace(/"(.*?)"/g, (_, g) =>
          g.replace(/,/g, "")
        );

        const dataArray = csvParse(sanitizedCsvData, (d) => ({
          "City's Debt Type": d["Citys Debt Type"],
          "Rating Agency": d["Rating Agency"],
          Rating: d.Rating,
          Year: d.Year,
        })) as DataRow[];

        setData(dataArray);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const organizedData = (data ?? []).reduce(
    (acc, row) => {
      const description = row["City's Debt Type"];
      const ratingAgency = row["Rating Agency"];
      const Rating = row.Rating;

      const existingRow = acc.find(
        (item) => item["City's Debt Type"] === description
      );

      if (existingRow) {
        existingRow["Moody's Investors Service"] =
          ratingAgency === "Moody's Investors Service" ? Rating : existingRow["Moody's Investors Service"];
        existingRow["S&P Global Ratings"] =
          ratingAgency === "S&P Global Ratings" ? Rating : existingRow["S&P Global Ratings"];
        existingRow["Fitch Ratings"] =
          ratingAgency === "Fitch Ratings" ? Rating : existingRow["Fitch Ratings"];
        existingRow["Kroll Bond Rating Agency"] =
          ratingAgency === "Kroll Bond Rating Agency" ? Rating : existingRow["Kroll Bond Rating Agency"];
      } else {
        const newRow = {
          "City's Debt Type": description,
          "Moody's Investors Service": ratingAgency === "Moody's Investors Service" ? Rating : "n/a",
          "S&P Global Ratings": ratingAgency === "S&P Global Ratings" ? Rating : "n/a",
          "Fitch Ratings": ratingAgency === "Fitch Ratings" ? Rating : "n/a",
          "Kroll Bond Rating Agency": ratingAgency === "Kroll Bond Rating Agency" ? Rating : "n/a",
        };
        acc.push(newRow);
      }

      return acc;
    },
    [] as { [key: string]: string }[]
  );

  const columns: TableColumn<{ [key: string]: string }>[] = [
    {
      name: "Assets",
      selector: (row) => row["City's Debt Type"],
    },
    {
      name: "Moody's Investors Service",
      selector: (row) => row["Moody's Investors Service"],
      center: true,
    },
    {
      name: "S&P Global Ratings",
      selector: (row) => row["S&P Global Ratings"],
      center: true,
    },
    {
      name: "Fitch Ratings",
      selector: (row) => row["Fitch Ratings"],
      center: true,
    },
    {
      name: "Kroll Bond Rating Agency",
      selector: (row) => row["Kroll Bond Rating Agency"],
      center: true,
    },
  ];
  

  const customStyles = {
    rows: {
      style: {
        minHeight: "50px",
      },
    },
    headCells: {
      style: {
        paddingLeft: "8px",
        paddingRight: "8px",
        backgroundColor: "#f9f7f7",
        fontWeight: 700,
        fontSize: "18px",
      },
    },
    cells: {
      style: {
        paddingLeft: "8px",
        paddingRight: "8px",
        fontWeight: 500,
        fontSize: "15px",
      },
    },
  };

  return (
    <div style={{ width: "100%", height: "700px", overflowX: "auto" }}>
      {data && (
        <DataTable
          columns={columns}
          data={organizedData}
          customStyles={customStyles}
        />
      )}
    </div>
  );
};

export default MyTable;
