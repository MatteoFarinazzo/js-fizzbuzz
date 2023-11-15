// ciclo che crea i numeri da 1 a 100

for (let i = 1; i<101; i++){

    
    //individuare numeri multipli sia di 3 che di 5
    if ((i%3==0) && (i%5==0)){
        console.log("FizzBuzz");
        document.getElementById("numeri").innerHTML += " " + "&nbsp" + "FizzBuzz";
    }

    //individure numeri multipli di 5 con il mudulo
    else if(i%5==0){
        console.log("Buzz");
        document.getElementById("numeri").innerHTML += " " + "&nbsp" + "Buzz";
    }

    // individuare numeri multipli di 3
    else if (i%3==0){
        console.log("Fizz");
        document.getElementById("numeri").innerHTML += " " + "&nbsp" + "Fizz";
    }

    else console.log(i); document.getElementById("numeri").innerHTML += " " + "&nbsp" + i;


    }










