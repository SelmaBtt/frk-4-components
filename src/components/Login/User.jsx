import React from "react";
import styles from './Login.module.css';

const User = ({ setUser }) => {
    const onUserCompleted = (e) => {
        setUser(e.target.value)
        console.log(e.target.value)
    }

    return(
        <div className={styles.userContainer}>
            User
            <input type="text" onBlur={onUserCompleted} />
        </div>
    )
}

export default User;