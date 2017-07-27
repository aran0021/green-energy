/*global document, window, console*/
(function () {

    "use strict";

    
var masthead, slides, buttons, contents, container, i, k;

masthead = document.querySelector(".mh-image");


slides = [
    "<figure><i class=\".fa fa-google fa-3x\"></i><figcapture> Hola</figcapture></figure>",
    "<figure><img src=\"./img/slide-02.jpg\"><figcapture>Que</figcapture></figure>",
    "<figure><img src=\"./img/slide-03.jpg\"><figcapture>Pasa</figcapture></figure>",
    "<figure><img src=\"./img/slide-04.jpg\"><figcapture>Joel</figcapture></figure>"
    ];
    

function fadeOut() {
    masthead.style.opacity = 0;
}





var i = 0; 

function runSlides() {
    masthead.style.opacity = 1;
   
    
    
    if (i > 3){
        i = 0;
    }
    masthead.innerHTML = slides[i];
    i += 1;
    
  window.setTimeout(fadeOut, 5000); 
    

}

runSlides(); 
    
window.setInterval(runSlides, 6000);




buttons = document.querySelectorAll(".btn");
    
    
contents = [
    "<img src=/img/chrome-512.png><p>Hola Joel que pasa!</p>",
    "<img src=/img/firefox-512.png><p>Text-02</p>", 
    "<img src=/img/opera-512.png><p>Text-03</p>"
    ];
    
    container = document.querySelector(".container");
    
    container.innerHTML = contents[0];
    
    
function handleClick(ev) {
    for (k = 0; k < buttons.length; k += 1) {
        if (buttons[k].hasAttribute("id"))  {
            document.getElementById("id")[0].removeAttribute("active");
        }
    }


if (ev.target.innerHTML == "A") {
        container.innerHTML = contents[0];
        } else if (ev.target.innerHTML == "B") {
       container.innerHTML = contents[1];     
        } else {
        container.innerHTML = contents[2];
        }
    }
    
    
    for (k = 0; k < buttons.length; k += 1){    
        (buttons[0].addEventListener("click", handleClick));
        }
    
}());