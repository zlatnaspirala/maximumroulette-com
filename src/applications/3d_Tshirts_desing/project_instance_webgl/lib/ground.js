
			function GROUND() {
			
			
			if (PROGRAM.PHYSI == false ) {
			
				var gt = new THREE.TextureLoader().load( "res/textures/ground/ground2.jpg" );
				var gg = new THREE.PlaneBufferGeometry( 8000, 8000 );
				var gm = new THREE.MeshPhongMaterial( { color: 0xffffff, map: gt } );

				var ground = new THREE.Mesh( gg, gm );
				ground.rotation.x = - Math.PI / 2;
				ground.material.map.repeat.set( 64, 64 );
				ground.material.map.wrapS = THREE.RepeatWrapping;
				ground.material.map.wrapT = THREE.RepeatWrapping;
				// note that because the ground does not cast a shadow, .castShadow is left false
				ground.receiveShadow = true;
				ground.name = "GROUND";
				scene.add( ground );
			
			}
			//////////////////////
			else {
			
					loader = new THREE.TextureLoader();
		
		// Ground
		ground_material = Physijs.createMaterial(
			new THREE.MeshLambertMaterial({ map: loader.load( 'res/textures/ground/ground1.jpg' ) }),
			.8, // high friction
			.3 // low restitution
		);
		ground_material.map.wrapS = ground_material.map.wrapT = THREE.RepeatWrapping;
		ground_material.map.repeat.set( 3, 3 );
		
		ground = new Physijs.BoxMesh(
			new THREE.BoxGeometry(2000, 1, 2000),
			ground_material,
			0 // mass
		);
		ground.receiveShadow = true;
		scene.add( ground );
		
		
			}
			
			
			
		 
			}

			
			