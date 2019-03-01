//###############################################//###############################################
//###############################################//###############################################
// USER PART OF CODE 
/**
Filename : tshirts-desing.js

 

*/
//###############################################//###############################################
//###############################################//###############################################
 
 
 
  OVERRIDE_TO_REF_CANVAS()
 HELLO_WORLD.ENGINE.EXIT_EDIT_MODE()
 

 
 var NAME_OF_PATERN = '';
 var PATERN_COUNT = 0;
 var WEBGL_ = window.frames[0];
 var COLOR_FILL = "#ffffff"
 
/*  SYS.DOM.E("PICKCOLOR").onchange = function(){
	 
	 alert(SYS.DOM.E("PICKCOLOR").value)
	 
 }; */

var SELECTED_PATERN = ""; 
 
 var canvasTEX = document.getElementById('WEBGL_TEX');
 var WEBGL_TEX = canvasTEX.getContext('2d');
  var IMG_TEX_BACK = new Image();
  IMG_TEX_BACK.src = '../project_instance_webgl/res/tshirts/textures/tshirt02_texture1.png';
 
 IMG_TEX_BACK.onload = function(){
	 
 WEBGL_TEX.drawImage (IMG_TEX_BACK , 0,0,512,512);
	 console.log("ON LOAD")
	 
 };

  
  
 
 
function ADD_NEW_PATERN (name){
 
 name = name + PATERN_COUNT;
 NAME_OF_PATERN = name;
 
 HELLO_WORLD.ENGINE.MODULES.ACCESS_MODULE("STARTER").NEW_OBJECT( name ,  20  , 20 ,  11 , 23 , 1 );
 //window[name].POSITION.DIMENSION.W = window[name].POSITION.DIMENSION.H / VIEW.ASPECT();
 window[name].NAME_OF_PATERN = name;
 window[name].POSITION.TYPE = 'REF_CANVAS';
 
 makeOBJ = function(e){
	 //alert("ON CHANGE" + NAME_OF_PATERN)
        window[NAME_OF_PATERN].IMG_CUSTOM = new Image();
		 
	  if ( this.files && this.files[0] ) {
        var FR= new FileReader();
        FR.onload = function(e) {
           window[NAME_OF_PATERN].IMG_CUSTOM.onload = function() {
			   
			    window[name].TYPE_OF_GAME_OBJECT = 'CUSTOM';
				 Add_patern.TYPE_OF_GAME_OBJECT = 'TEXT_BOX';	
				 
    				 window[NAME_OF_PATERN].CUSTOM = function(){
					 
					  drawRotatedImage(	 window[this.NAME_OF_PATERN].IMG_CUSTOM  , window[this.NAME_OF_PATERN].POSITION.X(), window[this.NAME_OF_PATERN].POSITION.Y() , window[this.NAME_OF_PATERN].ROTATE.ANGLE , window[this.NAME_OF_PATERN].DIMENSION.WIDTH()  , window[this.NAME_OF_PATERN].DIMENSION.HEIGHT() , SURF )
					 
					 };
		  
           };
           window[NAME_OF_PATERN].IMG_CUSTOM.src = e.target.result;
        };       
        FR.readAsDataURL( this.files[0] );
		this.style.display = 'none';
		this.style.height = '0';
    }
 };
 
 SYS.DOM.UPLOAD_FILE("patern"+PATERN_COUNT , makeOBJ );
 
 window[NAME_OF_PATERN].TOUCH_UP = function(){

SELECTED.TEXTBOX.TEXT = this.NAME;
 
 WEBGL_TEX.clearRect(0, 0, canvasTEX.width, canvasTEX.height);
 WEBGL_TEX.drawImage (IMG_TEX_BACK , 0,0,512,512);

 WEBGL_TEX.globalAlpha = 0.5;
 
 WEBGL_TEX.fillStyle = COLOR_FILL;
 WEBGL_TEX.fillRect(0,0, canvasTEX.width, canvasTEX.height);
 
 WEBGL_TEX.globalAlpha = 1;
// WEBGL_TEX.drawImage(  window[this.NAME].IMG_CUSTOM  , window[this.NAME].POSITION.X()*512/VIEW.W() +160 , window[this.NAME].POSITION.Y()*512/VIEW.H() + 90 , window[this.NAME].DIMENSION.WIDTH()*512/VIEW.W()  , window[this.NAME].DIMENSION.HEIGHT()*512/VIEW.H() -15 )
 for (var x = 11;x<99;x=x+11) {
 if ( typeof window['paternImage'+x] != 'undefined') {

 //WEBGL_TEX.drawImage(  window['paternImage'+x].IMG_CUSTOM  , window['paternImage'+x].POSITION.X()*512/VIEW.W() +160 , window['paternImage'+x].POSITION.Y()*512/VIEW.H() + 90 , window['paternImage'+x].DIMENSION.WIDTH()*512/VIEW.W()  , window['paternImage'+x].DIMENSION.HEIGHT()*512/VIEW.H() -15 )
 drawRotatedImage(  window['paternImage'+x].IMG_CUSTOM  , window['paternImage'+x].POSITION.X()*512/VIEW.W() +160 , window['paternImage'+x].POSITION.Y()*512/VIEW.H() + 90 ,window['paternImage'+x].ROTATE.ANGLE , window['paternImage'+x].DIMENSION.WIDTH()*512/VIEW.W()  , window['paternImage'+x].DIMENSION.HEIGHT()*512/VIEW.H() -15 , WEBGL_TEX )
 
 }
 }
 
 var dataUrl =WEBGL_TEX.canvas.toDataURL();
 
 if (typeof WEBGL_.FEMALE != 'undefined') {
	 
 //WEBGL_.scene.remove(WEBGL_.FEMALE);
	 
 }
 
 WEBGL_.IMPORT.OBJ_MTL("FEMALE" , "tshirts.obj" , "res/tshirts/", "tshirts.mtl" ,  dataUrl )	 

 };
 
}
 
 //ADD_NEW_PATERN("paternImage")
 //#################################################
 ONRESIZE = function(){
	 
	 SYS.DOM.E("COLOR_PICK").style.top = "" + VIEW.H(90) + "px";
	 
 };
 //COLOR PICKER LOAD 
 
