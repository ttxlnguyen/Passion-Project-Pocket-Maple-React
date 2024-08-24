// Function to create dropdown options for Clear Count (1-7)
export const createClearCountOptions = () => {
  return Array.from({ length: 8 }, (_, i) => (
  <option key={i} value={i}>{i}</option>
  ));
};

// Function to create dropdown options for Party Size (1-6)
export const createPartySizeOptionsDaily = () => {
  return Array.from({ length: 6 }, (_, i) => (
    <option key={i + 1} value={i + 1}>{i + 1}</option>
  ));
};