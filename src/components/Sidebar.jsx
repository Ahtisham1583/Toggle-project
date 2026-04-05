// import { useUI } from "../context/UIContext";

// const Sidebar = () => {
//   const { isSidebarOpen, toggleSidebar } = useUI();

//   return (
//     <>
//       {/* Mobile Backdrop */}
//       {isSidebarOpen && (
//         <div
//           className="lg:hidden fixed inset-0 z-40 transition-opacity"
//           onClick={toggleSidebar}
//         />
//       )}

//       {/* Sidebar Container */}
//       <div
//         className={`
//         fixed lg:static top-0 left-0 h-screen lg:h-full z-50
//         w-64 bg-white border-r border-slate-200  transition-all duration-300 transform flex flex-col
//         ${isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
//       `}
//       >
//         <div className="lg:hidden flex justify-between items-center p-4 border-b">
//           <span className="font-bold text-[#0f2942]">Menu</span>
//           <button
//             onClick={toggleSidebar}
//             className="p-2 hover:bg-gray-100 rounded-full"
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           </button>
//         </div>

//         <div className="p-6 flex-1">
//           {/* Brand Header */}
//           <div className="mb-8 pl-1">
//             <h3 className="text-xl font-bold text-[#0f2942]">Admin Portal</h3>
//             <p className="text-[12px] text-gray-500 font-medium">
//               Management Dashboard
//             </p>
//           </div>

//           <div className="space-y-2">
//             {/* Active Item (Dashboard) */}
//             <div className="flex items-center gap-4 bg-[#eef4ff] text-[#3b82f6] px-4 py-2.5 rounded-full cursor-pointer transition-all">
//               <svg
//                 className="w-5 h-5 flex-shrink-0"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2.5"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <rect x="3" y="3" width="7" height="7" />
//                 <rect x="14" y="3" width="7" height="7" />
//                 <rect x="14" y="14" width="7" height="7" />
//                 <rect x="3" y="14" width="7" height="7" />
//               </svg>
//               <span className="font-semibold text-[15px]">Dashboard</span>
//             </div>

//             {/* Inactive Item (User Management) */}
//             <div className="flex items-center gap-4 text-[#4b5563] px-4 py-2.5 rounded-full cursor-pointer hover:bg-gray-50 transition-all group">
//               <svg
//                 className="w-5 h-5 flex-shrink-0 opacity-70 group-hover:opacity-100"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
//                 <circle cx="12" cy="7" r="4" />
//               </svg>
//               <span className="font-medium text-[15px]">User Management</span>
//             </div>
//           </div>
//         </div>

//         {/* Sidebar Footer */}
//         <div className="p-6 text-center mt-auto">
//           <p className="text-xs text-gray-400 font-medium">Admin Access</p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Sidebar;

import { useUI } from "../context/UIContext";

const Sidebar = () => {
  const { isSidebarOpen, toggleSidebar } = useUI();

  return (
    <>
      {/* Mobile Backdrop */}
      {isSidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/20 transition-opacity"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar Container */}
      <div
        className={`
          fixed lg:static top-0 left-0 h-screen lg:h-full z-50
          w-64 lg:w-60 bg-white border-r border-slate-200 transition-all duration-300 transform flex flex-col
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        <div className="lg:hidden flex justify-between items-center p-4 border-b">
          <span className="font-bold text-[#0f2942] text-lg">Menu</span>
          <button
            onClick={toggleSidebar}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="p-6 flex-1 flex flex-col">
          {/* Brand Header */}
          <div className="mb-8 pl-1">
            <h3 className="text-xl md:text-2xl font-bold text-[#0f2942]">
              Admin Portal
            </h3>
            <p className="text-[12px] sm:text-sm text-gray-500 font-medium">
              Management Dashboard
            </p>
          </div>

          <div className="space-y-2 flex-1">
            {/* Active Item */}
            <div className="flex items-center gap-4 bg-[#eef4ff] text-[#3b82f6] px-4 py-2.5 rounded-full cursor-pointer transition-all">
              <svg
                className="w-5 h-5 flex-shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
              </svg>
              <span className="font-semibold text-[15px]">Dashboard</span>
            </div>

            {/* Inactive Item */}
            <div className="flex items-center gap-4 text-[#4b5563] px-4 py-2.5 rounded-full cursor-pointer hover:bg-gray-50 transition-all group whitespace-nowrap">
              <svg
                className="w-5 h-5 flex-shrink-0 opacity-70 group-hover:opacity-100"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <span className="font-medium text-[15px] ">User Management</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 text-center mt-auto">
          <p className="text-xs sm:text-sm text-gray-400 font-medium">
            Admin Access
          </p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
