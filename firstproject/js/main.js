$(document).ready(function(){

    let $btns = $(".project-area .button-group button");
    $btns.click(function(e){
        $('.project-area .button-group buttons').removeClass("active");
        e.target.classList.add("active");
        let selector = $(e.target).attr("data-filter");
        $('.project-area .grid').isotope({
            filter:selector
        })
        return false;
    })
    $('.project-area .button-group #btn1').trigger("click");
    $('.project-area .grid .test-popup-link').magnificPopup({
        type: 'image',
        gallery:{enabled:true}
      });
    
      $('.site-main .about-area .owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            544:{
                items:2
            }
        }
      })
   //sticky navbar
   let nav_ofset = $('.header_area').height()+50;
   function navbarFix(){
    if($('.header_area').length){
       $(window).scroll(function(){
        let scroll = $(window).scrollTop();
        if(scroll >= nav_ofset){
            $('.header_area .main-menu').addClass('navbar_fixed');
        }
        else{
            $('.header_area .main-menu').removeClass('navbar_fixed');
        }
       })
    }
   }
   navbarFix();
})