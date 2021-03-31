import React from 'react';
import Header from '../layout/Header';
import Sidebar from '../layout/Sidebar';
import FormTarea from '../tasks/FormTarea';
import ListadoTareas from '../tasks/ListadoTareas';

const Proyectos = () => {

    return (
        <div className="contenedor-app">
            <Sidebar />

            <div className="seccion-principal">
                <Header />
                <main>
                    <FormTarea />
                    <div className="contenedor-tareas">
                        <ListadoTareas/>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Proyectos;