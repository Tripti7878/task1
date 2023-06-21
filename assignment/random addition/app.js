



function Calculate2(){
     
     var value1 = parseInt(document.getElementById("number1").value);
     
     var value2 = parseInt(document.getElementById("number2").value);
     var result = value1 + value2;
     document.getElementById("sum").innerHTML = "sum : " +  result;
console.log(value1);
}
function Calculate1(){

     var value1 = Math.floor(Math.random() * 100) + 1;
     var value2 = Math.floor(Math.random() * 150) + 1;
     document.getElementById('number1').value =value1;
     document.getElementById('number2').value =value2;

}

