const HistorialCitasPac =()=>{
    return(
        <div class="container-fluid">
    <div class="row">
      <div class="col-md-12 p-4">
        <div class="tabs">
          <input type="radio" name="tabs" id="tabone" checked="checked" />
          <label for="tabone" >Doc 1</label>
          <div class="tab color-item3">
            <div class="container-fluid my-5">
              <div class="row">
                <div class="col-md-5">
                  <div class="bg-light border-item1 p-3">
                    <span class="text-center">Fecha</span> 
                    <input type="text" class="form-control my-2" placeholder="08/11/2022" onkeydown="return false"/>
                  </div>
                  <div class="bg-light border-item1 p-3 mt-3">
                    <p class="text-center">Receta Médica</p>
                    <table class="table table-hover table-responsive my-2" id="tablaReceta">
                      <thead class="color-item5 text-center">
                        <tr>
                          <th scope="col">
                            MEDICAMENTO
                          </th>
                          <th scope="col">
                            DOSIS
                          </th>
                          <th scope="col">
                            HORARIO
                          </th>
                        </tr>
                      </thead>
                      <tbody class="text-center">
                        <tr>
                          <td scope="row">Panadol 20 mgr</td>
                          <td>2 tabletas</td>
                          <td>Mañanas y Noches</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="col-md-7">
                  <div class="bg-light border-item1 p-3">
                    <p class="text-center">Diagnóstico</p> 
                    <div class="mb-3">
                      <textarea class="form-control" name="" id="" rows="3"></textarea>
                    </div>
                  </div>
                  <div class="bg-light border-item1 p-3 mt-3">
                    <p class="text-center">Calificación</p> 
                    <p class="text-center"><span class="fa fa-star checked"></span>
                     <span class="fa fa-star checked"></span>
                     <span class="fa fa-star checked"></span>
                     <span class="fa fa-star"></span>
                     <span class="fa fa-star"></span>
                     </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <input type="radio" name="tabs" id="tabtwo" />
          <label for="tabtwo">Doc2</label>
          <div class="tab color-item3">
            <div class="container-fluid my-5">
              <div class="row">
                <div class="col-md-5">
                  <div class="bg-light border-item1 p-3">
                    <span class="text-center">Fecha</span> 
                    <input type="text" class="form-control my-2" placeholder="08/11/2022" onkeydown="return false"/>
                  </div>
                  <div class="bg-light border-item1 p-3 mt-3">
                    <p class="text-center">Receta Médica</p>
                    <table class="table table-hover table-responsive my-2" id="tablaReceta">
                      <thead class="color-item5 text-center">
                        <tr>
                          <th scope="col">
                            MEDICAMENTO
                          </th>
                          <th scope="col">
                            DOSIS
                          </th>
                          <th scope="col">
                            HORARIO
                          </th>
                        </tr>
                      </thead>
                      <tbody class="text-center">
                        <tr>
                          <td scope="row">Panadol 10 mgr</td>
                          <td>1 tabletas</td>
                          <td>Tardes y Noches</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="col-md-7">
                  <div class="bg-light border-item1 p-3">
                    <p class="text-center">Diagnóstico</p> 
                    <div class="mb-3">
                      <textarea class="form-control" name="" id="" rows="3"></textarea>
                    </div>
                  </div>
                  <div class="bg-light border-item1 p-3 mt-3">
                    <p class="text-center">Calificación</p> 
                    <p class="text-center"><span class="fa fa-star checked"></span>
                     <span class="fa fa-star checked"></span>
                     <span class="fa fa-star checked"></span>
                     <span class="fa fa-star"></span>
                     <span class="fa fa-star"></span>
                     </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <input type="radio" name="tabs" id="tabthree" />
          <label for="tabthree">Doc3</label>
          <div class="tab color-item3">
            <div class="container-fluid my-5">
              <div class="row">
                <div class="col-md-5">
                  <div class="bg-light border-item1 p-3">
                    <span class="text-center">Fecha</span> 
                    <input type="text" class="form-control my-2" placeholder="08/11/2022" onkeydown="return false"/>
                  </div>
                  <div class="bg-light border-item1 p-3 mt-3">
                    <p class="text-center">Receta Médica</p>
                    <table class="table table-hover table-responsive my-2" id="tablaReceta">
                      <thead class="color-item5 text-center">
                        <tr>
                          <th scope="col">
                            MEDICAMENTO
                          </th>
                          <th scope="col">
                            DOSIS
                          </th>
                          <th scope="col">
                            HORARIO
                          </th>
                        </tr>
                      </thead>
                      <tbody class="text-center">
                        <tr>
                          <td scope="row">Amlodipino</td>
                          <td>1 tabletas</td>
                          <td>Mañanas</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="col-md-7">
                  <div class="bg-light border-item1 p-3">
                    <p class="text-center">Diagnóstico</p> 
                    <div class="mb-3">
                      <textarea class="form-control" name="" id="" rows="3"></textarea>
                    </div>
                  </div>
                  <div class="bg-light border-item1 p-3 mt-3">
                    <p class="text-center">Calificación</p> 
                    <p class="text-center"><span class="fa fa-star checked"></span>
                     <span class="fa fa-star checked"></span>
                     <span class="fa fa-star checked"></span>
                     <span class="fa fa-star"></span>
                     <span class="fa fa-star"></span>
                     </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <input type="radio" name="tabs" id="tabfour" />
          <label for="tabfour">Doc4</label>
          <div class="tab color-item3">
            <div class="container-fluid my-5">
              <div class="row">
                <div class="col-md-5">
                  <div class="bg-light border-item1 p-3">
                    <span class="text-center">Fecha</span> 
                    <input type="text" class="form-control my-2" placeholder="08/11/2022" onkeydown="return false"/>
                  </div>
                  <div class="bg-light border-item1 p-3 mt-3">
                    <p class="text-center">Receta Médica</p>
                    <table class="table table-hover table-responsive my-2" id="tablaReceta">
                      <thead class="color-item5 text-center">
                        <tr>
                          <th scope="col">
                            MEDICAMENTO
                          </th>
                          <th scope="col">
                            DOSIS
                          </th>
                          <th scope="col">
                            HORARIO
                          </th>
                        </tr>
                      </thead>
                      <tbody class="text-center">
                        <tr>
                          <td scope="row">Paracetamol 20 mgr</td>
                          <td>2 tabletas</td>
                          <td>Tardes y Noches</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="col-md-7">
                  <div class="bg-light border-item1 p-3">
                    <p class="text-center">Diagnóstico</p> 
                    <div class="mb-3">
                      <textarea class="form-control" name="" id="" rows="3"></textarea>
                    </div>
                  </div>
                  <div class="bg-light border-item1 p-3 mt-3">
                    <p class="text-center">Calificación</p> 
                    <p class="text-center"><span class="fa fa-star checked"></span>
                     <span class="fa fa-star checked"></span>
                     <span class="fa fa-star checked"></span>
                     <span class="fa fa-star"></span>
                     <span class="fa fa-star"></span>
                     </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
      </div>
    </div>
  </div>
    )
}
export default HistorialCitasPac;