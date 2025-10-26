import React, { useState, useEffect } from 'react';
import Modal from '../../components/shared/Modal';
import Input from '../../components/shared/Input';
import Button from '../../components/shared/Button';
import { Teacher } from '../../types';

interface TeacherFormModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (teacher: Teacher) => void;
    teacherToEdit: Teacher | null;
}

const TeacherFormModal: React.FC<TeacherFormModalProps> = ({ isOpen, onClose, onSave, teacherToEdit }) => {
    const [formData, setFormData] = useState<Omit<Teacher, 'id'>>({
        name: '',
        subject: '',
        email: '',
        phone: '',
    });

    useEffect(() => {
        if (teacherToEdit) {
            setFormData(teacherToEdit);
        } else {
            setFormData({
                name: '',
                subject: '',
                email: '',
                phone: '',
            });
        }
    }, [teacherToEdit, isOpen]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const teacherData: Teacher = {
            id: teacherToEdit ? teacherToEdit.id : `teach-${Date.now()}`,
            ...formData,
        };
        onSave(teacherData);
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} title={teacherToEdit ? 'Edit Teacher' : 'Add New Teacher'}>
            <form onSubmit={handleSubmit} className="space-y-4">
                <Input label="Full Name" id="name" name="name" value={formData.name} onChange={handleChange} required />
                <Input label="Subject" id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
                <Input label="Email Address" id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
                <Input label="Phone Number" id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required />
                <div className="flex justify-end space-x-3 pt-4">
                    <Button type="button" variant="secondary" onClick={onClose}>Cancel</Button>
                    <Button type="submit">Save Teacher</Button>
                </div>
            </form>
        </Modal>
    );
};

export default TeacherFormModal;
