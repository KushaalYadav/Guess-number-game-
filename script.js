let max=prompt("Enter the maximum number for the range .")

const random=Math.floor(Math.random()*max)+1;
console.log(random)

let input=prompt("Guess the number :")

while(true){
    if(input=="quit"){
        console.log("Game is quit .")
        break
    }
    if(random==input){
        console.log("Congrats you guessed right !! Random number was :",random)
        break
    }
    else if(input<random){
        input=prompt("hint : Your guess is too small . Please try again.")
    }
    else if(input>random){
        input=prompt("hint : Your guess is too large . Please try again.")
    }
    else{
        input=prompt("Sorry! your guess is wrong .Please Guess again.")
    }

    
}
