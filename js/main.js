let Calc = {
   value1: null,
   value2: null,
   value3: null,
   value4: null,
   sum: document.getElementById("add"),
   sub: document.getElementById("sub"),
   mul: document.getElementById("mul"),
   div: document.getElementById("div"),
   res: document.getElementById("res"),

   getValues(){
      this.value1 = document.getElementById("vl1").value;
      this.value2 = document.getElementById("vl2").value;
      this.value3 = document.getElementById("vl3").value;
      this.value4 = document.getElementById("vl4").value;
   },

   startCalc(){
      this.sum.addEventListener("click",this.startSum);
      this.sub.addEventListener("click",this.startSub);
      this.mul.addEventListener("click",this.startMul);
      this.div.addEventListener("click",this.startDiv);
   },

   startSum(){
      console.log(this.value1.value);
      console.log(this.value2.value);
      this.res.value = this.value1.value + this.value2.value;
   },

   startSub(){
      this.res.value = this.value1.value - this.value2.value;
   },

   startMul(){
      this.res.value = this.value1.value * this.value2.value;
   },

   startDiv(){
      this.res.value = this.value1.value / this.value2.value;
   },
}

Calc.startCalc();