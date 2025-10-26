
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Card from '../shared/Card';
import { mockFeeData } from '../../services/mockData';

const FeeCollectionChart: React.FC = () => {
    return (
        <Card>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Monthly Fee Collection ($)</h3>
            <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                    <AreaChart
                        data={mockFeeData}
                        margin={{
                            top: 5,
                            right: 20,
                            left: -10,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(128, 128, 128, 0.2)" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: 'rgba(30, 41, 59, 0.9)',
                            borderColor: 'rgba(128, 128, 128, 0.5)',
                            color: '#fff',
                            borderRadius: '0.5rem'
                          }}
                        />
                        <Legend />
                        <Area type="monotone" dataKey="collected" stackId="1" stroke="hsl(210, 40%, 50%)" fill="hsl(210, 40%, 50%)" />
                        <Area type="monotone" dataKey="pending" stackId="1" stroke="#ffc658" fill="#ffc658" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </Card>
    );
};

export default FeeCollectionChart;
