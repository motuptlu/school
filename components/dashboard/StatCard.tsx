import React, { ReactElement } from 'react';
import Card from '../shared/Card';

interface StatCardProps {
    title: string;
    value: string | number;
    icon: ReactElement<{ className?: string }>;
    colorClass: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, colorClass }) => {
    return (
        <Card>
            <div className="flex items-center">
                <div className={`p-3 rounded-full mr-4 ${colorClass}`}>
                    {React.cloneElement(icon, { className: 'w-6 h-6 text-white' })}
                </div>
                <div>
                    <p className="text-sm font-medium text-secondary dark:text-gray-400">{title}</p>
                    <p className="text-2xl font-bold text-gray-800 dark:text-white">{value}</p>
                </div>
            </div>
        </Card>
    );
};

export default StatCard;