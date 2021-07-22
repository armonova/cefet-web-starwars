// Seu javascript aqui :)
// Use a Star Wars API: https://swapi.dev/
// para fazer uma requisição assíncrona e:
//  - Pegar a lista de filmes (AJAX) e preencher no HTML
//  - Quando um filme for clicado, exibir sua introdução

// import { friendlyFetch } from './friendly-fetch.js';
import { AudioPlayer } from './music.js';

const API_ENDPOINT = 'https://swapi.dev/api'

console.log('teste');   
const audioUrl = 'audio/tema-sw.mp3';
const coverImageUrl = 'imgs/logo.svg';
const title = 'Intro';
const artist = 'John Williams'
const parentEl = document.body;

console.log('teste 33')

new AudioPlayer().start({ audioUrl, coverImageUrl, title, artist }, parentEl);