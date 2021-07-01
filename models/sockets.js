const Marcadores = require('./marcadores');





class Sockets {

    constructor( io ) {

        this.io = io;


        this.marcadores = new Marcadores // instanciando en este archivo las clases de marcadores 




        this.socketEvents();
    }


    socketEvents() {
        // On connection
        this.io.on('connection', ( socket ) => {

            console.log('Cliente Conectado');

           
        //Todo :  cuando alguien se conecte vamos a mandarle marcadores -activos , es decir cuando un cliente se conecte 

         // Marcadores activos 

            socket.emit('marcadores-activos',this.marcadores.activos)  // cuando un cliente se conecta emitiendo marcadores-activos y ccomo parametro le mandamos los marcadores activos







            socket.on('marcador-nuevo',( marcador )=>{ // escuchando el marcador nuevo cuando se emita desde el front // la informacion del marcador la estoy recibiendo en este callback 

                // recibiendo el marcador en la cual deberia de tener el id, longitud(lng), y la latitud(lat)

            //    console.log('marcador-nuevo');

              ///  console.log(marcador);


                this.marcadores.AgregarMarcador(marcador); // agregando marcador 


                socket.broadcast.emit('marcador-nuevo',marcador);// con broadcast evitamos que el cliente se cree un nuevo marcador lo muestre y, ya que es el mismo que lo esta creando
                // sino que queremos que todas las demas personas menos la persona que lo creo reciban este nuevo marcador  , en si , es el backend que lo va a emitir ahora 




            })







        //TODO : Marcador nuevo 





        //Todo : Marcador actualizado 


            socket.on('marcador-actualizado',(marcador) =>{ // recibiendo el marcador 


                this.marcadores.ActualizarMarcador(marcador);
                
                socket.broadcast.emit('marcador-actualizado', marcador); // mandando a emitir // mandando a emitir a todos los clientes menos la persona que lo esta emitiendo 






            })


           
           
           
           
            });
            
        
        };
    }





module.exports = Sockets;