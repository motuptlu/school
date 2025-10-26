import React, { useState } from 'react';
import Card from '../../components/shared/Card';
import Table from '../../components/shared/Table';
import Button from '../../components/shared/Button';
import { Student, FeeStatus } from '../../types';
import FeeStatusModal from './FeeStatusModal';

interface ManageFeesProps {
    students: Student[];
    setStudents: React.Dispatch<React.SetStateAction<Student[]>>;
}

const getStatusBadge = (status: FeeStatus) => {
    const baseClasses = 'px-2 py-1 text-xs font-semibold rounded-full';
    switch (status) {
        case FeeStatus.Paid:
            return <span className={`${baseClasses} bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300`}>Paid</span>;
        case FeeStatus.Pending:
            return <span className={`${baseClasses} bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300`}>Pending</span>;
        case FeeStatus.Unpaid:
            return <span className={`${baseClasses} bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300`}>Unpaid</span>;
        case FeeStatus.Overdue:
            return <span className={`${baseClasses} bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300`}>Overdue</span>;
        default:
            return <span className={`${baseClasses} bg-gray-100 text-gray-800`}>Unknown</span>;
    }
};


const ManageFees: React.FC<ManageFeesProps> = ({ students, setStudents }) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

    const handleOpenModal = (student: Student) => {
        setSelectedStudent(student);
        setModalOpen(true);
    };

    const handleUpdateStatus = (studentId: string, newStatus: FeeStatus) => {
        setStudents(students.map(s => s.id === studentId ? { ...s, feeStatus: newStatus } : s));
        setModalOpen(false);
        setSelectedStudent(null);
    };
    
    const columns = [
        { header: 'Roll No.', accessor: 'rollNumber' as keyof Student },
        { header: 'Name', accessor: 'name' as keyof Student },
        { header: 'Class', accessor: 'class' as keyof Student },
        { header: 'Parent Phone', accessor: 'parentPhone' as keyof Student },
        { 
            header: 'Status', 
            accessor: (item: Student) => getStatusBadge(item.feeStatus)
        },
        {
            header: 'Actions',
            accessor: (item: Student) => (
                <Button variant="secondary" onClick={() => handleOpenModal(item)} className="px-2 py-1 text-xs">
                    Update Status
                </Button>
            )
        },
    ];

    return (
        <>
            <Card>
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold text-gray-800 dark:text-white">Manage Student Fees</h2>
                </div>
                <Table columns={columns} data={students} />
            </Card>

            {selectedStudent && (
                 <FeeStatusModal
                    isOpen={isModalOpen}
                    onClose={() => setModalOpen(false)}
                    student={selectedStudent}
                    onUpdate={handleUpdateStatus}
                />
            )}
        </>
    );
};

export default ManageFees;