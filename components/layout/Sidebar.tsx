import React from 'react';
import { User, UserRole } from '../../types';
import { DashboardIcon, StudentsIcon, TeachersIcon, FeesIcon } from '../icons';

interface SidebarProps {
    user: User;
    navigate: (page: string) => void;
    currentPage: string;
    isOpen: boolean;
}

interface NavItem {
    label: string;
    icon: React.ReactElement<{ className?: string }>;
    page: string;
    roles: UserRole[];
}

const navItems: NavItem[] = [
    { label: 'Dashboard', icon: <DashboardIcon className="w-5 h-5" />, page: 'dashboard', roles: [UserRole.Admin, UserRole.Teacher, UserRole.Parent] },
    { label: 'Students', icon: <StudentsIcon className="w-5 h-5" />, page: 'students', roles: [UserRole.Admin] },
    { label: 'Teachers', icon: <TeachersIcon className="w-5 h-5" />, page: 'teachers', roles: [UserRole.Admin] },
    { label: 'Manage Fees', icon: <FeesIcon className="w-5 h-5" />, page: 'fees', roles: [UserRole.Admin] },
];

const Sidebar: React.FC<SidebarProps> = ({ user, navigate, currentPage, isOpen }) => {
    const accessibleNavItems = navItems.filter(item => item.roles.includes(user.role));

    return (
        <aside className={`bg-white dark:bg-dark-secondary w-64 space-y-2 p-4 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:block fixed lg:relative h-full lg:h-auto z-30 lg:z-auto shadow-lg lg:shadow-none`}>
            <div className="flex items-center space-x-2 p-2">
                <div className="bg-primary rounded-full w-8 h-8 flex items-center justify-center text-white font-bold">E</div>
                <h1 className="text-xl font-bold text-gray-800 dark:text-white">EduSphere</h1>
            </div>
            <nav className="mt-8">
                <ul>
                    {accessibleNavItems.map(item => (
                        <li key={item.page}>
                            <a
                                href="#"
                                onClick={(e) => { e.preventDefault(); navigate(item.page); }}
                                className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${currentPage === item.page ? 'bg-primary-light text-primary dark:bg-primary dark:text-white' : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-secondary dark:text-gray-300'}`}
                            >
                                {React.cloneElement(item.icon, { className: 'w-5 h-5' })}
                                <span className="font-medium">{item.label}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;