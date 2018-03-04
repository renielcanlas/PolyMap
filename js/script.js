var marker_on = 0;
var marker_url = "default";
var marker_label_toggle = false;

function initMap() {
    // Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 12.8797, lng: 121.7740},
        zoom: 6
    });

    
    //Map Commands
    map.addListener("click",function(pos){
        if(marker_on==1){
            var marker = new google.maps.Marker({
                position: pos.latLng,
                animation: google.maps.Animation.DROP,
                map: map
            });

            if(marker_url != "default"){
                marker.setIcon(marker_url);
            }

            if(marker_label_toggle){
                var label = prompt("Marker Label: ");
                marker.setLabel(label);
            }

            marker.addListener('click', toggleBounce);

            function toggleBounce() {
                if (marker.getAnimation() !== null) {
                    marker.setAnimation(null);
                } else {
                    marker.setAnimation(google.maps.Animation.BOUNCE);
                }
            }
        }
    });

    
}

$(document).ready(function(){
    //Initalizations

    //for SidePanel
    $(".button-collapse").sideNav({
        edge: 'right',
        closeOnClick: true,
        draggable: true
    });
    //Resize Map Area
    $("#map").width($("#map").width()-300);
    //Activate all modals
    $('.modal').modal();

   
   //Button Commands
   $("#marker_toggle").click(function(){
       if($("#marker_toggle").hasClass("blue")){
            $("#marker_toggle").removeClass("blue");
            $("#marker_toggle").addClass("red");
            $("#marker_toggle span").text("Stop Adding Markers");
            marker_on = 1;
        }else{
            $("#marker_toggle").removeClass("red");
            $("#marker_toggle").addClass("blue");
            $("#marker_toggle span").text("Start Adding Markers");
            marker_on = 0;
        }
       
   });

   $("#marker_set").click(function(){
       marker_url = $("#marker_url").val();
       marker_label_toggle = $("#label_toggle").prop("checked");
   });

});