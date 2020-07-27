const chalk = require('chalk');
const yargs = require('yargs');
const notas = require("./notas.js");

yargs
    .version('1.0.1')
    .command({
        command: 'add',
        describe:'para agregar una nota',
        builder:{
            titulo:{
                describe:'titulo de la nota',
                demandOption:true,
                type:'string'
            },
            contenido:{
                describe:'contenido de la nota',
                demandOption:true,
                type:'string'
            }
        },
        handler(argv) {notas.addNota(argv.titulo, argv.contenido)}
    })
    .command({
        command: 'remove',
        describe:'para borrar una nota',
        builder:{
            titulo:{
                describe:'titulo de la nota',
                demandOption:true,
                type:'string'
            }
        },
        handler(argv){notas.removeNota(argv.titulo)}
    })
    .command({
        command: 'read',
        describe:'para leer una nota',
        builder:{
            titulo:{
                describe:'titulo de la nota',
                demandOption:true,
                type:'string'
            }
        },
        handler(argv){notas.getNota(argv.titulo)}
    })
    .command({
        command: 'list',
        describe:'para listas las nota',
        handler(){notas.listarNotas()}
    })
    .parse()
;