
			function animate() {
 
			   PROGRAM.AUTO_UPDATE.forEach(function(entry) {
			    try{
			    entry.AUTO_UPDATE()
					}catch(e){}
                });
				
		    //	scene.simulate( undefined, 1 );
			
				requestAnimationFrame( animate );

				render();

			}

			
			