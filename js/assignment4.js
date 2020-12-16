// new WOW().init();

// $('#graphic-tab').click(function(){
//   new WOW().init();
// })

$('.counter').each(function(){
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text(),
    },{
        duaration: 20000,
        easing: 'swing',
        step: function(now){
            $(this).text(Math.ceil(now));
        }
    }
    )
});

// $(document).ready(function(){
//     $(window).scroll(function(){
//         var scroll = $(window).scrollTop();
//         if (scroll > 200) {
//           $(".navbar").css("background" , "#5E1171");
//         }
  
//         else{
//             $(".navbar").css("background" , "transparent");

//         }
//     })
//   });
window.onscroll = function() {scrollFunction()};
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("nav").style.background = "#5E1171";
    } else {
      document.getElementById("nav").style.background = "transparent";
    }
  };

//   $(document).ready(function () {
//     $(document).on("scroll", onScroll);
    
//     //smoothscroll
//     $('a[href^="#"]').on('click', function (e) {
//         e.preventDefault();
//         $(document).off("scroll");
        
//         $('.navbar-link').each(function () {
//             $(this).removeClass('active');
//         })
//         $(this).addClass('active');
      
//         var target = this.hash,
//             menu = target;
//         $target = $(target);
//         $('html, body').stop().animate({
//             'scrollTop': $target.offset().top+2
//         }, 500, 'swing', function () {
//             window.location.hash = target;
//             $(document).on("scroll", onScroll);
//         });
//     });
// });

// function onScroll(event){
//     var scrollPos = $(document).scrollTop();
//     $('.navbar .nav-item .nav-link').each(function () {
//         var currLink = $(this);
//         var refElement = $(currLink.attr("href"));
//         if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
//             $('.navbar .nav-item .nav-link').removeClass("active");
//             currLink.addClass("active");
//         }
//         else{
//             currLink.removeClass("active");
//         }
//     });
// }
