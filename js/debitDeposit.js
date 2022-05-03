window.onload=function(){
var submitBtn=document.getElementById("submitBtn");
    var accNames = document.getElementById("accNames");
    for (let index = 0; index < Account.accountInfoList.length; index++) {
        var option = document.createElement("option");
        option.text = Account.accountInfoList[index].getName();
        option.value = index;
        accNames.add(option);
    }
    
    
    accNames.onchange = function(){
        submitBtn.disabled = false;
    };
}