"use strict";

// header
const bars = document.querySelector('#top_header button');
const header = document.querySelector('#top_header');

bars.addEventListener('click', function(){
    return header.classList.toggle('drop-menu');
});
window.addEventListener('scroll', () => {
    headScroll();
    headerBackground();
});
window.addEventListener('resize', () =>{
    headResize();
});
headScroll();
headerBackground();
headResize();
// hero

// clients

// about me

// numbers
renderData( data );

window.addEventListener('scroll', ()=>{
    achievementCounter('#data');
});
// skills

// latest work

// job history

// services
renderServices(service);

// portfolio
renderPort(gallery)

// testimonials
renderTestimonials( testimonials);
// renderPagination (testimonials);
// // console.log(testimonials)
//Blog
renderBlog(blog);

// contact me

// footer

