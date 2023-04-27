import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        if(username.trim() && password.trim()) {
            e.preventDefault();
            console.log({username,password});
            setPassword("");
            setUsername("");
        }
    };
    return (
        <main className='login'>
            <form className="login__form" onSubmit={handleSubmit}>
                <h2 className="login__title">Login to your account</h2>
                <label htmlFor="username">Username</label>
                <input
                id = "username"
                name = "username"
                type = "text"
                value = {username}
                onChange = {(e) => setUsername(e.target.value)}
                className="username"
                />
                <button className="loginButton">LOG IN</button>
                <p style={{textAlign: "center", marginTop: "30px"}}
                >Donthave an account??{""}
                <Link className="link" to={"/register"}>
                    Create A New Account
                    </Link>
                    </p>
                    </form>
                    </main>   
    )
}

export default Login