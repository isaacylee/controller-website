"use client"
import { csvParse } from "d3";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

interface Data {
  year: string;
  category: string;
  desc: string;
  businessType: string;
  governmental: number;
  total: number;
}

interface OrganizedDataRow {
  description: string;
  [key: string]: string | number;
}

type TableColumn<T> = {
  name: string;
  selector?: keyof T | string;
  sortable?: boolean;
  center?: boolean;
  cell?: (row: T) => React.ReactNode;
  conditionalCellStyles?: {
    when: (row: T) => boolean;
    style: React.CSSProperties;
  }[];
};

const NetPositionChart: React.FC = () => {
  const [data, setData] = useState<Data[] | null>(null);

  function formatCurrency(number: number): string {
    const billion = 1e9;
    const formattedValue = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    }).format(number / billion);

    return formattedValue.replace("$", "") + "B";
  }

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response = await fetch(
          "/csvsforpafr23/6condensedstatementofnetposition1.csv"
        );
        const csvData = await response.text();
        const sanitizedCsvData = csvData.replace(/"(.*?)"/g, (_, g) =>
          g.replace(/,/g, "")
        );

        const dataArray: Data[] = csvParse(sanitizedCsvData, (d) => ({
          year: d.Year || '',
          category: d.Category || '',
          desc: d.Description || '',
          businessType: d['Business-Type'] || '',
          governmental: d.Governmental ? +d.Governmental.replace(/,/g, '') : 0,
          total: d.Total ? +d.Total.replace(/,/g, '').replace(/\(|\)/g, '') * (d.Total.includes('(') ? -1 : 1) : 0,
        }));
  
        const filteredData = dataArray.filter(
          (data) => data.year >= "2022" && data.year <= "2023"
        );
        setData(filteredData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const organizedData: OrganizedDataRow[] = (data ?? []).reduce(
    (acc, row) => {
      const description = row["desc"];
      const year = row["year"];
      const businessType = row["businessType"];
      const governmental = row["governmental"];
      const total = row["total"];

      const existingRow = acc.find(
        (item) => item["description"] === description
      );

      if (existingRow) {
        existingRow[`Business-Type-${year}`] = businessType;
        existingRow[`Governmental-${year}`] = governmental;
        existingRow[`Total-${year}`] = total;
      } else {
        const newRow: OrganizedDataRow = {
          description,
          [`Business-Type-${year}`]: businessType,
          [`Governmental-${year}`]: governmental,
          [`Total-${year}`]: total,
        };
        acc.push(newRow);
      }

      return acc;
    },
    [] as OrganizedDataRow[]
  );

  const columns: TableColumn<OrganizedDataRow>[] = [
    {
      name: "Assets",
      selector: "description",
    },
    {
      name: "FY 2023",
      selector: "Business-Type-2023",
      center: true,
      conditionalCellStyles: [
        {
          when: (row: OrganizedDataRow) => row["Business-Type-2023"] !== undefined,
          style: {
            backgroundColor: "#9db4e0",
          },
        },
        {
          when: (row: OrganizedDataRow) =>
            row["description"] === "Total assets" ||
            row["description"] === "Total liabilities" ||
            row["description"] === "Deferred outflows of resources" ||
            row["description"] === "Total net position" ||
            row["description"] === "Deferred inflows of resources",
          style: {
            backgroundColor: "#9db4e0",
            borderTop: "2px solid black",
            borderBottom: "2px solid black",
          },
        },
      ],
    },
    {
      name: "FY 2022",
      selector: "Business-Type-2022",
      center: true,
      conditionalCellStyles: [
        {
          when: (row: OrganizedDataRow) =>
            row["description"] === "Total assets" ||
            row["description"] === "Total liabilities" ||
            row["description"] === "Deferred outflows of resources" ||
            row["description"] === "Total net position" ||
            row["description"] === "Deferred inflows of resources",
          style: {
            borderTop: "2px solid black",
            borderBottom: "2px solid black",
          },
        },
      ],
    },
    {
      name: "FY 2023",
      selector: "Governmental-2023",
      center: true,
      conditionalCellStyles: [
        {
          when: (row: OrganizedDataRow) => row["Governmental-2023"] !== undefined,
          style: {
            backgroundColor: "#9db4e0",
          },
        },
        {
          when: (row: OrganizedDataRow) =>
            row["description"] === "Total assets" ||
            row["description"] === "Total liabilities" ||
            row["description"] === "Deferred outflows of resources" ||
            row["description"] === "Total net position" ||
            row["description"] === "Deferred inflows of resources",
          style: {
            backgroundColor: "#9db4e0",
            borderTop: "2px solid black",
            borderBottom: "2px solid black",
          },
        },
      ],
    },
    {
      name: "FY 2022",
      center: true,
      selector: "Governmental-2022",
      conditionalCellStyles: [
        {
          when: (row: OrganizedDataRow) =>
            row["description"] === "Total assets" ||
            row["description"] === "Total liabilities" ||
            row["description"] === "Deferred outflows of resources" ||
            row["description"] === "Total net position" ||
            row["description"] === "Deferred inflows of resources",
          style: {
            borderTop: "2px solid black",
            borderBottom: "2px solid black",
          },
        },
      ],
    },
    {
      name: "FY 2023",
      selector: "Total-2023",
      center: true,
      conditionalCellStyles: [
        {
          when: (row: OrganizedDataRow) => row["Total-2023"] !== undefined,
          style: {
            backgroundColor: "#9db4e0",
          },
        },
        {
          when: (row: OrganizedDataRow) =>
            row["description"] === "Total assets" ||
            row["description"] === "Total liabilities" ||
            row["description"] === "Deferred outflows of resources" ||
            row["description"] === "Total net position" ||
            row["description"] === "Deferred inflows of resources",
          style: {
            backgroundColor: "#9db4e0",
            borderTop: "2px solid black",
            borderBottom: "2px solid black",
          },
        },
      ],
    },
    {
      name: "FY 2022",
      center: true,
      selector: "Total-2022",
      conditionalCellStyles: [
        {
          when: (row: OrganizedDataRow) =>
            row["description"] === "Total assets" ||
            row["description"] === "Total liabilities" ||
            row["description"] === "Deferred outflows of resources" ||
            row["description"] === "Total net position" ||
            row["description"] === "Deferred inflows of resources",
          style: {
            borderTop: "2px solid black",
            borderBottom: "2px solid black",
          },
        },
      ],
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

export default NetPositionChart;
