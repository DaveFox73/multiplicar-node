const fs = require('fs');
const colors = require('colors');

let data = '';

let listarTabla = (base, limite = 10) => {
    if (!Number(base)) {
        reject(`El valor introducido como base ${base} no es un número`);
        return;
    }
    if (!Number(limite)) {
        reject(`El valor introducido como base ${base} no es un número`);
        return;
    }

    let ListadoTabla = '';
    for (let i = 1; i <= limite; i++) {
        ListadoTabla += `${i} * ${base} = ${i * base}\n`;
    }
    return ListadoTabla;
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }
        if (!Number(limite)) {
            reject(`El valor introducido como base ${base} no es un número`);
            return;
        }

        let data = '';
        for (let i = 1; i <= limite; i++) data += `${base} * ${i} = ${base * i}\n`;

        fs.writeFile(`./tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`tabla-${base}.txt`);
        });
    });
}


module.exports = {
    listarTabla,
    crearArchivo
}