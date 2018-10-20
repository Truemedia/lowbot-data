const greeting = require('greeting');
const parting = require('parting');
const {Lexeme} = require('lemme-lex');

let greetingTags = ['ArrivalSalutation'];
let partingTags = ['DepartureSalutation'];

module.exports = {
    model: 'salutation',
    documents: []
        .concat( greeting.all.map(phrase => new Lexeme(phrase, greetingTags).toRecord()) )
        .concat( parting.all.map(phrase => new Lexeme(phrase, partingTags).toRecord()) )
};
