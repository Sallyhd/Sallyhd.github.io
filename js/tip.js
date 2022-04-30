function calcTip() {
    // Enter your code here to make Tip Calculator work
     var subtotal = document.getElementById("subtotal");
     var tip = document.getElementById("tip");
     if((tip != "" && tip.value > 0) && (subtotal != "" && subtotal.value>0))
     {
        var total= subtotal.value*(tip.value*0.01);
        var totalTxt = document.getElementById("total");
        totalTxt.innerHTML = "$" + parseFloat(total).toFixed(2);
     }
     else{
         alert("Enter a valid tip/subtotal!")
     }
    }