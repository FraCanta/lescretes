// components/Table.js
import { useState } from "react";

const Table = ({ headers, rows }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 4;

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = rows.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(rows.length / rowsPerPage);

  return (
    <div className="overflow-x-auto">
      <table className="hidden min-w-full divide-y divide-main/20 md:table">
        <thead className="bg-second">
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className="px-6 py-3 text-xs font-bold tracking-wider text-left uppercase text-main"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white">
          {currentRows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="px-6 py-4 text-sm text-main/80 whitespace-nowrap"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="block divide-y divide-main/20 md:hidden">
        {currentRows.map((row, rowIndex) => (
          <div key={rowIndex} className="gap-8 p-4 bg-white ">
            {row.map((cell, cellIndex) => (
              <div key={cellIndex} className="flex justify-between gap-4">
                <span className="font-semibold text-main">
                  {headers[cellIndex]}
                </span>
                <span className="text-main/80">{cell}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
      {rows.length > rowsPerPage && (
        <div className="flex justify-end mt-4 space-x-2">
          <button
            className="px-3 py-1 text-sm bg-white border rounded-md border-main/50 text-main disabled:opacity-50 hover:bg-main hover:text-white"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Precedente
          </button>
          <button
            className="px-3 py-1 text-sm bg-white border rounded-md border-main/50 hover:bg-main hover:text-white text-main disabled:opacity-50"
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            Successivo
          </button>
        </div>
      )}
    </div>
  );
};

export default Table;
