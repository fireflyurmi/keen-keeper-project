"use client";

import { useGlobalInteractions } from '@/lib/context/InteractionContext';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const COLORS = {
  Call: '#ef4444',
  Text: '#3b82f6',
  Video: '#8b5cf6',
};

export default function ClientStats() {
  const { allInteractions } = useGlobalInteractions();

  const countByType = allInteractions.reduce((acc, item) => {
    acc[item.type] = (acc[item.type] || 0) + 1;
    return acc;
  }, {});

  const chartData = [
    { name: 'Call', value: countByType.Call || 0, fill: COLORS.Call },
    { name: 'Text', value: countByType.Text || 0, fill: COLORS.Text },
    { name: 'Video', value: countByType.Video || 0, fill: COLORS.Video },
  ].filter(item => item.value > 0);

  const totalInteractions = allInteractions.length;

  return (
    <main className="max-w-7xl mx-auto p-6 bg-[#f8fafc] min-h-screen mb-10">
      <h1 className="text-4xl font-bold text-gray-900 mb-10">Friendship Analytics</h1>

      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-10">
        <h2 className="text-xl font-semibold text-[#244d3f] mb-10">By Interaction Type</h2>

        <div className="flex flex-col items-center">
          <div className="w-full max-w-90 h-90 relative mb-12">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={95}
                  outerRadius={145}
                  dataKey="value"
                  paddingAngle={6}
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <p className="text-6xl font-bold text-gray-900">{totalInteractions}</p>
              <p className="text-sm text-gray-500 mt-2">Total Interactions</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-x-10 gap-y-6">
            {chartData.map((entry) => (
              <div key={entry.name} className="flex items-center gap-3">
                <div 
                  className="w-5 h-5 rounded-full" 
                  style={{ backgroundColor: entry.fill }}
                />
                <div className="text-center">
                  <p className="font-medium text-gray-900">{entry.name}</p>
                </div>
              </div>
            ))}
          </div>

          {totalInteractions === 0 && (
            <p className="text-gray-500 mt-10 text-center">
              No interactions recorded yet.<br />
              Start checking in with your friends!
            </p>
          )}
        </div>
      </div>
    </main>
  );
}