$(document).ready(function() {
   
   $("#but1").click(function(){
      $("#container1").hide($("#effect1").val(),{},1000);
   });
   $("#but1").click(function(){
      $("#container2").hide($("#effect1").val(),{},1000);
   });
   $("#but2").click(function(){
      $("#container1").hide($("#effect1").val(),{},1000);
   });
   $("#but2").click(function(){
      $("#container2").hide($("#effect1").val(),{},1000);
   });
   $("#but3").click(function(){
      $("#container1").hide($("#effect1").val(),{},1000);
   });
   $("#but3").click(function(){
      $("#container2").hide($("#effect1").val(),{},1000);
   });
   $("#but4").click(function(){
      $("#square").animate({
         borderColor:"#EA3B53",
         borderWidth:3,
         backgroundColor:"#97D400",
         width:500,
         height:160},1500);
   });
   $("#but5").click(function(){
      $("#square").animate({
         borderWidth:3,
         backgroundColor:"#808000",
         width:500,
         height:160},1500);
   });
   

});