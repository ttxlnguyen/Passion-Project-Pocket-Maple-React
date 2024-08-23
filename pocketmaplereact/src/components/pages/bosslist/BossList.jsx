// BossList.jsx
import React, { useState } from 'react';
import './BossList.css'; // Import the CSS file for styling
import {
  createClearCountOptions,
  createPartySizeOptions,
  handleClearCountChange,
  handlePartySizeChange
} from './BossList.js';

const Bosses = () => {
  // State for boss data
  const [bossData, setBossData] = useState([
    { name: 'Boss 1', clearCount: 5, partySize: 10, value: '$1000', weeklyMesos: '$7000' },
    { name: 'Boss 2', clearCount: 8, partySize: 12, value: '$2000', weeklyMesos: '$14000' },
    { name: 'Boss 3', clearCount: 10, partySize: 8, value: '$3000', weeklyMesos: '$21000' },
    { name: 'Boss 4', clearCount: 7, partySize: 11, value: '$4000', weeklyMesos: '$28000' },
    { name: 'Boss 5', clearCount: 6, partySize: 9, value: '$5000', weeklyMesos: '$35000' },
    { name: 'Boss 6', clearCount: 9, partySize: 10, value: '$6000', weeklyMesos: '$42000' },
    { name: 'Boss 7', clearCount: 5, partySize: 15, value: '$7000', weeklyMesos: '$49000' },
    { name: 'Boss 8', clearCount: 12, partySize: 14, value: '$8000', weeklyMesos: '$56000' },
    { name: 'Boss 9', clearCount: 11, partySize: 13, value: '$9000', weeklyMesos: '$63000' },
    { name: 'Boss 10', clearCount: 14, partySize: 16, value: '$10000', weeklyMesos: '$70000' },
    { name: 'Boss 11', clearCount: 13, partySize: 17, value: '$11000', weeklyMesos: '$77000' },
    { name: 'Boss 12', clearCount: 15, partySize: 18, value: '$12000', weeklyMesos: '$84000' },
    { name: 'Boss 13', clearCount: 10, partySize: 12, value: '$13000', weeklyMesos: '$91000' },
    { name: 'Boss 14', clearCount: 11, partySize: 14, value: '$14000', weeklyMesos: '$98000' }
  ]);

  return (
    <div className="boss-list">
      <h2>Daily Bosses</h2> {/* Table title */}
      <div className="table-wrapper">
        <table>
          <thead>
            <tr> {/* Column Headers */}
              <th>Select</th>
              <th>Boss Name</th>
              <th>Clear Count</th>
              <th>Party Size</th>
              <th>Boss Value</th>
              <th>Weekly Mesos</th>
            </tr>
          </thead>
          <tbody>
            {bossData.map((boss, index) => (
              <tr key={index}> {/* Column data */}
                <td><input type="checkbox" /></td>
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
                <td>{boss.value}</td>
                <td>{boss.weeklyMesos}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bosses;