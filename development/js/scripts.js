$(document).ready(function(){

    /* Templates */
    $( "#header" ).load( "./templates/header.html" );

    $( "#side-bar" ).load( "./templates/side-bar.html" );

    $( "#sub-menu" ).load( "./templates/sub-menu.html" );
    $( "#content-header" ).load( "./templates/content-header.html" );
    $( "#best-selling-component" ).load( "./templates/best-selling-component.html" );
    $( "#stats-component" ).load( "./templates/stats-component.html" );
    $( "#reports-component" ).load( "./templates/reports-component.html" );
    $( "#quick-setting-component" ).load( "./templates/quick-setting-component.html" );
    $( "#attendance-component" ).load( "./templates/attendance-component.html" );
    $( "#facebook-component" ).load( "./templates/facebook-component.html" );
    
    $( "#footer" ).load( "./templates/footer.html", function(response, status, xhr) {
        if ( status == "success" ) {
            $('.grid').masonry({
                itemSelector: '.grid-item'
            }); 

            loadChart();
        }
    });

    /* Dialog */
    $( "body" ).on( "click", "#open-dialog", function() {
        $("#dialog-window").css("display", "block");
    });

    $( "body" ).on( "click", "#dialog-window", function() {
        $("#dialog-window").css("display", "none");
    });

    $( document ).keyup( function(e) {
        if (e.keyCode == 27) {
            $("#dialog-window").css("display", "none");
        }
    });
    
    /*  Promo  */
    $( "body" ).on( "click", "#info-button", function() {
        $("#promo-popup").css("display", "block");
    });
    $( "body" ).on( "click", "#promo-close", function() {
        $("#promo-popup").css("display", "none");
    });

    function loadChart() {
        var options = {
            exportEnabled: true,
            animationEnabled: true,
            legend:{
                horizontalAlign: "center",
                verticalAlign: "center"
            },
            data: [{
                type: "pie",
                toolTipContent: "<b>{name}</b>",
                indexLabel: "{name}",
                indexLabelPlacement: "inside",
                dataPoints: [
                    { y: 33, name: "33%", color: "#f4c63d" },
                    { y: 42, name: "42%", color: "#d70206" },
                    { y: 25, name: "25%", color: "#f05b4f" },
                ]
            }]
        };
        $("#chartContainer").CanvasJSChart(options);
        $(".canvasjs-chart-credit").hide();
        $(".canvasjs-chart-toolbar").hide();
    }
});
    