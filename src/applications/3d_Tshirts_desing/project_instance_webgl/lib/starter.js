/* eslint-disable no-undef */

if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

// eslint-disable-next-line no-unused-vars
var INCLUDE  = {
  SCRIPT : function addScript( src ) {
    var s = document.createElement( "script" );
    s.setAttribute( "src", src );

    document.body.appendChild( s );
  }
};

