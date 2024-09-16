import React from "react";

const User = ({ setUser }) => {
    const onUserCompleted = (e) => {
        setUser(e.target.value)
        console.log(e.target.value)
    }

    return(
        <div>
            User
            <input type="text" onBlur={onUserCompleted} />
        </div>
    )
}

export default User;