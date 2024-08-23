// BossTables.js

// Function to create dropdown options for Clear Count (1-7)
export const createClearCountOptions = () => {
  return Array.from({ length: 8 }, (_, i) => (
    <option key={i} value={i}>{i}</option>
  ));
};

// Function to create dropdown options for Party Size (1-6)
export const createPartySizeOptions = () => {
  return Array.from({ length: 6 }, (_, i) => (
    <option key={i + 1} value={i + 1}>{i + 1}</option>
  ));
};

// Function to handle dropdown change for Clear Count
export const handleClearCountChange = (index, value, setBossData, bossData) => {
  const clearCount = parseInt(value, 10);
  const updatedBossData = [...bossData];
  
  updatedBossData[index].clearCount = clearCount;
  
  // Recalculate weekly income based on daily income and clear count
  updatedBossData[index].weeklyMeso = Math.round(updatedBossData[index].dailyMeso * clearCount);
  
  setBossData(updatedBossData);
};

// Function to handle dropdown change for Party Size (Daily Bosses)
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

// Function to handle dropdown change for Party Size (Weekly Bosses)
export const handlePartySizeChangeWeekly = (index, value, setBossData, bossData) => {
  const partySize = parseInt(value, 10);
  const updatedData = [...bossData];

  // Update party size
  updatedData[index].partySize = partySize;

  // Recalculate weekly income based on the new party size
  updatedData[index].weeklyMeso = Math.round(updatedData[index].weeklyMeso / partySize);

  setBossData(updatedData);
};