function REFRESH(){
	 
 WEBGL_TEX.clearRect(0, 0, canvasTEX.width, canvasTEX.height);
 WEBGL_TEX.drawImage (IMG_TEX_BACK , 0,0,512,512);

 WEBGL_TEX.globalAlpha = 0.5;
 
 WEBGL_TEX.fillStyle = COLOR_FILL;
 WEBGL_TEX.fillRect(0,0, canvasTEX.width, canvasTEX.height);
 
  WEBGL_TEX.globalAlpha = 1;
// WEBGL_TEX.drawImage(  window[this.NAME].IMG_CUSTOM  , window[this.NAME].POSITION.X()*512/VIEW.W() +160 , window[this.NAME].POSITION.Y()*512/VIEW.H() + 90 , window[this.NAME].DIMENSION.WIDTH()*512/VIEW.W()  , window[this.NAME].DIMENSION.HEIGHT()*512/VIEW.H() -15 )
 for (var x = 11;x<99;x=x+11) {
 if ( typeof window['paternImage'+x] != 'undefined') {

 //WEBGL_TEX.drawImage(  window['paternImage'+x].IMG_CUSTOM  , window['paternImage'+x].POSITION.X()*512/VIEW.W() +160 , window['paternImage'+x].POSITION.Y()*512/VIEW.H() + 90 , window['paternImage'+x].DIMENSION.WIDTH()*512/VIEW.W()  , window['paternImage'+x].DIMENSION.HEIGHT()*512/VIEW.H() -15 )
 drawRotatedImage(  window['paternImage'+x].IMG_CUSTOM  , window['paternImage'+x].POSITION.X()*512/VIEW.W() +160 , window['paternImage'+x].POSITION.Y()*512/VIEW.H() + 90 ,window['paternImage'+x].ROTATE.ANGLE , window['paternImage'+x].DIMENSION.WIDTH()*512/VIEW.W()  , window['paternImage'+x].DIMENSION.HEIGHT()*512/VIEW.H() -15 , WEBGL_TEX )
 
 }
 }
 
 
  var dataUrl =WEBGL_TEX.canvas.toDataURL()
 WEBGL_.IMPORT.OBJ_MTL("FEMALE" , "tshirts.obj" , "res/tshirts/", "tshirts.mtl" ,  dataUrl )	
 }
 

HELLO_WORLD.ENGINE.MODULES.ACCESS_MODULE("TSHIRTS").NEW_OBJECT( "tshirts" ,  2   , 28.5  ,  35 , 55 , 1 )
HELLO_WORLD.ENGINE.MODULES.ACCESS_MODULE("TSHIRTS").GAME_OBJECTS.ACCESS("tshirts").CREATE_ANIMATION( SURF , "DRAW_FRAME" , 0 , RESOURCE.majce  , 1221212 , "no" , 1,11,1, 1 ,1) 

