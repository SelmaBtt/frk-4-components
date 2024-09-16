import React from "react";
import User from "./user";
import Password from "./Password";
import { useState } from "react";

const Login = () => {
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')

    return(
        <div>
            <User setUser={setUser} />
            <Password setPassword={setPassword} />
        </div>
    )
};

export default Login;