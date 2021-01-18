const argv = require('./config/yargs').argv;
const colors = require('colors');
const { listarTabla, crearArchivo } = require('./multiplicar/multiplicar');

let comando = argv._[0];
switch (comando) {
    case 'listar':
        console.log('================='.green);
        console.log(`tabla del ${ argv.base }`.green);
        console.log('================='.green);
        console.log(listarTabla(argv.base, argv.limite));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log('Archivo creado:', ` ${ archivo }`.green))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
        break;
}


/*
let data = '';
for (base = 1; base <= 10; base++) {
    data = '';
    for (let i = 1; i <= 10; i++) data += `${base} * ${i} = ${base * i}\n`;

    fs.writeFile(`./tablas/tabla-${base}.txt`, data, (err) => {
        if (err) throw err;
        console.log(`El archivo tabla-${base}.txt ha sido creado`);
    });
}
*/
//let parametro = process.argv[2];
//let base = parametro.split('=')[1];
////for (base = 1; base <= 10; base++) {

//let argv2 = process.argv;

//console.log(argv.base);
//console.log('Limite ', argv.limite);
//console.log(argv2);



//}