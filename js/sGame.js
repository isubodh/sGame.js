//import Math;

const CELLCNT = 9
const sGameArray = []
var clickCounterVar = 0

setRandomValue();

for( var cnt=1; cnt<=CELLCNT; cnt++) {
    var button = document.createElement("button")
    
    button.name = sGameArray[cnt]
    button.id = cnt    

    button.innerText = sGameArray[cnt -1];

    if (sGameArray[cnt -1] == 9 ){
        button.innerText = " "
    }

    button.addEventListener("click",function(){
        userClickd(this.id);
    })

    document.getElementById('button-holder').appendChild(button)
}

//
function userClickd(id){
    //alert("Clicked id : " + id + " Text : " + sGameArray[id-1] + " Click Count " + clickCounterVar)
    actionOnButtonClick(id)

}

//
function actionOnButtonClick(id){
    clickCounter(1)
    
    moveKeysOnClick(id);
    
    labelKeys(); 

    if (id == sGameArray[id - 1]) {
        verifyDone();
    }
}

//
function moveKeysOnClick(id) {
    // Left jump if button clicked
    if (id%3 != 0){
        var currentLoc = id -1
        var newLoc = currentLoc + 1;
        if (sGameArray[newLoc] == 9){
            sGameArray[newLoc] = sGameArray[currentLoc];
            sGameArray[currentLoc] = 9;
            return;
        }
    }

    //Right jump
    if (id%3 != 1){
        var currentLoc = id - 1
        var newLoc = currentLoc - 1;
        if (sGameArray[newLoc] == 9){
            sGameArray[newLoc] = sGameArray[currentLoc];
            sGameArray[currentLoc] = 9;
            return;
        }
    }

    //Jump Up
    if (Math.ceil(id/3) != 1){
        var currentLoc = id - 1
        var newLoc = currentLoc - 3;
        if (sGameArray[newLoc] == 9){
            sGameArray[newLoc] = sGameArray[currentLoc];
            sGameArray[currentLoc] = 9;
            return;
        }
    }

    //Jump down
    if (Math.ceil(id/3) != 3){
        var currentLoc = id - 1
        var newLoc = currentLoc + 3;
        if (sGameArray[newLoc] == 9){
            sGameArray[newLoc] = sGameArray[currentLoc];
            sGameArray[currentLoc] = 9;
            return;
        }
    }

}
// 
function labelKeys(){
    for (var i= 1; i <= CELLCNT; i++){

        document.getElementById(i).innerText = sGameArray[i - 1];

        if (sGameArray[i - 1] == 9 ){
            document.getElementById(i).innerText = " "
        }
    }
    
}

function clickCounter(number){
    if (number == 0){
        clickCounterVar = 0
    } else {
        clickCounterVar += number
    }
}
// 
function verifyDone(){

    console.log("Verifying the soluton");
    
    var doneFlag = true;

    for (var i =0 ; i < CELLCNT ; i++){
        if (sGameArray[i] != i + 1 ){
            doneFlag = false ; 
        }
    }
    
    if (doneFlag){
        alert("Wow, you won in " + clickCounterVar + " clicks")
    }

}

// Setup the board randomly
function setRandomValue(){
    console.log("In Random random");
    // Set know invalid value
    for(var i = 0; i < CELLCNT ; i++){
        sGameArray[i] = -1;
    }
    
    //Set random val
    for(var i = 1; i <= CELLCNT; i++){

        newRandomPlace = getRandomInt(0,8);
        
        while (sGameArray[newRandomPlace] != -1){

            if (newRandomPlace == CELLCNT -1){
                newRandomPlace = 0
            }
            else{
                newRandomPlace += 1
            }
        }

        sGameArray[newRandomPlace] = i
        
    }
    console.log(sGameArray)
}

// random number within range
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }