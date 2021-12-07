import React, {useState,useEffect} from 'react';
import Error from './Error';

function Formulario({pacientes, setPacientes, paciente, setPaciente}) {
    const [nombreMascota,setNombreMascota] = useState("");
    const [nombrePropietario,setNombrePropietario] = useState("");
    const [email,setEmail] = useState("");
    const [ingreso,setIngreso] = useState("");
    const [sintomas,setSintomas] = useState("");
    const [error,setError] = useState(false);

    useEffect(() => {
        if(Object.keys(paciente).length > 0){
            setNombreMascota(paciente.nombreMascota);
            setNombrePropietario(paciente.nombrePropietario);
            setEmail(paciente.email);
            setIngreso(paciente.ingreso);
            setSintomas(paciente.sintomas);
        }
    }, [paciente]);
  
    const generarID = () => {
        const random = Math.random().toString(36).substr(2);
        const fecha = Date.now().toString(36);
        return random + fecha;
    }
    
    const handleSubmit = e => {
        e.preventDefault();

        // Validando formulario
        if([nombreMascota, nombrePropietario, email, ingreso, sintomas].includes("")){
            console.log("Hay por lo menos un campo vacio.");
            setError(true);
            return;
        }
        setError(false);

        // Objeto del paciente
        const objetoPaciente = {
            nombreMascota,
            nombrePropietario,
            email,
            ingreso,
            sintomas
        }
        if(paciente.id){
            // Editando el registro
            objetoPaciente.id = paciente.id;
            const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState);
            setPacientes(pacientesActualizados);
            setPaciente({})
        } else{
            // Nuevo registro
            objetoPaciente.id = generarID();
            setPacientes([...pacientes,objetoPaciente]);
        }

        // Reiniciar el form
        setNombreMascota("");
        setNombrePropietario("");
        setEmail("");
        setIngreso("");
        setSintomas("");
    }
    
    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center">Seguimiento de Pacientes</h2>
            <p className="text-lg mt-5 text-center mb-10">Añadir Pacientes y <span className="text-indigo-600 font-bold">Administrarlos</span></p>
            <form 
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
            >
                { error && <Error mensaje="Todos los campos son obligatorios"/>}
                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="mascota">Nombre Mascota</label>
                    <input
                        type="text"
                        className="border-2 w-full p-2 mt-2 placeholder-gary-400 rounded-md"
                        id="mascota"
                        placeholder="Nombre de la mascota"
                        value={nombreMascota}
                        onChange={ (e) => setNombreMascota(e.target.value) }
                    />
                </div>
                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="propietario">Nombre Propietario</label>
                    <input
                        type="text"
                        className="border-2 w-full p-2 mt-2 placeholder-gary-400 rounded-md"
                        id="propietario"
                        placeholder="Nombre del propietario"
                        value={nombrePropietario}
                        onChange={ (e) => setNombrePropietario(e.target.value) }
                    />
                </div>
                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="email">Email</label>
                    <input
                        type="email"
                        className="border-2 w-full p-2 mt-2 placeholder-gary-400 rounded-md"
                        id="email"
                        placeholder="Email Contacto Propietario"
                        value={email}
                        onChange={ (e) => setEmail(e.target.value) }
                    />
                </div>
                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="ingreso">Ingreso</label>
                    <input
                        type="date"
                        className="border-2 w-full p-2 mt-2 placeholder-gary-400 rounded-md"
                        id="ingreso"
                        value={ingreso}
                        onChange={ (e) => setIngreso(e.target.value) }
                    />
                </div>
                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="sintomas">Sintomas</label>
                    <textarea 
                        id="sintomas"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        placeholder="Describir los sintomas"
                        value={sintomas}
                        onChange={ (e) => setSintomas(e.target.value) }
                    />
                </div>
                <input 
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
                    value={ paciente.id ? "Editar paciente" : "Agregar paciente"}
                />
            </form>
        </div>
    )
}

export default Formulario;