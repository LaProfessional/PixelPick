import React, { useState, createContext } from 'react';

interface ModalContextType {
    isModalOpen: boolean;
    setIsModalOpen: (value: boolean) => void;
}

export const ModalContext = createContext<ModalContextType | undefined>(undefined);

interface ModalContextProps {
    children: React.ReactNode;
}

const ModalContextProvider: React.FC<ModalContextProps> = ({children}) => {
    const [ isModalOpen, setIsModalOpen ] = useState(true);

    return (
        <ModalContext.Provider value={ {isModalOpen, setIsModalOpen} }>
            { children }
        </ModalContext.Provider>
    );
};

export default ModalContextProvider;