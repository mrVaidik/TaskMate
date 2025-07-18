import React from "react";

const Header = ({ onAddUser, onRefresh }) => {
  return (
    <div className="px-4 py-3 space-y-2">
      <button
        onClick={onAddUser}
        className="w-full bg-white rounded-full px-4 py-3 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg"
      >
        <svg
          className="w-5 h-5 text-blue-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
        <span className="text-sm font-medium text-gray-700">Add New User</span>
      </button>

      <button
        onClick={onRefresh}
        className="w-full bg-white rounded-full px-4 py-3 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg"
      >
        <svg
          className="w-4 h-4 text-green-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
        <span className="text-sm font-medium text-gray-700">
          Refresh Leaderboard
        </span>
      </button>
    </div>
  );
};

export default Header;
