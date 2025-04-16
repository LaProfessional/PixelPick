import React, { useContext } from 'react';
import styles from "../../styles/layout/overlay/Overlay.module.scss";

import { ModalContext } from "../providers/ModalContextProvider";

interface ModalContextType {
    isModalOpen: boolean;
    setIsModalOpen: (value: boolean) => void;
}

interface OverlayProps {
    children: React.ReactNode;
}

const Overlay: React.FC<OverlayProps> = ({children}) => {

    const {isModalOpen} = useContext<ModalContextType | undefined>(ModalContext) ?? {};

    return (
        <div className={ `${ styles.overlay } ${ isModalOpen ? styles.active : '' }` }>{ children }</div>
    );
};

export default Overlay;