import React from 'react';
import './WeeklyTable.css';

import {
  createPartySizeOptions
} from './WeeklyTableHelper';

import {
  handlePartySizeChange
} from './WeeklyTableLogic';

const WeeklyTable = ({ bossData, setBossData }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Boss Name</th>
          <th>Party Size</th>
          <th className="fade-in-column">Weekly Income</th>
        </tr>
      </thead>
      <tbody>
        {bossData.map((boss, index) => (
          <tr key={index}>
            <td>{boss.name}</td>
            <td>
              <select
                value={boss.partySize}
                onChange={(e) => handlePartySizeChange(index, e.target.value, setBossData, bossData)}
              >
                {createPartySizeOptions()}
              </select>
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

export default WeeklyTable;