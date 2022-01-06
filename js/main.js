var type = "sum";
var showType = document.getElementById("showType");

function doOperation(){
   var res = document.getElementById("res");
   switch (type) {
      case "sum":
         var sum = parseFloat(document.getElementById("vl1").value) + parseFloat(document.getElementById("vl2").value);
         res.value = sum;
         break;
   
      case "sub":
         var sub = parseFloat(document.getElementById("vl1").value) - parseFloat(document.getElementById("vl2").value);
         res.value = sub;
         break;

      case "mul":
         var mul = parseFloat(document.getElementById("vl1").value) * parseFloat(document.getElementById("vl2").value);
         res.value = mul;
         break;   

      case "div":
         var div = parseFloat(document.getElementById("vl1").value) / parseFloat(document.getElementById("vl2").value);
         res.value = div;
         break;   
   
      default:
         break;
   }
}

function defTypeSum(){
   type = "sum";
   showType.innerHTML = "Your operation is sum";
}

function defTypeSub(){
   type = "sub";
   showType.innerHTML = "Your operation is subtraction";
}

function defTypeMul(){
   type = "mul";
   showType.innerHTML = "Your operation is multiplication";
}

function defTypeDiv(){
   type = "div";
   showType.innerHTML = "Your operation is division";
}