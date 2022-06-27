const ProximasCitasDoc =()=>{
    return(
        <div class="container-fluid my-3">
        <div class="row">
            <div class="col text-center">
                <h2>PRÓXIMAS CITAS</h2>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-8 my-4">
              <table class="table table-hover table-responsive text-center ">
                <thead class="color-item5">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Paciente</th>
                    <th scope="col">Horario de Atencion</th>

                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row" class="selected">1</th>
                    <td>Paciente 1</td>
                    <td>10:00 a.m</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Paciente 2</td>
                    <td>10:45 a.m</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Paciente 3</td>
                    <td>10:45 a.m</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="col-md-4  my-5">
              <div class=" p-2 border-item1 color-item3">
                <h3 class="text-center">Próximo Paciente</h3>
                <div class="row">
                  <div class="col-md-6">
                    <p id="nomPac">Nombre</p>
                  </div>
                  <div class="col-md-6">
                    <p id="horAten">Horario de atención</p>
                  </div>
                </div>
                <div class="d-flex flex-row">
                  <button class=" btn btn-light btn-block my-2 w-100 " id="mensaje">Enviar Mensaje</button>
                </div>
                <div class ="d-flex flex-row">
                  <button class=" btn btn-light my-2 w-100" id="iniCita">Inicializar Cita</button>
                </div>
                <div class="d-flex flex-row">
                  <a class="p-2 btn btn-light my-2 w-100" href="../Doctores/proximaCita.html" id="dataPac">Datos del Paciente</a>
                </div>
                <div class="d-flex flex-row">
                <a class="p-2 btn btn-light my-2 w-100" href="../Doctores/historialCitasDoc.html" id="histCita">Historial de Citas</a>
              </div>
              </div>
            </div>
        </div>
    </div>
    )
}
export default ProximasCitasDoc;