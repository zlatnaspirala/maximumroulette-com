/* eslint-disable-next-line no-unused-vars */
function CAMERA_INIT(position,) {

  // eslint-disable-next-line no-undef
  camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 100, 1000000, );
  // eslint-disable-next-line no-undef
  camera.position.set( position.x, position.y, position.z, );
  //camera.setLens(20);

}
