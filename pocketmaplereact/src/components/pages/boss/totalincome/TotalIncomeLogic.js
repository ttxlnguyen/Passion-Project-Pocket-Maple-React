// Function to calculate the total cleared from the boss data
export const calculateTotalCleared = (bossData) => {
  return bossData.reduce((acc, boss) => acc + boss.clearCount, 0);
};