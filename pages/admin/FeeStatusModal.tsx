import React, { useState } from 'react';
import Modal from '../../components/shared/Modal';
import Button from '../../components/shared/Button';
import { Student, FeeStatus } from '../../types';

interface FeeStatusModalProps {
    isOpen: boolean;
    onClose: () => void;
    student: Student;
    onUpdate: (studentId: string, newStatus: FeeStatus) => void;
}

const FeeStatusModal: React.FC<FeeStatusModalProps> = ({ isOpen, onClose, student, onUpdate }) => {
    const [status, setStatus] = useState<FeeStatus>(student.feeStatus);

    const handleUpdate = () => {
        onUpdate(student.id, status);
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} title={`Update Fee Status for ${student.name}`}>
            <div className="space-y-4">
                <p>Current Status: <span className="font-semibold">{student.feeStatus}</span></p>
                <div>
                    <label htmlFor="feeStatus" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        New Status
                    </label>
                    <select
                        id="feeStatus"
                        value={status}
                        onChange={(e) => setStatus(e.target.value as FeeStatus)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-dark dark:focus:border-primary-dark"
                    >
                        {Object.values(FeeStatus).map(s => (
                            <option key={s} value={s}>{s}</option>
                        ))}
                    </select>
                </div>
                <div className="flex justify-end space-x-3 pt-4">
                    <Button type="button" variant="secondary" onClick={onClose}>Cancel</Button>
                    <Button type="button" onClick={handleUpdate}>Update Status</Button>
                </div>
            </div>
        </Modal>
    );
};

export default FeeStatusModal;