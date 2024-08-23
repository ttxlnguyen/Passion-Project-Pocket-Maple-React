// BossList.js
import { useState } from 'react';

// Function to create dropdown options for Clear Count (1-7)
export const createClearCountOptions = () => {
  return Array.from({ length: 7 }, (_, i) => (
    <option key={i + 1} value={i + 1}>{i + 1}</option>
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
  const updatedBossData = [...bossData];
  updatedBossData[index].clearCount = parseInt(value, 10);
  setBossData(updatedBossData);
};

// Function to handle dropdown change for Party Size
export const handlePartySizeChange = (index, value, setBossData, bossData) => {
  const updatedBossData = [...bossData];
  updatedBossData[index].partySize = parseInt(value, 10);
  setBossData(updatedBossData);
};
