function draw() {
         let canvas = document.getElementById('drawRound');
         let ctx = canvas.getContext('2d');  
         let pi = Math.PI;
  

//1
ctx.beginPath();
ctx.lineWidth = 7;
ctx.strokeStyle = "green";
ctx.fillStyle="blue";
ctx.arc(40, 160, 20, 0, 2*pi, false);
ctx.stroke();
ctx.fill(); 

//2
ctx.beginPath();
ctx.lineWidth = 7;
ctx.strokeStyle = "green";
ctx.fillStyle="blue";
ctx.arc(165, 150, 20, 0, 2*pi, false);
ctx.stroke();
ctx.fill(); 

//3
ctx.beginPath();
ctx.lineWidth = 7;
ctx.strokeStyle = "green";
ctx.fillStyle="blue";
ctx.arc(145, 100, 20, 0, 2*pi, false);
ctx.stroke();
ctx.fill(); 

//4
ctx.beginPath();
ctx.lineWidth = 7;
ctx.strokeStyle = "green";
ctx.fillStyle="blue";
ctx.arc(135, 200, 20, 0, 2*pi, false);
ctx.stroke();
ctx.fill(); 

//5
ctx.beginPath();
ctx.lineWidth = 7;
ctx.strokeStyle = "green";
ctx.fillStyle="blue";
ctx.arc(45, 110, 20, 0, 2*pi, false);
ctx.stroke();
ctx.fill(); 

//6
ctx.beginPath();
ctx.lineWidth = 7;
ctx.strokeStyle = "green";
ctx.fillStyle="blue";
ctx.arc(95, 80, 20, 0, 2*pi, false);
ctx.stroke();
ctx.fill(); 




//Окружности
 ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = "green";
ctx.fillStyle="yellow";
ctx.arc(100, 145, 40, 0, 2*pi, false);
ctx.stroke();
ctx.fill();




//Длинные
  ctx.strokeStyle = "green";
    ctx.lineWidth = "5";
    ctx.moveTo(100,185);
    ctx.lineTo(100,300);
    ctx.stroke(); 
     ctx.beginPath();
     ctx.beginPath();







ctx.moveTo(100, 225); // координаты начальной точки
ctx.quadraticCurveTo(75, 200, 25, 190)



ctx.lineWidth = 4; 
ctx.strokeStyle="green";
ctx.fillStyle="green";
ctx.moveTo(100,225); 
ctx.quadraticCurveTo(75, 250, 25, 190)
ctx.stroke();
ctx.fill();



ctx.moveTo(100, 250); // координаты начальной точки
ctx.quadraticCurveTo(150, 250, 300, 125 );

ctx.lineWidth = 4; 
ctx.strokeStyle="green";
ctx.fillStyle="green";
ctx.moveTo(100,250);
ctx.quadraticCurveTo(100, 350, 300, 125, )
ctx.stroke();
ctx.fill();

}
