







			function  Raycaster()  {

              			
						var ROOT = this;
						
						ROOT.RECALL = function(){};
						ROOT.raycaster = new THREE.Raycaster();
                        
  		 ROOT.onDocumentMouseMove  = function ( event ) {

				event.preventDefault();

			//	mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
			//	mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

			};
			
			ROOT.onDocumentclick  = function ( event ) {

				event.preventDefault();

				mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
				mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

			};
			
		document.addEventListener( 'mousemove', ROOT.onDocumentMouseMove, false );
		
		document.addEventListener( 'click', ROOT.onDocumentclick, false );
		

			ROOT.AUTO_UPDATE = function(){
	 
							ROOT.raycaster.setFromCamera( mouse, camera );

									var intersects = ROOT.raycaster.intersectObjects( scene.children );

									if ( intersects.length > 0 ) {

										if ( INTERSECTED != intersects[ 0 ].object ) {

											try {
											
									
											
											INTERSECTED = intersects[ 0 ].object;
											ROOT.RECALL(INTERSECTED)
											console.log( INTERSECTED );
											console.log (INTERSECTED.material );
											
									         }catch(e){console.log("error in raycaster" + e)}

										     } 
											 

									}
									else {

										//if ( INTERSECTED ) INTERSECTED.material.color.setRGB( INTERSECTED.currentHex );

										INTERSECTED = null;

									}
 
	
	};	

			   PROGRAM.AUTO_UPDATE.push(ROOT);
			    
 }

			
			