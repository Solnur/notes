import React from 'react';
import {Input} from 'src/components/input/input';
import styles from 'src/pages/login/login.module.scss';

export const Login: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <p>Log in</p>
                <Input/>
            </div>
        </div>
    );
};
