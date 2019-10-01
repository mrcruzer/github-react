import React, { Fragment, useState }from 'react';

import Formulario from './components/Formulario';

import axios from 'axios';


function App() {

  const [nombreRepositorio, guardarNombreRepositorio] = useState('');

  const datosRepositorio = async busqueda => {

    

    const url = 'https://api.github.com/search/repositories?q= + nombreRepositorio + &sort=stars&order=desc';

    const resultado = await axios(url);

    console.log(resultado);

    guardarNombreRepositorio(resultado);

    console.log(nombreRepositorio);

  

    //agregarArtista(artista);

    //agregarLetra(resultado.data.lyrics);
  }

  return (
    <Fragment>
      <div className="container">
        <div className="row">
        <div className="col-12 col-md-12 p-5 text-center">
          <Formulario 
            datosRepositorio={datosRepositorio}
          />
        </div>
          
        </div>
      </div>
    </Fragment>
  );
}

export default App;
