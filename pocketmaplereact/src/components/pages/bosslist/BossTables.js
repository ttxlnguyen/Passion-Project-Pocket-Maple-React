// Function to create dropdown options for Clear Count (0-7)
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

// Function to calculate daily income based on base daily income and clear count
const calculateDailyIncome = (baseDailyIncome, clearCount) => {
  return baseDailyIncome * clearCount;
};

// Function to calculate daily income based on current daily income and party size
const calculateDailyIncomeByPartySize = (currentDailyIncome, partySize) => {
  return Math.floor(currentDailyIncome / partySize); // Use Math.floor to round down to the nearest whole number
};

// Function to calculate weekly income based on daily income
const calculateWeeklyIncome = (dailyIncome) => {
  return dailyIncome * 7; // Multiply daily income by 7 for weekly income
};

// Function to handle dropdown change for Clear Count
export const handleClearCountChange = (index, value, setBossData, bossData) => {
  const updatedBossData = [...bossData];
  const clearCount = parseInt(value, 10);
  const baseDailyIncome = updatedBossData[index].baseDailyIncome;

  // Update clearCount and recalculate dailyMeso using baseDailyIncome
  updatedBossData[index].clearCount = clearCount;
  updatedBossData[index].dailyMeso = calculateDailyIncome(baseDailyIncome, clearCount);
  updatedBossData[index].weeklyMeso = calculateWeeklyIncome(updatedBossData[index].dailyMeso);

  setBossData(updatedBossData);
};

// Function to handle dropdown change for Party Size
export const handlePartySizeChange = (index, value, setBossData, bossData) => {
  const updatedBossData = [...bossData];
  const partySize = parseInt(value, 10);
  const currentDailyIncome = updatedBossData[index].dailyMeso; // Already a number

  // Update partySize and recalculate dailyMeso using currentDailyIncome
  updatedBossData[index].partySize = partySize;
  updatedBossData[index].dailyMeso = calculateDailyIncomeByPartySize(currentDailyIncome, partySize);
  updatedBossData[index].weeklyMeso = calculateWeeklyIncome(updatedBossData[index].dailyMeso);

  setBossData(updatedBossData);
};
