function generate(){
    let quien = ["el Perro", "mi Abuela", "su Tortuga", "mi pájaro"];
    let que = ["comer", "molesta", "aplastada", "roto", ];
    let cuando = ["antes de la clase", "justo a tiempo", "cuando terminé", "durante mi almuerzo", "mientras estaba orando"];

    let rand_quien = Math.floor(Math.random() * quien.length);
    let rand_que = Math.floor(Math.random() * que.length);
    let rand_cuando = Math.floor(Math.random() * cuando.length); 
 
}

console.log(Math.floor(Math.random() * 10))


//ocument.getElementById("result").innerHTML = "<h1>Nombre:</h1><div classe='alert alert-success'><h2>"+quien[rand_quien] + " " +que[rand_que]+ " "+cuando[rand_cuando]+"</h2></div>";