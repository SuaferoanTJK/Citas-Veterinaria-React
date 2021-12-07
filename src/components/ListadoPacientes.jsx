import React, {useEffect} from 'react';
import Paciente from './Paciente';

function ListadoPacientes({pacientes,setPaciente,eliminarPaciente}) {
    useEffect(() => {
        if(pacientes.length > 0){
            console.log("Nuevo paciente");
        }
    }, [pacientes])

    return (
        <div className="md:w-1/2 lg:w-3/5 mb-10">
            {pacientes && pacientes.length ? (
                <>
                    <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>
                    <p className="text-lg mt-5 text-center mb-10">Administrar sus <span className="text-indigo-600 font-bold">Pacientes y Citas</span></p>
                    <div className="h-screen overflow-y-scroll">
                        {pacientes.map( paciente =>
                            <Paciente
                                key={paciente.id}
                                paciente={paciente}
                                setPaciente={setPaciente}
                                eliminarPaciente={eliminarPaciente}
                            />
                        )} 
                    </div>
                </>
            ) : (
                <>
                    <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
                    <p className="text-lg mt-5 text-center mb-10">Agregar pacientes usando <span className="text-indigo-600 font-bold">el formulario</span></p>
                </>
            )} 
        </div>
    )
}

export default ListadoPacientes;