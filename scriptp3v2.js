$(document).ready(function(){

    // Color Checker
    $("#applyColor").click(function(){
        var color = $("#colorInput").val();
        if(color){
            $("body").css("background-color", color);
        }
    });

    // Light Bulb Simulator
    $("#turnOn").click(function(){
        $("#bulbImage").attr("src", "https://www.w3schools.com/js/pic_bulbon.gif");
    });

    $("#turnOff").click(function(){
        $("#bulbImage").attr("src", "https://www.w3schools.com/js/pic_bulboff.gif");
    });

    // Joke API Integration
    $("#Load_button").click(function(){
        $("#load_para").load("https://official-joke-api.appspot.com/random_joke", function(responseTxt, statusTxt, xhr) {
            if (statusTxt == "success") {
                try {
                    var data = JSON.parse(responseTxt);
                    $("#load_para").text(data.setup);
                    $("#punchline").text(data.punchline);
                } catch (error) {
                    $("#load_para").text("Failed to parse the joke.");
                    $("#punchline").text("");
                    console.error("Parsing error:", error);
                }
            } else {
                $("#load_para").text("Failed to load joke.");
                $("#punchline").text("");
                console.log("Status:", xhr.status);
                console.log("Error:", xhr.statusText);
            }
        });
    });

});
