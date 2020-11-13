export interface User {
    id: number;
    firstName: string;
    lastName: string;
    personalNumber: string;
    login: string;
    role: Role;
}

export enum Role {
    Admin = "Admin",
    User = "User"
}