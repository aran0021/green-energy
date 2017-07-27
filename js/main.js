/*global document, window, console*/
(function () {

    "use strict";


var masthead, slides, buttons, contents, container, i, k;

masthead = document.querySelector(".mh-image");


slides = [
    "<figure><img src=\"./img/01-sun-banner.png\"><figcapture>The sun is cleaner energy</figcapture></figure>",
    "<figure><img src=\"./img/02-lightbulb-banner.png\"><figcapture>Use energy saver light bulbs</figcapture></figure>",
    "<figure><img src=\"./img/03-windmill-banner.png\"><figcapture>Wind power will propel the future</figcapture></figure>",
    ];


function fadeOut() {
    masthead.style.opacity = 0;
}





var i = 0;

function runSlides() {
    masthead.style.opacity = 1;



    if (i > 2){
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
    "<img src=/img/chrome-512.png><p>Renewable energy resources exist over wide geographical areas, in contrast to other energy sources, which are concentrated in a limited number of countries</p>",
    "<img src=/img/firefox-512.png><p>Rapid deployment of renewable energy and energy efficiency is resulting in significant energy security, climate change mitigation, and economic benefits.</p>",
    "<img src=/img/opera-512.png><p>Results of a recent review of the literature[8] concluded that as greenhouse gas (GHG) emitters begin to be held liable for damages resulting from GHG emissions resulting in climate change, a high value for liability mitigation would provide powerful incentives for deployment of renewable energy technologies.</p>"
    ];

    container = document.querySelector(".container");

    container.innerHTML = contents[0];


function handleClick(ev) {
    for (k = 0; k < buttons.length; k += 1) {

        // if buttons[k] has attribute id ...
        if (buttons[k].hasAttribute("id"))  {

            // remove attribute id from buttons[k] (buttons[k].removeAttr..)

            buttons[k].removeAttribute("id");
        }
    }

// your ev.target are spans which contain letters A, B or C (not numbers 1 or 2)
// meaning if (ev.target.innerHTML === "A") { ...
    if (ev.target === buttons[0]) {
            container.innerHTML = contents[0];
            } else if (ev.target === buttons[1]) {
           container.innerHTML = contents[1];
            } else {
            container.innerHTML = contents[2];
            }
}

    // if you use loop to add event listeners, use variable k (not numerical value)
    // to point to a specific index of each event-target object.
    for (k = 0; k < buttons.length; k += 1){
        (buttons[k].addEventListener("click", handleClick));
        }

}());
