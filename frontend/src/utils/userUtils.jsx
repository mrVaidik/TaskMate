export const processUsersData = (users) => {
  return [...users]
    .sort((a, b) => b.points - a.points)
    .map((user, index) => ({
      ...user,
      rank: index + 1,
      avatar: user.userId.charAt(0).toUpperCase(),
      name: user.userId,
      verified: user.points > 50,
    }));
};

export const getTopUsers = (sortedUsers) => {
  return sortedUsers.slice(0, 3);
};

export const getOtherUsers = (sortedUsers) => {
  return sortedUsers.slice(3);
};
