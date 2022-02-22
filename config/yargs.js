const { describe } = require('yargs')

const argv=require('yargs')
.option('b',{
    alias:'base',
    type:'number',
    demandOption:true,
    describe:'Es la base de la tabla de mutliplicar'
})
.option('l',{
    alias:'listar',
    type:'boolean',
    default:false,
    describe:'Sirve para mostrar o no la tabla antes de imprimir'
})
.option('H',{
    alias:'hasta',
    type:'number',
    default:10,
    describe:'Indicamos hasta que numero vamos hacer uso'
})
.check((argv,options)=>{
    if(isNaN(argv.b)){
        throw 'la base tiene que ser un numero'
    }
    return true
}).argv//extraemos el argv

module.exports=argv