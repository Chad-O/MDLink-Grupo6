const Index =()=>{
    return(
        <div class="container mt-5">
        <div class="row">
            <div class="col-6 d-flex">
                <h1>NOMBRE DE LA PLATAFORMA</h1>
            </div>
            <div class="col-6 d-flex justify-content-end align-items-center">
                <a id="login" class="color-item1 btn mx-3 active" href="General/login.html">Log in</a>
                <a id="signup" class="color-item3 btn mx-3 active" href="General/SignUp.html">Sign up</a>
            </div>
        </div>
        <div id="p" class="row d-flex justify-content-center align-content-center">
            <h2 class="text-color5">Encuentra a tu medico más cercano</h2>
            <div class="areaEsp input-group rounded p-4 color-item3">
                <div class="textEsp">AREA DE ESPECIALIZACION</div>
                    <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" />
                    <span class="input-group-text border-0">
                    <button type="search" class="btn">
                        <i class="gg-search"></i>
                    </button>
                </span>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-3 d-flex justify-content-center">
                <a href="General/login.html" class="btn foro color-item3 p-3" type="button">Foro</a>
            </div>
            <div class="col-6 d-flex justify-content-center">
                <a href="General/login.html" class="calmed btn color-item3 p-3" type="button">Califica a tu médico</a>
            </div>
            <div class="col-3 d-flex justify-content-center">
                <a href="General/login.html" class="notimp btn color-item3 p-3" type="button">Noticias importantes</a>
            </div>
        </div>
    </div>
    )
}
export default Index;