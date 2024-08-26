import React from 'react';
import PropTypes from 'prop-types';
import './TotalIncome.css';
import { calculateTotalCleared } from './TotalIncomeLogic';

const TotalIncome = ({ bossDataDaily }) => {
  // Default to an empty array if bossDataDaily is not provided
  const data = bossDataDaily || [];

  // Calculate totals for daily bosses
  const totalCleared = calculateTotalCleared(data); // Use the function to calculate total cleared
  const totalWeeklyIncome = data.reduce((acc, boss) => acc + boss.weeklyMeso, 0);

  return (
    <div className="total-income">
      <table>
        <thead>
          <tr>
            <th>Cleared</th>
            <th>Weekly Income</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>{totalCleared}</th>
            <th>${totalWeeklyIncome.toLocaleString()}</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

TotalIncome.propTypes = {
  bossDataDaily: PropTypes.array.isRequired // Make sure bossDataDaily is required
};

export default TotalIncome;