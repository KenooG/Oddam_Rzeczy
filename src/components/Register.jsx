import Menu from "./Menu.jsx";

const Register = () => {

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
                 <div className="make">Załóż konto</div>
                 <div className="jpg"></div>
                 <div className="form">
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
                         <label className={'label-form'} htmlFor={'password'}>
                             Powtórz hasło
                         </label>

                         <input


                             type={'password'}
                             id={'password2'}
                             name={'password2'}
                         />




                     </form>


                 </div>
                 <div className="btns">

                     <a href={'/login'}> <button className={'login'} type={'button'} >
                         Zaloguj się
                     </button></a>

                     <button className={'submit'} type={'button'} onClick={handleSubmit}>
                         Załóż konto
                     </button>


                 </div>
             </div>

         </div>




        </>



    )


}

export default Register