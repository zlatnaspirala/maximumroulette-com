
var materials;

var manager = new THREE.LoadingManager();
var mixers = [];

var IMPORT = {

          

			COLLADA : function(name , path_){
				
				var loader = new THREE.ColladaLoader();
			    loader.options.convertUpAxis = true;
			    loader.load( path_, function ( collada ) {

				dae = collada.scene;

				dae.traverse( function ( child ) {

					if ( child instanceof THREE.SkinnedMesh ) {

						var animation = new THREE.Animation( child, child.geometry.animation );
						animation.play();

					}

				} );

				dae.scale.x = dae.scale.y = dae.scale.z = 20;
				dae.position.x = -1;
				dae.updateMatrix();
				
				window["IMPOTED_" + name] = dae;
				
				scene.add( dae );
				
			});
			
			},
			//#############################################
			JS_JSON : function( name_ , path_ ) {			
			  var ROOT = this;
			    ROOT.LOADED_OBJECT = function(){};
 	            var loader = new THREE.JSONLoader()
				var MESH_OBJ = function ( geometry, materials ) { createScene(  name_ , geometry, materials, 0, 0, 50, 105 , ROOT ) };
				loader.load( path_ , MESH_OBJ )
 			},
			//#############################################
			JS_JSON_ANIMATED : function( name_ , path_  , position  , isPlayer) {			
			
				var ROOT = this;
				ROOT.LOADED_OBJECT = function(){};
				ROOT.name = name_;
		  	  	ROOT.group = new THREE.Group();
				
				if (typeof position != 'undefined') {
				ROOT.group.position.y = position.y;
				ROOT.group.position.z = position.z;  
				}
				
				
		  		ROOT.mixer = new THREE.AnimationMixer( scene );

				var loader = new THREE.JSONLoader();
				loader.load( path_ , function ( geometry, materials ) {

					// adjust color a bit

					var material = materials[ 0 ];
					material.morphTargets = true;
					material.color.setHex( 0xffaaaa );

					var faceMaterial = new THREE.MultiMaterial( materials );
 
						ROOT.mesh = new THREE.Mesh( geometry, faceMaterial );

						ROOT.mesh.scale.set(1,1,1 );

						ROOT.mesh.position.set( 111, 110, 444 );
						ROOT.mesh.rotation.y = THREE.Math.randFloat( -0.25, 0.25 );

						ROOT.mesh.matrixAutoUpdate = false;
						ROOT.mesh.updateMatrix();
						
								ROOT.AUTO_UPDATE = function(){
								
								ROOT.mixer.update( clock.getDelta() );
								
								};
								
								
						PROGRAM.AUTO_UPDATE.push(ROOT);	
						ROOT.group.add( ROOT.mesh );
						window["IMPOTED_" + ROOT.name] = ROOT.group;
						scene.add( ROOT.group );
                  
						ROOT.firstAnimation = geometry.animations[0];
						
						ROOT.mixer.clipAction( geometry.animations[0], ROOT.mesh )
								.setDuration( 10 )		 
								.startAt( - Math.random() )	 
								.play();				 
								
						console.log("Instance of json animated object loaded.")
						
						       ROOT.LOADED_OBJECT()
									if (typeof position != 'undefined' &&  geometry.animations.length > 1 ) {
									
						/*          ROOT.mixer.clipAction( geometry.animations[1], ROOT.mesh )
								.setDuration( 10 )		 
								.startAt( - Math.random() )	 
								.play();		 */		 

								
						
						           }		

				 

				} );


		  
		  
		  
		  
		  
				
 			},
			//#############################################
			OBJ : function(name_ , path_ , tex ){
			var ROOT = this;
			ROOT.LOADED_OBJECT = function(){};
			 
			
			    THREE.Loader.Handlers.add( /\.dds$/i, new THREE.DDSLoader() );			
				//THREE.Loader.Handlers.add( /\.dds$/i, new THREE.DDSLoader() );
			    var texture = new THREE.Texture();
				manager.onProgress = function ( item, loaded, total ) {console.log( item, loaded, total );};
				var onError = function ( xhr ) {		};
				var onProgress = function ( xhr ) {
					if ( xhr.lengthComputable ) {
						var percentComplete = xhr.loaded / xhr.total * 100;
						console.log( Math.round(percentComplete, 2) + '% downloaded' );
					}
				};
				
				var loader = new THREE.ImageLoader( manager );
				
				if (typeof tex != 'undefined') {
				loader.load( tex , function ( image ) {
					texture.image = image;
					texture.needsUpdate = true;
				} );
				}
				
			var loader = new THREE.OBJLoader( manager );
			loader.load( path_ , function ( object ) {
					object.traverse( function ( child ) {
						if ( child instanceof THREE.Mesh && typeof tex != 'undefined') {
					     		
							child.material.map = texture;
							
						}
						
						
					} );
					
					object.position.y = 0;
					window[name_] = object;
					object.name = name_;
					ROOT.LOADED_OBJECT()
					scene.add( window[name_] );
						 var box = new THREE.Box3().setFromObject( window[name_] );
						 ROOT.dim = new Object();
						 ROOT.dim.x = box.max.x - box.min.x;
						 ROOT.dim.y = box.max.y - box.min.y;
						 ROOT.dim.z = box.max.z - box.min.z;
						 
						  //CANNON_SCENE.CREATE_BOX_CANNON_STATIC(window[name_].position , ROOT.dim)
						 //console.log(ROOT.dimesion_for_object_x + "....." + ROOT.dimesion_for_object_y + "....." + ROOT.dimesion_for_object_z)
                         
					
				}, onProgress, onError );
						
			},
			//#############################################
			OBJ_MTL_ON_LOAD : function(){},
			OBJ_MTL : function(name_ , obj_name , path_to_obj , mtl_ , INFLYIMAGEDATA ){
	            
				var onProgress = function ( xhr ) {
					if ( xhr.lengthComputable ) {
						var percentComplete = xhr.loaded / xhr.total * 100;
						console.log( Math.round(percentComplete, 2) + '% downloaded' );
					}
				};

				var onError = function ( xhr ) { };
				
				
				var mtlLoader = new THREE.MTLLoader();
				mtlLoader.setBaseUrl( path_to_obj );
				mtlLoader.setPath( path_to_obj);
				
								if (typeof INFLYIMAGEDATA != 'undefined' && typeof FEMALE != 'undefined') {
				                 
								  scene.remove(FEMALE)
				 
								}
				mtlLoader.load( mtl_ , function( materials ) {

					materials.preload();
				
				//IMPLEMENTED USER IMAGES TEXTURE
				if (typeof INFLYIMAGEDATA != 'undefined') {
				
				// scene.remove(FEMALE)
				 //delete FEMALE;
				 
                 var texture_local = new THREE.Texture();
					var loader = new THREE.ImageLoader( manager );
					loader.load( INFLYIMAGEDATA , function ( image ) {
					texture_local.image = image;
					texture_local.needsUpdate = true;
					//hard code
					
				materials.materials.tshirt02Material.map = texture_local;
                materials.materials.tshirt02Material_NONE.map = texture_local;
//duplicated TEST 

var objLoader = new THREE.OBJLoader();
					objLoader.setMaterials( materials );
					objLoader.setPath( path_to_obj  );
					objLoader.load( obj_name , function ( object ) {

						object.position.y = 0;
						object.position.z = 0;
						
						window[name_] = object;
						
						IMPORT.OBJ_MTL_ON_LOAD();
						
						console.log( name_ )
						scene.add( object );

					}, onProgress, onError );


//end of test 				


				
					} );
				
				
				
					
					
				}
				else {
				////@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
				// NORMAL PASS

					var objLoader = new THREE.OBJLoader();
					objLoader.setMaterials( materials );
					objLoader.setPath( path_to_obj  );
					objLoader.load( obj_name , function ( object ) {

						object.position.y = 0;
						object.position.z = 0;
						
						window[name_] = object;
						
						IMPORT.OBJ_MTL_ON_LOAD();
						
						console.log( name_ )
						scene.add( object );

					}, onProgress, onError );
					
				}

				});

			
			},

			
			//#############################################
			
			FBX  : function (){
				
					// model
				managerFbx = new THREE.LoadingManager();
				managerFbx.onProgress = function( item, loaded, total ) {

					console.log( item, loaded, total );

				};

				var onProgress = function( xhr ) {

					if ( xhr.lengthComputable ) {

						var percentComplete = xhr.loaded / xhr.total * 100;
						console.log( Math.round( percentComplete, 2 ) + '% downloaded' );

					}

				};

				var onError = function( xhr ) {console.log('ERROR' );
				};

				var loader = new THREE.FBXLoader( managerFbx );
				loader.load( 'res/fbx/xsi_man_skinning.fbx', function( object ) {

					object.traverse( function( child ) {

						if ( child instanceof THREE.Mesh ) {

							// pass

						}

						if ( child instanceof THREE.SkinnedMesh ) {

							if ( child.geometry.animations !== undefined || child.geometry.morphAnimations !== undefined ) {

						//		child.mixer = new THREE.AnimationMixer( child );
							//	mixers.push( child.mixer );

							//	var action = child.mixer.clipAction( child.geometry.animations[ 0 ] );
							//	action.play();

							}

						}

					} );

					scene.add( object );


				}, onProgress, onError );
			
			
			
			
			
			},
			
			
			
			};

		function createScene( name , geometry, materials, x, y, z, b , R) {

				window[''+name] = new THREE.Mesh( geometry, new THREE.MultiMaterial( materials ) );
				window[''+name].position.set( x, y, z );
				window[''+name].scale.set( 3, 3, 3 );
				R.LOADED_OBJECT();
				scene.add( window[''+name] );
		 			
			}
			
		 