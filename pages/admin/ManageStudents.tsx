import React, { useState } from 'react';
import Card from '../../components/shared/Card';
import Table from '../../components/shared/Table';
import Button from '../../components/shared/Button';
import { Student } from '../../types';
import AIReportGenerator from './AIReportGenerator';
import StudentFormModal from './StudentFormModal';
import ConfirmationModal from '../../components/shared/ConfirmationModal';
import { EditIcon, DeleteIcon, AddIcon } from '../../components/icons';

interface ManageStudentsProps {
    students: Student[];
    setStudents: React.Dispatch<React.SetStateAction<Student[]>>;
}

const ManageStudents: React.FC<ManageStudentsProps> = ({ students, setStudents }) => {
    const [isReportModalOpen, setReportModalOpen] = useState(false);
    const [isFormModalOpen, setFormModalOpen] = useState(false);
    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
    const [studentToEdit, setStudentToEdit] = useState<Student | null>(null);
    const [studentToDelete, setStudentToDelete] = useState<Student | null>(null);

    const handleOpenReportModal = (student: Student) => {
        setSelectedStudent(student);
        setReportModalOpen(true);
    };

    const handleOpenFormModal = (student: Student | null) => {
        setStudentToEdit(student);
        setFormModalOpen(true);
    };
    
    const handleOpenDeleteModal = (student: Student) => {
        setStudentToDelete(student);
        setDeleteModalOpen(true);
    };

    const handleSaveStudent = (studentData: Student) => {
        if (studentToEdit) {
            setStudents(students.map(s => s.id === studentData.id ? studentData : s));
        } else {
            setStudents([...students, studentData]);
        }
        setFormModalOpen(false);
        setStudentToEdit(null);
    };

    const handleDeleteStudent = () => {
        if (studentToDelete) {
            setStudents(students.filter(s => s.id !== studentToDelete.id));
            setDeleteModalOpen(false);
            setStudentToDelete(null);
        }
    };

    const columns = [
        { header: 'Roll No.', accessor: 'rollNumber' as keyof Student },
        { header: 'Name', accessor: 'name' as keyof Student },
        { header: 'Class', accessor: 'class' as keyof Student },
        { header: 'Parent Name', accessor: 'parentName' as keyof Student },
        { header: 'Attendance', accessor: (item: Student) => `${item.attendance}%` },
        {
            header: 'Actions',
            accessor: (item: Student) => (
                <div className="flex space-x-2">
                    <Button variant="secondary" onClick={() => handleOpenFormModal(item)} className="p-2 h-8 w-8 flex items-center justify-center" aria-label="Edit Student">
                        <EditIcon className="w-4 h-4" />
                    </Button>
                     <Button variant="danger" onClick={() => handleOpenDeleteModal(item)} className="p-2 h-8 w-8 flex items-center justify-center" aria-label="Delete Student">
                        <DeleteIcon className="w-4 h-4" />
                    </Button>
                    <Button
                        onClick={() => handleOpenReportModal(item)}
                        className="px-2 py-1 text-xs"
                    >
                        AI Report
                    </Button>
                </div>
            )
        },
    ];

    return (
        <>
            <Card>
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold text-gray-800 dark:text-white">Manage Students</h2>
                    <Button onClick={() => handleOpenFormModal(null)} className="flex items-center space-x-2">
                        <AddIcon className="w-5 h-5"/>
                        <span>Add Student</span>
                    </Button>
                </div>
                <Table columns={columns} data={students} />
            </Card>
            
            {selectedStudent && (
                <AIReportGenerator
                    student={selectedStudent}
                    isOpen={isReportModalOpen}
                    onClose={() => setReportModalOpen(false)}
                />
            )}
            
            <StudentFormModal
                isOpen={isFormModalOpen}
                onClose={() => { setFormModalOpen(false); setStudentToEdit(null); }}
                onSave={handleSaveStudent}
                studentToEdit={studentToEdit}
            />
            
            {studentToDelete && (
                <ConfirmationModal
                    isOpen={isDeleteModalOpen}
                    onClose={() => setDeleteModalOpen(false)}
                    onConfirm={handleDeleteStudent}
                    title="Delete Student"
                    message={`Are you sure you want to delete ${studentToDelete.name}? This action cannot be undone.`}
                />
            )}
        </>
    );
};

export default ManageStudents;