// Function to handle dropdown change for Party Size
export const handlePartySizeChangeWeekly = (index, value, setBossData, bossData) => {
  const partySize = parseInt(value, 10);
  const updatedBossDataWeekly = [...bossData];

  const originalWeeklyMeso = updatedBossDataWeekly[index].originalWeeklyMeso || updatedBossDataWeekly[index].weeklyMeso;

  // Update party size
  updatedBossDataWeekly[index].partySize = partySize;

  // Recalculate weekly income based on the new party size
  updatedBossDataWeekly[index].weeklyMeso = Math.round(originalWeeklyMeso / partySize);

  // Store the original weekly meso if not already stored
  if (!updatedBossDataWeekly[index].originalWeeklyMeso) {
    updatedBossDataWeekly[index].originalWeeklyMeso = originalWeeklyMeso;
  }

  setBossData(updatedBossDataWeekly);
};