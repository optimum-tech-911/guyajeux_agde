import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { CHART_DATA } from '../constants';

const COLORS = ['#F97316', '#1E293B', '#8B5CF6', '#10B981'];

const StatsChart: React.FC = () => {
  return (
    <div className="h-80 w-full">
       <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={CHART_DATA}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {CHART_DATA.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip 
            contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
            itemStyle={{ color: '#1E293B', fontWeight: 600 }}
          />
          <Legend verticalAlign="bottom" height={36} iconType="circle"/>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StatsChart;