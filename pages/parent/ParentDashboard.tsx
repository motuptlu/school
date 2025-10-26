
import React from 'react';
import Card from '../../components/shared/Card';
import { mockStudents } from '../../services/mockData';

const ParentDashboard: React.FC = () => {
    // Assuming the logged-in parent is 'Sarah Miller' for this mock view
    const child = mockStudents.find(s => s.parentName === 'Sarah Miller');

    if (!child) {
        return <Card><p>No child information found.</p></Card>;
    }

    return (
        <div className="space-y-6">
            <Card>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                    {child.name}'s Progress
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-4 bg-primary-light dark:bg-dark-secondary rounded-lg text-center">
                        <p className="text-sm text-secondary dark:text-gray-400">Attendance</p>
                        <p className={`text-3xl font-bold ${child.attendance > 90 ? 'text-green-500' : 'text-yellow-500'}`}>{child.attendance}%</p>
                    </div>
                    <div className="p-4 bg-primary-light dark:bg-dark-secondary rounded-lg text-center">
                        <p className="text-sm text-secondary dark:text-gray-400">Overall Grade</p>
                        <p className="text-3xl font-bold text-primary">
                            {
                                (Object.values(child.grades).reduce((a, b) => a + b, 0) / Object.values(child.grades).length).toFixed(1)
                            }%
                        </p>
                    </div>
                    <div className="p-4 bg-primary-light dark:bg-dark-secondary rounded-lg text-center">
                        <p className="text-sm text-secondary dark:text-gray-400">Fee Status</p>
                        <p className="text-3xl font-bold text-green-500">Paid</p>
                    </div>
                </div>
            </Card>

            <Card>
                <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Subject-wise Grades</h3>
                <div className="space-y-3">
                    {Object.entries(child.grades).map(([subject, grade]) => (
                        <div key={subject}>
                            <div className="flex justify-between mb-1">
                                <span className="text-base font-medium text-secondary dark:text-gray-300">{subject}</span>
                                <span className="text-sm font-medium text-primary dark:text-blue-400">{grade}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                <div className="bg-primary h-2.5 rounded-full" style={{ width: `${grade}%` }}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </Card>
             <Card>
                <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Recent Announcements</h3>
                <div className="border-l-4 border-primary pl-4">
                     <p className="font-semibold">Parent-Teacher Meeting Scheduled</p>
                     <p className="text-sm text-secondary dark:text-gray-400">A parent-teacher meeting will be held on the 25th of this month to discuss mid-term performance. Please attend.</p>
                </div>
            </Card>
        </div>
    );
};

export default ParentDashboard;
