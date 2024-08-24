// Function to handle dropdown change for Clear Count
export const handleClearCountChange = (index, value, setBossDataDaily, bossData) => {
  const clearCount = parseInt(value, 10);
  const updatedBossDataDaily = [...bossData];
    
  updatedBossDataDaily[index].clearCount = clearCount;
    
  // Recalculate weekly income based on daily income and clear count
  updatedBossDataDaily[index].weeklyMeso = Math.round(updatedBossDataDaily[index].dailyMeso * clearCount);
    
  setBossDataDaily(updatedBossDataDaily);
};
  
// Function to handle dropdown change for Party Size
export const handlePartySizeChangeDaily = (index, value, setBossDataDaily, bossData) => {
  const partySize = parseInt(value, 10);
  const updatedBossDataDaily = [...bossData];

  const originalDailyMeso = updatedBossDataDaily[index].originalDailyMeso || updatedBossDataDaily[index].dailyMeso;

  // Update party size
  updatedBossDataDaily[index].partySize = partySize;

  // Recalculate daily and weekly income based on the new party size
  updatedBossDataDaily[index].dailyMeso = Math.round(originalDailyMeso / partySize);
  updatedBossDataDaily[index].weeklyMeso = Math.round(updatedBossDataDaily[index].dailyMeso * updatedBossDataDaily[index].clearCount);

  // Store the original daily meso if not already stored
  if (!updatedBossDataDaily[index].originalDailyMeso) {
    updatedBossDataDaily[index].originalDailyMeso = originalDailyMeso;
  }

  setBossDataDaily(updatedBossDataDaily);
};