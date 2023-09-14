import MenuLoggedOut from "./MenuLoggedOut.jsx";


const LoggedOut = () => {


    return(
        <>
   <div className="loggedoutmain">
       <div className="upmain">
           <MenuLoggedOut/>
           
           
       </div>
       
       <div className="downmain">
           <p className="title">Wylogowanie nastąpiło pomyślnie!</p>
           <div className="dec"></div>
           <a href="/">
               <div className="btn">Strona główna</div>
           </a>
           
           
           
           
       </div>
       
      







   </div>
        </>



    )



}
export default LoggedOut