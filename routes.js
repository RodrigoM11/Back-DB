

module.exports = function(app, databaseService) {

    app.get('/lenguajes', (req , res) => {
        
        databaseService.getLenguages().then( lenguajes =>
            res.json(lenguajes)).catch(e=>

                res.status(500).send(e));       

    });

    app.post('/lenguajes', (request,response)=>{
        const nuevoLenguaje = request.body;
        console.log(nuevoLenguaje);

        databaseService.crearLenguaje(
            nuevoLenguaje.nombre,
            nuevoLenguaje.lanzamiento,
            nuevoLenguaje.tipado_fuerte
        )
      .then(()=>{

            response.json({"mensaje":"lenguaje creado!"});
        }).catch(e=>{

          response.status(500).send(e);
        });
    });

}