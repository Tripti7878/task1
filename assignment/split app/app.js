

function Calculate(){
 var amounts = document.getElementById('amount').value;
 var persons = document.getElementById('person').value;

 if(amounts <=0){
    document.getElementById('amount').style.border = '1px solid red';
    document.getElementById('Error1').innerHTML = 'pleas Enter the valid count' ;

 }else{
    document.getElementById('amount').border = '2px solid green' ;
 }


 document.getElementById('Error1').style.color = "red";

 if(persons <=0){
    document.getElementById('person').style.border = '1px solid red';
    document.getElementById('Error2').innerHTML = 'pleas Enter the valid count' ;

 }else{
    document.getElementById('person').border = '2px solid green' ;
 }
 
 document.getElementById('Error2').style.color = "red";


 var result = amounts / persons;


document.getElementById("result").textContent = "Result : " + result.toFixed(2);

 document.getElementById("amount").value = "";
 document.getElementById("person").value = "";




}