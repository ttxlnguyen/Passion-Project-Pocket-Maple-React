import React from "react";
import "./BossList.css"; // Import the CSS file for styling

const Bosses = () => {
  // Expanded data for 14 bosses
  const bossData = [
    { name: "Boss 1", value: "$1000" },
    { name: "Boss 2", value: "$2000" },
    { name: "Boss 3", value: "$3000" },
    { name: "Boss 4", value: "$4000" },
    { name: "Boss 5", value: "$5000" },
    { name: "Boss 6", value: "$6000" },
    { name: "Boss 7", value: "$7000" },
    { name: "Boss 8", value: "$8000" },
    { name: "Boss 9", value: "$9000" },
    { name: "Boss 10", value: "$10000" },
    { name: "Boss 11", value: "$11000" },
    { name: "Boss 12", value: "$12000" },
    { name: "Boss 13", value: "$13000" },
    { name: "Boss 14", value: "$14000" }
  ];

  return (
    <div className="boss-list">
      <h2>Daily Bosses</h2> {/* Table title */}
      <table>
        <thead>
          <tr>
            <th>Select</th>
            <th>Boss Name</th>
            <th>Boss Value</th>
          </tr>
        </thead>
        <tbody>
          {bossData.map((boss, index) => (
            <tr key={index}>
              <td><input type="checkbox" /></td>
              <td>{boss.name}</td>
              <td>{boss.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Bosses;