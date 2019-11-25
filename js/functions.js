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
function renderData( numberList ) {
    let HTML = '';
    
    if ( !Array.isArray(numberList) ) {
        return console.error('Error');
    }
    if ( numberList.length === 0 ) {
        return console.error(tuscia);
    }

    for ( let i=0; i<numberList.length; i++ ) {
        const item = numberList[i];

        HTML += `<div class="achievements">
            <i class="fa fa-${item.icon}"></i>
            <div class="number">${item.number}<span>+</span></div>
            <h4 class="title">${item.title}</h4>
        </div>`
    }

    return document.querySelector('#data').innerHTML = HTML;
}

// skills

// latest work

// job history

// services
function renderServices( serviceList) {
    let HTML = '';

    for (let i=0; i<serviceList.length; i++) {
        const service = serviceList[i];
        HTML += `<div class="service col-4 col-md-6 col-xs-12">
                    <h3> ${service.title}</h3>
                    <i class=" fa fa-${service.icon}"></i>
                    <p>${service.description}</p>
                </div>`;
    }
    // console.log(HTML);
    

    return document.querySelector('#services').innerHTML = HTML;
}
// testimonials

// contact me

// footer

