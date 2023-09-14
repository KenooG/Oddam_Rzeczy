import {Link} from "react-scroll";

const MenuLoggedGive = () => {


    return (
        <>
            <div className="menubox">
                <div className="up2">
                    <div className="upleft">
                        <a href="/give">
                            <div className="upbtn2"><p className="btntxt">Oddaj rzeczy</p></div>
                        </a>
                        <a href="/loggedout">
                            <div className="upbtn2"><p className="btntxt">Wyloguj</p></div>
                        </a>
                    </div>

                </div>
                <div className="down">
                    <a href="/logged">
                        <div className="downbtn">
                            <p className="btntxt">Start</p>
                        </div>
                    </a>
                    <a href="">
                        <div className="downbtn">
                            <p className="btntxt">O co chodzi?</p>
                        </div>
                    </a>
                    <a href="">
                        <div className="downbtn">
                            <p className="btntxt">O nas</p>
                        </div>
                    </a>
                    <a href="">
                        <div className="downbtn">
                            <p className="btntxt">Fundacja i organizacje</p>
                        </div>
                    </a>
                    <a href="">
                        <div className="downbtn">
                            <p className="btntxt">Kontakt</p>
                        </div>
                    </a>
                </div>
            </div>


        </>


    )


}

export default MenuLoggedGive