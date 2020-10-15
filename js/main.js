$(document).ready(function(){
    $nav=$('.nav')
    $togglecollapse=$('.toggle-collapse')


    /* click event on toggle menu */
    $togglecollapse.click(function(){
        $nav.toggleClass('collapse');
    })

    
    /* owl carousel for blog */
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout: 5000,
        dots:false,
        nav: true,

        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')]
    });
})