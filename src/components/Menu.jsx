import {Link} from "react-scroll";

const Menu = () => {


    return (
        <>
            <div className="menubox">
                <div className="up">
                    <div className="upleft">
                    <a href="/login">
                        <div className="upbtn"><p className="btntxt">Zaloguj</p></div>
                    </a>
                    <a href="/register">
                        <div className="upbtn"><p className="btntxt">Załóż konto</p></div>
                    </a>
                    </div>

                </div>
                <div className="down">
                    <a href="/">
                        <div className="downbtn">
                            <p className="btntxt">Start</p>
                        </div>
                    </a>
                    <Link
                        to="targetElement"
                        smooth={true}
                        duration={500}
                        className="downbtn"
                        offset={-400}
                        style={{cursor: 'pointer'}}
                    >
                        <p className="btntxt">O co chodzi?</p>
                    </Link>
                    <Link
                        to="targetElement1"
                        smooth={true}
                        duration={500}
                        className="downbtn"
                        offset={-100}
                        style={{cursor: 'pointer'}}
                    >
                        <p className="btntxt">O nas</p>
                    </Link>
                    <Link
                        to="targetElement2"
                        smooth={true}
                        duration={500}
                        className="downbtn"
                        offset={-100}
                        style={{cursor: 'pointer'}}
                    >
                        <p className="btntxt">Fundacja i organizacje</p>
                    </Link>
                    <Link
                        to="targetElement3"
                        smooth={true}
                        duration={500}
                        className="downbtn"
                        offset={-100}
                        style={{cursor: 'pointer'}}
                    >
                        <p className="btntxt">Kontakt</p>
                    </Link>
                </div>
            </div>


        </>


    )


}

export default Menu