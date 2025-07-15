import React from "react";
import { Star, Crown } from "lucide-react";

const TopUsers = ({ topUsers }) => {
  if (topUsers.length === 0) return null;

  return (
    <div className="px-4 py-4">
      <div className="bg-white rounded-2xl p-8">
        <div className="flex justify-center items-end space-x-14">
          {/* 2nd Place */}
          {topUsers[1] && (
            <div className="flex flex-col items-center">
              <div className="relative">
                <div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center text-white font-bold text-xl mb-2">
                  {topUsers[1].avatar}
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
              </div>
              <span className="text-sm font-medium">{topUsers[1].name}</span>
              <div className="flex items-center space-x-1 mt-1">
                <div className="w-4 h-4 bg-pink-500 rounded-full flex items-center justify-center">
                  <Star className="w-3 h-3 text-white" />
                </div>
                <span className="text-lg font-bold text-purple-600">
                  {topUsers[1].points}
                </span>
              </div>
            </div>
          )}

          {/* 1st Place */}
          {topUsers[0] && (
            <div className="flex flex-col items-center">
              <div className="relative">
                <div className="w-24 h-24 rounded-full bg-yellow-400 flex items-center justify-center text-white font-bold text-2xl mb-2">
                  {topUsers[0].avatar}
                </div>
                <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center">
                  <span className="text-white font-bold">
                    <Crown />
                  </span>
                </div>
              </div>
              <span className="text-sm font-medium">{topUsers[0].name}</span>
              <div className="flex items-center space-x-1 mt-1">
                <div className="w-4 h-4 bg-pink-500 rounded-full flex items-center justify-center">
                  <Star className="w-3 h-3 text-white" />
                </div>
                <span className="text-lg font-bold text-purple-600">
                  {topUsers[0].points}
                </span>
              </div>
            </div>
          )}

          {/* 3rd Place */}
          {topUsers[2] && (
            <div className="flex flex-col items-center">
              <div className="relative">
                <div className="w-20 h-20 rounded-full bg-orange-400 flex items-center justify-center text-white font-bold text-xl mb-2">
                  {topUsers[2].avatar}
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-orange-400 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
              </div>
              <span className="text-sm font-medium">{topUsers[2].name}</span>
              <div className="flex items-center space-x-1 mt-1">
                <div className="w-4 h-4 bg-pink-500 rounded-full flex items-center justify-center">
                  <Star className="w-3 h-3 text-white" />
                </div>
                <span className="text-lg font-bold text-purple-600">
                  {topUsers[2].points}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopUsers;
