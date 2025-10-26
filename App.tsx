import React, { useState, useEffect, useCallback } from 'react';
import Login from './pages/Login';
import Layout from './components/layout/Layout';
import AdminDashboard from './pages/admin/AdminDashboard';
import ManageStudents from './pages/admin/ManageStudents';
import ManageTeachers from './pages/admin/ManageTeachers';
import ManageFees from './pages/admin/ManageFees';
import TeacherDashboard from './pages/teacher/TeacherDashboard';
import ParentDashboard from './pages/parent/ParentDashboard';
import { User, UserRole, Student, Teacher } from './types';
import { mockUsers, mockStudents, mockTeachers } from './services/mockData';
import { ThemeProvider, useTheme } from './hooks/useTheme';

const AppContent: React.FC = () => {
    const [user, setUser] = useState<User | null>(null);
    const [page, setPage] = useState<string>('dashboard');
    const [students, setStudents] = useState<Student[]>(mockStudents);
    const [teachers, setTeachers] = useState<Teacher[]>(mockTeachers);
    const { theme } = useTheme();

    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
    }, [theme]);

    const handleLogin = (role: UserRole) => {
        const loggedInUser = mockUsers.find(u => u.role === role);
        setUser(loggedInUser || null);
        setPage('dashboard');
    };

    const handleLogout = () => {
        setUser(null);
    };

    const navigate = (newPage: string) => {
        setPage(newPage);
    };

    const renderPage = useCallback(() => {
        if (!user) return null;
        switch (user.role) {
            case UserRole.Admin:
                switch (page) {
                    case 'dashboard':
                        return <AdminDashboard students={students} teachers={teachers} />;
                    case 'students':
                        return <ManageStudents students={students} setStudents={setStudents} />;
                    case 'teachers':
                        return <ManageTeachers teachers={teachers} setTeachers={setTeachers} />;
                    case 'fees':
                        return <ManageFees students={students} setStudents={setStudents} />;
                    default:
                        return <AdminDashboard students={students} teachers={teachers} />;
                }
            case UserRole.Teacher:
                return <TeacherDashboard />;
            case UserRole.Parent:
                return <ParentDashboard />;
            default:
                return null;
        }
    }, [user, page, students, teachers]);

    if (!user) {
        return <Login onLogin={handleLogin} />;
    }

    return (
        <Layout user={user} onLogout={handleLogout} navigate={navigate} currentPage={page}>
            {renderPage()}
        </Layout>
    );
};


const App: React.FC = () => {
    return (
        <ThemeProvider>
            <AppContent />
        </ThemeProvider>
    );
};

export default App;