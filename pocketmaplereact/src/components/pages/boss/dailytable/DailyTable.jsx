import React from 'react';
import {
  createClearCountOptions,
  createPartySizeOptions
} from './DailyTableHelper';

import {
  handleClearCountChange,
  handlePartySizeChange
} from './DailyTableLogic';

import './DailyTable.css';

const DailyTable = ({ bossData, setBossData }) => {
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
        {bossData.map((boss, index) => (
          <tr key={index}>
            <td>{boss.name}</td>
            <td>
              <select
                value={boss.clearCount}
                onChange={(e) => handleClearCountChange(index, e.target.value, setBossData, bossData)}
              >
                {createClearCountOptions()}
              </select>
            </td>
            <td>
              <select
                value={boss.partySize}
                onChange={(e) => handlePartySizeChange(index, e.target.value, setBossData, bossData)}
              >
                {createPartySizeOptions()}
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