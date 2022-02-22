console.clear();
const { number, option, boolean } = require("yargs");
const { crearArchivo } = require("./helpers/multiplicar");
const argv=require('./config/yargs')
require('colors')

// const [,,arg3='base=5']=process.argv
// const [,base=5]=arg3.split('=')
// console.log(base);
// console.log(process.argv);
//console.log(argv);




//const base = 3;
crearArchivo(argv.b,argv.l,argv.h)
  .then(nombreArchivo=>console.log(nombreArchivo.yellow,'fue creado con exito'))
  .catch((err) => console.log(err));

// fs.writeFileSync(`tabla-${base}.txt`,salida,(err)=>{a
//     if (err) throw err;
//     console.log(`Tabla del ${base} creado`);
// })
