const SignUpHead=(props)=>{
    if(props.tipo === "pac"){
        return(
        <div class="container">
            <div class="row">
                <div class="col-md-4 mx-2 my-2">
                    <a class="linkNom" href=""><h1>Md-Link</h1></a>
                </div>
                <div class="col-md-4">
                </div>
                <div class="col-md-4">
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <h2 class="titulo mt-4">Bienvenido futuro usuario</h2>
                </div>
            </div>
            <div class="row">
        </div>
        </div>
        )
    }
    else if(props.tipo === "doc"){
        return(
            <div class="containter">
                    <div class="row">
                    <div class="col-md-4">
                    <h1>MD-Link</h1>
                    </div>
                </div>
                <div class="row">
                <div class="col-md">
                <h1 class="text-dark text-center mt-3">Únete a nuestro equipo de especialistas</h1>
                </div>
                </div>
            </div>
        )
    }
}
export default SignUpHead;