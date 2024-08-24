// Function to handle dropdown change for Clear Count
export const handleClearCountChange = (index, value, setBossData, bossData) => {
  const clearCount = parseInt(value, 10);
  const updatedBossData = [...bossData];
    
  updatedBossData[index].clearCount = clearCount;
    
  // Recalculate weekly income based on daily income and clear count
  updatedBossData[index].weeklyMeso = Math.round(updatedBossData[index].dailyMeso * clearCount);
    
  setBossData(updatedBossData);
};
  
// Function to handle dropdown change for Party Size
export const handlePartySizeChange = (index, value, setBossData, bossData) => {
  const partySize = parseInt(value, 10);
  const updatedBossData = [...bossData];

  const originalDailyMeso = updatedBossData[index].originalDailyMeso || updatedBossData[index].dailyMeso;

  // Update party size
  updatedBossData[index].partySize = partySize;

  // Recalculate daily and weekly income based on the new party size
  updatedBossData[index].dailyMeso = Math.round(originalDailyMeso / partySize);
  updatedBossData[index].weeklyMeso = Math.round(updatedBossData[index].dailyMeso * updatedBossData[index].clearCount);

  // Store the original daily meso if not already stored
  if (!updatedBossData[index].originalDailyMeso) {
    updatedBossData[index].originalDailyMeso = originalDailyMeso;
  }

  setBossData(updatedBossData);
};