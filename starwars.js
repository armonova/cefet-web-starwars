// Seu javascript aqui :)
// Use a Star Wars API: https://swapi.dev/
// para fazer uma requisição assíncrona e:
//  - Pegar a lista de filmes (AJAX) e preencher no HTML
//  - Quando um filme for clicado, exibir sua introdução

// import { friendlyFetch } from './friendly-fetch.js';
import { AudioPlayer } from './music.js';

const API_ENDPOINT = 'https://swapi.dev/api'


const audioUrl = 'audio/tema-sw.mp3';
const coverImageUrl = 'imgs/logo.svg';
const title = 'Intro';
const artist = 'John Williams'
const parentEl = document.body;


const filmList = document.querySelector('#filmes ul');
const introduction = document.querySelector('pre.introducao');

new AudioPlayer().start({ audioUrl, coverImageUrl, title, artist }, parentEl);

// ex2 
fetch(API_ENDPOINT + '/films')
    .then(response => {
        response.json()
            .then(data => {
                filmList.innerHTML = '';
                let responseFilms = data.results;
                responseFilms.sort((film1, film2) => film1.episode_id > film2.episode_id ? 1 : -1);
                responseFilms.forEach(film => {
                    const li = document.createElement('li');
                    const decimalConversion = romanToDecimal(film.episode_id).padEnd(4);
                    li.innerHTML = `Episode ${decimalConversion} - ${film.title}`;
                    filmList.appendChild(li);
                })
            })
            .catch(err => {
                console.error(err);
            })

    }).catch(err => {
        console.error(err);
    })

function romanToDecimal(romanIndex) {
    const conversionTable = {
        1: 'I',
        2: 'II',
        3: 'III',
        4: 'IV',
        5: 'V',
        6: 'VI',
        7: 'VII',
        8: 'VIII',
        9: 'IX',
        10: 'X',
    }
    return conversionTable[romanIndex]
}