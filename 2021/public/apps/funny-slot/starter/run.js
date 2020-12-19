//###############################################//###############################################
//###############################################//###############################################
// USER PART OF CODE 
/**
Filename : run.js

*/
//###############################################//###############################################
//###############################################//###############################################



// START THE PROGRAM 
// MAIN DRAW INTERVAL SWITCH 


// FOR CANVAS RESIZE_TYPE = FIXED
// SYS.DOM.CREATE_SURFACE( "SURF" , "HELLO_WORLD" , VIEW.W() , VIEW.H() );


SYS.DOM.CREATE_SURFACE( "SURF" , "HELLO_WORLD" , 99.4 , 99.4 , "DIAMETRIC" );


//NOW HELLO_WORLD IS OBJECT WITH ONE CANVAS TAG
 HELLO_WORLD.ENGINE.CREATE_MODUL("STARTER");
 HELLO_WORLD.ENGINE.CREATE_MODUL("SLOT");
 HELLO_WORLD.ENGINE.CREATE_MODUL("LOADING");
 
 	var LOADING_MODULE =  HELLO_WORLD.ENGINE.MODULES.ACCESS_MODULE( 'LOADING');
	var SLOT_MODULE =  HELLO_WORLD.ENGINE.MODULES.ACCESS_MODULE( 'SLOT');
  
  	 
 function CREATE_LOADING_BLOCKS(EVENTS_){
 // LOADING BLOCK 
  if (EVENTS_ == false) {
 LOADING_MODULE.NEW_OBJECT('LOAD_BLOCK1', 0 , 0 , 50 ,50); 
 LOADING_MODULE.GAME_OBJECTS.ACCESS('LOAD_BLOCK1').CREATE_ANIMATION( SURF , 'DRAW_FRAME' , 0 , RESOURCE.loadingBlock	 , 121212121212 , 'no' , 1,11,1,1,1); 
 
 
 LOADING_MODULE.NEW_OBJECT('LOAD_BLOCK2', 50 , 0 , 50 ,50); 
 LOADING_MODULE.GAME_OBJECTS.ACCESS('LOAD_BLOCK2').CREATE_ANIMATION( SURF , 'DRAW_FRAME' , 0 , RESOURCE.loadingBlock	 , 121212121212 , 'no' , 1,11,1,1,1); 
 
 
 LOADING_MODULE.NEW_OBJECT('LOAD_BLOCK3', 0 , 50 , 50 ,50); 
 LOADING_MODULE.GAME_OBJECTS.ACCESS('LOAD_BLOCK3').CREATE_ANIMATION( SURF , 'DRAW_FRAME' , 0 , RESOURCE.loadingBlock	 , 121212121212 , 'no' , 1,11,1,1,1); 
 
 
 
 LOADING_MODULE.NEW_OBJECT('LOAD_BLOCK4', 50 , 50 , 50 ,50); 
 LOADING_MODULE.GAME_OBJECTS.ACCESS('LOAD_BLOCK4').CREATE_ANIMATION( SURF , 'DRAW_FRAME' , 0 , RESOURCE.loadingBlock	 , 121212121212 , 'no' , 1,11,1,1,1); 
 
 LOAD_BLOCK1.DRAG = false;
 LOAD_BLOCK2.DRAG = false;
 LOAD_BLOCK3.DRAG = false;
 LOAD_BLOCK4.DRAG = false;

	
  }
 if (EVENTS_ == true) {
 
 LOAD_BLOCK1.TAP = LOAD_BLOCK2.TAP = LOAD_BLOCK3.TAP = LOAD_BLOCK4.TAP =function(){
	 
	 LOAD_BLOCK1.POSITION.TRANSLATE(-50,-50)
	 LOAD_BLOCK2.POSITION.TRANSLATE(150,-50)
	 LOAD_BLOCK3.POSITION.TRANSLATE(-50,150)
	 LOAD_BLOCK4.POSITION.TRANSLATE(150,150)
	 LOAD_BLOCK4.POSITION.ON_TARGET_POSITION = function(){
		 
		 
		 LOADING_MODULE.DESTROY_OBJECT("LOAD_BLOCK1");
		 LOADING_MODULE.DESTROY_OBJECT("LOAD_BLOCK2");
		 LOADING_MODULE.DESTROY_OBJECT("LOAD_BLOCK3");
		 LOADING_MODULE.DESTROY_OBJECT("LOAD_BLOCK4");
		 
	 };
	 
	 
 };
 
 LOAD_BLOCK1.TAP()
 
 }
 
}
 
 CREATE_LOADING_BLOCKS(false)
  
  
  
// just for demos 

if ( window.location.search == "?demo1"){
	
	SYS.SCRIPT.LOAD("starter/demo1.js")
	
}
else if ( window.location.search == "?demo2"){
	
	SYS.SCRIPT.LOAD("starter/demo2.js")
}
else if ( window.location.search == "?demo3"){
	
	SYS.SCRIPT.LOAD("starter/demo3.js")
}
else {
	
window["IS_IT_READY"] = function(){
	
 	setTimeout(function(){
		    if (SYS.RES.SUM_OF_LOADED_IMAGES > 20) {
		    SYS.SCRIPT.LOAD("starter/funny.js")
			}else {
			IS_IT_READY()	
			}
		
		},300);
	
};
IS_IT_READY()
	
	
}





