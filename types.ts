export enum UserRole {
    Admin = 'Admin',
    Teacher = 'Teacher',
    Parent = 'Parent',
}

export enum FeeStatus {
    Paid = 'Paid',
    Pending = 'Pending',
    Unpaid = 'Unpaid',
    Overdue = 'Overdue',
}

export interface User {
    id: string;
    name: string;
    role: UserRole;
    avatar: string;
}

export interface Student {
    id: string;
    name: string;
    class: string;
    rollNumber: number;
    parentName: string;
    parentPhone: string;
    attendance: number;
    grades: {
        Math: number;
        Science: number;
        English: number;
        History: number;
    };
    feeStatus: FeeStatus;
}

export interface Teacher {
    id: string;
    name: string;
    subject: string;
    email: string;
    phone: string;
}