$(document).ready(function(){
            //$(".boundary").mouseover(mouseoverBoundry);
        $("#end").mouseover(function(){
            if($("#maze").find(".youlose").length == 0){
                $("#status").text("You win!");
                $("#maze .boundary").removeClass("youlose");
                $("#maze .boundary").off("mouseover");
            }
        });
        $("#start").click(function(){
            $("#maze .boundary").removeClass("youlose");
            $("#status").text("Click the \"S\" to begin.");
            $("#maze").mouseleave(function(){
                $("#maze .boundary").addClass("youlose");
                $("#status").text("You lost!");
            });
            $("#maze .boundary").on("mouseover",mouseoverBoundry);
        });
        
});
function mouseoverBoundry(){
        $("#maze .boundary").addClass("youlose");
        $("#status").text("You lost!");
}