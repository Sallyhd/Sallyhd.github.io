$(document).ready(function(){
    $("#lookupBtn").click(function(){
        $.ajax({
            url:'/lookup',
            method:'POST',
            type:'json',
            data: { term:$("#term").val()},
            success:function(data){
                var li ="";
                for (let i = 0; i < data.length; i++) {
                     li += "<li>("+data[i].wordtype+") :: "+data[i].definition+"</li>";
                }
               $("#result").append(li);
            },
            error:function(err){
                $("#result").hide();
            }
        });
    });
});