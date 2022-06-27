const CitasPac =()=>{
    return(
        <div class="container">
                    <div class="row">
            <div class="col-md-4 text-lg-left text-center ">
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
            <div class="row">
          <div class="col text-center">
              <h2>PRÓXIMAS CITAS</h2>
          </div>
      </div>
      <div class="row">
          <div class=" p-3 col-12 my-4">
            <table class="table table-hover table-responsive" id="tablaCitas">
              <thead class="color-item5">
                <tr>
                  <th scope="col">ESPECIALIDAD 
                    <button onclick="sortTable(0)">
                      <img alt="Sort desc." title="Sort desc." src="//codeforces.org/s/29975/images/datatable/tablesorter-bg.gif" />
                    </button>
                  </th>
                  <th scope="col">
                    MÉDICO 
                    <button onclick="sortTable(1)"><img title="Sort desc." src="//codeforces.org/s/29975/images/datatable/tablesorter-bg.gif" />
                    </button>
                  </th>
                  <th scope="col">
                    HORARIO 
                    <button onclick="sortTable(2)"><img  title="Sort desc." src="//codeforces.org/s/29975/images/datatable/tablesorter-bg.gif" />
                    </button>
                  </th>
                  <th scope="col">
                    FECHA
                    <button onclick="sortTable(3)"><img  alt="Sort desc." title="Sort desc." src="//codeforces.org/s/29975/images/datatable/tablesorter-bg.gif" />
                    </button>
                  </th>
                  <th>
                    CANCELAR CITA
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Cardiología</th>
                  <td>José Galvez</td>
                  <td>10:00 a.m</td>
                  <td>22/05/2022</td>
                  <td><button type="button" class="btn btn-danger">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"></path>
                    </svg></button></td>
                </tr>
                <tr>
                  <th scope="row">Endocrinología</th>
                  <td>Endo Crinologo</td>
                  <td>10:45 a.m</td>
                  <td>22/05/2022</td>
                  <td><button type="button" class="btn btn-danger">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"></path>
                    </svg></button></td>
                </tr>
                <tr>
                  <th scope="row">Farmaceútica</th>
                  <td>Farma Co</td>
                  <td>10:55 a.m</td>
                  <td>22/05/2022</td>
                  <td><button type="button" class="btn btn-danger">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"></path>
                    </svg></button></td>
                </tr>
              </tbody>
            </table>
          </div>
          </div>
        </div>
    )
}
export default CitasPac;