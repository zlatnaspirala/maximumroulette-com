/* global PROGRAM render */
// eslint-disable-next-line no-unused-vars
function animate() {

  PROGRAM.AUTO_UPDATE.forEach(function(entry) {

    entry.AUTO_UPDATE();

  });

  // scene.simulate( undefined, 1 );
  requestAnimationFrame( animate );
  render();

}
