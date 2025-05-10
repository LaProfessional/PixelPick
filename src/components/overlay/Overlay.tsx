import React from 'react';
import useModal from "../hooks/useModal";
import styles from "../../styles/layout/overlay/Overlay.module.scss";

interface OverlayProps {
    children: React.ReactNode;
}

const Overlay: React.FC<OverlayProps> = ({ children }) => {
    const { isModalOpen, setIsModalOpen } = useModal();

    const handleClickOverlay = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) setIsModalOpen(false);
    };

    return (
        <div
            onClick={ e => handleClickOverlay(e) }
            className={ `${ styles.overlay } ${ isModalOpen ? styles.active : '' }` }
        >{ children }</div>
    );
};

export default Overlay;