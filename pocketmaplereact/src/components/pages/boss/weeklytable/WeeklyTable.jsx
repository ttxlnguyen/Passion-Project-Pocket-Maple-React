
import React, { useState } from 'react';
import './WeeklyTable.css';

import {
  createPartySizeOptionsWeekly
} from './WeeklyTableHelper';

import {
  handlePartySizeChangeWeekly
} from './WeeklyTableLogic';

const WeeklyTable = () => {
  const [bossDataWeekly, setBossDataWeekly] = useState([
    { name: 'WeeklyBoss1', partySize: 1, weeklyMeso: 5000 },
    { name: 'WeeklyBoss2', partySize: 1, weeklyMeso: 10000 },
    { name: 'WeeklyBoss3', partySize: 1, weeklyMeso: 15000 },
    { name: 'WeeklyBoss4', partySize: 1, weeklyMeso: 20000 },
    { name: 'WeeklyBoss5', partySize: 1, weeklyMeso: 25000 },
    { name: 'WeeklyBoss6', partySize: 1, weeklyMeso: 30000 },
    { name: 'WeeklyBoss7', partySize: 1, weeklyMeso: 35000 },
    { name: 'WeeklyBoss8', partySize: 1, weeklyMeso: 40000 },
    { name: 'WeeklyBoss9', partySize: 1, weeklyMeso: 45000 },
    { name: 'WeeklyBoss10', partySize: 1, weeklyMeso: 50000 },
    { name: 'WeeklyBoss11', partySize: 1, weeklyMeso: 55000 },
    { name: 'WeeklyBoss12', partySize: 1, weeklyMeso: 60000 },
    { name: 'WeeklyBoss13', partySize: 1, weeklyMeso: 65000 },
    { name: 'WeeklyBoss15', partySize: 1, weeklyMeso: 70000 },
    { name: 'WeeklyBoss16', partySize: 1, weeklyMeso: 75000 },
    { name: 'WeeklyBoss17', partySize: 1, weeklyMeso: 80000 },
    { name: 'WeeklyBoss18', partySize: 1, weeklyMeso: 85000 },
    { name: 'WeeklyBoss19', partySize: 1, weeklyMeso: 90000 },
    { name: 'WeeklyBoss20', partySize: 1, weeklyMeso: 95000 },
    { name: 'WeeklyBoss21', partySize: 1, weeklyMeso: 100000 },
    { name: 'WeeklyBoss22', partySize: 1, weeklyMeso: 105000 },
    { name: 'WeeklyBoss23', partySize: 1, weeklyMeso: 110000 },
  ]);

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
        {bossDataWeekly.map((boss, index) => (
          <tr key={index}>
            <td>{boss.name}</td>
            <td>
              <select
                value={boss.partySize}
                onChange={(e) => handlePartySizeChangeWeekly(index, e.target.value, setBossDataWeekly, bossDataWeekly)}
              >
                {createPartySizeOptionsWeekly()}
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
