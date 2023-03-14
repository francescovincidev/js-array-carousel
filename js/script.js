// array
const imgs = ["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg"];

// variabili
let image;
let i;
let addImgs = document.querySelector(".imgs");

// aggiungiamo le immagini nascoste su html
for (i = 0; i < imgs.length; i++) {
    image = imgs[i];
    addImgs.innerHTML += `<div class="single-img hidden">
                            <img src="img/${image}" alt="">
                          </div>`
  
}

let visibleImage = document.getElementsByClassName("single-img"); 

// rendiamo visibile la prima immagine
let visibleImageNumber = 0;
visibleImage[visibleImageNumber].classList.remove("hidden");

const upper = document.querySelector(".top");
const lower = document.querySelector(".bottom");

// bottone su
upper.addEventListener("click", function(){

    if(visibleImageNumber == imgs.length - 1){
        
        visibleImage[visibleImageNumber].classList.add("hidden");
        visibleImageNumber = 0;
        visibleImage[visibleImageNumber].classList.remove("hidden");

    } else{
        
        visibleImage[visibleImageNumber].classList.add("hidden");
        visibleImageNumber++;
        visibleImage[visibleImageNumber].classList.remove("hidden");

    }

});

// bottone giu
lower.addEventListener("click", function(){

    if(visibleImageNumber == 0){
        
        visibleImage[visibleImageNumber].classList.add("hidden");
        visibleImageNumber = imgs.length - 1;
        visibleImage[visibleImageNumber].classList.remove("hidden");
    
    } else{
        
        visibleImage[visibleImageNumber].classList.add("hidden");
        visibleImageNumber--;
        visibleImage[visibleImageNumber].classList.remove("hidden");

    }

});


console.log(addImgs);
console.log(i);