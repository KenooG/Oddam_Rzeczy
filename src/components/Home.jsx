import Menu from "./Menu.jsx";


const Home = () =>{



    return(
        <>
            <div className="homebox">

                <div className="left"></div>

                <div className="right">
                    <div className="navbar"><div className="menu"><Menu/></div>  </div>

                  <div className="front">
                      <div className="help"><p className="helptxt">Zacznij pomagać! <br/> Oddaj niechciane rzeczy w zaufane ręce</p></div>
                      <div className="jpg"></div>
                      <div className="btns">
                      <a href="">
                          <div className="btn"><p className="btntxt">ODDAJ <br/> RZECZY</p></div>
                      </a><a href="">
                      <div className="btn"><p  className="btntxt"> ZORGANIZUJ <br/> ZBIÓRKĘ</p></div>
                  </a>
                      </div>

                  </div>


                </div>




            </div>








        </>



    )




}


export default Home