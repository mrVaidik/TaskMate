import React, { useState } from "react";
import { Star } from "lucide-react";

const UserList = ({ otherUsers, sortedUsers, onGeneratePoints }) => {
  const [userView, setUserView] = useState(() => otherUsers.slice(0, 6));
  const [showAll, setShowAll] = useState(false);

  React.useEffect(() => {
    if (showAll) {
      setUserView(otherUsers);
    } else {
      setUserView(otherUsers.slice(0, 6));
    }
  }, [otherUsers, showAll]);

  const handleToggleView = () => {
    setShowAll(!showAll);
    if (!showAll) {
      setUserView(otherUsers);
    } else {
      setUserView(otherUsers.slice(0, 6));
    }
  };

  return (
    <div className="px-4 pb-20">
      <div className="bg-white rounded-2xl p-4">
        {otherUsers.length > 0 ? (
          <>
            {userView.map((user) => (
              <div
                key={user.userId}
                className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-lg font-medium w-8">{user.rank}</span>
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-orange-500 flex items-center justify-center">
                    <span className="text-white font-bold">{user.avatar}</span>
                  </div>
                  <span className="font-medium">{user.name}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => onGeneratePoints(user.userId)}
                    className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded text-xs"
                  >
                    Claim Points
                  </button>
                  <span className="font-bold text-lg">{user.points}</span>
                  <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            ))}
            {otherUsers.length > 6 && (
              <button
                onClick={handleToggleView}
                className="w-full text-center py-2 text-gray-500 text-sm hover:text-gray-700 transition-colors"
              >
                {showAll ? "Show Less" : `+${otherUsers.length - 6} more`}
              </button>
            )}
          </>
        ) : (
          <div className="text-center py-8 text-gray-500">
            {sortedUsers.length === 0
              ? "No users found. Add some users to get started!"
              : "All users are in the top 3!"}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserList;
