$(document).ready(function(){

    AOS.init({});

    tns({
        container: '.hero-slider',
        autoplay: true,
        preventScrollOnTouch: 'force',
        autoplayButtonOutput: false,
        controlsText: ['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'],
        nav:false,
    });

    tns({
        container: '.owner-boxes',
        items: 4,
        autoplay: true,
        gutter:20,
        preventScrollOnTouch: 'force',
        autoplayButtonOutput: false,
        nav:false,
        controlsText: ['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>']
    });
});