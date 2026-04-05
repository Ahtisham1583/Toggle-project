import { useAuth } from "../context/AuthContext";
import { useUI } from "../context/UIContext";

const Header = () => {
  const { logout, user } = useAuth();
  const { toggleSidebar } = useUI();

  return (
    <div className="flex justify-between items-center px-4 md:px-8 py-3 md:py-4 bg-white border-b border-slate-200 sticky top-0 z-30">
      <div className="flex items-center gap-2 md:gap-4">
        <img
          className="h-8 md:h-12 w-auto object-contain"
          src="https://order-smudge-06651917.figma.site/_assets/v11/51065c5b526fd8409cf61c54c7aabcf93c2263bd.png"
          alt="Vision Essentials"
        />
      </div>

      <div className="flex items-center gap-3 md:gap-6">
        <p className="hidden sm:block text-[#0f2942] text-sm whitespace-nowrap">
          Signed in as: <span className="font-semibold">{user?.email}</span>
        </p>
        <button
          onClick={logout}
          className="px-4 md:px-8 py-1.5 md:py-2.5 border border-[#1a73e8] text-[#00284c] rounded-full 
             hover:bg-blue-600 hover:text-white transition-all font-bold text-xs md:text-sm flex items-center gap-2"
        >
          <span className="hidden md:inline">Logout</span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Header;
