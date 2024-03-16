import React from 'react';
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const productSales = [
  {
    name: 'Jan',
    retailer1: 40,
    retailer2: 40,
  },
  {
    name: 'Feb',
    retailer1: 20,
    retailer2: 56,
  },
  {
    name: 'Mar',
    retailer1: 4,
    retailer2: 42,
  },
  {
    name: 'Apr',
    retailer1: 90,
    retailer2: 30,
  },
  {
    name: 'May',
    retailer1: 80,
    retailer2: 3,
  },
  {
    name: 'Jun',
    retailer1: 90,
    retailer2: 20,
  },
];

const maxRetailer1Value = Math.max(...productSales.map(item => item.retailer1));
const maxRetailer2Value = Math.max(...productSales.map(item => item.retailer2));
const maxRetailerValue = Math.max(maxRetailer1Value, maxRetailer2Value);

const AreaChartComponent = () => {
  return (
    <div style={{ width: '100%', height: '400px' }}>
      <ResponsiveContainer>
        <AreaChart
          width={500}
          height={400}
          data={productSales}
          margin={{ right: 30 }}
        >
          <YAxis domain={[0, maxRetailerValue]} />
          <XAxis dataKey="name" />
          <CartesianGrid strokeDasharray="5 5" />

          <Tooltip content={<CustomTooltip />} />
          <Legend />

          <Area
            type="monotone"
            dataKey="retailer1"
            stroke="#2563eb"
            fill="#3b82f6"
            stackId={null}
          />

          <Area
            type="monotone"
            dataKey="retailer2"
            stroke="#7c3aed"
            fill="#8b5cf6"
            stackId={null}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-slate-900 flex flex-col gap-4 rounded-md">
        <p className="text-medium text-lg">{label}</p>
        <p className="text-sm text-blue-400">
          retailer1:
          <span className="ml-2">{payload[0].value}</span>
        </p>
        <p className="text-sm text-indigo-400">
          retailer2:
          <span className="ml-2">{payload[1].value}</span>
        </p>
      </div>
    );
  }
};

export default AreaChartComponent;
