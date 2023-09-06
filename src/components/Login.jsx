


import Menu from "./Menu.jsx";
import React from "react";





const Login = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("eooo");
    };



    return(
        <>


            <div className="registermain">
                <div className="top">
                    <Menu/>
                </div>
                <div className="bottom">
                    <div className="make">Zaloguj się</div>
                    <div className="jpg"></div>
                    <div className={"form2"}>
                        <form className={'register-form'} onSubmit={handleSubmit} id="myForm">
                            <label className={'label-form'} htmlFor={'email'}>
                                Email
                            </label>

                            <input

                                name={'email'}
                                id={'email'}

                            />

                            <label className={'label-form'} htmlFor={'password'}>
                                Hasło
                            </label>

                            <input


                                type={'password'}

                                id={'password'}
                                name={'password'}
                            />





                        </form>


                    </div>
                    <div className="btns">

                        <a href={'/register'}> <button className={'login'} type={'button'} >
                            Załóż konto
                        </button></a>

                        <button className={'submit'} type={'button'} onClick={handleSubmit}>
                            Zaloguj się
                        </button>




                    </div>
                </div>

            </div>





        </>



    )


}

export default Login