import React from 'react';
import styles from "../../styles/layout/sidebar/ColorOutputConsole.module.scss";
import "../../styles/base/reset.scss";

import { ReactComponent as ContentCopy } from "../../assets/content-copy.svg";

interface ColorOutputConsoleProps {
    type: string;
    value: string;
}

const ColorOutputConsole: React.FC<ColorOutputConsoleProps> = ({type, value}) => {
    return (
        <div className={ styles.colorOutputConsole }>
            <h2 className={ styles.colorType }>{ type }</h2>
            <input value={ value } readOnly={ true }/>
            <ContentCopy className={ styles.contentCopySvg }/>
        </div>
    )
};
export default ColorOutputConsole;