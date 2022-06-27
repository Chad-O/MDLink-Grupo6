const ForoPac =()=>{
    return(
        <div class="container">
            <div class="row">
      <div class="row p-3">
        <div class="col-md-4 text-lg-left text-center">
          <a class="linkNom" href="principalPac.html"><h1>MD-Link</h1></a>
        </div>
        <div class="col-md-8">
            <div class="row justify-content-end">
                <div class="offset-md-7 col-md-3 text-center">
                  <p>Bienvenido Julian Casablancas</p>
                    <a href="EditPac.html">Editar Perfil</a>
                </div>
                <div class="col-md-2">
                    <img src="..." alt="..." class="rounded-circle d-flex foto-doc " />
                </div>
            </div>
        </div>
    </div>
    </div>
    <div class="row text-center mt-5 mx-5">
      <div class="col-md-8">
        <div class="row p-3">
          <div class="col-md-5 color-item3 border-item1 p-4">
            <h5>PREGUNTAS FRECUENTES</h5>
            <div class="my-4 me-3">
              <input type="text" class="form-control mx-2 p-2" placeholder="Preguntas...."  id="pregFrec" />  
            </div>
          </div>
          <div class="col-md-1 my-2"></div>
          <div class="col-md-5 color-item3 border-item1 p-2">
            <h5>ESCRIBE TUS PREGUNTAS</h5>
            <div class="my-4 me-3">
              <input type="text" class="form-control mx-2 p-2" placeholder="Preguntas....." id="pregPub" />  
            </div>            
          </div>
        </div>
        <div class="row p-3">
          <div class="col-md-5 color-item3 border-item1 p-4">
            <h5>COMENTARIOS</h5>
            <div class="my-4 me-3">
              <input type="text" class="form-control mx-2 p-2" placeholder="Comentario....." id="comments" />  
            </div>
          </div>
          <div class="col-md-1 my-2"></div>
          <div class="col-md-5 color-item3 border-item1 p-4 ">
            <h5>PREGÚNTALE A TU ESPECIALISTA</h5>
            <div class="my-4 me-3">
              <input type="text" class="form-control mx-2 p-2" placeholder="Ingresa el nombre de tu especialista" id="espNom" />  
            </div>
            <div class="my-4 me-3">
              <input type="text" class="form-control mx-2 p-2" placeholder="Pregunta...." id="pregPriv" />  
            </div>

          </div>
        </div>
      </div>
      <div class="col-md-3 color-item3 border-item1 p-3 mt-3">
        <h5>CALIFICA A TU ESPECIALISTA</h5>
          <div class="my-4 me-3">
            <input type="text" class="form-control mx-2 p-2" placeholder="Ingresa el nombre de tu especialista" id="espNomCal" />
          </div>
          <img src="../../img/EncuentraEspecialista/rating.png" alt="" id="rating" />
          <div class="my-4 me-3">
            <input type="text" class="form-control mx-2 p-2" placeholder="Comentanos sobre tu experiencia......" id="exp" />
          </div>
        <button class="btn btn-primary color-item2">Enviar</button>
      </div>
        </div>
        </div>
    )
}
export default ForoPac;