
function recentjs() {
    $('.testimonials-slide').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        center: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:2
            }
        }
    })
}
function openMenu() {
    var btn=document.getElementById('openMenu')
    btn.classList.toggle('open')
}

