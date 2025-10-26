import React, { useState } from 'react';
import Card from '../../components/shared/Card';
import Table from '../../components/shared/Table';
import Button from '../../components/shared/Button';
import { Teacher } from '../../types';
import TeacherFormModal from './TeacherFormModal';
import ConfirmationModal from '../../components/shared/ConfirmationModal';
import { EditIcon, DeleteIcon, AddIcon } from '../../components/icons';

interface ManageTeachersProps {
    teachers: Teacher[];
    setTeachers: React.Dispatch<React.SetStateAction<Teacher[]>>;
}

const ManageTeachers: React.FC<ManageTeachersProps> = ({ teachers, setTeachers }) => {
    const [isFormModalOpen, setFormModalOpen] = useState(false);
    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
    const [teacherToEdit, setTeacherToEdit] = useState<Teacher | null>(null);
    const [teacherToDelete, setTeacherToDelete] = useState<Teacher | null>(null);
    
    const handleOpenFormModal = (teacher: Teacher | null) => {
        setTeacherToEdit(teacher);
        setFormModalOpen(true);
    };

    const handleOpenDeleteModal = (teacher: Teacher) => {
        setTeacherToDelete(teacher);
        setDeleteModalOpen(true);
    };

    const handleSaveTeacher = (teacherData: Teacher) => {
        if (teacherToEdit) {
            setTeachers(teachers.map(t => t.id === teacherData.id ? teacherData : t));
        } else {
            setTeachers([...teachers, teacherData]);
        }
        setFormModalOpen(false);
        setTeacherToEdit(null);
    };

    const handleDeleteTeacher = () => {
        if (teacherToDelete) {
            setTeachers(teachers.filter(t => t.id !== teacherToDelete.id));
            setDeleteModalOpen(false);
            setTeacherToDelete(null);
        }
    };

    const columns = [
        { header: 'Name', accessor: 'name' as keyof Teacher },
        { header: 'Subject', accessor: 'subject' as keyof Teacher },
        { header: 'Email', accessor: 'email' as keyof Teacher },
        { header: 'Phone', accessor: 'phone' as keyof Teacher },
        {
            header: 'Actions',
            accessor: (item: Teacher) => (
                <div className="flex space-x-2">
                    <Button variant="secondary" onClick={() => handleOpenFormModal(item)} className="p-2 h-8 w-8 flex items-center justify-center" aria-label="Edit Teacher">
                       <EditIcon className="w-4 h-4" />
                    </Button>
                    <Button variant="danger" onClick={() => handleOpenDeleteModal(item)} className="p-2 h-8 w-8 flex items-center justify-center" aria-label="Delete Teacher">
                       <DeleteIcon className="w-4 h-4" />
                    </Button>
                </div>
            )
        },
    ];

    return (
        <>
            <Card>
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold text-gray-800 dark:text-white">Manage Teachers</h2>
                    <Button onClick={() => handleOpenFormModal(null)} className="flex items-center space-x-2">
                        <AddIcon className="w-5 h-5"/>
                        <span>Add Teacher</span>
                    </Button>
                </div>
                <Table columns={columns} data={teachers} />
            </Card>
            
            <TeacherFormModal
                isOpen={isFormModalOpen}
                onClose={() => { setFormModalOpen(false); setTeacherToEdit(null); }}
                onSave={handleSaveTeacher}
                teacherToEdit={teacherToEdit}
            />

            {teacherToDelete && (
                 <ConfirmationModal
                    isOpen={isDeleteModalOpen}
                    onClose={() => setDeleteModalOpen(false)}
                    onConfirm={handleDeleteTeacher}
                    title="Delete Teacher"
                    message={`Are you sure you want to delete ${teacherToDelete.name}? This action cannot be undone.`}
                />
            )}
        </>
    );
};

export default ManageTeachers;