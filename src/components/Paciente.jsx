import React from 'react';

function Paciente({paciente,setPaciente,eliminarPaciente}) {
    const {nombreMascota,nombrePropietario,email,ingreso,sintomas,id} = paciente;

    const handleEliminar = () => {
        const respuesta = confirm("¿Desea eliminar al paciente?");
        if(respuesta){
            eliminarPaciente(id);
        }
    }

    return (
        <>
            <div className="mx-5 bg-white shadow-md rounded-lg py-10 px-5 mb-5 mt-0">
                <p className="font-bold mb-3 text-gray-700 uppercase">Nombre Mascota: <span className="font-normal normal-case">{nombreMascota}</span></p>
                <p className="font-bold mb-3 text-gray-700 uppercase">Nombre Propietario: <span className="font-normal normal-case">{nombrePropietario}</span></p>
                <p className="font-bold mb-3 text-gray-700 uppercase">Correo: <span className="font-normal normal-case">{email}</span></p>
                <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Ingreso: <span className="font-normal normal-case">{ingreso}</span></p>
                <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: <span className="font-normal normal-case">{sintomas}</span></p>
                <div className="flex justify-end mt-5">
                    <button 
                        type="button"
                        className="py-2 px-5 m-1 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
                        onClick={ () => setPaciente(paciente) }
                    >Editar</button>
                    <button 
                        type="button"
                        className="py-2 px-5 m-1 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
                        onClick={handleEliminar}
                    >Eliminar</button>
                </div>
            </div>
        </>
    )
}

export default Paciente;
