$(document).ready(function(){
        $("#end").mouseover(function(){
            if($("#maze").find(".youlose").length == 0){
                $("#status").text("You win!");
                $("#maze .boundary").removeClass("youlose");
                $("#maze").off("mouseover",".boundary");
                $("#maze").off("mouseleave");
            }
        });
        $("#start").click(function(){
            $("#maze .boundary").removeClass("youlose");
            $("#status").text("Click the \"S\" to begin.");
            $("#maze").mouseleave(function(){
                $("#maze .boundary").addClass("youlose");
                $("#status").text("You lost!");
            });
            $("#maze").on("mouseover",".boundary",mouseoverBoundry);
        });
        
});
function mouseoverBoundry(){
        $("#maze .boundary").addClass("youlose");
        $("#status").text("You lost!");
}