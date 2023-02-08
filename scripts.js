function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// Initialize and add the map
function initMap() {
  // The location of explore
  const explore = { lat: 28.224962143355697, lng: -80.67632184483703 };
  // The map, centered at explore
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: explore,
  });
  // The marker, positioned at explore
  const marker = new google.maps.Marker({
    position: explore,
    map: map,
  });
}

window.initMap = initMap;


// Click on Captain, Get Captain Text
$(document).ready(function(){
  $( "#team-captain" ).click(function() {
    $('#captain-txt').css('display','block');
    $('#alien-txt').css('display','none');
    $('#monkey-txt').css('display','none');
  });
});

// Click on Alien, Get Alien Text
$(document).ready(function(){
  $( "#team-alien" ).click(function() {
    $('#captain-txt').css('display','none');
    $('#alien-txt').css('display','block');
    $('#monkey-txt').css('display','none');
  });
});

// Click on Monkey, Get Monkey Text
$(document).ready(function(){
  $( "#team-monkey" ).click(function() {
    $('#captain-txt').css('display','none');
    $('#alien-txt').css('display','none');
    $('#monkey-txt').css('display','block');
  });
});


// Click on hamburger menu and get mobile nav
$(document).ready(function(){
  $(".bx-menu" ).click(function() {
    $('.nav-links').css('right','0');
  });
});

// Click on X in mobile menu takes menu away
$(document).ready(function(){
  $(".bx-x" ).click(function() {
    $('.nav-links').css('right','-110%');
  });
});
  


$( ".htmlcss-arrow" ).click(function() {
  $( this ).toggleClass( "show1" );
});
$( ".more-arrow" ).click(function() {
  $( this ).toggleClass( "show2" );
});
$( ".js-arrow" ).click(function() {
  $( this ).toggleClass( "show3" );
});


  