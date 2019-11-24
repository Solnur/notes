import React from 'react';
import {MyButton} from "src/components/button";
import {Input} from 'src/components/input';

const styles = require('src/pages/login/login.module.scss');

export const Login: React.FC = () => {
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log('log', e.target.value);
    };

    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <p className={styles.title}>Log in</p>

                <Input styles={styles.input}
                       label={'User name or email'}
                       onChange={onChange}
                       required={true}
                       type={'email'}/>

                <Input styles={styles.input}
                       label={'Password'}
                       onChange={onChange}
                       required={true}
                       type={'password'}/>

                <MyButton styles={styles.button}
                          title={'Log in'}
                          variant='contained'/>

                <MyButton styles={styles.forgotPwdBtn}
                          title={'Forgot password ?'}/>
            </div>
        </div>
    );
};
