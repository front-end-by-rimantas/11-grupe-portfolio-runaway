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
        HTML += `<div class="service col-4 col-md-6 col-lg-4 col-xs-12">
                    <div class="figures_srv"> 
                    <strong> ${service.figure}</strong>
                    </div>
                    <h3> ${service.title}</h3>
                    <i class=" fa fa-${service.icon}"></i>
                    <p>${service.description}</p>
                </div>`;
    }
    // console.log(HTML);
    

    return document.querySelector('#services').innerHTML = HTML;
}
// testimonials

//Blog
function renderBlog( blogList ) {
    let HTML = '';
    
    for ( let i=0; i<blogList.length; i++ ) {
        const blog = blogList[i];

        HTML += `<div class="blogas">
            <i class="fa fa-${blog.icon}"></i>
            <span class="count">${blog.count}</span>
            <img src="../img/blog/${blog.photo}">
            <h4 class="blog-title">${blog.title}</h4>
            <p class="text">${blog.text}<p>
                <div class="bottom">
                    <img src="../img/about/${blog.face}">
                    <p class="admin">By - Rockstar Jack</p>
                </div>
                <div class="date">${blog.date}</div>
        </div>`
    }
    
    return document.querySelector('#blog').innerHTML = HTML;
}
// contact me

// footer