tshirts.DRAG = false;
//tshirts.DIMENSION.W = tshirts.DIMENSION.H / VIEW.ASPECT();

tshirts.TAP = function(){  

};

tshirts.EFFECTS.ZOOM.ZOOM_IN_FINISHED = function(){
this.OUT(2);
};

tshirts.EFFECTS.ZOOM.PREVENT_ = false; 
tshirts.EFFECTS.ZOOM.ZOOM_OUT_FINISHED = function(){
	
this.PREVENT_ = false;	

};

tshirts.TOUCH_MOVE = function(){
 
};


////////////////


HELLO_WORLD.ENGINE.MODULES.ACCESS_MODULE("STARTER").NEW_OBJECT( "Add_patern" ,  40   , 2 ,  15 , 10 , 1 );
Add_patern.CREATE_TEXTBOX( "Add patern" , 10 , "black" , "gold");
Add_patern.POSITION.TYPE = 'REF_CANVAS';
Add_patern.DRAG = false;



Add_patern.TAP = function(){  

if (PATERN_COUNT < 9) {
PATERN_COUNT++;
SYS.DOM.E("UPLOAD_BOX").style.display = 'block';
ADD_NEW_PATERN("paternImage" + PATERN_COUNT)
Add_patern.TYPE_OF_GAME_OBJECT = "NO_RENDER";
}
else{
	
Add_patern.TYPE_OF_GAME_OBJECT = 'NO_RENDER';	
}


};



////////////////
//OPTIONS 
////////////////


HELLO_WORLD.ENGINE.MODULES.ACCESS_MODULE("STARTER").NEW_OBJECT( "WIDTH" ,  78   , 32 ,  10 , 6 , 1 );
WIDTH.CREATE_TEXTBOX( "WIDTH" , 10 , "black" , "gold");
WIDTH.POSITION.TYPE = 'REF_CANVAS';
WIDTH.DRAG = false;
WIDTH.TEXTBOX.EDIT = false;
 
HELLO_WORLD.ENGINE.MODULES.ACCESS_MODULE("STARTER").NEW_OBJECT( "WIDTH_PLUS" ,  85   , 28 ,  3 , 5 , 1 );
WIDTH_PLUS.CREATE_TEXTBOX( "+" , 10 , "black" , "gold");
WIDTH_PLUS.POSITION.TYPE = 'REF_CANVAS';
WIDTH_PLUS.DRAG = false;
WIDTH_PLUS.TEXTBOX.EDIT = false;

HELLO_WORLD.ENGINE.MODULES.ACCESS_MODULE("STARTER").NEW_OBJECT( "WIDTH_MINUS" ,  85   , 37 ,  3 , 5 , 1 );
WIDTH_MINUS.CREATE_TEXTBOX( "-" , 10 , "black" , "gold");
WIDTH_MINUS.POSITION.TYPE = 'REF_CANVAS';
WIDTH_MINUS.DRAG = false;
WIDTH_MINUS.TEXTBOX.EDIT = false;


WIDTH_PLUS.TAP = function(){  
 if (SELECTED.TEXTBOX.TEXT != "Selected : none"&& window[SELECTED.TEXTBOX.TEXT].DIMENSION.W < 40) {
	 
	 window[SELECTED.TEXTBOX.TEXT].DIMENSION.W += 0.1;
	 
 }
};


WIDTH_MINUS.TAP = function(){  
 if (SELECTED.TEXTBOX.TEXT != "Selected : none" && window[SELECTED.TEXTBOX.TEXT].DIMENSION.W > 2) {
	 
	 window[SELECTED.TEXTBOX.TEXT].DIMENSION.W -= 0.1;
	 
 }


};





HELLO_WORLD.ENGINE.MODULES.ACCESS_MODULE("STARTER").NEW_OBJECT( "SELECTED" ,  12   , 22 ,  13 , 5 , 1 );
SELECTED.CREATE_TEXTBOX( "Selected : none" , 10 , "black" , "gold");
SELECTED.POSITION.TYPE = 'REF_CANVAS';
SELECTED.DRAG = false;
SELECTED.TEXTBOX.EDIT = false;





HELLO_WORLD.ENGINE.MODULES.ACCESS_MODULE("STARTER").NEW_OBJECT( "HEIGHT" ,  78   , 50 ,  10 , 6 , 1 );
HEIGHT.CREATE_TEXTBOX( "HEIGHT" , 10 , "black" , "gold");
HEIGHT.POSITION.TYPE = 'REF_CANVAS';
HEIGHT.DRAG = false;
HEIGHT.TEXTBOX.EDIT = false;
 
