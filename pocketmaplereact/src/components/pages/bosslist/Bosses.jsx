import React, { useState } from 'react';
import './BossTables.css';
import {
  createClearCountOptions,
  createPartySizeOptions,
  handleClearCountChange,
  handlePartySizeChange
} from './BossTables.js';

const Bosses = () => {
  const [dailyBossData, setDailyBossData] = useState([
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

  const [weeklyBossData, setWeeklyBossData] = useState([
    { name: 'WeeklyBoss1', partySize: 1, weeklyMeso: 50000, isChecked: false },
    { name: 'WeeklyBoss2', partySize: 1, weeklyMeso: 60000, isChecked: false },
    { name: 'WeeklyBoss3', partySize: 1, weeklyMeso: 70000, isChecked: false },
    { name: 'WeeklyBoss4', partySize: 1, weeklyMeso: 80000, isChecked: false },
    { name: 'WeeklyBoss5', partySize: 1, weeklyMeso: 90000, isChecked: false },
    { name: 'WeeklyBoss6', partySize: 1, weeklyMeso: 100000, isChecked: false },
    { name: 'WeeklyBoss7', partySize: 1, weeklyMeso: 110000, isChecked: false },
    { name: 'WeeklyBoss8', partySize: 1, weeklyMeso: 120000, isChecked: false },
    { name: 'WeeklyBoss9', partySize: 1, weeklyMeso: 130000, isChecked: false },
    { name: 'WeeklyBoss10', partySize: 1, weeklyMeso: 140000, isChecked: false },
    { name: 'WeeklyBoss11', partySize: 1, weeklyMeso: 150000, isChecked: false },
    { name: 'WeeklyBoss12', partySize: 1, weeklyMeso: 160000, isChecked: false },
    { name: 'WeeklyBoss13', partySize: 1, weeklyMeso: 170000, isChecked: false },
    { name: 'WeeklyBoss14', partySize: 1, weeklyMeso: 180000, isChecked: false },
    { name: 'WeeklyBoss15', partySize: 1, weeklyMeso: 190000, isChecked: false },
    { name: 'WeeklyBoss16', partySize: 1, weeklyMeso: 200000, isChecked: false },
    { name: 'WeeklyBoss17', partySize: 1, weeklyMeso: 210000, isChecked: false },
    { name: 'WeeklyBoss18', partySize: 1, weeklyMeso: 220000, isChecked: false },
    { name: 'WeeklyBoss19', partySize: 1, weeklyMeso: 230000, isChecked: false },
    { name: 'WeeklyBoss20', partySize: 1, weeklyMeso: 240000, isChecked: false },
    { name: 'WeeklyBoss21', partySize: 1, weeklyMeso: 250000, isChecked: false },
    { name: 'WeeklyBoss22', partySize: 1, weeklyMeso: 260000, isChecked: false },
    { name: 'WeeklyBoss23', partySize: 1, weeklyMeso: 270000, isChecked: false },
  ]);

  const handlePartySizeChangeWeekly = (index, newSize) => {
    const updatedData = [...weeklyBossData];
    updatedData[index].partySize = parseInt(newSize, 10);
    setWeeklyBossData(updatedData);
  };

  const handleCheckboxChange = (index, isChecked, setBossData, bossData) => {
    const updatedData = [...bossData];
    updatedData[index].isChecked = isChecked;
    setBossData(updatedData);
  };

  const partySizeOptions = () => (
    Array.from({ length: 6 }, (_, i) => i + 1).map(size => (
      <option key={size} value={size}>{size}</option>
    ))
  );

  return (
    <div className="boss-list">
      <div className="daily-bosses-table">
        <h2>Daily Bosses</h2>
        <div className="table-wrapper">
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
              {dailyBossData.map((boss, index) => (
                <tr key={index}>
                  <td>
                    <input
                      type="checkbox"
                      checked={boss.isChecked}
                      onChange={(e) => handleCheckboxChange(index, e.target.checked, setDailyBossData, dailyBossData)}
                    />
                  </td>
                  <td>{boss.name}</td>
                  <td>
                    <select
                      value={boss.clearCount}
                      onChange={(e) => handleClearCountChange(index, e.target.value, setDailyBossData, dailyBossData)}
                    >
                      {createClearCountOptions()}
                    </select>
                  </td>
                  <td>
                    <select
                      value={boss.partySize}
                      onChange={(e) => handlePartySizeChange(index, e.target.value, setDailyBossData, dailyBossData)}
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
        </div>
      </div>
      
      <div className="weekly-bosses-table">
        <h2>Weekly Bosses</h2>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Boss Name</th>
                <th className="party-size-column">Party Size</th>
                <th className="weekly-income">Weekly Income</th>
              </tr>
            </thead>
            <tbody>
              {weeklyBossData.map((boss, index) => (
                <tr key={index}>
                  <td>
                    <input
                      type="checkbox"
                      checked={boss.isChecked}
                      onChange={(e) => handleCheckboxChange(index, e.target.checked, setWeeklyBossData, weeklyBossData)}
                    />
                  </td>
                  <td>{boss.name}</td>
                  <td className="party-size-column">
                    <select
                      value={boss.partySize}
                      onChange={(e) => handlePartySizeChangeWeekly(index, e.target.value)}
                    >
                      {partySizeOptions()}
                    </select>
                  </td>
                  <td className="weekly-income">${parseFloat(boss.weeklyMeso).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Bosses;