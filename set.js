$(document).ready(function(){

   $("#accordion1").accordion();
   $("#musca").accordion();
   $("#calicidae").accordion();



   $("#auto1").autocomplete({source:["Филиппины","Израиль","Германия"]});
   
   $("#el1,#el2,#el3").button();
});