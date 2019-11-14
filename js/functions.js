"use strict";

// header
function renderNavmeniu( navmeniuList) {
    let HTML = '';

    for (let i=0; i<navmeniuList.length; i++) {
        const navmeniu = navmeniuList[i];
        HTML += `<div class="navmeniu">
                 <a href="#" class="navlink">
                ${navmeniu.title}
        </a>
</div>`;
    }
    // console.log(HTML);
    return document.querySelector('#navbar').innerHTML = HTML;
    
}
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
                    <i class=" fa fa-${service.icon}"></i>
                    <h3> ${service.title}</h3>
                    <p>${service.description}</p>
                </div>`;
    }
    // console.log(HTML);
    

    return document.querySelector('#services').innerHTML = HTML;
}
// testimonials

// contact me

// footer

