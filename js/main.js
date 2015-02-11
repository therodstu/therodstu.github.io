//$(document).ready(function(){



$(window).load (function () { 
    $(".collapsible-menu").hide();
    $(".collapsible-videos").hide();
    
  });

$(".collapsible-menu").hide();
$(".btn-menu").click(function(){
    $(".collapsible-menu").slideToggle(300);
    $(".collapsible-videos").hide();
  });
        
$(".collapsible-videos").hide();
$(".btn-videos").click(function(){
    $(".collapsible-videos").slideToggle(300);
    $(".collapsible-menu").hide();
  }); 




//desktop

//hide text pages until clicked, then hide iframe, open text page, hide all other text pages

 $(".log-in, .contacts, .testimony, .about-us").hide();
$(".nlt-about-us").click(function(){
$(".videoWrapper, .videoWrapper iframe").hide();
$(".about-us").show();
$(".log-in, .contacts, .testimony").hide();
     });
 
$(".log-in, .contacts, .testimony, .about-us").hide();
$(".nlt-testimony").click(function(){
$(".videoWrapper, .videoWrapper iframe").hide();
$(".testimony").show();
$(".log-in, .contacts, .about-us").hide();
     });

$(".log-in, .contacts, .testimony, .about-us").hide();
$(".nlt-contacts").click(function(){
$(".videoWrapper, .videoWrapper iframe").hide();
$(".contacts").show();
$(".log-in, .testimony, .about-us").hide();
     });

$(".log-in, .contacts, .testimony, .about-us").hide();
$(".nlt-log-in").click(function(){
$(".videoWrapper, .videoWrapper iframe").hide();
$(".log-in").show();
$(".about-us, .contacts, .testimony").hide();
     });


////hide text pages when video button is clicked
$(".nav-link-bottom").click(function(){
 $(".log-in, .contacts, .testimony, .about-us").hide();
    $(".videoWrapper, .videoWrapper iframe").show();
       });
    
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///mobile

////hide text pages when video button is clicked

//make sure this works
$(".vid-link-mobile").click(function(){
 $(".text-page-mobile").hide();
    $(".videoWrapper, .videoWrapper iframe").show();
       });

$(".btn-videos, .btn-menu").click(function(){
 $(".text-page-mobile").hide();
       });



$(".log-in-mobile-div, .contacts-mobile-div, .testimony-mobile-div, .about-us-mobile-div").hide();
$(".about-us-mobile-btn").click(function(){
//$(".videoWrapper, .videoWrapper iframe").hide();   un-comment this to hide video below text div
$(".about-us-mobile-div").show();
$(".log-in-mobile-div, .contacts-mobile-div, .testimony-mobile-div").hide();
     });

$(".log-in-mobile-div, .contacts-mobile-div, .testimony-mobile-div, .about-us-mobile-div").hide();
$(".testimony-mobile-btn").click(function(){
//$(".videoWrapper, .videoWrapper iframe").hide(); un-comment this to hide video below text div
$(".testimony-mobile-div").show();
$(".log-in-mobile-div, .contacts-mobile-div, .about-us-mobile-div").hide();
     });

$(".log-in-mobile-div, .contacts-mobile-div, .testimony-mobile-div, .about-us-mobile-div").hide();
$(".contacts-mobile-btn").click(function(){
//$(".videoWrapper, .videoWrapper iframe").hide(); un-comment this to hide video below text div
$(".contacts-mobile-div").show();
$(".log-in-mobile-div, .testimony-mobile-div, .about-us-mobile-div").hide();
     });

$(".log-in-mobile-div, .contacts-mobile-div, .testimony-mobile-div, .about-us-mobile-div").hide();
$(".log-in-mobile-btn").click(function(){
//$(".videoWrapper, .videoWrapper iframe").hide(); un-comment this to hide video below text div
$(".log-in-mobile-div").show();
$(".contacts-mobile-div, .testimony-mobile-div, .about-us-mobile-div").hide();
     });
    
    




