import React, {useCallback, useContext, useState} from 'react';
import {withRouter, Redirect} from 'react-router';
import {MyButton} from 'src/components/button';
import {Input} from 'src/components/input';
import {AuthContext} from 'src/components/auth';
import app from 'src/lib/firebase';

const styles = require('src/pages/login/login.module.scss');

const Login: React.FC<any> = ({history}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePwd = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleLogin = useCallback(
        async () => {
            try {
                await app
                    .auth()
                    .signInWithEmailAndPassword(email, password);
                history.push('/');
            } catch (error) {
                alert(error);
            }
        }, [history]
    );

    const {currentUser} = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to="/"/>;
    }

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
                       onChange={handlePwd}
                       required={true}
                       type={'password'}/>

                <MyButton styles={styles.button}
                          title={'Log in'}
                          variant='contained'
                          onClick={handleLogin}/>

                <MyButton styles={styles.forgotPwdBtn}
                          title={'Forgot password ?'}/>
            </div>
        </div>
    );
};

export default withRouter(Login);
