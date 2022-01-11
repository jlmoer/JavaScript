// 03 - Pokemon

const axios = require('axios');

function catchPokemon(id) {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then(function(res){
        console.log('Id :', id);
        console.log('Name :', res.data.forms[0].name);
    })
} 

catchPokemon(4);