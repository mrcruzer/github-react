import React, { Fragment, useState } from 'react';



function Formulario({datosRepositorio}) {

    const [busqueda, guardarBusqueda ] = useState({
        repositorio: ''
    });

    const actualizarState = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })

        console.log(busqueda);
    }


    const buscarRepositorio = e => {
        e.preventDefault();

        datosRepositorio(busqueda);
    }



    return (
        <Fragment>
            <form 
                className="form-inline md-form mr-auto mb-4"
                onSubmit={buscarRepositorio}

            >
                <input 
                    className="form-control mr-sm-2"
                    name="repositorio"
                    type="text" placeholder="" 
                    aria-label="Search"
                    onChange={actualizarState}
                />
                <button className="btn btn-outline-warning btn-rounded btn-sm my-0" type="submit" value="consultar">Consultar</button>
            </form>
        </Fragment>
    );
}

export default Formulario;