import React, { useState, useEffect } from 'react';
import Modal from '../../components/shared/Modal';
import Input from '../../components/shared/Input';
import Button from '../../components/shared/Button';
import { Student, FeeStatus } from '../../types';

interface StudentFormModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (student: Student) => void;
    studentToEdit: Student | null;
}

const StudentFormModal: React.FC<StudentFormModalProps> = ({ isOpen, onClose, onSave, studentToEdit }) => {
    const [formData, setFormData] = useState<Omit<Student, 'id' | 'grades'>>({
        name: '',
        class: '',
        rollNumber: 0,
        parentName: '',
        parentPhone: '',
        attendance: 0,
        feeStatus: FeeStatus.Pending,
    });

    useEffect(() => {
        if (studentToEdit) {
            setFormData({
                name: studentToEdit.name,
                class: studentToEdit.class,
                rollNumber: studentToEdit.rollNumber,
                parentName: studentToEdit.parentName,
                parentPhone: studentToEdit.parentPhone,
                attendance: studentToEdit.attendance,
                feeStatus: studentToEdit.feeStatus,
            });
        } else {
            setFormData({
                name: '',
                class: '',
                rollNumber: 0,
                parentName: '',
                parentPhone: '',
                attendance: 0,
                feeStatus: FeeStatus.Pending,
            });
        }
    }, [studentToEdit, isOpen]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        
        const isNumeric = (e.target as HTMLInputElement).type === 'number';

        setFormData(prev => ({
            ...prev,
            [name]: isNumeric ? parseInt(value, 10) || 0 : value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const studentData: Student = {
            id: studentToEdit ? studentToEdit.id : `stu-${Date.now()}`,
            ...formData,
            grades: studentToEdit ? studentToEdit.grades : { Math: 0, Science: 0, English: 0, History: 0 },
        };
        onSave(studentData);
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} title={studentToEdit ? 'Edit Student' : 'Add New Student'}>
            <form onSubmit={handleSubmit} className="space-y-4">
                <Input label="Full Name" id="name" name="name" value={formData.name} onChange={handleChange} required />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input label="Class" id="class" name="class" value={formData.class} onChange={handleChange} required />
                    <Input label="Roll Number" id="rollNumber" name="rollNumber" type="number" value={formData.rollNumber} onChange={handleChange} required />
                </div>
                <Input label="Parent's Name" id="parentName" name="parentName" value={formData.parentName} onChange={handleChange} required />
                <Input label="Parent's Phone" id="parentPhone" name="parentPhone" type="tel" value={formData.parentPhone} onChange={handleChange} required />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input label="Attendance (%)" id="attendance" name="attendance" type="number" value={formData.attendance} onChange={handleChange} required min="0" max="100" />
                     <div>
                        <label htmlFor="feeStatus" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fee Status</label>
                        <select
                            id="feeStatus"
                            name="feeStatus"
                            value={formData.feeStatus}
                            onChange={handleChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-dark dark:focus:border-primary-dark"
                        >
                            {Object.values(FeeStatus).map(status => (
                                <option key={status} value={status}>{status}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="flex justify-end space-x-3 pt-4">
                    <Button type="button" variant="secondary" onClick={onClose}>Cancel</Button>
                    <Button type="submit">Save Student</Button>
                </div>
            </form>
        </Modal>
    );
};

export default StudentFormModal;