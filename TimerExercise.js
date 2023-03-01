// Write a function called countdown that accepts a number as a parameter and every 1000 milliseconds 
// decrements the value and console.logs it. Once the value is 0 it should log “DONE!” and stop.
function countdown (number){
    let intervalId = setInterval(function(){
        number--;
        if(number <= 0){
            clearInterval(intervalId);
            console.log("Done!");
        }
        else{
            console.log(number);
        }
    },1000)

}
// Write a function called randomGame that selects a random number between 0 and 1 every 1000 milliseconds 
// and each time that a random number is picked, add 1 to a counter. If the number is greater than .75, 
// stop the timer and console.log the number of tries it took before we found a number greater than .75.
function randomGame(){
    let num;
    let startNumer= 0; 
    let startNums = setInterval(function(){
        num = Math.random();
        startNumer++;
        if(num > .75){
            clearInterval(startNums)
            console.log("The number of tries It took " + startNumer + " we found number greatet than .75");
        }
    }, 1000)
}

