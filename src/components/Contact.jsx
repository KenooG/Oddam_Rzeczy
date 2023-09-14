import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object().shape({
    name: yup.string().required("Imię jest wymagane").matches(/^\S*$/, "Imię powinno być jednym słowem"),
    email: yup.string().email("Niepoprawny format email").required("Email jest wymagany"),
    message: yup.string().min(120, "Wiadomość musi mieć minimum 120 znaków").required("Wiadomość jest wymagana")
});

const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = data => {
        console.log("Formularz został wysłany!", data);
    }

    return (
        <div id="targetElement3" className="Contactmain">
            <div className="up">
                <div className="formbox">
                    <p className="title">Skontaktuj się z nami</p>
                    <div className="dec"></div>
                    <div className="form">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="up">
                                <div className="name">
                                    <label htmlFor="name">Wpisz swoje imię:</label>
                                    <input placeholder="Krzysztof" type="text" id="name" name="name" {...register("name")} />
                                    {errors.name && <p className={"error-message1"}>{errors.name.message}</p>}
                                </div>

                                <div className="email">
                                    <label htmlFor="email">Wpisz swój email:</label>
                                    <input placeholder="abc@xyz.pl"  id="email" name="email" {...register("email")} />
                                    {errors.email && <p className={"error-message"}>{errors.email.message}</p>}
                                </div>
                            </div>

                            <div className="down">
                                <div className="message">
                                    <label htmlFor="message">Wpisz swoją wiadomość:</label>
                                    <textarea placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." id="message" name="message" {...register("message")} ></textarea>
                                    {errors.message && <p className={"error-message"}>{errors.message.message}</p>}
                                </div>
                            </div>

                            <div className="button">
                                <button type="submit">Wyślij</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="down">
                <p className="cod">Copyright by Coders Lab</p>
                <div className="logos">
                    <a href=""><div className="fb"></div></a>
                    <a href=""><div className="ig"></div></a>
                </div>
            </div>
        </div>
    )
}

export default Contact;
