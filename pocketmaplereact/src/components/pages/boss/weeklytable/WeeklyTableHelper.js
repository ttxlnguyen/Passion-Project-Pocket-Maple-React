// Function to create dropdown options for Party Size (1-6)
export const createPartySizeOptions = () => {
    return Array.from({ length: 6 }, (_, i) => (
      <option key={i + 1} value={i + 1}>{i + 1}</option>
    ));
  };