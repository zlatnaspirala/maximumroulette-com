


if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

var INCLUDE  = {
SCRIPT : function addScript( src ) {
var s = document.createElement( 'script' );
s.setAttribute( 'src', src );
 
document.body.appendChild( s );
}
};


//###############################################//###############################################
// LOGGER
//###############################################//###############################################
//###############################################//###############################################
function LOG (){
	 
	 this.ENABLE = true;
	 
	 this.LOG = function(data){
		 
		 if ( this.ENABLE == true ){
			 
			 console.log('%c' + data , 'background: #333; color: lime');
			 
		 }
		 
	 };
	 
	 this.WARNING = function(data){
		 
		 if ( this.ENABLE == true ){
			 
			 console.log('%c Warning : ' + data , 'background: #333; color: yellow');
			 
		 }
		 
	 };
	 
	 
	 this.CRITICAL = function(data){
		 
		 if ( this.ENABLE == true ){
			 
			 console.log('%c Critical : ' + data , 'background: #333; color: yellow');
			 
		 }
		 
	 };
	 

 }
//###############################################//###############################################
//###############################################//###############################################

var SYS = new Object();

 SYS.DEBUG = new LOG();
 






