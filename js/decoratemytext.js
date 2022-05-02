function biggerDecoration(){
    // alert("Hello World!");
    
    var el =document.getElementById("textarea1");
    var currSize =parseFloat(window.getComputedStyle(el, null).getPropertyValue('font-size'));
    el.style.fontSize= (currSize +2) +"pt";
}
function intervals(){
   var id= setInterval(biggerDecoration,500);
   setTimeout(clearInterval, 5000, id);
}
window.onload = function(){
    document.getElementById("bigDecoration").onclick = intervals;
    document.getElementById("blingTxt").onchange = blingChecked;
    document.getElementById("convertBtn").onclick=convertToLatin;
    document.getElementById("malkovitchBtn").onclick = replaceMalkovitch;
}
function blingChecked(){
    var checkbox = document.getElementById("blingTxt");
    var txtarea= document.getElementById("textarea1");
    if(checkbox.checked){
        txtarea.style.fontWeight="bold";
        txtarea.style.color="green";
        txtarea.style.textDecoration="underline";
        document.body.style.backgroundImage = 'url("http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg")';
        
    }
    else
    {
        txtarea.style.fontWeight="normal";
        txtarea.style.color="black";
        txtarea.style.textDecoration="none";
        document.body.style.backgroundImage = "";
    }
    
}
function convertToLatin(){
    var words = document.getElementById("textarea1").value;
        var splittedword = words.trim().split(/\s+/);
        var result = "";
        for (var i = 0; i < splittedword.length; i++) {
            if (splittedword[i].charAt(0).match("[aeoiuAEOIU]")) {
                changed = splittedword[i] + "ay";
            } else {
                var word = splittedword[i];
                for (var j = 0; j < word.length; j++) {
                    if (word[j].match("[aeoiuAEOIU]")) {
                        var changed = word.substring(j) + word.substring(0, j) + "ay";
                        break;
                    }

                }
            }
            result += changed + " ";

        }
        document.getElementById("textarea1").value = result;

}
// function convertToLatin()
// {
//     var vowelsLetters = "a, e, i, o, u".split(',');
//     var words = document.getElementById("textarea1").value.trim().split(/\s+/);//one or more whitespace char
//     for (let i = 0; i < words.length; i++) {
//         for (let i2 = 0; i2 < vowelsLetters.length; i2++) {
//             if(words[i].charAt(0).toLowerCase()==vowelsLetters[i2])
//             {
//                 words[i] += "-ay";
//             }
//             else
//             {
//                 var word = words[i];
//                 for (let j = 0; j < word.length; j++) {
//                 words[i] = word.substring(j) + word.substring(0, j) + "-ay";
//                // document.getElementById("textarea1").value.indexOf(words[i]).replace("") += words[i];
//                 }
//             }
//         }
//     }
//     document.getElementById("textarea1").value = words.join(" ");
// }

function replaceMalkovitch(){
    var words = document.getElementById("textarea1").value;
    var array = words.split(/\s+/);
    for (let index = 0; index < array.length; index++) {
        if(array[index].length >= 5)
        {
           array[index] = "Malkovitch";
        }
    }
 document.getElementById("textarea1").value= array.join(" ");
}
