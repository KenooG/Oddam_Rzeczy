import React, { useState } from "react";
import Menu from "./Menu.jsx";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [hasSucces, setHasSucces] = useState(false);

    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, pass: password }),
            });

            const data = await response.json();

            if (response.status === 200) {

                localStorage.setItem('email', email);

                navigate("/logged")

            }
        } catch (err) {
            setHasSucces(true)
        }
    };

    return (
        <>
            <div className="registermain">
                <div className="top">
                    <Menu />
                </div>
                <div className="bottom">
                    <div className="make">Zaloguj się</div>
                    <div className="jpg"></div>
                    <div className={"form2"}>
                        {hasSucces && <p className={"bad"}>Nieprawidłowy email lub hasło</p>}
                        <form className={'register-form'} onSubmit={handleSubmit} id="myForm">
                            <label className={'label-form'} htmlFor={'email'}>Email</label>
                            <input
                                name={'email'}
                                id={'email'}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <label className={'label-form'} htmlFor={'password'}>Hasło</label>
                            <input
                                type={'password'}
                                id={'password'}
                                name={'password'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button className={'submit2'} type={'submit'}>Zaloguj się</button>
                        </form>
                        {message && <div className="message">{message}</div>}
                    </div>
                    <div className="btns">
                        <a href={'/register'}>
                            <button className={'login'} type={'button'}>Załóż konto</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
