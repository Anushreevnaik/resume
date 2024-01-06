(document).ready(function () {
    (window).scroll(function () {
      //  sticky navbar on scroll script  //
      if (this.scrollY > 20) {
        (".navbar").addClass("sticky");
      } else {
        (".navbar").removeClass("sticky");
      }
  
  
    //  slide-up script  //
  
    (".scroll-up-btn").click(function () {
      ("html").animate({ scrollTop: 0 });

      //  removing smooth scroll on slide-up button click  //
      ("html").css("scrollBehavior", "auto");
    });
  
    (".navbar .menu li a").click(function () {
      //  Smooth scroll on Menu Items click  //
  
      ("html").css("scrollBehavior", "smooth");
    });
  
    //  Toggle Navbar  //
  
    (".menu-btn").click(function () {
      (".navbar .menu").toggleClass("active");
      (".menu-btn i").toggleClass("active");
    });
  
   
    