const fs = require("fs");
const colors=require('colors')


const crearArchivo = async (base = 5, listar=false,hasta=5) => {
  try {
    
    let salida = "";
    for (let i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
    }
    if (listar) {
      console.log("==============".green);
      console.log(`TABLA DEL ${base}`);
      console.log("==============");
      console.log(salida);
    }

    fs.writeFileSync(`./salida/Tabla-${base}.txt`, salida); //e dindicamos donde vamos a guradarlo
    return `Tabla del ${base} creada`;
  } catch (err) {
    throw err;
  }
};
module.exports = {
  crearArchivo,
};
