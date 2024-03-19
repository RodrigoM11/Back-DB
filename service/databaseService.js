
const databaseService = () =>{

const knex = require ('knex') ({
    
    client:"mysql",

    connection:{

        host: "127.0.0.1" ,
        port: 3306,
        user: "root",
        password: "Termo12",
        database: "Lenguajes",

    },

    pool:{min:0,max:10},
});


const table = 'mis_lenguajes';

const getLenguages = () =>{

    return knex(table).select();
};


const crearLenguaje = (nombre,lanzamiento,tipado_fuerte)=>{
    
    return knex (table).insert ({

        nombre: nombre,
        lanzamiento: lanzamiento,
        tipado_fuerte: tipado_fuerte


    })
};

return {
    
    crearLenguaje,
    getLenguages

};

};

module.exports= {

    databaseService

};