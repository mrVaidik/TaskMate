const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const apiService = {
  async fetchLeaderboard() {
    try {
      const response = await fetch(`${BACKEND_URL}/api/leaderboard`);
      if (response.ok) {
        const data = await response.json();
        return { success: true, data: data.users || [] };
      } else {
        return { success: false, error: "Failed to fetch leaderboard" };
      }
    } catch (error) {
      console.error("Error fetching leaderboard:", error);
      return { success: false, error: "Error fetching leaderboard" };
    }
  },

  async addUser(userId) {
    try {
      const response = await fetch(`${BACKEND_URL}/api/user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId }),
      });

      const data = await response.json();

      if (response.ok) {
        return { success: true, message: `User ${userId} added successfully` };
      } else {
        return { success: false, error: data.message || "Failed to add user" };
      }
    } catch (error) {
      console.error("Error adding user:", error);
      return { success: false, error: "Error adding user" };
    }
  },

  async generatePoints(userId) {
    try {
      const response = await fetch(`${BACKEND_URL}/api/generatepoints`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId }),
      });

      const data = await response.json();

      if (response.ok) {
        return { success: true, message: "Points generated successfully" };
      } else {
        return {
          success: false,
          error: data.message || "Failed to generate points",
        };
      }
    } catch (error) {
      console.error("Error generating points:", error);
      return { success: false, error: "Error generating points" };
    }
  },
};
