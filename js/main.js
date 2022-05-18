// typing animation

var typed = new Typed('.type', {
    strings: [
        'Web Designer',
        'Developer'
    ],
    typeSpeed: 60,
    backSpeed: 60,
    loop:true
  });

  var typed = new Typed('.type2', {
    strings: [
        'freelancer',
        'freelancer'
    ],
    typeSpeed: 60,
    backSpeed: 60,
  });
// counter up 
$('.counter').counterUp({
    delay: 10,
    time: 1000
});

// filter button
!function(d){var c="portfilter";var b=function(e){this.$element=d(e);this.stuff=d("[data-tag]");this.target=this.$element.data("target")||""};b.prototype.filter=function(g){var e=[],f=this.target;this.stuff.fadeOut("fast").promise().done(function(){d(this).each(function(){if(d(this).data("tag")==f||f=="all"){e.push(this)}});d(e).show()})};var a=d.fn[c];d.fn[c]=function(e){return this.each(function(){var g=d(this),f=g.data(c);if(!f){g.data(c,(f=new b(this)))}if(e=="filter"){f.filter()}})};d.fn[c].defaults={};d.fn[c].Constructor=b;d.fn[c].noConflict=function(){d.fn[c]=a;return this};d(document).on("click.portfilter.data-api","[data-toggle^=portfilter]",function(f){d(this).portfilter("filter")})}(window.jQuery);

// slider part
$(document).ready(function(){
    $('.bxslider').bxSlider();
  });

// sticky menu
window.addEventListener("scroll",function(){
  
  var navbar = document.getElementById("navbar");

if(window.pageYOffset >= 200 ){
  navbar.classList.add("sticky");
} else {
  navbar.classList.remove("sticky");
}

})

// mobile menu
var myNav=document.getElementById("myNav")
var openNav=document.getElementById("openNav")
var closeNav=document.getElementById("closeNav")


openNav.addEventListener("click", function(){
    myNav.style.width="200px";
})
closeNav.addEventListener("click", function(){
    myNav.style.width="0%";
})

function closeN(){
  myNav.style.width="0%";
}

// scroll up

$(function(){
  $.scrollUp();
});

// scroll Animation AOS

$(document).ready(function(){
  AOS.init();
});
AOS.init({
  duration: 800,
})


//scroll to top 

$(function(){
  $.scrollUp();
});
// Preloader
$(window).on("load",function(){
  $(".loader-container").fadeOut(1000);
})
