import React, { useState } from 'react';
import Menu from "./Menu.jsx";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const Register = () => {

    const schema = yup.object({
        email: yup.string().email().required(),
        password: yup.string().required(),
        password2: yup.string().required(),
    }).required();

    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
    });
console.log(errors)
    let navigate = useNavigate();

    const onSubmit = ({ email, password }) => registerUser(email, password);
    const registerUser = async (email, password) => {
        console.log(email, password)
        const response = await fetch('http://localhost:8000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, pass: password }),
        });

        const data = await response.json();

        if (response.status === 409) {

            throw new Error('Email is already taken');


        }

        if (response.status !== 201) {
            throw new Error(data.error || 'Registration failed');
        }

        return data;
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

                        <form noValidate className={'register-form'} id="myForm" onSubmit={handleSubmit(onSubmit)}>

                            <label className={'label-form'} htmlFor={'email'}>
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                {...register("email")}
                            />
                            {errors.email && <p className={"emer"}>{errors.email.message}</p>}

                            <label className={'label-form'} htmlFor={'password'}>
                                Hasło
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                {...register("password")}
                            />

                            <label className={'label-form'} htmlFor={'password2'}>
                                Powtórz hasło
                            </label>
                            <input
                                type="password"
                                name="password2"
                                id="password2"
                                {...register("password2")}
                            />
                            {errors.password && <p className={"paser"}>{errors.password.message}</p>}
                            <button className={'submit'} type={'submit'}>
                                Załóż konto
                            </button>
                        </form>
                    </div>
                    <div className="btns">
                        <a href={'/login'}>
                            <button className={'login'} type={'button'}>
                                Zaloguj się
                            </button>
                        </a>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;
