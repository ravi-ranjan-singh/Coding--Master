//---------------------------------------------------MATERILIZED INITIALISATION-----------------------------------------------// 
var c=0;

$('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
  });



setInterval(function(){
    $('.carousel').carousel('next');
},6000)
    



     
$(document).ready(function(){
    $('select').formSelect();
  });

//-------------------------------------------------------SMOOTH SCROLL----------------------------------------------------//
       
$('.scroll').click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000 );
  });


//---------------------------------------------------STICKY NAVIGATION BAR------------------------------------------------//

$('.wpoint-1').waypoint(function(direction) {
    if(direction==='down'){
        $('.nav').addClass('sticky')
    }
    
    if(direction==='up'){
        $('.nav').removeClass('sticky')
    }
    
    
},{
      offset: '100px;'
    });

//-------------------------------------------------------WHY US ANIMATION----------------------------------------------------//


$('.wpoint-1').waypoint(function(direction) {
    $('.wpoint-1 h2').css('opacity','1')
    $('.wpoint-1 h2').addClass('animated fadeInDown')
},{
      offset: '150px;'
    });

$('.wpoint-1').waypoint(function(direction) {
   $('.section-why-us .card').addClass('animated flipInX')
    $('.section-why-us .card').css('opacity','1')
},{
      offset: '100px;'
    });

//---------------------------------------------------------- ABOUT US -------------------------------------------------------//

$('.wpoint-2').waypoint(function(direction) {
    $('.wpoint-2 h2').css('opacity','1')
    $('.wpoint-2 h2').addClass('animated fadeInDown')
},{
      offset: '150px;'
    });


$('.wpoint-2').waypoint(function(direction) {
   $('.about-content').addClass(' animated fadeInLeft')
    $('.about-content').css('opacity','1')
    $('.about-img1').addClass(' animated fadeInRight')
    $('.about-img1').css('opacity','1')
},{
      offset: '100px;'
    });


//---------------------------------------------------------- COURSES -------------------------------------------------------//

$('.wpoint-3').waypoint(function(direction) {
    $('.wpoint-3 h2').css('opacity','1')
    $('.wpoint-3 h2').addClass('animated fadeInDown')
},{
      offset: '150px;'
    });


$('.wpoint-3').waypoint(function(direction) {
   $('.card-m').addClass('animated fadeIn')
    $('.card-m').css('opacity','1')
    
},{
      offset: '100px;'
    });


//-------------------------------------------------SEE WHAT ARE STUDENT HAS TO STAY--------------------------------------------------//

$('.wpoint-4').waypoint(function(direction) {
    $('.wpoint-4 h2').css('opacity','1')
    $('.wpoint-4 h2').addClass('animated fadeInDown')
},{
      offset: '150px;'
    });


$('.wpoint-4').waypoint(function(direction) {
    
    $('.card').addClass('animated flipInX')
    $('.card').css('opacity','1')
    
   
    
},{
      offset: '100px;'
    });

//-------------------------------------------------SEE WHAT ARE STUDENT HAS TO STAY--------------------------------------------------//

$('.wpoint-5').waypoint(function(direction) {
    $('.wpoint-5 h2').css('opacity','1')
    $('.wpoint-5 h2').addClass('animated fadeInDown')
},{
      offset: '150px;'
    });


$('.wpoint-5').waypoint(function(direction) {
    
    $('.sign-up-box').addClass('animated zoomInUp')
    $('.sign-up-box').css('opacity','1')
    
   
    
},{
      offset: '100px;'
    });



//----------------------------------------------------------CUSTOM HOVER ANIMATION----------------------------------------------------//


$( "#c1o1" ).hover(function() {
 
    $('#c1i1').addClass('scaleU');
    $('#c1i1').removeClass('scaleD');
    setTimeout(function(){
        $('#c1i1').css('transform','scale(1.2)')
    }, 1000)
    
},function() {
 
    $('#c1i1').addClass('scaleD');
    $('#c1i1').removeClass('scaleU');
    setTimeout(function(){
        $('#c1i1').css('transform','scale(1)')
    }, 1000)
    
});

$( "#c2o2" ).hover(function() {
 
    $('#c2i2').addClass('scaleU');
    $('#c2i2').removeClass('scaleD');
    setTimeout(function(){
        $('#c2i2').css('transform','scale(1.2)')
    }, 1000)
    
},function() {
 
    $('#c2i2').addClass('scaleD');
    $('#c2i2').removeClass('scaleU');
    setTimeout(function(){
        $('#c2i2').css('transform','scale(1)')
    }, 1000)
    
});

$( "#c3o3" ).hover(function() {
 
    $('#c3i3').addClass('scaleU');
    $('#c3i3').removeClass('scaleD');
    setTimeout(function(){
        $('#c3i3').css('transform','scale(1.2)')
    }, 1000)
    
},function() {
 
    $('#c3i3').addClass('scaleD');
    $('#c3i3').removeClass('scaleU');
    setTimeout(function(){
        $('#c3i3').css('transform','scale(1)')
    }, 1000)
    
});

$( "#c4o4" ).hover(function() {
 
    $('#c4i4').addClass('scaleU');
    $('#c4i4').removeClass('scaleD');
    setTimeout(function(){
        $('#c4i4').css('transform','scale(1.2)')
    }, 1000)
    
},function() {
 
    $('#c4i4').addClass('scaleD');
    $('#c4i4').removeClass('scaleU');
    setTimeout(function(){
        $('#c4i4').css('transform','scale(1)')
    }, 1000)
    
});

$( "#c5o5" ).hover(function() {
 
    $('#c5i5').addClass('scaleU');
    $('#c5i5').removeClass('scaleD');
    setTimeout(function(){
        $('#c5i5').css('transform','scale(1.2)')
    }, 1000)
    
},function() {
 
    $('#c5i5').addClass('scaleD');
    $('#c5i5').removeClass('scaleU');
    setTimeout(function(){
        $('#c5i5').css('transform','scale(1)')
    }, 1000)
    
});

$( "#c6o6" ).hover(function() {
 
    $('#c6i6').addClass('scaleU');
    $('#c6i6').removeClass('scaleD');
    setTimeout(function(){
        $('#c6i6').css('transform','scale(1.2)')
    }, 1000)
    
},function() {
 
    $('#c6i6').addClass('scaleD');
    $('#c6i6').removeClass('scaleU');
    setTimeout(function(){
        $('#c6i6').css('transform','scale(1)')
    }, 1000)
    
});



 $(document).ready(function(){
    $('.sidenav').sidenav();
  });
        







