"use strict";

// // header
function headScroll() {
    const headHeight = document.querySelector('#top_header').offsetHeight;
    const height = window.scrollY + headHeight;
//   console.log(height);
  
let links = [];
const DOMlinks = document.querySelectorAll(' #navbar> nav> a');
 for (let i=0; i<DOMlinks.length; i++) {
     const link = DOMlinks[i];
     const href = link.href;
     const split = href.split('#');

     if (split.length > 1) {
         links.push('#' + split[1] );
     }
    //  console.log(links);
     
 }
let sectionHeights=[];
for (let i=0; i<links.length; i++){
    const link = links[i];
    if (link === '#') {
        sectionHeights.push(0);
    } else {
        const section = document.querySelector(link);
        sectionHeights.push(section.offsetTop);
    }
}
    let wantedSection = 0;
    for (let i=0; i<sectionHeights.length; i++) {
        const sectionH =sectionHeights[i];
        if (sectionH <= height) {
            wantedSection=[i];
        } else{
            break;
        }
    }
    document.querySelector(`nav > a.active`).classList.remove('active');
    document.querySelector(`nav > a[href="${links[wantedSection]}"]`).classList.add('active');


    return;
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
    

    return document.querySelector('#service').innerHTML = HTML;
}
// portfolio
function renderPort (galleryList){
let HTML = '';

    for (let i=0; i<galleryList.length; i++) {
        const gallery = galleryList[i];
        HTML += ` <a href="../img/portfolio/${gallery.port_img}">
        <img src="../img/portfolio/${gallery.src}" alt="">
        
                <div class="picon">
                        <i class="fa fa-eye"></i>
                </div>
        
        </a>`
    }
    // console.log(HTML);
    

    return document.querySelector('#p_img').innerHTML = HTML;
}


// testimonials

function renderClient ( testimonialsList ) {
    let HTML = '';
    let listHTML = '';
    
    for ( let i=0; i<testimonialsList.length; i++ ) {
        const client = testimonials[i];

        HTML += `<div class="client">
                    <div class="icon">
                        <i class="fa fa-${client.icon}"></i>
                        <i class="fa fa-${client.icon}"></i>
                        <i class="fa fa-${client.icon}"></i>
                        <i class="fa fa-${client.icon}"></i>
                    </div>
                    <img src="./img/testimonial/${client.photo}">
            <h4 class="title">${client.title}</h4>
            <p class="description">${client.description}<p>
               
        </div>`
    }
    // console.log(testimonials);
    
    return document.querySelector('#testimonials').innerHTML = HTML;
}

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
