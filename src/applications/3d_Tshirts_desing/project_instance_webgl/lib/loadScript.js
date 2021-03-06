/* eslint-disable no-undef */

var PROGRAM = {

  NAME : "Visual js 3d",
  GRID : false,
  AUTO_UPDATE  : [],
  ANTIALIAS : true,
  SKY : true,
  LIGHTS : true,
  DDSLoader : true,
  OBJLoader : true,
  MTLLoader : true,
  MD2Loader : true,
  ColladaLoader : true,
  MD2Character : true,
  GROUND : true,
  RAYCAST : true,
  PARTICLE_ENGINE : true,
  PHYSI : false,
  MATERIALS : true,

};

INCLUDE.SCRIPT("lib/threejs/dat.gui.min.js");
INCLUDE.SCRIPT("lib/threejs/GeometryUtils.js");
INCLUDE.SCRIPT("lib/math.js");
INCLUDE.SCRIPT("lib/update.js");
INCLUDE.SCRIPT("lib/stars.js");

if (PROGRAM.SKY == true) {

  INCLUDE.SCRIPT("lib/threejs/SkyShader.js");
  INCLUDE.SCRIPT("lib/sky/sky.js");
}
if (PROGRAM.DDSLoader == true) {

  INCLUDE.SCRIPT("lib/loaders/DDSLoader.js");

}
if (PROGRAM.OBJLoader == true) {

  INCLUDE.SCRIPT("lib/loaders/OBJLoader.js");
}
if (PROGRAM.MTLLoader == true) {

  INCLUDE.SCRIPT("lib/loaders/MTLLoader.js");
}
if (PROGRAM.MD2Loader == true) {

  INCLUDE.SCRIPT("lib/loaders/MD2Loader.js");
}
if (PROGRAM.ColladaLoader == true) {

  INCLUDE.SCRIPT("lib/loaders/ColladaLoader.js");
}

if (PROGRAM.MD2Character == true) {

  INCLUDE.SCRIPT( "lib/Gyroscope.js");
  INCLUDE.SCRIPT( "lib/OrbitControls.js");
  INCLUDE.SCRIPT("lib/MD2CharacterComplex.js");
  INCLUDE.SCRIPT( "lib/MD2Character.js");
  INCLUDE.SCRIPT( "js/md2.js");

}
if (PROGRAM.GROUND == true) {

  INCLUDE.SCRIPT("lib/ground.js");
}
if (PROGRAM.RAYCAST == true) {

  INCLUDE.SCRIPT("lib/ray.js");
}
if (PROGRAM.PARTICLE_ENGINE == true) {

  // INCLUDE.SCRIPT("lib/GPUParticleSystem.js" );
  INCLUDE.SCRIPT("js/particle.js");
  /*
   INCLUDE.SCRIPT("js/particle.js") */

}
if (PROGRAM.LIGHTS == true) {

  INCLUDE.SCRIPT("lib/lights.js");

}
if (PROGRAM.MATERIALS == true) {

  INCLUDE.SCRIPT("lib/materials.js");
  INCLUDE.SCRIPT("lib/geo.js");

}
if (PROGRAM.PHYSI == true) {

  INCLUDE.SCRIPT("lib/physi/physi.js");

  //while (typeof Physijs === 'undefined'){

  //}
  setTimeout( function(){

    Physijs.scripts.worker = "lib/physi/physijs_worker.js";
    Physijs.scripts.ammo = "lib/physi/ammo.js";
    setTimeout( function(){
      INCLUDE.SCRIPT("lib/physi/physi_functions.js");
    } , 500);

  } , 500);

}
