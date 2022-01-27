var canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d');
    
    
      var x = 0,
                y = 0

            ctx.fillStyle = '#f00'

            function loop () {

                setTimeout(loop, 700 / 1)

              
              
    
      
 var x = 400,
                y = 400

            var randomness = 100

            ctx.lineWidth = 5

            // do this 100 times!
            for (var i = 0; i < 100; i++) {

                // start a new path
                ctx.beginPath()
                
               

                // move the 'pen' to current position
                ctx.moveTo(x, y)

                // randomly pick the next target position
                x = x + randomInt(-randomness, randomness)
                y = y + randomInt(-randomness, randomness)

   // draw path

                // straight lines
                // ctx.lineTo(x, y)
                
                

                // or curves...
                ctx.quadraticCurveTo(x + randomInt(-randomness, randomness), y + randomInt(-randomness, randomness), x, y)

                // pick a random color
                ctx.strokeStyle = 'rgb(' + 255 + ',' + randomInt(0, 255) + ',' + randomInt(0, 255) + ')'
                ctx.fillStyle = 'rgb(' + 255 + ',' + randomInt(0, 255) + ',' + randomInt(0, 255) + ')'


                // stroke the path
                ctx.stroke()
                
                
               



// red square
//ctx.fillStyle = 'rgb("#aaa")'
//ctx.fillRect(1,1,1550,1000);


// diagnal linear gradient
// Arguments: x0, y0, x1, y1
// The gradient will paint from point(x0, y0) to point(x1, y1)
// note the points are relative to the entire canvas!
// suppose we want to draw a 300x300 circle with this gradient, top left at point(360, 30)
//var gradient = ctx.createLinearGradient(360, 90, 150 + 300, 100 + 300)
//gradient.addColorStop(0, "#ff3333") // starting color
//gradient.addColorStop(1, "#ffffff") // ending color

// draw a circle and fill with the gradient
//var radius = 100
//ctx.beginPath()
//ctx.arc(318 + radius, 70 + radius, radius, 0, Math.PI * 2) // Arguments: x, y, radius，starting angle, ending angle (angles are in radiant)
//ctx.closePath()
//ctx.fillStyle = gradient
//ctx.fill()


//Green Circle:
//var radius = 150
//ctx.beginPath()
//ctx.arc(560 + radius, 40 + radius, radius, 0, Math.PI * 2) 
//ctx.closePath()
//ctx.fillStyle = 'rgb("0, 255, 0")'
//ctx.fill()



// diagnal linear gradient
// Arguments: x0, y0, x1, y1
// The gradient will paint from point(x0, y0) to point(x1, y1)
// note the points are relative to the entire canvas!
// suppose we want to draw a 300x300 circle with this gradient, top left at point(360, 30)
var gradient = ctx.createLinearGradient(360, 90, 360 + 300, 100 + 300)
gradient.addColorStop(0, "#ff3333") // starting color
gradient.addColorStop(1, "#ffffff") // ending color

// draw a circle and fill with the gradient
var radius = 380
ctx.beginPath()
ctx.arc(380 + radius, 70 + radius, radius, 0, Math.PI * 2) // Arguments: x, y, radius，starting angle, ending angle (angles are in radiant)
ctx.closePath()
ctx.fillStyle = gradient
ctx.fill()

//Purple Rectangle:
//ctx.fillStyle = 'rgb(205, 30, 107)'
//ctx.beginPath();
//ctx.lineTo(20, 50, 420, 110);
//ctx.fillRect(840, 130, 209, 60, 392, 66, 351, 207)
//ctx.closePath()
//ctx.fill()


//Line in Circle:
//ctx.beginPath();
//ctx.moveTo(990, 700)
//ctx.lineTo(335, 345);ctx.fill();
//ctx.moveTo(700, 832)
ctx.lineTo(665, 70);ctx.fill();
//ctx.stroke();

//ctx.fillStyel = "#ccc";
ctx.strokeStyle = "#008";
ctx.lineWidth = 100;


//The blue Triangle: 
//ctx.fillStyle = 'rgb(0, 0, 255)'
//ctx.beginPath();
//ctx.moveTo(700,100);
//ctx.lineTo(450,650);
//ctx.lineTo(895,650);
//ctx.closePath();
//ctx.fill();



// text
ctx.font = "bold 36px Helvetica, Arial" // any valid CSS font property
ctx.fillStyle = "#ddd"
ctx.textAlign = 'center'
ctx.textBaseline = 'middle'
ctx.fillText('3D Formate', 375 + radius, 50 + radius)


// text
ctx.font = "bold 36px Helvetica, Arial" // any valid CSS font property
ctx.fillStyle = 'rgb("0, 255, 0")'
ctx.textAlign = 'center'
ctx.textBaseline = 'middle'
ctx.fillText('Streaming Data Visualization river', 380 + radius, 1 + radius)


//Draw Shapes:



// image
var max = new Image()
max.src = 'max.jpg'
max.onload = function () {
      ctx.drawImage(max, 690, 30)
}





  }

            // this function takes in a min value and a max value,
            // then returns a random integer in between.
            function randomInt (min, max) {
                return Math.round(Math.random() * (max - min) + min)
            }
            
            
              x += 1

                if (x > 1000) {
                    x = 0
                }
            }

            loop()
