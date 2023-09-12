


import React from "react";






const Contact = () => {




    const handleSubmit = (e) => {
        e.preventDefault();
        // Tutaj możesz obsłużyć wysyłanie formularza
        console.log("Formularz został wysłany!");
    }



    return(
        <>

   <div  id="targetElement3" className="Contactmain">
       <div className="up">
   <div className="formbox">

       <p className="title">Skontaktuj się z nami</p>
       <div className="dec"></div>
       <div className="form">
           <form onSubmit={handleSubmit}>
               <div className="up">
               <div className="name">
                   <label htmlFor="name">Wpisz swoje imię:</label>
                   <input placeholder="Krzysztof" type="text" id="name" name="name" required />
               </div>

               <div className="email">
                   <label htmlFor="email">Wpisz swój email:</label>
                   <input placeholder="abc@xyz.pl" type="email" id="email" name="email" required />
               </div>
               </div>


               <div className="down">
               <div className="message">
                   <label htmlFor="message">Wpisz swoją wiadomość:</label>
                   <textarea placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." id="message" name="message" required></textarea>
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

               <a href=""> <div className="fb"></div></a>
               <a href=""> <div className="ig"></div></a>
           </div>
       </div>




   </div>





        </>




    )



}

export default Contact