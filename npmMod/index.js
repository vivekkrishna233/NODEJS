const kleur = require("kleur");
const validator = require('validator');

// console.log(kleur.red().italic().inverse('Hello world!'));

const res = validator.isEmail('vivek.com');
console.log(res ? kleur.green().italic().inverse(res) :  kleur.red().italic().inverse(res));