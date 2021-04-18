import React, { PureComponent } from "react";
import styled from "styled-components";
import {
  PieChart as BasePieChart,
  Pie as BasePie,
  Sector,
  Cell,
  Legend,
} from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const PieChart = styled(BasePieChart)`
  .recharts-legend-item {
    margin-bottom: 10px;
  }
`;

const Pie = () => (
  <PieChart width={300} height={300} margin={{ top: 0 }}>
    <BasePie
      data={data}
      innerRadius={70}
      outerRadius={90}
      dataKey="value"
      isAnimationActive={false}
      label
      cy={120}
    >
      {data.map((entry, index) => (
        <Cell
          key={`cell-${index}`}
          fill={COLORS[index % COLORS.length]}
          stroke="transparent"
        />
      ))}
    </BasePie>

    <Legend verticalAlign="bottom" align="left" />
  </PieChart>
);

export default Pie;
