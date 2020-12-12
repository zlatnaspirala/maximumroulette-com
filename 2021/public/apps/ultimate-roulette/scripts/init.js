
/* eslint-disable no-global-assign */
/* globals CANNON THREE app world tex demo*/

// If needed - filter collision groups
var GROUP1 = 1;
var GROUP2 = 2;
var GROUP3 = 4;

/**
 * Init cannon level part.
 */
// eslint-disable-next-line no-unused-vars
function initGround() {

  // This is only idea for First person controller.
  var mass = 1, radius = 1;
  var sphereShape = new CANNON.Sphere(radius);
  var sphereBody = new CANNON.Body({
    mass: mass,
    collisionFilterMask: GROUP1 | GROUP3,
  });
  sphereBody.addShape(sphereShape);
  sphereBody.position.set(15, 6, 15);
  sphereBody.linearDamping = 0.7;
  sphereBody.updateMassProperties();
  app.playerBody = sphereBody;
  app.playerBody.radius = radius;
  world.addBody(sphereBody);

  // Create a ground
  var groundShape = new CANNON.Box(new CANNON.Vec3(100, 100, 0.1));
  var groundBody = new CANNON.Body({
    mass: 0,
    position: new CANNON.Vec3(0, -2, -10)
  });

  groundBody.addShape(groundShape);
  groundBody.quaternion.setFromAxisAngle(new CANNON.Vec3(1,0,0),-Math.PI/2);
  window.groundBody = groundBody;
  world.addBody(groundBody);

  var map = tex("./assets/ground/ground2.jpg");
  map.repeat.set(20, 20);
  map.wrapS = THREE.RepeatWrapping;
  map.wrapT = THREE.RepeatWrapping;

  var mat = new THREE.MeshPhongMaterial({
    color: 0xfffffa,
    map: map,
    specular: 0xffffff,
    shininess: 310
  });

  window.groundMat = mat;
  demo.addVisual(groundBody, mat);

}
