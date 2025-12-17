import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


const dominios = [
    ['the', 'our'],
    ['great', 'big'],
    ['jogger', 'racoon'],
    ['.com', '.es']
];

for (let pronoun of dominios[0]) {
    for (let adj of dominios[1]) {
        for (let noun of dominios[2]) {
            for (let domain of dominios[3]) {
                console.log(pronoun + adj + noun + domain);
            }
        }
    }
}