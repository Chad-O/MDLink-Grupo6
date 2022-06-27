
const SignUpPac=()=>{
    const FormInput = (props) =>{
        return(
            <div class="container">
                <div class="row my-2">
                    <div class="col-4"><input type={props.type1} placeholder={props.placeholder1} class="form-control my-2"></input></div>
                    <div class="col-4"><input type={props.type2} placeholder={props.placeholder2} class="form-control my-2"></input></div>
                    <div class="col-4"><input type={props.type3} placeholder={props.placeholder3} class="form-control my-2"></input></div>
                </div>
            </div>
        )
    }
    return(
        <div class="container">
            <h2 class="mt-4"><em>Datos Personales</em></h2>
            <FormInput type1="text" placeholder1="Nombres"
            type2="text" placeholder2="Apellido Paterno" 
            type3="text" placeholder3="Apellido Materno" />
            <FormInput type1="date" placeholder1="dd/mm/aaa"
            type2="text" placeholder2="DNI"
            type3="text" placeholder3="Sexo" />
            <div class="row">
                <div class="col-4 ms-2">
                    <input type="text" class="form-control my-2" placeholder="Telefono de contacto"></input>
                </div>
            </div>
            <h2 class="mt-4"><em>Usuario</em></h2>
                <div class="row">
                    <div class="col-4">
                        <input type="text" class="form-control my-2" placeholder="Nombre de Usuario"></input>
                    </div>
                    <div class="col-8">
                        <input type="text" class="form-control my-2" placeholder="Correo electronico"></input>
                    </div>
                </div>
                <div class="row">
                    <div class="col-6">
                        <input type="password" class="form-control my-2" placeholder="Contraseña"></input>
                    </div>
                    <div class="col-6">
                        <input type="password" class="form-control my-2" placeholder="Confirmar Contraseña"></input>
                    </div>
                </div>
            <h2 class="mt-4"><em>Datos Personales</em></h2>
                <div class="row">
                    <div class="col-5">
                        <input type="text" class="form-control my-2" placeholder="Tipo de Sangre"></input>
                    </div>
                </div>

            <em>Alergias</em>
            <div class="row tabla mt-3">
            <div class="col-md-3">
                <input type="text" class="form-control" placeholder="Alergia"></input>
            </div>
            <div class="col-md-3">
                <input type="text" class="form-control" placeholder="Alergia"></input>
            </div>
            <div class="col-md-1">
                <button class="btn color-item5">+</button>
            </div>
            <div class="col-md-5">
                <input type="checkbox" class="mx-2"></input>
                <label>No presento ninguna</label>
            </div>
            </div>
            <em>Enfermedades</em>
            <div class="row tabla mt-3">
            <div class="col-md-3">
                <input type="text" class="form-control" placeholder="Enfermedad"></input>
            </div>
            <div class="col-md-3">
                <input type="text" class="form-control" placeholder="Enfermedad"></input>
            </div>
            <div class="col-md-1">
                <button class="btn color-item5">+</button>
            </div>
            <div class="col-md-5">
                <input type="checkbox" class="mx-2"></input>
                <label>No presento ninguna</label>
            </div>
            </div>
            <em>Antecedentes Quirurjicos</em>
            <div class="row tabla mt-3">
            <div class="col-md-3">
                <input type="text" class="form-control" placeholder="Antecedente"></input>
            </div>
            <div class="col-md-3">
                <input type="text" class="form-control" placeholder="Antecedente"></input>
            </div>
            <div class="col-md-1">
                <button class="btn color-item5">+</button>
            </div>
            <div class="col-md-5">
                <input type="checkbox" class="mx-2"></input>
                <label>No presento ninguno</label>
            </div>
            </div>
            <em>Medicamentos</em>
            <div class="row tabla mt-3">
            <div class="col-md-3">
                <input type="text" class="form-control" placeholder="Medicamentos"></input>
            </div>
            <div class="col-md-3">
                <input type="text" class="form-control" placeholder="Medicamentos"></input>
            </div>
            <div class="col-md-1">
                <button class="btn color-item5">+</button>
            </div>
            <div class="col-md-5">
                <input type="checkbox" class="mx-2"></input>
                <label>No tomo ninguno</label>
            </div>
            </div>
            <div class="botonLargo text-center">
                <button class="btn color-item1 w-75 my-3">Registrese</button>
            </div>
        </div>
    )
}
export default SignUpPac;