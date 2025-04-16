import React from 'react';
import styles from "../../styles/layout/settingsWindow/SettingsWindow.module.scss";
import { ReactComponent as CloseSvg } from "../../assets/close.svg";

import Overlay from "../overlay/Overlay";
import SettingInput from "./SettingInput";
import SettingSelect from "./SettingSelect";

const SettingsWindow = () => {
    return (
        <Overlay>
            <div className={ styles.container }>
                <header className={ styles.headerContainer }>
                    <h2>Settings</h2>
                    <CloseSvg className={ styles.closeSvg }></CloseSvg>
                </header>

                <section className={ styles.sectionSettings }>
                    <SettingInput
                        id="scaled-image-size"
                        label="Scaled image size:"
                        value={ 20 }
                        type="number"
                    />
                    <SettingInput
                        id="magnifier-width"
                        label="Magnifier width:"
                        value={ 150 }
                        type="number"
                    />
                    <SettingInput
                        id="color-pixels-size"
                        label="Color pixels size:"
                        value={ 5 }
                        type="number"
                    />
                    <SettingInput
                        id="magnifier-grid"
                        label="Magnifier grid:"
                        type="checkbox"
                        state="disabled"
                    />
                    <SettingInput
                        id="invert-image-scrolling-by-dragging"
                        label="Invert image scrolling by dragging:"
                        type="checkbox"
                        state="disabled"
                    />

                    <SettingSelect
                        id="copy-color-automatically"
                        label="Copy color automatically:"
                        options={ [
                            {value: "None"},
                            {value: "HEX"},
                            {value: "RGB"},
                            {value: "Hsla"},
                        ] }
                    />
                    <SettingSelect
                        id="color-mode"
                        label="Color mode:"
                        options={ [
                            {value: "Auto"},
                            {value: "RGB"},
                            {value: "RGBA"},
                        ] }
                    />
                    <SettingSelect
                        id="theme-mode"
                        label="Theme mode:"
                        options={ [
                            {value: "Dark"},
                            {value: "Light"},
                            {value: "Auto"},
                        ] }
                    />
                    <SettingSelect
                        id="language"
                        label="Language:"
                        options={ [
                            {value: "English"},
                            {value: "Русский"},
                        ] }
                    />
                </section>
            </div>
        </Overlay>
    );
};

export default SettingsWindow;