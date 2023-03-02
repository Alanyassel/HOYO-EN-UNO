
// Crea la variable del lienzo
var canvas = new fabric.Canvas('myCanvas');
//Establece las posiciones iniciales para las imágenes de la pelota y el hoyo.
ball_y=0;
ball_x=0;
hole_y=400;
hole_x=800;

block_image_width = 5;
block_image_height = 5;
// escribe código para cargar la imagen del golf en el lienzo
function load_img(){
	fabric.Image.fromURL("golf-h1.png", function(Img) {
		hole_obj = Img;
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToHeight(50);
		hole_obj.set({
			top:hole_y,
			left:hole_x	
		});
		canvas.add(hole_obj);
	    });
	new_image();
}
// escribe código para cargar la imagen de la pelota en el lienzo                                                                  
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       

function new_image()
{
	fabric.Image.fromURL("ball.png", function(Img) {
		ball_obj = Img;
		ball_obj.scaleToWidth(50);
		ball_obj.scaleToHeight(50);
		ball_obj.set({
			top:ball_y,
			left:ball_x	
		});
		canvas.add(ball_obj);
	    });
}



window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	

	

	
	
	{
		if(keyPressed == '38')
		{
			up();
			console.log("arriba");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("abajo");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("izquierda");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("derecha");
		}
	}
	if((ball_x==hole_x)&&(ball_y==hole_y)){
	canvas.remove(ball_obj);
	document.getElementById("hd3").innerHTML="¡Metiste la pelota!";
	document.getElementById("myCanvas").style.borderColor="red";
	
}
	//para hacer que te marque que la metiste pulsa la flecha derecha y lo mismo,para borrar la pelota pulsa la tecla fin

function up()
{
	if(ball_y >=0)
	{
		ball_y = ball_y - block_image_height;
		console.log("altura del bloque de la imagen = " + block_image_height);
		console.log("Cuando se presiona la tecla arriba, X =  " + ball_x + " , Y = "+ball_y);
		canvas.remove(ball_obj);
		new_image();
	}
}

function down()
{
	if(ball_y <=500)
	{
		ball_y = ball_y + block_image_height;
		console.log("altura del bloque de la imagen = " + block_image_height);
		console.log("Cuando se presiona la tecla abajo, X =  " + ball_x + " , Y = "+ball_y);
		canvas.remove(ball_obj);
		new_image();
	}
}

function left()
{
	if(ball_x >0)
	{
		ball_x = ball_x - block_image_width;
		console.log("ancho del bloque de la imagen = " + block_image_width);
		console.log("Cuando se presiona la tecla izquierda, X =  " + ball_x + " , Y = "+ball_y);
		canvas.remove(ball_obj);
		new_image();
	}
}

function right()
{
	if(ball_x <=850)
	{
		ball_x = ball_x + block_image_width;
		console.log("ancho del bloque de la imagen = " + block_image_width);
		console.log("Cuando se presiona la flecha derecha, X =  " + ball_x + " , Y = "+ball_y);
		canvas.remove(ball_obj);
		new_image();
	}
}

}