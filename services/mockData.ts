import { User, UserRole, Student, Teacher, FeeStatus } from '../types';

export const mockUsers: User[] = [
    { id: 'admin-01', name: 'Dr. Evelyn Reed', role: UserRole.Admin, avatar: 'https://picsum.photos/seed/admin/100' },
    { id: 'teacher-01', name: 'Mr. David Chen', role: UserRole.Teacher, avatar: 'https://picsum.photos/seed/teacher/100' },
    { id: 'parent-01', name: 'Sarah Miller', role: UserRole.Parent, avatar: 'https://picsum.photos/seed/parent/100' },
];

export const mockStudents: Student[] = [
    { id: 'stu-01', name: 'Alice Johnson', class: '10 A', rollNumber: 1, parentName: 'John Johnson', parentPhone: '123-456-7890', attendance: 95, grades: { Math: 92, Science: 88, English: 95, History: 85 }, feeStatus: FeeStatus.Paid },
    { id: 'stu-02', name: 'Bob Williams', class: '10 A', rollNumber: 2, parentName: 'Jane Williams', parentPhone: '123-456-7891', attendance: 88, grades: { Math: 78, Science: 82, English: 80, History: 75 }, feeStatus: FeeStatus.Pending },
    { id: 'stu-03', name: 'Charlie Brown', class: '10 B', rollNumber: 1, parentName: 'Susan Brown', parentPhone: '123-456-7892', attendance: 98, grades: { Math: 95, Science: 97, English: 91, History: 94 }, feeStatus: FeeStatus.Paid },
    { id: 'stu-04', name: 'Diana Miller', class: '11 A', rollNumber: 1, parentName: 'Sarah Miller', parentPhone: '123-456-7893', attendance: 91, grades: { Math: 85, Science: 90, English: 88, History: 82 }, feeStatus: FeeStatus.Unpaid },
    { id: 'stu-05', name: 'Ethan Davis', class: '11 A', rollNumber: 2, parentName: 'Michael Davis', parentPhone: '123-456-7894', attendance: 75, grades: { Math: 65, Science: 70, English: 72, History: 68 }, feeStatus: FeeStatus.Overdue },
    { id: 'stu-06', name: 'Fiona Garcia', class: '12 A', rollNumber: 1, parentName: 'Maria Garcia', parentPhone: '123-456-7895', attendance: 99, grades: { Math: 98, Science: 95, English: 96, History: 97 }, feeStatus: FeeStatus.Paid },
];

export const mockTeachers: Teacher[] = [
    { id: 'teach-01', name: 'Mr. David Chen', subject: 'Mathematics', email: 'd.chen@school.com', phone: '234-567-8901' },
    { id: 'teach-02', name: 'Ms. Emily White', subject: 'Science', email: 'e.white@school.com', phone: '234-567-8902' },
    { id: 'teach-03', name: 'Mrs. Laura Green', subject: 'English', email: 'l.green@school.com', phone: '234-567-8903' },
    { id: 'teach-04', name: 'Mr. James Black', subject: 'History', email: 'j.black@school.com', phone: '234-567-8904' },
];

export const mockFeeData = [
    { name: 'Jan', collected: 40000, pending: 10000 },
    { name: 'Feb', collected: 50000, pending: 5000 },
    { name: 'Mar', collected: 45000, pending: 8000 },
    { name: 'Apr', collected: 55000, pending: 2000 },
    { name: 'May', collected: 60000, pending: 1000 },
    { name: 'Jun', collected: 52000, pending: 6000 },
];

export const mockClassData = [
    { name: 'Grade 9', students: 120 },
    { name: 'Grade 10', students: 110 },
    { name: 'Grade 11', students: 105 },
    { name: 'Grade 12', students: 95 },
];