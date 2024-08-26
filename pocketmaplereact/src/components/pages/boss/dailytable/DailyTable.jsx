import React, { useState, useEffect } from 'react';
import TotalIncome from '../totalincome/TotalIncome';
import {
  createClearCountOptionsDaily,
  createPartySizeOptionsDaily
} from './DailyTableHelper';
import {
  handleClearCountChangeDaily,
  handlePartySizeChangeDaily
} from './DailyTableLogic';
import { saveData, loadData } from '../../../../utils/DataStorage';
import './DailyTable.css';

const DailyTable = () => {
  // Load initial state from localStorage or use default
  const [bossDataDaily, setBossDataDaily] = useState(() => loadData() || [
    { name: 'Boss1', clearCount: 0, partySize: 1, dailyMeso: 1000, weeklyMeso: 0, isChecked: false },
    { name: 'Boss2', clearCount: 0, partySize: 1, dailyMeso: 2000, weeklyMeso: 0, isChecked: false },
    { name: 'Boss3', clearCount: 0, partySize: 1, dailyMeso: 3000, weeklyMeso: 0, isChecked: false },
    { name: 'Boss4', clearCount: 0, partySize: 1, dailyMeso: 4000, weeklyMeso: 0, isChecked: false },
    { name: 'Boss5', clearCount: 0, partySize: 1, dailyMeso: 5000, weeklyMeso: 0, isChecked: false },
    { name: 'Boss6', clearCount: 0, partySize: 1, dailyMeso: 6000, weeklyMeso: 0, isChecked: false },
    { name: 'Boss7', clearCount: 0, partySize: 1, dailyMeso: 7000, weeklyMeso: 0, isChecked: false },
    { name: 'Boss8', clearCount: 0, partySize: 1, dailyMeso: 8000, weeklyMeso: 0, isChecked: false },
    { name: 'Boss9', clearCount: 0, partySize: 1, dailyMeso: 9000, weeklyMeso: 0, isChecked: false },
    { name: 'Boss10', clearCount: 0, partySize: 1, dailyMeso: 10000, weeklyMeso: 0, isChecked: false },
    { name: 'Boss11', clearCount: 0, partySize: 1, dailyMeso: 11000, weeklyMeso: 0, isChecked: false },
    { name: 'Boss12', clearCount: 0, partySize: 1, dailyMeso: 12000, weeklyMeso: 0, isChecked: false },
    { name: 'Boss13', clearCount: 0, partySize: 1, dailyMeso: 13000, weeklyMeso: 0, isChecked: false },
    { name: 'Boss14', clearCount: 0, partySize: 1, dailyMeso: 14000, weeklyMeso: 0, isChecked: false },
  ]);

  useEffect(() => {
    // Save data to localStorage whenever bossDataDaily changes
    saveData(bossDataDaily);
  }, [bossDataDaily]);

  const handleCheckboxChangeDaily = (index) => {
    const updatedBossDataDaily = [...bossDataDaily];
    const isChecked = !updatedBossDataDaily[index].isChecked;

    if (!isChecked) {
      updatedBossDataDaily[index].clearCount = 0;
      updatedBossDataDaily[index].weeklyMeso = 0;
    }

    updatedBossDataDaily[index].isChecked = isChecked;
    setBossDataDaily(updatedBossDataDaily);
  };

  return (
    <div>
      <TotalIncome bossDataDaily={bossDataDaily} /> {/* Pass bossDataDaily to TotalIncome */}
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Boss Name</th>
            <th>Cleared</th>
            <th>Party Size</th>
            <th className="fade-in-column">Daily Income</th>
            <th className="fade-in-column">Weekly Income</th>
          </tr>
        </thead>
        <tbody>
          {bossDataDaily.map((boss, index) => (
            <tr key={index}>
              <td>
                <input
                  type="checkbox"
                  checked={boss.isChecked}
                  onChange={() => handleCheckboxChangeDaily(index)}
                />
              </td>
              <td>{boss.name}</td>
              <td className={`fade-in-column ${boss.isChecked ? 'fade-in' : 'fade-out'}`}>
                <select
                  value={boss.clearCount}
                  onChange={(e) => handleClearCountChangeDaily(index, e.target.value, setBossDataDaily, bossDataDaily)}
                  disabled={!boss.isChecked}
                >
                  {createClearCountOptionsDaily()}
                </select>
              </td>
              <td className={`fade-in-column ${boss.isChecked ? 'fade-in' : 'fade-out'}`}>
                <select
                  value={boss.partySize}
                  onChange={(e) => handlePartySizeChangeDaily(index, e.target.value, setBossDataDaily, bossDataDaily)}
                  disabled={!boss.isChecked}
                >
                  {createPartySizeOptionsDaily()}
                </select>
              </td>
              <td className={`fade-in-column ${boss.clearCount > 0 ? 'fade-in' : 'fade-out'}`}>
                ${boss.clearCount > 0 ? parseFloat(boss.dailyMeso).toLocaleString() : '0'}
              </td>
              <td className={`fade-in-column ${boss.clearCount > 0 ? 'fade-in' : 'fade-out'}`}>
                ${parseFloat(boss.weeklyMeso).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DailyTable;
