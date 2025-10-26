
import React, { useState, useEffect, useCallback } from 'react';
import Modal from '../../components/shared/Modal';
import { Student } from '../../types';
import { generateStudentReport } from '../../services/geminiService';
import { ReportIcon } from '../../components/icons';

interface AIReportGeneratorProps {
    student: Student;
    isOpen: boolean;
    onClose: () => void;
}

// Helper to render markdown-like text
const renderMarkdown = (text: string) => {
    return text.split('\n').map((line, index) => {
        if (line.startsWith('**') && line.endsWith('**')) {
            return <p key={index} className="font-bold my-2">{line.replace(/\*\*/g, '')}</p>;
        }
        if (line.startsWith('* ')) {
            return <li key={index} className="ml-4 list-disc">{line.substring(2)}</li>;
        }
        if (line.match(/^\d+\./)) {
             return <p key={index} className="font-semibold mt-2">{line}</p>;
        }
        return <p key={index} className="my-1">{line}</p>;
    });
};


const AIReportGenerator: React.FC<AIReportGeneratorProps> = ({ student, isOpen, onClose }) => {
    const [report, setReport] = useState<string>('');
    const [isLoading, setIsLoading] = useState(false);

    const generateReport = useCallback(async () => {
        if (!student) return;
        setIsLoading(true);
        setReport('');
        try {
            const result = await generateStudentReport(student);
            setReport(result);
        } catch (error) {
            console.error(error);
            setReport('Failed to generate report.');
        } finally {
            setIsLoading(false);
        }
    }, [student]);
    
    useEffect(() => {
        if (isOpen) {
            generateReport();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen]);

    return (
        <Modal isOpen={isOpen} onClose={onClose} title={`AI-Generated Report for ${student.name}`}>
            {isLoading ? (
                <div className="flex flex-col items-center justify-center h-64">
                    <ReportIcon className="w-12 h-12 text-primary animate-bounce" />
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">Generating personalized report...</p>
                    <p className="text-sm text-gray-500">This may take a moment.</p>
                </div>
            ) : (
                <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
                    {renderMarkdown(report)}
                </div>
            )}
        </Modal>
    );
};

export default AIReportGenerator;
