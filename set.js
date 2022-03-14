$(document).ready(function(){

    $("#el1").draggable({stack:"#el1"}); 
    $("#el1").resizable();
    $("#sort1").sortable();
    $("#el2,#el3").draggable({stack:"#el2,el3"});
    $("#drop1,#drop2,#el3");
    $("#drop1").html("Евгений");
    $("#drop2").html("Ишин")({

	over:function(){
         $("#warp1").css("background-color","#d7fa99");
         $("#drop1").css("background-color","#d7fa99");
      }
  	});

}); 