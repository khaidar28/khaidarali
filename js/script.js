//menambahkan event pada element
$('.scroll').on('click', function(e){
    // ambil isi href
    var navBagian = $(this).attr('href');
    // isi element bersangkutan
    var elementBagian = $(navBagian);
    // pindahkan scroll
   $('html,body').animate({
    scrollTop: elementBagian.offset().top -50
   }, 2000, 'easeInOutExpo');
  
    e.preventDefault();
});

// about
$(window).on('load', function() {
    $('.paragraf1').addClass('pBaru');
    $('.paragraf2').addClass('pBaru');
});




// parallax

$(window).scroll(function() {
    var scroll = $(this).scrollTop();
    $('.jumbotron .conten img').css({
        'transform' : 'translate( 0px, '+ scroll/4 +'%)'
    });

    $('.jumbotron .conten h1').css({
        'transform' : 'translate( 0px, '+ scroll/2 +'%)'
    });

    $('.jumbotron .conten p').css({
        'transform' : 'translate( 0px, '+ scroll/1.2 +'%)'
    });

    //portfolio
    if(scroll > $('.portfolio').offset().top - 200) {
        $('.portfolio .thumbnail').each(function(i){
          setTimeout(function() {
                 $('.portfolio .thumbnail').eq(i).addClass('keluar')
          }, 200 * (i+1));
        });
    }
    
});

