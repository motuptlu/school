import React from 'react';
import StatCard from '../../components/dashboard/StatCard';
import { StudentsIcon, TeachersIcon, FeesIcon } from '../../components/icons';
import StudentsPerClassChart from '../../components/dashboard/StudentsPerClassChart';
import FeeCollectionChart from '../../components/dashboard/FeeCollectionChart';
import { Student, Teacher } from '../../types';

interface AdminDashboardProps {
    students: Student[];
    teachers: Teacher[];
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ students, teachers }) => {
    const totalStudents = students.length;
    const totalTeachers = teachers.length;
    // Note: Fee and attendance data are still mocked for chart demonstration
    const feesCollected = 250000;
    const attendanceRate = 92.5;

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard 
                    title="Total Students" 
                    value={totalStudents} 
                    icon={<StudentsIcon />} 
                    colorClass="bg-blue-500" 
                />
                <StatCard 
                    title="Total Teachers" 
                    value={totalTeachers} 
                    icon={<TeachersIcon />} 
                    colorClass="bg-green-500" 
                />
                <StatCard 
                    title="Fees Collected (Month)" 
                    value={`$${(feesCollected / 1000).toFixed(1)}k`} 
                    icon={<FeesIcon />} 
                    colorClass="bg-yellow-500" 
                />
                <StatCard 
                    title="Attendance Rate" 
                    value={`${attendanceRate}%`} 
                    icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><polyline points="16 11 18 13 22 9"></polyline></svg>} 
                    colorClass="bg-purple-500" 
                />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <StudentsPerClassChart />
                <FeeCollectionChart />
            </div>
        </div>
    );
};

export default AdminDashboard;