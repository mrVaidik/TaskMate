import React, { useState, useEffect } from "react";
import Toast from "./components/Toaster";
import Header from "./components/Header";
import TopUsers from "./components/TopUsers";
import UserList from "./components/UserList";
import AddUserModal from "./components/AddUserModal";
import { apiService } from "./services/apiService";
import { useToast } from "./hooks/useToast";
import {
  processUsersData,
  getTopUsers,
  getOtherUsers,
} from "./utils/userUtils";

const LiveRankingApp = () => {
  const [showModal, setShowModal] = useState(false);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const { message, showToast, isVisible } = useToast();

  // Fetch leaderboard data
  const fetchLeaderboard = async () => {
    const result = await apiService.fetchLeaderboard();
    if (result.success) {
      setUsers(result.data);
    } else {
      showToast(result.error, "error");
    }
  };

  useEffect(() => {
    fetchLeaderboard();
  }, []);

  const handleAddUser = async (username) => {
    if (!username.trim()) {
      showToast("Please enter a username", "error");
      return false;
    }

    setLoading(true);
    try {
      const result = await apiService.addUser(username);

      if (result.success) {
        showToast(result.message, "success");
        fetchLeaderboard();
        return true;
      } else {
        showToast(result.error, "error");
        return false;
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGeneratePoints = async (userId) => {
    const result = await apiService.generatePoints(userId);

    if (result.success) {
      showToast(result.message, "success");
      fetchLeaderboard();
    } else {
      showToast(result.error, "error");
    }
  };

  const sortedUsers = processUsersData(users);
  const topUsers = getTopUsers(sortedUsers);
  const otherUsers = getOtherUsers(sortedUsers);

  return (
    <div className="max-w-md mx-auto bg-gradient-to-b from-yellow-300 to-yellow-400 h-100vh">
      <Toast message={message} isVisible={isVisible} />

      <Header
        onAddUser={() => setShowModal(true)}
        onRefresh={fetchLeaderboard}
      />

      <TopUsers topUsers={topUsers} />

      <UserList
        otherUsers={otherUsers}
        sortedUsers={sortedUsers}
        onGeneratePoints={handleGeneratePoints}
      />

      <AddUserModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onAddUser={handleAddUser}
        loading={loading}
      />
    </div>
  );
};

export default LiveRankingApp;
