
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

function openSignIn() {
    var signin = document.getElementById('openSignIn')
    signin.classList.toggle('open-signin')
    var visible = document.getElementById('Visible')
    visible.classList.toggle('visible')
}
$( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 1992,
      max: 2011,
      values: [ 1992, 2011 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "" + ui.values[ 0 ] + " -" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "" + $( "#slider-range" ).slider( "values", 0 ) +
      " - " + $( "#slider-range" ).slider( "values", 1 ) );
  } );              //jquery employer