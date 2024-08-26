import React from 'react';
import PropTypes from 'prop-types';
import './TotalIncome.css';

const TotalIncome = ({ bossDataDaily }) => {
  // Default to an empty array if bossDataDaily is not provided
  const data = bossDataDaily || [];
  
  // Calculate totals for daily bosses
  const totalCleared = data.reduce((acc, boss) => acc + boss.clearCount, 0);
  const totalDailyIncome = data.reduce((acc, boss) => acc + boss.dailyMeso * boss.clearCount, 0);
  const totalWeeklyIncome = data.reduce((acc, boss) => acc + boss.weeklyMeso, 0);

  return (
    <div className="total-income">
      <table>
        <thead>
          <tr>
            <th>Cleared</th>
            <th>Daily Income</th>
            <th>Weekly Income</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>{totalCleared}</th>
            <th>${totalDailyIncome.toLocaleString()}</th>
            <th>${totalWeeklyIncome.toLocaleString()}</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

TotalIncome.propTypes = {
  bossDataDaily: PropTypes.array
};

export default TotalIncome;
