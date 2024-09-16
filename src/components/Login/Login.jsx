import React from "react";
import User from "./user";
import Password from "./Password";
import { useState } from "react";
import Button from "./Button";
import styles from './Login.module.css';

const Login = () => {
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')

    return(
        <div className={styles.loginContainer}>
            <User setUser={setUser} />
            <Password setPassword={setPassword} />
            <Button />
        </div>
    )
};

export default Login;