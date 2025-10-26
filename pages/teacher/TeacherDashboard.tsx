
import React from 'react';
import Card from '../../components/shared/Card';

const TeacherDashboard: React.FC = () => {
    const timetable = [
        { time: '09:00 - 10:00', monday: 'Math (10A)', tuesday: 'Free', wednesday: 'Math (10A)', thursday: 'Math (11A)', friday: 'Math (10A)' },
        { time: '10:00 - 11:00', monday: 'Math (11A)', tuesday: 'Math (12A)', wednesday: 'Math (11A)', thursday: 'Free', friday: 'Math (12A)' },
        { time: '11:00 - 12:00', monday: 'Free', tuesday: 'Math (10A)', wednesday: 'Free', thursday: 'Math (12A)', friday: 'Free' },
        { time: '12:00 - 01:00', monday: 'LUNCH', tuesday: 'LUNCH', wednesday: 'LUNCH', thursday: 'LUNCH', friday: 'LUNCH' },
        { time: '01:00 - 02:00', monday: 'Math (12A)', tuesday: 'Free', wednesday: 'Math (12A)', thursday: 'Math (10A)', friday: 'Math (11A)' },
    ];

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                    <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Assigned Classes</h3>
                    <ul className="space-y-2">
                        <li className="p-3 bg-primary-light dark:bg-primary dark:text-white rounded-md">Grade 10 - Section A (Mathematics)</li>
                        <li className="p-3 bg-primary-light dark:bg-primary dark:text-white rounded-md">Grade 11 - Section A (Mathematics)</li>
                        <li className="p-3 bg-primary-light dark:bg-primary dark:text-white rounded-md">Grade 12 - Section A (Mathematics)</li>
                    </ul>
                </Card>
                <Card>
                    <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Quick Actions</h3>
                     <div className="flex space-x-2">
                        <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark">Mark Attendance</button>
                        <button className="px-4 py-2 bg-gray-200 dark:bg-gray-600 rounded-md hover:bg-gray-300 dark:hover:bg-gray-500">Upload Marks</button>
                    </div>
                </Card>
            </div>
            <Card>
                <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">My Weekly Timetable</h3>
                <div className="overflow-x-auto">
                    <table className="w-full text-center">
                        <thead>
                            <tr className="bg-gray-100 dark:bg-gray-700">
                                <th className="p-2 border dark:border-gray-600">Time</th>
                                <th className="p-2 border dark:border-gray-600">Monday</th>
                                <th className="p-2 border dark:border-gray-600">Tuesday</th>
                                <th className="p-2 border dark:border-gray-600">Wednesday</th>
                                <th className="p-2 border dark:border-gray-600">Thursday</th>
                                <th className="p-2 border dark:border-gray-600">Friday</th>
                            </tr>
                        </thead>
                        <tbody>
                            {timetable.map((row, index) => (
                                <tr key={index} className="border-b dark:border-gray-600">
                                    <td className="p-2 font-mono text-xs border-r dark:border-gray-600">{row.time}</td>
                                    <td className={`p-2 ${row.monday === 'LUNCH' && 'bg-yellow-100 dark:bg-yellow-900'}`}>{row.monday}</td>
                                    <td className={`p-2 ${row.tuesday === 'LUNCH' && 'bg-yellow-100 dark:bg-yellow-900'}`}>{row.tuesday}</td>
                                    <td className={`p-2 ${row.wednesday === 'LUNCH' && 'bg-yellow-100 dark:bg-yellow-900'}`}>{row.wednesday}</td>
                                    <td className={`p-2 ${row.thursday === 'LUNCH' && 'bg-yellow-100 dark:bg-yellow-900'}`}>{row.thursday}</td>
                                    <td className={`p-2 ${row.friday === 'LUNCH' && 'bg-yellow-100 dark:bg-yellow-900'}`}>{row.friday}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>
        </div>
    );
};

export default TeacherDashboard;
