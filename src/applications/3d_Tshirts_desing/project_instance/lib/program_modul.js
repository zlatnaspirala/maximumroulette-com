//###############################################//###############################################
//###############################################//###############################################

// PROCEDURE , last level of system GUI SUPPORT

//###############################################//###############################################
//###############################################//###############################################
function CREATE_SYSTEM_BUTTONS() {

if (typeof window[SYS.RUNNING_PROGRAMS[SYS.RUNNING_PROGRAMS.length-1]] !== 'undefined' &&  typeof window[SYS.RUNNING_PROGRAMS[SYS.RUNNING_PROGRAMS.length-1]].ENGINE !== 'undefined' ) {

	
HELLO_WORLD.ENGINE.CREATE_MODUL("GUI_STARTER");
//HELLO_WORLD.ENGINE.MODULES.ACCESS_MODULE("GUI_STARTER").NEW_OBJECT("iconRightMenu_webcam" , 5 , 5 , 5 , 5 , 10); 
//HELLO_WORLD.ENGINE.MODULES.ACCESS_MODULE("GUI_STARTER").GAME_OBJECTS.ACCESS("iconRightMenu_webcam").CREATE_ANIMATION( SURF , "DRAW_FRAME" , 4 , RESOURCE.html5  , 22222222 , "no" , 1,11,1,1,1) 
//iconRightMenu_webcam.ANIMATION.CURRENT_FRAME = 4;


}
else{

setTimeout(function(){
	
  console.log(":program not ready in first pass:");
  CREATE_SYSTEM_BUTTONS()
	
	
},250);

	
}


	
}

CREATE_SYSTEM_BUTTONS()