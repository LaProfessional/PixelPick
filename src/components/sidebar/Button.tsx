import React from 'react';
import styles from "../../styles/layout/sidebar/Button.module.scss";

interface ButtonProps {
    children: string;
    type?: string;
}

const Button: React.FC<ButtonProps> = ({children, type = "default"}) => {
    return (
        <button className={ `${ styles.button } ${ styles[type] }` }>{ children }</button>
    );
};

export default Button;