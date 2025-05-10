import React, { useState, createContext } from 'react';
import { ModalContextType } from "../../types/ModalContextType";

export const ModalContext = createContext<ModalContextType | undefined>(undefined);

interface ModalContextProps {
    children: React.ReactNode;
}

const ModalContextProvider: React.FC<ModalContextProps> = ({children}) => {
    const [ isModalOpen, setIsModalOpen ] = useState(false);

    return (
        <ModalContext.Provider value={ {isModalOpen, setIsModalOpen} }>
            { children }
        </ModalContext.Provider>
    );
};

export default ModalContextProvider;