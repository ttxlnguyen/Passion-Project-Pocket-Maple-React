import React from 'react';
import './BossPage.css';
import DailyTable from './dailytable/DailyTable';
import WeeklyTable from './weeklytable/WeeklyTable';
import {
  createClearCountOptions,
  createPartySizeOptionsDaily
} from './dailytable/DailyTableHelper';
import {
  handleClearCountChange,
  handlePartySizeChangeDaily
} from './dailytable/DailyTableLogic';
import {
  createPartySizeOptionsWeekly
} from './weeklytable/WeeklyTableHelper';
import {
  handlePartySizeChangeWeekly
} from './weeklytable/WeeklyTableLogic';

const BossPage = ({ bossDataDaily, setBossDataDaily, bossDataWeekly, setBossDataWeekly }) => {
  return (
    <div className="boss-page">
      <div className="boss-list-daily">
        <h2>Daily Bosses</h2>
        <div className="daily-table-wrapper">
          <DailyTable 
            bossData={bossDataDaily} 
            setBossData={setBossDataDaily} 
            createClearCountOptions={createClearCountOptions} 
            createPartySizeOptionsDaily={createPartySizeOptionsDaily} 
            handleClearCountChange={handleClearCountChange} 
            handlePartySizeChangeDaily={handlePartySizeChangeDaily} 
          />
        </div>
      </div>
      <div className="boss-list-weekly">
      <h2>Weekly Bosses</h2>
        <div className="weekly-table-wrapper">
          <WeeklyTable 
            bossData={bossDataWeekly} 
            setBossData={setBossDataWeekly} 
            createPartySizeOptionsWeekly={createPartySizeOptionsWeekly} 
            handlePartySizeChangeWeekly={handlePartySizeChangeWeekly} 
          />
        </div>
      </div>
    </div>  
  );
};

export default BossPage;