// Seu javascript aqui :)
// Use a Star Wars API: https://swapi.dev/
// para fazer uma requisição assíncrona e:
//  - Pegar a lista de filmes (AJAX) e preencher no HTML
//  - Quando um filme for clicado, exibir sua introdução

// import { friendlyFetch } from './friendly-fetch.js';
import { AudioPlayer } from './music-sem-private.js';

// const API_ENDPOINT = 'https://swapi.dev/api'

console.log('teste');   
const urlAudio = 'audio/tema-sw.mp3';
const urlCoverAudio = 'imgs/logo.svg';
const titleAudio = 'Intro';
const artistAudio = 'John Williams'
const parentAudio = document.body;

console.log('testes 1');

new AudioPlayer().start({ urlAudio, urlCoverAudio, titleAudio, artistAudio }, parentAudio);

console.log('testes');