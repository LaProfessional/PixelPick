import React from 'react';
import useModal from "../hooks/useModal";
import styles from "../../styles/layout/sidebar/Sidebar.module.scss";

import { ReactComponent as LogoSvg } from "../../assets/logo.svg";
import { ReactComponent as UploadFileSvg } from "../../assets/upload-file.svg";
import { ReactComponent as SettingsSvg } from "../../assets/settings.svg";

import ColorOutputConsole from "./ColorOutputConsole";
import Button from "./Button";

const Sidebar = () => {
    const { setIsModalOpen } = useModal();

    return (
        <aside className={ styles.sidebar }>
            <header className={ styles.logoContainer }>
                <LogoSvg/>
                <h1>Pixel pick</h1>
            </header>
            <hr/>
            <div className={ styles.currentColor }></div>
            <ColorOutputConsole type={ "HEX:" } value={ "#ffffff" }></ColorOutputConsole>
            <ColorOutputConsole type={ "RGB:" } value={ "rgb(255,255,255)" }></ColorOutputConsole>
            <ColorOutputConsole type={ "Hsla:" } value={ "hsla(0, 0%, 100%, 1)" }></ColorOutputConsole>

            <section className={ styles.containerColors }>
                <div className={ styles.colorBlock }></div>
            </section>

            <hr/>
            <section>
                <Button>Clear</Button>
                <Button>Download</Button>
                <Button>Generate random Color</Button>
            </section>
            <hr/>

            <footer className={ styles.footer }>
                <div className={ styles.containerUploadFile }>
                    <UploadFileSvg className={ styles.uploadFileSvg }></UploadFileSvg>
                    <Button type={ "upload" }>Upload Image</Button>
                </div>
                <button onClick={() => setIsModalOpen(true) }>
                    <SettingsSvg className={ styles.settingsSvg }></SettingsSvg>
                </button>
            </footer>
        </aside>
    );
};

export default Sidebar;