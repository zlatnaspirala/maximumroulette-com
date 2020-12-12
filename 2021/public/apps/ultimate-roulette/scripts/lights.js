
/* global scene THREE */

// eslint-disable-next-line no-unused-vars
function initLight() {

  var helpersVisible = false;
  // helper - Wheel center light
  var bboxGeometry = new THREE.BoxGeometry(1, 1, 1);
  var bboxMaterial = new THREE.MeshPhongMaterial({
    color: "red",
  });

  // Lights

  // Wheel center light
  var spotLight1 = new THREE.SpotLight( 0xffffff, 1);
  spotLight1.position.set(0, 18, 0);
  spotLight1.angle = Math.PI / 2;
  scene.add( spotLight1 );

  var test = new THREE.Mesh(bboxGeometry,bboxMaterial);
  test.position.set(0, 18, 0);
  // scene.add(test);

  // Light table: left top
  var pointLight = new THREE.PointLight(0xffffff, 0.8);
  pointLight.position.set(15, 21, -44);
  scene.add( pointLight );
  // helper
  test = new THREE.Mesh(bboxGeometry,bboxMaterial);
  test.position.set(15, 21, -44);
  if (helpersVisible === true) {
    scene.add(test);
  }

  // Light table: left bottom
  pointLight = new THREE.PointLight(0xffffff, 0.8);
  pointLight.position.set(-15, 21, -44);
  scene.add( pointLight );
  // helper
  test = new THREE.Mesh(bboxGeometry,bboxMaterial);
  test.position.set(-15, 21,-44);
  if (helpersVisible === true) {
    scene.add(test);
  }

  // Light table: right bottom
  pointLight = new THREE.PointLight(0xffffff, 0.5);
  pointLight.position.set(-15, 21, -14);
  scene.add( pointLight );
  // helper
  test = new THREE.Mesh(bboxGeometry,bboxMaterial);
  test.position.set(-15, 20, -14);
  if (helpersVisible === true) {
    scene.add(test);
  }

  // Light table: FRONT
  pointLight = new THREE.PointLight("gold", 1.75);
  pointLight.position.set(-30, 3, -14);
  scene.add( pointLight );
  // helper
  test = new THREE.Mesh(bboxGeometry,bboxMaterial);
  test.position.set(-30, 3, -14);
  if (helpersVisible === true) {
    scene.add(test);
  }

}
