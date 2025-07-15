import React from "react";

const Toast = ({ message, isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed top-4 right-4 z-50 bg-white border border-gray-200 rounded-lg shadow-lg p-4 max-w-sm">
      <div className="text-sm text-gray-700">{message}</div>
    </div>
  );
};

export default Toast;
