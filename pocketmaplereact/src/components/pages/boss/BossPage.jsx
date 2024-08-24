import React from 'react';
import './dailytable/DailyTable.css';
import DailyTable from './dailytable/DailyTable';
import {
  createClearCountOptions,
  createPartySizeOptions
} from './dailytable/DailyTableHelper';
import {
  handleClearCountChange,
  handlePartySizeChange
} from './dailytable/DailyTableLogic';

const BossPage = ({ bossData, setBossData }) => {
  return (
    <div className="boss-list">
      <h2>Daily Bosses</h2>
      <div className="table-wrapper">
        <DailyTable 
          bossData={bossData} 
          setBossData={setBossData} 
          createClearCountOptions={createClearCountOptions} 
          createPartySizeOptions={createPartySizeOptions} 
          handleClearCountChange={handleClearCountChange} 
          handlePartySizeChange={handlePartySizeChange} 
        />
      </div>
    </div>
  );
};

export default BossPage;