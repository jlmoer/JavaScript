// 01 - Countries

const axios = require('axios');

let countriesNames = [];
function getCountries () {
    axios.get('https://restcountries.com/v3.1/all').then(function (res){
        // console.log(res.data);
       countriesNames = res.data.map(function(country){
        //    console.log(country.name.common);
            return country.name.common;
        }) 
        console.log(countriesNames.join(' - '));
    }) 
}

getCountries();

