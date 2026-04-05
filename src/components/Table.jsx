import { useEffect, useState } from "react";
import axios from "axios";

const Table = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const rowsPerPage = 5;

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setData(res.data));
  }, []);

  const filtered = data.filter((item) => {
    const customId = 1000 + item.id;
    return (
      customId.toString().includes(search) ||
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.email.toLowerCase().includes(search.toLowerCase()) ||
      item.company.name.toLowerCase().includes(search.toLowerCase())
    );
  });

  const totalPages = Math.ceil(filtered.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const paginatedData = filtered.slice(startIndex, startIndex + rowsPerPage);

  const deleteRow = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <div className="w-full">
      <h1 className="text-2xl md:text-4xl mb-5 text-[#00284c] font-bold">
        Captured PD Images
      </h1>

      <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm overflow-hidden border border-slate-200">
        {/* Search Header */}
        <div className="flex justify-end mb-6">
          <input
            type="text"
            placeholder="Search..."
            className="w-full sm:w-80 border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all text-sm"
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>

        {/* Industry Standard Responsive Table Container */}
        <div className="md:overflow-hidden overflow-visible">
          <table className="min-w-full text-left md:table block">
            <thead className="border-b md:table-header-group hidden">
              <tr className="text-gray-600 text-sm font-semibold">
                <th className="py-4 pr-4">Photo</th>
                <th className="py-4 pr-4">ID</th>
                <th className="py-4 pr-4">Name</th>
                <th className="py-4 pr-4">Email</th>
                <th className="py-4 pr-4">Company</th>
                <th className="py-4 text-right">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-300 md:table-row-group block">
              {paginatedData.map((row) => (
                <tr
                  key={row.id}
                  className="hover:bg-gray-50 transition-colors cursor-default md:table-row block p-4 md:p-0 border-b border-slate-300 space-y-3 md:space-y-0"
                >
                  <td className="md:py-4 py-2 md:pr-4 md:table-cell flex justify-between items-center text-sm">
                    <span className="md:hidden font-semibold text-gray-500 uppercase text-[11px]">Photo</span>
                    <div className="relative h-12 w-12 flex-shrink-0">
                      <img
                        loading="lazy"
                        src={`https://i.pravatar.cc/150?u=${row.email}`}
                        alt={row.name}
                        className="h-full w-full rounded-full object-cover border-2 border-white shadow-sm"
                      />
                    </div>
                  </td>
                  <td className="md:py-4 py-2 md:pr-4 md:table-cell flex justify-between items-center text-sm text-gray-700">
                    <span className="md:hidden font-semibold text-gray-500 uppercase text-[11px]">ID</span>
                    <span className="font-medium">{1000 + row.id}</span>
                  </td>
                  <td className="md:py-4 py-2 md:pr-4 md:table-cell flex justify-between items-center text-sm text-gray-800">
                    <span className="md:hidden font-semibold text-gray-500 uppercase text-[11px]">Name</span>
                    <span className="font-medium">{row.name}</span>
                  </td>
                  <td className="md:py-4 py-2 md:pr-4 md:table-cell flex justify-between items-center text-sm text-gray-500">
                    <span className="md:hidden font-semibold text-gray-500 uppercase text-[11px]">Email</span>
                    <span className="truncate max-w-[200px]">{row.email}</span>
                  </td>
                  <td className="md:py-4 py-2 md:pr-4 md:table-cell flex justify-between items-center text-sm text-gray-500">
                    <span className="md:hidden font-semibold text-gray-500 uppercase text-[11px]">Company</span>
                    <span className="truncate max-w-[150px]">{row.company.name}</span>
                  </td>

                  <td className="md:py-4 py-2 md:table-cell block text-right">
                    <div className="flex items-center justify-end gap-3">
                      <button className="px-5 py-2 border border-blue-400 text-blue-600 rounded-full hover:bg-blue-500 hover:text-white transition-all whitespace-nowrap text-sm font-medium">
                        Test again
                      </button>

                      <button
                        onClick={() => deleteRow(row.id)}
                        className="flex items-center gap-2 px-3 py-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors font-medium text-sm"
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M3 6h18m-2 0v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6m3 0V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                        </svg>
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination - Responsive Layout */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-8 gap-4 text-sm">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="w-full sm:w-auto px-6 py-2.5 border rounded-3xl disabled:opacity-50 text-black hover:bg-blue-500 hover:text-white transition-colors text-sm font-medium"
          >
            Previous
          </button>

          <div className="flex items-center gap-1.5 overflow-x-auto py-1 no-scrollbar">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`min-w-[36px] h-[36px] flex items-center justify-center border rounded-full transition-all text-xs font-semibold ${
                  currentPage === index + 1
                    ? "bg-blue-500 text-white border-blue-500 shadow-md"
                    : "border-gray-200 text-gray-600 hover:bg-gray-50 bg-white"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="w-full sm:w-auto px-6 py-2.5 border rounded-3xl disabled:opacity-50 text-black hover:bg-blue-500 hover:text-white transition-colors text-sm font-medium"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Table;
