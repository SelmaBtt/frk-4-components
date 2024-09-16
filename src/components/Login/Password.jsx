import React from "react";
import styles from './Login.module.css';

const Password = ({ setPassword }) => {

    const onPasswordChange = (e) => {
        setPassword(e.target.value)
        console.log(e.target.value)
    }
    
    return(
        <div className={styles.passwordContainer}>
            Password
            <input type="password" onChange={onPasswordChange} />
        </div>
    )
}

export default Password;