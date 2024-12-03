import React from 'react';
// Style
import styles from './Button.module.css';
import {CaretDownOutlined, DownOutlined} from "@ant-design/icons";

const CustomButtonComponent = ({ icon, title, subTitle, notify, isDrop}) => {

    return (
        <button className={styles.button}>
            <div className={styles.icon}>
                {icon && icon}
            </div>
            <div className={styles.titleContainer}>
                {subTitle && subTitle} {notify && <span className={styles.notify}>{notify}</span>}<br/>
                <span>{title}<span>{isDrop === true && <CaretDownOutlined style={{ marginLeft: '4px', fontSize: '0.8rem' }}/>}</span></span>
            </div>
        </button>
    );
}

export default CustomButtonComponent;