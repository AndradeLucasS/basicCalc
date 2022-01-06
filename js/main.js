let Calc = {
    type: "sum",
    showType: document.getElementById("showType"),
    res, sum, sub, mul, div, value1: null,
    value2: null,

    startEngine(){
        this.value1 = document.getElementById("vl1"),
        this.value2 = document.getElementById("vl2"),

        this.sum = document.getElementById("sum");
        this.sub = document.getElementById("sub");
        this.div = document.getElementById("div");
        this.mul = document.getElementById("mul");

        this.sum.addEventListener("click",this.typeSum);
        this.sub.addEventListener("click",this.typeSub);
        this.div.addEventListener("click",this.typeDiv);
        this.mul.addEventListener("click",this.typeMul);

        this.value1.addEventListener("keydown", this.actKey);

        this.value2.addEventListener("keydown", this.actKey);
    },

    startCalc(){
        this.res = document.getElementById("res");

        switch (this.type) {
            case "sum":
               Calc.sum = parseFloat(document.getElementById("vl1").value) + parseFloat(document.getElementById("vl2").value);
               Calc.res.value = Calc.sum;
               break;
         
            case "sub":
               Calc.sub = parseFloat(document.getElementById("vl1").value) - parseFloat(document.getElementById("vl2").value);
               Calc.res.value = Calc.sub;
               break;
      
            case "mul":
               Calc.mul = parseFloat(document.getElementById("vl1").value) * parseFloat(document.getElementById("vl2").value);
               Calc.res.value = Calc.mul;
               break;   
      
            case "div":
               Calc.div = parseFloat(document.getElementById("vl1").value) / parseFloat(document.getElementById("vl2").value);
               Calc.res.value = Calc.div;
               break;   
         
            default:
               break;
        }
    },

    typeSum(){
        Calc.type = "sum";
        Calc.showType.innerHTML = "Your operation is sum";
    },

    typeSub(){
        Calc.type = "sub";
        Calc.showType.innerHTML = "Your operation is subtraction";
    },

    typeMul(){
        Calc.type = "mul";
        Calc.showType.innerHTML = "Your operation is multiplication";
    },

    typeDiv(){
        Calc.type = "div";
        Calc.showType.innerHTML = "Your operation is division";
    },

    actKey(e){
        if(e.key === "Enter"){
            Calc.startCalc();
        }
    }
}

Calc.startEngine();