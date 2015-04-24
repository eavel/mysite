/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Google Maps Scripts
// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 15,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(40.6700, -73.9400), // New York

        // Disables the default Google Maps UI components
        disableDefaultUI: true,
        scrollwheel: false,
        draggable: false,

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 29
            }, {
                "weight": 0.2
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 18
            }]
        }, {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 16
            }]
        }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 21
            }]
        }, {
            "elementType": "labels.text.stroke",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#000000"
            }, {
                "lightness": 16
            }]
        }, {
            "elementType": "labels.text.fill",
            "stylers": [{
                "saturation": 36
            }, {
                "color": "#000000"
            }, {
                "lightness": 40
            }]
        }, {
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 19
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }, {
                "weight": 1.2
            }]
        }]
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using out element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Custom Map Marker Icon - Customize the map-marker.png file to customize your icon
    var image = 'img/map-marker.png';
    var myLatLng = new google.maps.LatLng(40.6700, -73.9400);
    var beachMarker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: image
    });
}

//animar imagens

$('#imagecontainers').bind('mousemove', function(e){
    var midY = $('body').height() / 2;
    var midX = $('body').width() / 2;
    
    var tr1 = 0, 
        tr2 = 0;
    
    var maxP = 5,
        trsP = 0;
    
    var op1 = 1,
        op2 = 1;
    
    var x = e.pageX;
    var perc = (x / (midX*2))*100;
    
    if (perc > 50) {
        tr1 = perc;
        trsP = -(perc-50);
        op1 = 1-((perc-50)/50)
    } else {
        tr1 = perc;
        trsP = 50-perc;
        op2 = 1-(50-perc)/50
    }
    
    setTimeout( function(){
        $("#rightimg").css({
            transition: "none",
            width: tr1+'%'
        });
        $("#leftimg").css({
            transition: "none",
            width: (100-tr1)+"%"
        });
        $("#realrightimg").css({
            transition: "none",
            marginLeft: (x-midX*2)+"px"
        });
        $("#realleftimg").css({
            transition: "none",
            marginLeft: (-maxP)+trsP/10+"px"
        });
        $("#designera").css({
            transition: "none",
            width: (100-tr1)+"%",
            opacity: op1
        });
        $("#codera").css({
            transition: "none",
            width: tr1+'%',
            opacity: op2
        });
    }, 100);
    
    
});

$('#imagecontainers').on('mouseleave', function(e){
    
    var midX = $('body').width() / 2;

    
    setTimeout( function(){
        $("#rightimg").css({
            transition: "all .3s linear",
            width: '50%'
        });
        $("#leftimg").css({
            transition: "all .3s linear",
            width: "50%"
        });
        $("#realrightimg").css({
            transition: "all .3s linear",
            marginLeft: (-midX)+"px"
        });
        $("#realleftimg").css({
            transition: "all .3s linear",
            marginLeft: "-5px"
        });
        $("#designera").css({
            transition: "all .3s linear",
            width: '50%',
            opacity: 1
        });
        $("#codera").css({
            transition: "all .3s linear",
            width: '50%',
            opacity: 1
        });
    }, 100);

});
