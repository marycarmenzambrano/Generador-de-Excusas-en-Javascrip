//function generateExcuse(){
    let quien = ["el Perro", "mi Abuela", "su Tortuga", "mi pájaro"];
    let que = ["comer", "molesta", "aplastada", "roto", ];
    let cuando = ["antes de la clase", "justo a tiempo", "cuando terminé", "durante mi almuerzo", "mientras estaba orando"];

    //let rand_quien = Math.floor(Math.random() * quien.length);
    //let rand_que = Math.floor(Math.random() * que.length);
    //let rand_cuando = Math.floor(Math.random() * cuando.length); 
 
//}

//console.log(quien[1] + " "+ que[3] + " "+ cuando[1]) 

//console.log(quien[Math.floor(Math.random() * quien.length)])

//console.log(quien[Math.floor(Math.random() * quien.length)] + " "+ que[Math.floor(Math.random() * que.length)] + " "+ cuando[Math.floor(Math.random() * cuando.length)])

function generateExcuse (quiennArray, queArray, cuandoArray){
    let cuandoRandon = Math.floor(Math.random() * cuandoArray.length);
    let queRandon = Math.floor(Math.random() * queArray.length);
    let quienRandon = Math.floor(Math.random() * quien.length);

    return quien[quienRandon] + " "+ que[queRandon] + " "+ cuando[cuandoRandon]
}

let resultado = generateExcuse(quien, que, cuando);
console.log(resultado)


//document.getElementById("result").innerHTML = quien[rand_quien] + " " +que[rand_que]+ " "+cuando[rand_cuando]+"</h2></div>";