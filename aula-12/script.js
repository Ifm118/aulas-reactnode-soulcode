// let contador = 0;
// while(contador > 10){
//  console.log(contador);
//  contador++;
// }

// while(true){
//     console.log("Oi.")
// }

// let palavra = "Igor Fróes";
// let posicao = 0;
// while(palavra[posicao] !== "o"){
//     console.log(palavra[posicao]);
//     posicao++;

// }


// for (let contador = 0; contador < 10; contador ++){
//     console.log(contador);
// }

//while -> indeterminado
// for -> determinado



// i -> interator / index


// let x = 2 ;
// let y = 150;
// for(let i = x; i < y; i++){
//     if (i % 7 == 0){
//         console.log(i);
//         break;
//     }

// }

for (let i =0, c=0; i < 50; i++){
    if(i % 6 == 0){
        console.log(i);
        c++;
    }
    if(c == 3){
        break;
    }
}

console.log("############################")

for(let i =0; i <10; i++){
    if(i % 3 == 0){
        continue;

    }
    console.log(i);
}

