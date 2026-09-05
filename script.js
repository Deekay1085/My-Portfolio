$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // DARK MODE TOGGLE SCRIPT - NEW
    const darkModeBtn = document.querySelector(".dark-mode-btn");
    const body = document.querySelector("body");

    // Load saved theme from localStorage
    if(localStorage.getItem("theme") === "dark"){
        body.classList.add("dark");
    }

    darkModeBtn.addEventListener("click", () => {
        body.classList.toggle("dark");
        
        // Save preference
        if(body.classList.contains("dark")){
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });

    // typing text animation script - UPDATED FOR YOU
    var typed = new Typed(".typing", {
        strings: ["Software Engineer", "Web Developer", "Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed2 = new Typed(".typing-2", { // changed variable name so it doesn't conflict
        strings: ["Software Engineer", "Web Developer", "Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000, // fixed typo: was autoplayTimeOut
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});