

class Marcadores {

        constructor(){


            this.activos = {}; // va a hacer igual a un objeto 
        }
        // Metodos 

        AgregarMarcador(marcador){ // 

            this.activos [marcador.id ]  = marcador  // , apuntando al marcador, ese va a hacer su valor  // añadiendo al objeto 

            return marcador;

        }


        RemoverMarcador(id){

            delete this.activos(id);  // eliminando el id del marcador, con delete es tambien una forma de borrar propiedades



        }

        ActualizarMarcador( marcador ){

            this.activos[marcador.id] = marcador; // aputando al marcador que estoy recibiendo como argumento 

        }

}

//module.export = Marcadores;

//module.exports = Marcadores;

module.exports = Marcadores;