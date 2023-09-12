const Menu = () => {


    return (
        <>
            <div className="menubox">
                <div className="up">
                    <div className="upleft">
                    <a href="">
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

export default Menu