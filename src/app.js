import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


const pronoun = ['the', 'our'];
const adj = ['great', 'big'];
const noun = ['jogger', 'racoon'];
const domain = ['.com', '.es'];

const dominios= [['the', 'our'],['great', 'big'],['jogger', 'racoon'], ['.com', '.es']];

for (let i =  0; i < dominios[0].length; i++){
    for (let j = 0; j < dominios[1].length; j++){
        for (let k = 0; k < dominios[2].length; k++){
            for (let l = 0; l < dominios[3].length; l++){

                console.log (dominios[0][i] + dominios[1][j] + dominios[2][k] + dominios[3][l]);
            }
        }
    }
}
