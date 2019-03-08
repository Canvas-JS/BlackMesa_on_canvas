const canvas = document.querySelector('#canvas');
console.log(canvas);

var ctx = canvas.getContext('2d');

ctx.fillStyle = 'rgb(255, 127, 39)';

ctx.beginPath(); 
ctx.arc(150, 200, 120, 0, Math.PI*2, false); 
ctx.closePath(); 
ctx.fill(); 

ctx.fillStyle = 'rgb(0, 0, 0)';

ctx.beginPath(); 
ctx.arc(150, 200, 110, 0, Math.PI*2, false); 
ctx.closePath(); 
ctx.fill(); 

ctx.fillStyle = 'rgb(255, 127, 39)';

ctx.beginPath(); 
ctx.moveTo(120, 180);
ctx.lineTo(120, 260);
ctx.lineTo(50, 260);
ctx.lineTo(70, 285);
ctx.lineTo(120, 310);
ctx.lineTo(160, 310);
ctx.lineTo(205, 305);
ctx.lineTo(235, 280);
ctx.lineTo(255, 250);
ctx.lineTo(200, 180);
ctx.lineTo(120, 180);
ctx.fill(); 

ctx.fillStyle = 'rgb(0, 0, 0)';

ctx.beginPath();
ctx.arc(150, 200, 160, 0, Math.PI * 2, true);
ctx.closePath(); 