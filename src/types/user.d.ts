export interface User {
    id: number;
    name: string;
    email: string;
}

export interface UserFormData {
    id?:number;
    codigo?: string;
    modelo?: string;
    marca?: string;
    potencia?: string
}