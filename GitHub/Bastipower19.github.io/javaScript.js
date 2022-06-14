

function suma(){
    var n1 = document.getElementById("num1").value;
    var n2 = document.getElementById("num1").value;
    var sum  = parseInt(n1) +parseInt(n2);
    alert("el resultado de la suma es :" +sum);
}

$(document).ready(function(){
    $("#suma").click(function(){
        var nuno = parseInt($("num1").val());
        var ndos = parseInt($("num2").val());
        var sum1 = nuno + ndos;
        $("#resultado").val(sum1);
     })


    });
