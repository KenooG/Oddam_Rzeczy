


const Logged = () => {


    const User = localStorage.getItem('email');

    return(
        <>
       <div>
        <p>Welcome {User}</p>
       </div>

        </>




    )





}

export default Logged