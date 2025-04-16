import React from 'react';
import styles from "../../styles/layout/settingsWindow/SettingInput.module.scss";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

interface SettingInputProps extends InputProps {
    id: string;
    label: string;
    state?: string;
}

const SettingInput: React.FC<SettingInputProps> = ({id, label, value, type, state}) => {
    const isCheckbox = type === "checkbox";

    return (
        <div className={ styles.controlPanel }>
            <div className={ styles.labelContainer }>
                <label htmlFor={ id }>{ label }</label>
            </div>

            <div className={ styles.inputContainer }>
                <input
                    id={ id }
                    type={ type }
                    value={ value }
                    onChange={ () => {} }
                />

                { isCheckbox ? <label htmlFor={ id }>{ state }</label> : '' }
            </div>
        </div>
    );
};

export default SettingInput;