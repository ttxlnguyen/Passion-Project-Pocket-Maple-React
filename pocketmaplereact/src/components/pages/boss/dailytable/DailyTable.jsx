import React, { useState} from 'react';
import {
  createClearCountOptions,
  createPartySizeOptionsDaily
} from './DailyTableHelper';

import {
  handleClearCountChange,
  handlePartySizeChangeDaily
} from './DailyTableLogic';

import './DailyTable.css';

const DailyTable = () => {
  const [bossDataDaily, setBossDataDaily] = useState([
    { name: 'Boss1', clearCount: 0, partySize: 1, dailyMeso: 1000, weeklyMeso: 0 },
    { name: 'Boss2', clearCount: 0, partySize: 1, dailyMeso: 2000, weeklyMeso: 0 },
    { name: 'Boss3', clearCount: 0, partySize: 1, dailyMeso: 3000, weeklyMeso: 0 },
    { name: 'Boss4', clearCount: 0, partySize: 1, dailyMeso: 4000, weeklyMeso: 0 },
    { name: 'Boss5', clearCount: 0, partySize: 1, dailyMeso: 5000, weeklyMeso: 0 },
    { name: 'Boss6', clearCount: 0, partySize: 1, dailyMeso: 6000, weeklyMeso: 0 },
    { name: 'Boss7', clearCount: 0, partySize: 1, dailyMeso: 7000, weeklyMeso: 0 },
    { name: 'Boss8', clearCount: 0, partySize: 1, dailyMeso: 8000, weeklyMeso: 0 },
    { name: 'Boss9', clearCount: 0, partySize: 1, dailyMeso: 9000, weeklyMeso: 0 },
    { name: 'Boss10', clearCount: 0, partySize: 1, dailyMeso: 10000, weeklyMeso: 0 },
    { name: 'Boss11', clearCount: 0, partySize: 1, dailyMeso: 11000, weeklyMeso: 0 },
    { name: 'Boss12', clearCount: 0, partySize: 1, dailyMeso: 12000, weeklyMeso: 0 },
    { name: 'Boss13', clearCount: 0, partySize: 1, dailyMeso: 13000, weeklyMeso: 0 },
    { name: 'Boss14', clearCount: 0, partySize: 1, dailyMeso: 14000, weeklyMeso: 0 },
  ]);

  return (
    <table>
      <thead>
        <tr>
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
            <td>{boss.name}</td>
            <td>
              <select
                value={boss.clearCount}
                onChange={(e) => handleClearCountChange(index, e.target.value, setBossDataDaily, bossDataDaily)}
              >
                {createClearCountOptions()}
              </select>
            </td>
            <td>
              <select
                value={boss.partySize}
                onChange={(e) => handlePartySizeChangeDaily(index, e.target.value, setBossDataDaily, bossDataDaily)}
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
  );
};

export default DailyTable;