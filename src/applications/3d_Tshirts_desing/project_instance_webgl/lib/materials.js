


		
function  MATERIALS (){
			
					var ROOT = this;		
			

			    var path = "res/textures/reflection/";
				var format = '.jpg';
				var urls = [
						path + 'px' + format, path + 'nx' + format,
						path + 'py' + format, path + 'ny' + format,
						path + 'pz' + format, path + 'nz' + format
					];

				var reflectionCube = new THREE.CubeTextureLoader().load( urls );
				reflectionCube.format = THREE.RGBFormat;

				var refractionCube = new THREE.CubeTextureLoader().load( urls );
				refractionCube.mapping = THREE.CubeRefractionMapping;
				refractionCube.format = THREE.RGBFormat;

				
				//var cubeMaterial3 = new THREE.MeshPhongMaterial( { color: 0x000000, specular:0xaa0000, envMap: reflectionCube, combine: THREE.MixOperation, reflectivity: 0.25 } );
				ROOT.cubeMaterial3 = new THREE.MeshLambertMaterial( { color: 0xff6600, envMap: reflectionCube, combine: THREE.MixOperation, reflectivity: 0.3 } );
				ROOT.cubeMaterial2 = new THREE.MeshLambertMaterial( { color: 0xffee00, envMap: refractionCube, refractionRatio: 0.95 } );
				ROOT.cubeMaterial1 = new THREE.MeshLambertMaterial( { color: 0xffffff, envMap: reflectionCube } );

					//@@@@@@@@@@@@@@@@@@@@@@@
					//@@@@@@@@@@@@@@@@@@@@@@@
					
					
					//pattern1
				
				var map = new THREE.TextureLoader().load( 'res/textures/freesource/pattern1.jpg' );
				map.wrapS = map.wrapT = THREE.RepeatWrapping;
				//map.anisotropy = 16;

				ROOT.materialLambertDouble = new THREE.MeshLambertMaterial( { map: map, side: THREE.DoubleSide } );
				
				
				var gt = new THREE.TextureLoader().load( "res/textures/ground/ground2.jpg" );
			   ROOT.PhongMaterial = new THREE.MeshPhongMaterial( { color: 0xffffff, map: gt } );
                

				
				}
				
				
				
				var RM = new MATERIALS();
				