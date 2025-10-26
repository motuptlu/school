
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Card from '../shared/Card';
import { mockClassData } from '../../services/mockData';

const StudentsPerClassChart: React.FC = () => {
    return (
        <Card>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Students per Class</h3>
            <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                    <BarChart
                        data={mockClassData}
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
                        <Bar dataKey="students" fill="hsl(210, 40%, 50%)" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </Card>
    );
};

export default StudentsPerClassChart;
