
import React from 'react';
import { UserRole } from '../types';
import Button from '../components/shared/Button';

interface LoginProps {
    onLogin: (role: UserRole) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
    return (
        <div className="min-h-screen bg-light dark:bg-dark flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-primary">EduSphere</h1>
                    <p className="text-secondary dark:text-gray-400 mt-2">The future of school management is here.</p>
                </div>
                <div className="bg-white dark:bg-dark-secondary shadow-2xl rounded-xl p-8">
                    <h2 className="text-2xl font-semibold text-center text-gray-800 dark:text-white mb-6">Login As</h2>
                    <div className="space-y-4">
                        <Button
                            onClick={() => onLogin(UserRole.Admin)}
                            className="w-full text-lg py-3"
                        >
                            Admin (Principal)
                        </Button>
                        <Button
                            onClick={() => onLogin(UserRole.Teacher)}
                            variant="secondary"
                            className="w-full text-lg py-3"
                        >
                            Teacher
                        </Button>
                        <Button
                            onClick={() => onLogin(UserRole.Parent)}
                            variant="secondary"
                            className="w-full text-lg py-3"
                        >
                            Parent
                        </Button>
                    </div>
                    <p className="text-xs text-center text-gray-400 dark:text-gray-500 mt-8">
                        This is a simulated login. Select a role to view the corresponding dashboard.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