HELLO_WORLD.ENGINE.MODULES.ACCESS_MODULE("STARTER").NEW_OBJECT( "HEIGHT_PLUS" ,  85   , 46 ,  3 , 5 , 1 );
HEIGHT_PLUS.CREATE_TEXTBOX( "+" , 10 , "black" , "gold");
HEIGHT_PLUS.POSITION.TYPE = 'REF_CANVAS';
HEIGHT_PLUS.DRAG = false;
HEIGHT_PLUS.TEXTBOX.EDIT = false;

HELLO_WORLD.ENGINE.MODULES.ACCESS_MODULE("STARTER").NEW_OBJECT( "HEIGHT_MINUS" ,  85   , 55 ,  3 , 5 , 1 );
HEIGHT_MINUS.CREATE_TEXTBOX( "-" , 10 , "black" , "gold");
HEIGHT_MINUS.POSITION.TYPE = 'REF_CANVAS';
HEIGHT_MINUS.DRAG = false;
HEIGHT_MINUS.TEXTBOX.EDIT = false;

HEIGHT_PLUS.TAP = function(){  
 if (SELECTED.TEXTBOX.TEXT != "Selected : none"&& window[SELECTED.TEXTBOX.TEXT].DIMENSION.W < 40) {
	 
	 window[SELECTED.TEXTBOX.TEXT].DIMENSION.H += 0.2;
	 REFRESH()
 }
};


HEIGHT_MINUS.TAP = function(){  
 if (SELECTED.TEXTBOX.TEXT != "Selected : none" && window[SELECTED.TEXTBOX.TEXT].DIMENSION.W > 2) {
	 
	 window[SELECTED.TEXTBOX.TEXT].DIMENSION.H -= 0.2;
	 REFRESH()
 }


};


////////////////
//rotate



HELLO_WORLD.ENGINE.MODULES.ACCESS_MODULE("STARTER").NEW_OBJECT( "ROTATE_OBJ" ,  78   , 65 ,  10 , 6 , 1 );
ROTATE_OBJ.CREATE_TEXTBOX( "ROTATE" , 10 , "black" , "gold");
ROTATE_OBJ.POSITION.TYPE = 'REF_CANVAS';
ROTATE_OBJ.DRAG = false;
ROTATE_OBJ.TEXTBOX.EDIT = false;
 
HELLO_WORLD.ENGINE.MODULES.ACCESS_MODULE("STARTER").NEW_OBJECT( "ROTATE_OBJ_PLUS" ,  85   , 61 ,  3 , 5 , 1 );
ROTATE_OBJ_PLUS.CREATE_TEXTBOX( "+" , 10 , "black" , "gold");
ROTATE_OBJ_PLUS.POSITION.TYPE = 'REF_CANVAS';
ROTATE_OBJ_PLUS.DRAG = false;
ROTATE_OBJ_PLUS.TEXTBOX.EDIT = false;

HELLO_WORLD.ENGINE.MODULES.ACCESS_MODULE("STARTER").NEW_OBJECT( "ROTATE_OBJ_MINUS" ,  85   , 70 ,  3 , 5 , 1 );
ROTATE_OBJ_MINUS.CREATE_TEXTBOX( "-" , 10 , "black" , "gold");
ROTATE_OBJ_MINUS.POSITION.TYPE = 'REF_CANVAS';
ROTATE_OBJ_MINUS.DRAG = false;
ROTATE_OBJ_MINUS.TEXTBOX.EDIT = false;

ROTATE_OBJ_PLUS.TAP = function(){  
 if (SELECTED.TEXTBOX.TEXT != "Selected : none"&& window[SELECTED.TEXTBOX.TEXT].DIMENSION.W < 40) {
	 
window[SELECTED.TEXTBOX.TEXT].ROTATE.ANGLE += SYS.MATH.TO_RADIANS(5)
	 REFRESH()
 }
};


ROTATE_OBJ_MINUS.TAP = function(){  
 if (SELECTED.TEXTBOX.TEXT != "Selected : none" && window[SELECTED.TEXTBOX.TEXT].DIMENSION.W > 2) {
	 
	window[SELECTED.TEXTBOX.TEXT].ROTATE.ANGLE -= SYS.MATH.TO_RADIANS(5)
	 REFRESH()
 }


};







 
 