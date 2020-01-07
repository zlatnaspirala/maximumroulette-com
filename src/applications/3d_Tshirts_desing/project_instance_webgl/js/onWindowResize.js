/* global camera, renderer, render */

// eslint-disable-next-line no-unused-vars
function onWindowResize() {

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight, );
  render();

}

