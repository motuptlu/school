
import React from 'react';
import { User } from '../../types';
import { LogoutIcon, MenuIcon } from '../icons';
import ThemeToggle from '../shared/ThemeToggle';

interface HeaderProps {
    user: User;
    onLogout: () => void;
    toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ user, onLogout, toggleSidebar }) => {
    return (
        <header className="bg-white dark:bg-dark-secondary p-4 flex justify-between items-center shadow-sm">
            <button onClick={toggleSidebar} className="lg:hidden text-gray-600 dark:text-gray-300">
                <MenuIcon className="w-6 h-6" />
            </button>
            <div className="hidden lg:block">
                <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Welcome, {user.name.split(' ')[0]}!</h1>
                <p className="text-sm text-secondary dark:text-gray-400">Here's your {user.role} dashboard overview.</p>
            </div>
            <div className="flex items-center space-x-4">
                <ThemeToggle />
                <div className="flex items-center space-x-3">
                    <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full" />
                    <div>
                        <p className="font-semibold text-gray-800 dark:text-white">{user.name}</p>
                        <p className="text-xs text-secondary dark:text-gray-400">{user.role}</p>
                    </div>
                </div>
                <button onClick={onLogout} title="Logout" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-secondary dark:text-gray-400">
                    <LogoutIcon className="w-5 h-5" />
                </button>
            </div>
        </header>
    );
};

export default Header;
