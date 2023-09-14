import MenuLoggedGive from "./MenuLoggedGive.jsx";


const Give = () => {

    const User = localStorage.getItem('email');
    return(
        <>
            <div className="givemain">
                <div className="givemainbox">
                    <p className="Welcome">Cześć {User}!</p>
                    <div className="left"></div>
                    <div className="right">
                        <div className="topright">
                            <MenuLoggedGive/>

                        </div>
                        <div className="bottomright">
                            <p className="title">Oddaj rzeczy, których już nie chcesz <br/> POTRZEBUJĄCYM</p>
                            <div className="dec"></div>
                            <p className="des">Wystarczą 4 proste kroki:</p>
                            <div className="squares">

                                <div className="square-container">
                                    <div className="square">
                                        <p className="num">1</p>
                                        <p className="numdes">Wybierz <br/> rzeczy </p>
                                    </div>
                                </div>
                                <div className="square-container">
                                    <div className="square">
                                        <p className="num">2</p>
                                        <p className="numdes">Spakuj je<br/> w worki </p>
                                    </div>
                                </div>
                                <div className="square-container">
                                    <div className="square">
                                        <p className="num">3</p>
                                        <p className="numdes">Wybierz <br/> fundację </p>
                                    </div>
                                </div>
                                <div className="square-container">
                                    <div className="square">
                                        <p className="num">4</p>
                                        <p className="numdes">Zamów <br/> kuriera</p>
                                    </div>
                                </div>
                            </div>

                        </div>


                    </div>
                </div>
            </div>




        </>





    )



}
export default Give