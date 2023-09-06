import React, { useState } from 'react';
import Menu from "./Menu.jsx";
import { useNavigate } from "react-router-dom";

const Register = () => {

    const [isRegistered, setIsRegistered] = useState(false);
    const [isTaken, setIsTaken] = useState(false);
    let navigate = useNavigate();


    const [formData, setFormData] = useState({
        email: '',
        password: '',
        password2: '',
    });
    const [errors, setErrors] = useState({
        email: null,
        password: null,
    });

    const registerUser = async (email, password) => {
        const response = await fetch('http://localhost:8000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, pass: password }),
        });

        const data = await response.json();

        if (response.status === 409) {


            setIsTaken(true);

            throw new Error('Email is already taken');


        }

        if (response.status !== 201) {
            throw new Error(data.error || 'Registration failed');
        }

        return data;
    };




    const validateEmail = email => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

    const handleSubmit = async (e) => {
        e.preventDefault();
        let validationErrors = {};

        if (!validateEmail(formData.email)) {
            validationErrors.email = 'Email musi zawierać znak @';
        }
        if (formData.password !== formData.password2) {
            validationErrors.password = 'Hasła nie są identyczne';
        }

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            try {
                const result = await registerUser(formData.email, formData.password);
                console.log("User registered", result);
                setIsRegistered(true);
                setTimeout(() => {

                    navigate("/login");
                }, 2000);

            } catch (error) {
                // Tutaj możesz ustawić stan błędu, aby wyświetlić go w komponencie
                setErrors({ ...errors, apiError: error.message });
            }
        }
    };

    const handleChange = e => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        if (name === 'email') {
            setIsTaken(false);
        }
        if (value.includes('@')) {
            setErrors(prevErrors => ({
                ...prevErrors,
                email: null
            }));
        }


    };

    return (
        <>
            <div className="registermain">
                <div className="top">
                    <Menu />
                </div>
                <div className="bottom">
                    <div className="make">Załóż konto</div>
                    <div className="jpg"></div>
                    <div className="form">

                        <form className={'register-form'} id="myForm">
                            {isRegistered && <p className={"succesfull"}>Zarejestrowano pomyślnie</p>}
                            {isTaken&& <p className={"unsuccesfull"}>Email już w użyciu</p>}
                            <label className={'label-form'} htmlFor={'email'}>
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {errors.email && !isTaken && <p className={"emer"}>{errors.email}</p>}

                            <label className={'label-form'} htmlFor={'password'}>
                                Hasło
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                value={formData.password}
                                onChange={handleChange}
                            />

                            <label className={'label-form'} htmlFor={'password2'}>
                                Powtórz hasło
                            </label>
                            <input
                                type="password"
                                name="password2"
                                id="password2"
                                value={formData.password2}
                                onChange={handleChange}
                            />
                            {errors.password && <p className={"paser"}>{errors.password}</p>}
                        </form>
                    </div>
                    <div className="btns">
                        <a href={'/login'}>
                            <button className={'login'} type={'button'}>
                                Zaloguj się
                            </button>
                        </a>
                        <button className={'submit'} type={'button'} onClick={handleSubmit}>
                            Załóż konto
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;
