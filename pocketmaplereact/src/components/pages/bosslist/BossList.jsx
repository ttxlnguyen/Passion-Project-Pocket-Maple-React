import React, { useState } from 'react';
import './BossList.css';
import {
  createClearCountOptions,
  createPartySizeOptions,
  handleClearCountChange,
  handlePartySizeChange
} from './BossList.js';

const Bosses = () => {
  const [bossData, setBossData] = useState([
    { name: 'Boss1', clearCount: 0, partySize: 1, dailyMeso: '$1000', weeklyMeso: '$7000', baseDailyIncome: '$1000' },
    { name: 'Boss2', clearCount: 0, partySize: 1, dailyMeso: '$2000', weeklyMeso: '$14000', baseDailyIncome: '$2000' },
    { name: 'Boss3', clearCount: 0, partySize: 1, dailyMeso: '$3000', weeklyMeso: '$21000', baseDailyIncome: '$3000' },
    { name: 'Boss4', clearCount: 0, partySize: 1, dailyMeso: '$4000', weeklyMeso: '$28000', baseDailyIncome: '$4000' },
    { name: 'Boss5', clearCount: 0, partySize: 1, dailyMeso: '$5000', weeklyMeso: '$35000', baseDailyIncome: '$5000' },
    { name: 'Boss6', clearCount: 0, partySize: 1, dailyMeso: '$6000', weeklyMeso: '$42000', baseDailyIncome: '$6000' },
    { name: 'Boss7', clearCount: 0, partySize: 1, dailyMeso: '$7000', weeklyMeso: '$49000', baseDailyIncome: '$7000' },
    { name: 'Boss8', clearCount: 0, partySize: 1, dailyMeso: '$8000', weeklyMeso: '$56000', baseDailyIncome: '$8000' },
    { name: 'Boss9', clearCount: 0, partySize: 1, dailyMeso: '$9000', weeklyMeso: '$63000', baseDailyIncome: '$9000' },
    { name: 'Boss10', clearCount: 0, partySize: 1, dailyMeso: '$10000', weeklyMeso: '$70000', baseDailyIncome: '$10000' },
    { name: 'Boss11', clearCount: 0, partySize: 1, dailyMeso: '$11000', weeklyMeso: '$77000', baseDailyIncome: '$11000' },
    { name: 'Boss12', clearCount: 0, partySize: 1, dailyMeso: '$12000', weeklyMeso: '$84000', baseDailyIncome: '$12000' },
    { name: 'Boss13', clearCount: 0, partySize: 1, dailyMeso: '$13000', weeklyMeso: '$91000', baseDailyIncome: '$13000' },
    { name: 'Boss14', clearCount: 0, partySize: 1, dailyMeso: '$14000', weeklyMeso: '$98000', baseDailyIncome: '$14000' }
  ]);

  return (
    <div className="boss-list">
      <h2>Daily Bosses</h2> {/* Table title */}
      <div className="table-wrapper">
        <table>
          <thead>
            <tr> {/* Column Headers */}
              <th>Boss Name</th>
              <th>Cleared</th>
              <th>Party Size</th>
              <th className="fade-in-column">Daily Income</th>
              <th className="fade-in-column">Weekly Income</th>
            </tr>
          </thead>
          <tbody>
            {bossData.map((boss, index) => (
              <tr key={index}> {/* Column data */}
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
                <td className={`fade-in-column ${boss.clearCount > 0 ? 'fade-in' : 'fade-out'}`}>{boss.dailyMeso}</td>
                <td className={`fade-in-column ${boss.clearCount > 0 ? 'fade-in' : 'fade-out'}`}>{boss.weeklyMeso}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bosses;