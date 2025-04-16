import React from 'react';
import styles from "../../styles/layout/settingsWindow/SettingSelect.module.scss";

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement>;

interface Option {
    value: string,
}

interface SettingSelectProps extends SelectProps {
    id: string,
    label: string,
    options: Option[];
}

const SettingSelect: React.FC<SettingSelectProps> = ({id, label, options}) => {

    return (
        <div className={ styles.controlPanel }>
            <div className={ styles.labelContainer }>
                <label htmlFor={ id }>{ label }</label>
            </div>

            <select id={ id }>
                { options.map((option, index) =>
                    <option key={ index }>{ option.value }</option>
                ) }
            </select>
        </div>
    );
};

export default SettingSelect;