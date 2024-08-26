// Key used to store data in localStorage
const STORAGE_KEY = 'dailyTableData';

// Function to save data to localStorage
export const saveData = (data) => {
  try {
    const serializedData = JSON.stringify(data);
    localStorage.setItem(STORAGE_KEY, serializedData);
  } catch (error) {
    console.error("Error saving data to localStorage", error);
  }
};

// Function to load data from localStorage
export const loadData = () => {
  try {
    const serializedData = localStorage.getItem(STORAGE_KEY);
    if (serializedData === null) {
      return undefined; // Return undefined if no data is found
    }
    return JSON.parse(serializedData);
  } catch (error) {
    console.error("Error loading data from localStorage", error);
    return undefined;
  }
};
