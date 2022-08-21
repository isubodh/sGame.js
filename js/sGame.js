//import Math;

const CELLCNT = 9
const sGameArray = []

setRandomValue();

for( var cnt=1; cnt<=CELLCNT; cnt++) {
    var button = document.createElement("button")
    
    button.name = sGameArray[cnt]
    button.id = cnt
    button.Tag = cnt    

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
    alert("You Clicked id : " + id + " Text : " + sGameArray[id-1])
    if (id == sGameArray[id]) {
        console.log("Check done")
        verifyDone();
    }
}

// 
function verifyDone(){
    
    var doneFlag = true;

    for (var i =0 ; i < CELLCNT ; i++){
        if (sGameArray[i] != i ){
            doneFlag = false ; 
        }
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