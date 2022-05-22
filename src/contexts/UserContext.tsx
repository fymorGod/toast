import { useState } from "react";
import { createContext, ReactNode } from "react";
import { toast } from "react-toastify";
import UserModal from "../components/UserModal";
import { api } from "../services/fakeapi";
import { User, UserFormData } from "../types/user";

type UserContextType = {
    isOpenModal: boolean;
    setIsOpenModal: (newState: boolean) => void;
    users: User[],
    setUsers: (newState: User[]) => void;
    filterUsers: (filter: string) => void;
    createEvaporadora: (data: UserFormData) => void;
}

type UserContextProps = {
    children: ReactNode
}



export const UserContext = createContext<UserContextType>({} as UserContextType);


export const UserContextProvider = ({ children }: UserContextProps) => {
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [users, setUsers] = useState<User[]>([])

    const filterUsers = async (filter: string) => {
        const response = await fetch(`http://localhost:3333/users?q=${filter}`);

        const data = await response.json()

        setUsers(data)
    }

    const createEvaporadora = async (data: UserFormData) => {
        const evaporadora = {
            codigo: data.codigo,
            modelo: data.modelo,
            marca: data.marca,
            potencia: data.potencia
        };

        await api.post('/evaporadoras', evaporadora)

        toast.success('Evaporadora criada com sucesso')
    }
    return (
        <UserContext.Provider value={{isOpenModal, setIsOpenModal, users, setUsers, filterUsers, createEvaporadora}}>
            {children}
            {isOpenModal && <UserModal />}
        </UserContext.Provider>
    )
}