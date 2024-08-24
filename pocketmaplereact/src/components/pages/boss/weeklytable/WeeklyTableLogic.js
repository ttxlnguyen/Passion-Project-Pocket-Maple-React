// Function to handle dropdown change for Party Size
export const handlePartySizeChange = (index, value, setBossData, bossData) => {
  const partySize = parseInt(value, 10);
  const updatedBossData = [...bossData];

  const originalWeeklyMeso = updatedBossData[index].originalWeeklyMeso || updatedBossData[index].weeklyMeso;

  // Update party size
  updatedBossData[index].partySize = partySize;

  // Recalculate weekly income based on the new party size
  updatedBossData[index].weeklyMeso = Math.round(originalWeeklyMeso / partySize);

  // Store the original weekly meso if not already stored
  if (!updatedBossData[index].originalWeeklyMeso) {
    updatedBossData[index].originalWeeklyMeso = originalWeeklyMeso;
  }

  setBossData(updatedBossData);
};