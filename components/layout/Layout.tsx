
import React, { ReactNode, useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { User } from '../../types';

interface LayoutProps {
    children: ReactNode;
    user: User;
    onLogout: () => void;
    navigate: (page: string) => void;
    currentPage: string;
}

const Layout: React.FC<LayoutProps> = ({ children, user, onLogout, navigate, currentPage }) => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };
    
    return (
        <div className="flex h-screen bg-light dark:bg-dark">
            <Sidebar user={user} navigate={navigate} currentPage={currentPage} isOpen={isSidebarOpen}/>
            {isSidebarOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden" onClick={toggleSidebar}></div>}
            <div className="flex-1 flex flex-col overflow-hidden">
                <Header user={user} onLogout={onLogout} toggleSidebar={toggleSidebar} />
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-light dark:bg-dark p-6">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default Layout;
