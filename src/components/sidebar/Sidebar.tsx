import React from 'react';
import styles from "./Sidebar.module.css";
import { ReactComponent as Logo } from "../assets/logo.svg";

import ColorOutputConsole from "./ColorOutputConsole";

const Sidebar = () => {
    return (
        <aside className={ styles.sidebar }>
            <div className={ styles.logoContainer }>
                <Logo/>
                <h1 className={ styles.title }>Chroma Grab</h1>
            </div>
            <hr/>
            <div className={ styles.currentColor }></div>
            <ColorOutputConsole></ColorOutputConsole>
        </aside>
    );
};

export default Sidebar;