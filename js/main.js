// ==========testimonial part start ===========
$('.test_slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    arrows:false,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
              
// ==========testimonial part end ===========

// ==========logo slider part start ===========
$('.logo_slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    arrows:false,
    autoplay:true,
    slidesToShow: 6,
    slidesToScroll: 1,
     responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
        ,
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
    ]
  });
              
// ==========logo skuder part end ===========

 // =========sticky menu part ========
 var main_menu = document.getElementById("navber");
 window.addEventListener("scroll",function(){
 main_menu.classList.toggle("menu_fixed",window.scrollY > 100);
 })
 // =========sticky menu part ========

 // ========back to top part ======
 var back_to_top = document.querySelector(".back_to_top")

 window.addEventListener("scroll",function(){
 
   back_to_top.classList.toggle("bottom_to_top",window.scrollY > 150)
 })
 // ========back to top part ======