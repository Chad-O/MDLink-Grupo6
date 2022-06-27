const SignUpDoc =()=>{
    return(
        <div class="container">
            <div class="row">
        <div class="col-md-8 mt-5">
        <div class="row">
          <h4 class="mx-2">Datos Personales</h4>
          <div class="col-md-12">
            <div class="input-group mb-3">
              <input type="text" class="form-control mx-2" placeholder="Nombres" aria-label="Username" id="userDoc" />
              <input type="text" class="form-control mx-2" placeholder="Apellido Paterno" aria-label="ApellidoPat" id="appDoc" />
              <input type="text" class="form-control mx-2" placeholder="Apellido Materno" aria-label="ApellidoMat" id="apmDoc" />
            </div>
            <div class="input-group mb-3">
              <input type="email" class="form-control mx-2" placeholder="Correo Electrónico" aria-label="Correo" id="emailDoc" />
            </div>
            <div class="input-group mb-3">
              <input type="password" class="form-control mx-2" placeholder="Contraseña" aria-label="Contraseña" id="passDoc" />
              <input type="password" class="form-control mx-2" placeholder="Confirme su contraseña" aria-label="Confirmseña" id="confimpassDoc" />
            </div>
            <div class="input-group mb-3">
              <div class="mx-2 my-2"><label for="especialSelect">Especialidad</label></div>
              <div class="form-group mx-2">
                <select class="form-control" id="especialSelect">
                  <option>Medicina General</option>
                  <option>Cardiología</option>
                  <option>Lorem Ipsum</option>
                  <option>dolor sit amet</option>
                  <option>consectetur adipiscing elit</option>
                </select>
              </div>
            </div>            
          </div>
        </div>

        <div class="row mt-4">
          <h4 class="mx-2">Datos de contacto</h4>
          <div class="col-md-12">
            <div class="input-group mb-3">
            </div>
            <div class="input-group my-2">
              <div class="mx-2 my-2">Modalidad de Trabajo</div>
              <div class="form-group form-check-inline mx-2 my-2">
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="presencial" id="rdpresencial" />
                  <label class="form-check-label" for="presencial">Presencial</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="virtual" id="rdvirtual" />
                  <label class="form-check-label" for="virtual">Virtual</label>
                </div>
              </div>
              <div class="input-group-prepend">
                <div class="input-group-text" id="soles">S/.</div>
              </div>
              <input type="text" class="form-control"placeholder="Precio por consulta"  id="precioCons" />
            </div>
            <input type="text" class="form-control mx-2" placeholder="Link de plataforma de atencion / Direccion de consultorio" aria-label="linkAten" id="dirAtencion" />
          </div>
          <div class="mx-2 my-2">
            <h5>Turnos de trabajo</h5>
          </div>
          <div class="row mt-1 mx-2">
            <div class="col">
              <h5>Lunes</h5>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                <label class="form-check-label" for="flexCheckChecked">
                  Mañana
                </label>
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"  />
                <label class="form-check-label" for="flexCheckChecked">
                  Tarde
                </label>
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                <label class="form-check-label" for="flexCheckChecked">
                  Noche
                </label>
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
              </div>
            </div>
            <div class="col">
              <h5>Martes</h5>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                <label class="form-check-label" for="flexCheckChecked">
                  Mañana
                </label>
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                <label class="form-check-label" for="flexCheckChecked">
                  Tarde
                </label>
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                <label class="form-check-label" for="flexCheckChecked">
                  Noche
                </label>
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
              </div>
            </div>
            <div class="col">
              <h5>Miercoles</h5>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                <label class="form-check-label" for="flexCheckChecked">
                  Mañana
                </label>
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                <label class="form-check-label" for="flexCheckChecked">
                  Tarde
                </label>
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                <label class="form-check-label" for="flexCheckChecked">
                  Noche
                </label>
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
              </div>
            </div>
            <div class="col">
              <h5>Jueves</h5>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                <label class="form-check-label" for="flexCheckChecked">
                  Mañana
                </label>
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                <label class="form-check-label" for="flexCheckChecked">
                  Tarde
                </label>
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                <label class="form-check-label" for="flexCheckChecked">
                  Noche
                </label>
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
              </div>
            </div>
            <div class="col">
              <h5>Viernes</h5>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                <label class="form-check-label" for="flexCheckChecked">
                  Mañana
                </label>
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                <label class="form-check-label" for="flexCheckChecked">
                  Tarde
                </label>
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                <label class="form-check-label" for="flexCheckChecked">
                  Noche
                </label>
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
              </div></div>
            <div class="col">
              <h5>Sábado</h5>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                <label class="form-check-label" for="flexCheckChecked">
                  Mañana
                </label>
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                <label class="form-check-label" for="flexCheckChecked">
                  Tarde
                </label>
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                <label class="form-check-label" for="flexCheckChecked">
                  Noche
                </label>
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
              </div>
            </div>
            <div class="col">
              <h5>Domingo</h5>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                <label class="form-check-label" for="flexCheckChecked">
                  Mañana
                </label>
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                <label class="form-check-label" for="flexCheckChecked">
                  Tarde
                </label>
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                <label class="form-check-label" for="flexCheckChecked">
                  Noche
                </label>
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
              </div>
            </div>
          </div>
        </div>
        </div>
        <div class="row mt-4">
          <h4 class="mx-2">Educación</h4>
          <div id="educacion">
          <div class="col-md-12" id="edc">
            <div class="input-group mb-3">
              <input type="text" class="form-control mx-2" placeholder="Institución educativa" id="instEducactiva" />
              <input type="text" class="form-control mx-2" placeholder="Título" id="tituloExpedido" />
            </div>
            <div class="input-group mb-3">
              <div class="my-2 mx-2">Fecha de Inicio</div>
              <input type="date" class="form-control mx-2" id="fechaInicio" />
              <div class="my-2 mx-2">Fecha de egreso</div>
              <input type="date" class="form-control mx-2" id="fechaEgreso" />
            </div>
            <div class="input-group mb-3">
              <input type="text" class="form-control mx-2" placeholder="Descripción" id="descEducacion" />
          </div>
          </div>
        </div>
        <button class="btn btn-primary mx-2 color-item3 w-50 ms-4" onclick="addEd()" id="addInst">Agregar Institución</button>
        </div>
        <div class="row mt-4">
          <h4 class="mx-2">Licencia y certificaciones</h4>
          <div class="col-md-12" id="licert">
            <div class="input-group mb-3">
              <input type="text" class="form-control mx-2" placeholder="Nombre" id="nombreCert" />
              <input type="text" class="form-control mx-2" placeholder="Emisora" id="nombreEmisora" />
            </div>
            <div class="input-group mb-3">
              <div class="my-2 mx-2">Fecha de Expedición</div>
              <input type="date" class="form-control mx-2" id="fechaExpedicion" />
              <input class="form-check-input mx-2 my-2" type="radio" name="presencial" id="rdpresencial" /><em class="my-1">Esta credencial no caduca</em>       
            </div>
            <div class="input-group mb-3">
              <input type="text" class="form-control mx-2" placeholder="ID de Credencial" id="idCred" />
              <input type="text" class="form-control mx-2" placeholder="URL de Credencial" id="urlCred" />
            </div>
          </div>
          <button class="btn btn-primary mx-2 color-item3 w-50 ms-4">Agregar Certificacion</button>

        </div>
      </div>
      <div class="col-md-4 mt-5">
        <div class="row">
          <div class="col-md-12 mt-5">
            <form class="inputFoto">
              <label for="foto">Agregar Foto</label>
              <input type="file" id="foto" name="fotoPerf" accept="image/png, image/jpg, image/jpeg" />
            </form>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-6 ">
          <div class="d-grid gap-2 my-5">
            <a type="button" name="registro" class="btn color-item1" href="../General/BienvenidaMed.html">
              Registrarme
            </a>
          </div>
        </div>
      </div>
    </div>         
    )
}
export default SignUpDoc;