
   runCreepy();

    
    const restart = document.getElementById("restart").addEventListener("click", () => {
        window.location.reload(); 
          
    })
          


function runCreepy() {
    function shuffleArray() {
        var numberArray = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
        for(var i = numberArray.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = numberArray[i];
            numberArray[i] = numberArray[j];
            numberArray[j] = temp;
        }
        return numberArray;
    }   
    
    const picOrder = shuffleArray();

    
    for(i = 0; i < picOrder.length; i++) {
        var picPlace = document.createElement("div");
        picPlace.innerHTML = `<button id='b${i}' type='submit' onclick='guess(this)'><img style='opacity: 0;' src='${picOrder[i]}.jpg'></button>`;
        document.getElementById(i).appendChild(picPlace); 
    }



    



}


