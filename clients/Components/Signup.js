import React,{useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import {handleRegister} from "../utils/resource";

const navigate = useNavigate();
const handleSubmit = (e) => {
    e.preventDefault();
    if(username.trim() && password.trim() && email.trim()) {
        handleRegister(email,username,password, navigate);
        setPassword("");
        setUsername("");
        setEmail("");
    };
};

const Signup = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email,setEmail] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        if(username.trim() && password.trim() && email.trim()) {
           console.log(email,username,password);
           setPassword("");
              setUsername("");
                setEmail("");

        }
    };
    return (
        <main className='signup'>
            <form className="signup__form" onSubmit={handleSubmit}>
                <h2 className="signup__title">Create a new account</h2>
                <label htmlFor='email'>Email Address</label>
                <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor='username'>Username</label>
                <input
                id="username"
                name="username"
                required
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor='password'>Password</label>
                <input
                id="password"
                type="password"
                name="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <button className="signupButton">Register</button>
                <p style={{textAlign:"center",marginTop:"30px"}}>
                    Already have an account?{""} 
                    <Link className="link" to={'/'}>
                        Sign In</Link>
                        </p>
            </form>
        </main>

                  
    );
};

export default Signup;