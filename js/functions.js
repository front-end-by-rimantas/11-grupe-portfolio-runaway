"use strict";

// header

// hero

// clients

// about me

// numbers

// skills

// latest work

// job history

// services
function renderServices( serviceList) {
    let HTML = '';

    for (let i=0; i<serviceList.length; i++) {
        const service = serviceList[i];
        HTML += `<div class="service">
                    <i class=" fa fa - $(service.icon}"></i>
                    <h2> $(service.title}</h2>
                    <p>$(service.description}</p>
                </div>`;
    }
    console.log(HTML);
    

    // return document.querySelector('#services'),innerHTML = HTML;
}
// testimonials

// contact me

// footer

