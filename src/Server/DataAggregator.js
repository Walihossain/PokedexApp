/* eslint-disable no-loop-func */
class Pokemon {
    constructor() {
      this.name = "";
      this.id = "";
      this.sprite = "";
      this.type1 = "";
      this.type2 = "";
      this.weight = "";
      this.height = "";
      this.stat_spd = "";
      this.stat_sp_def = "";
      this.stat_sp_atk = "";
      this.stat_atk = "";
      this.stat_def = "";
      this.stat_hp = "";
      this.flavor_text = "";
    }
  
    displayName() {
      return this.name + ' ' + this.id
    }
  }

var fs = require('fs')
var fetch = require('node-fetch')

var x; 

const API = "https://pokeapi.co/api/v2/";

// fetch(API + 'pokemon/1/').then(res=> res.json()).then( res => 
//     fs.writeFile('./Gen1.json', JSON.stringify(res,null,4), err=> {
//         if(err) console.error(err)
//         console.log('all good')
//     })
// )
var array = []
for (var i = 1; i < 10; i++){
    var pk = new Pokemon();
    fetch(API + 'pokemon/' + i + '/').then(res=>res.json()).then(res=> {
        pk.name = res.name; 
        pk.id = res.id;
        pk.sprite = res.sprites.front_default;
        pk.type1 = res.types[0].type.name;
        pk.type2 = res.types[1] ? res.types[1].type.name : "";
        pk.weight = res.weight;
        pk.height = res.height;
        pk.stat_spd= res.stats[0].base_stat;
        pk.stat_sp_def = res.stats[1].base_stat;
        pk.stat_sp_atk = res.stats[2].base_stat;
        pk.stat_atk = res.stats[3].base_stat;
        pk.stat_def = res.stats[4].base_stat;
        pk.stat_hp = res.stats[5].base_stat;
        setTimeout(()=>{

        },1000)
    }).catch(err=> console.error(err))
 
    fetch(API + 'pokemon-species/' + i + '/').then(res=>res.json()).then(
        res=> {
            var x;
            if (res.flavor_text_entries[0].language.name === "en") {
              x = res.flavor_text_entries[0].flavor_text;
            } else if (res.flavor_text_entries[1].language.name === "en") {
              x = res.flavor_text_entries[1].flavor_text;
            } else if (res.flavor_text_entries[2].language.name === "en") {
              x = res.flavor_text_entries[2].flavor_text;
            }
            pk.flavor_text = x;
        }
    ).then(()=>{
        array.push(pk)
        console.log(pk)
    }).catch(err=>console.error(err))
}

var obj = {array: array}
fs.writeFile('./Gen1.json', JSON.stringify(obj,null,4), err=> {
            if(err) console.error(err)
            console.log('all good')})
