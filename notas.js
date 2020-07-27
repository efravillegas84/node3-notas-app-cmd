const fs = require('fs');
const { notEqual } = require('assert');
const chalk = require('chalk');

const addNota = (titulo, contenido) => {
    const notas = cagarNotas();

    if(!notas.find((nota) => nota.titulo === titulo)){
        notas.push({
            titulo: titulo,
            contenido: contenido
        });

        guardarNotas(notas);
        console.log(chalk.green('nueva nota agregada'));
    }else{
        console.log(chalk.red('titulo <'+titulo+'> esta ocupado, no se agrega la nueva nota'));
    }
}

const removeNota = (titulo) => {
    const notas = cagarNotas();
    const notasFiltradas = notas.filter((nota) => nota.titulo !== titulo);
    //console.log('notas:<'+notas.length+'><'+notas.toString()+'>\nnotasFiltradas:<'+notasFiltradas.length+'><'+notasFiltradas.toString()+'>');

    if(notasFiltradas.length < notas.length){
        guardarNotas(notasFiltradas);

        console.log(chalk.green('nota titulo <'+titulo+'> borrada'));
    }else{
        console.log(chalk.red('nota titulo <'+titulo+'> no se econtro, no se borra'));
    }
}

const getNota = (titulo) => {
    const nota = cagarNotas().find((nota) => nota.titulo === titulo)

    if (nota) {
        console.log(chalk.blue('titulo: ' + nota.titulo)+' '+chalk.cyan('contenido: ' + nota.contenido));
    } else {
        console.log(chalk.red('nota con titulo <'+titulo+'> no fue encontrada'));
    }
}

const listarNotas = ()=>{
    console.log(chalk.magenta.bold("Sus notas"));
    // cagarNotas().forEach((nota) => {
    //     console.log(chalk.blue('titulo: ' + nota.titulo)+' '+chalk.cyan('contenido: ' + nota.contenido));
    // });

    console.table(
        cagarNotas().map(nota => {
          return {
            "Titulo":  nota.titulo,
            "Contenido": nota.contenido
          };
        })
      );

}

const guardarNotas = (notas) => {
    fs.writeFileSync('notas.json', JSON.stringify(notas));
}

const cagarNotas = () => {
    try {
        return JSON.parse(fs.readFileSync('notas.json').toString());
    } catch (error) {
        return [];
    }
}

module.exports = {
    getNota: getNota,
    addNota: addNota,
    removeNota: removeNota,
    listarNotas: listarNotas
}