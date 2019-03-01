///////////////////////////////////////////////////////////////////////////////////
// APPLICATION 
///////////////////////////////////////////////////////////////////////////////////


//THIS FILE IS NOT FREE OR OPEN SOURCE 
// THIS IS PRODUCT CODE OF MONSTERS RUN

 

/////////////////////////////////////
//Nikola Lukic text 
/////////////////////////////////////
// HUD
/////////////////////////////////////
 
var HUD = new Object();
HUD.PLAYER = new Object();

var position_ = {z : -300 , y : 120 , x : -280};
HUD.PLAYER.POINTS = new TEXT3D(position_ , true );
HUD.PLAYER.POINTS.size = 20;
HUD.PLAYER.POINTS.onload = function(){
HUD.PLAYER.POINTS.SET_TEXT("Points : 0")
HUD.PLAYER.POINTS_VALUE = 0;
};
loadFont(HUD.PLAYER.POINTS);

// end of hud


var position_ = {z : 1000 , y : 500 , x : -600};
text1 = new TEXT3D(position_);
text1.size = 60;
text1.onload = function(){

text1.SET_TEXT("Nikola Lukic zlatnaspirala@gmail.com")

};
loadFont(text1);


var position_ = {z : 1000 , y : 400 , x : -900};
text2 = new TEXT3D(position_);
text2.size = 50;
text2.onload = function(){

text2.SET_TEXT("General : Object-Oriented & Procedurally Programming ")

};
loadFont(text2);


/////////////////////////////////////
var CORNERS_WALLS_LIGHT1 = new SPOT_SHADOW( 0x0000ff , 25);

CORNERS_WALLS_LIGHT1.PILOT.position.setZ(4121)
CORNERS_WALLS_LIGHT1.PILOT.position.setX(4121)

var CORNERS_WALLS_LIGHT2 = new SPOT_SHADOW( 0x0000ff , 25);

CORNERS_WALLS_LIGHT2.sunLight.position.x = -3000;
CORNERS_WALLS_LIGHT2.PILOT.position.setZ(4121)
CORNERS_WALLS_LIGHT2.PILOT.position.setX(-4121)

var CORNERS_WALLS_LIGHT3 = new SPOT_SHADOW(0x0000ff, 25);

CORNERS_WALLS_LIGHT3.sunLight.position.z = -3000;
CORNERS_WALLS_LIGHT3.PILOT.position.setZ(-4121)
CORNERS_WALLS_LIGHT3.PILOT.position.setX(4121)

var CORNERS_WALLS_LIGHT4 = new SPOT_SHADOW(0x0000ff , 25);

CORNERS_WALLS_LIGHT4.sunLight.position.z = -3000;
CORNERS_WALLS_LIGHT4.sunLight.position.x = -3000;
CORNERS_WALLS_LIGHT4.PILOT.position.setZ(-3700)
CORNERS_WALLS_LIGHT4.PILOT.position.setX(-3700)
   
// DINAMIC LIGHT 
var position_ = {z : -1100  , y : 800 , x: 500 };
var SPOT_LIGHT = new SPOT(0x0000ff , position_ , 155 , 1400);

////////////////////////////////////
//STATIC
////////////////////////////////////

var SILJAK1 = new CILINDER(RM.cubeMaterial1);
SILJAK1.OBJECT.position.set(-4000 , 1000 , -4000 );
SILJAK1.OBJECT.scale.set( 2 , 10 , 2 );

var SILJAK2 = new CILINDER(RM.cubeMaterial1);
SILJAK2.OBJECT.position.set(-4000 , 1000 , 4000 );
SILJAK2.OBJECT.scale.set( 2 , 10 , 2 );

var SILJAK3 = new CILINDER(RM.cubeMaterial1);
SILJAK3.OBJECT.position.set(4000 , 1000 , 4000 );
SILJAK3.OBJECT.scale.set( 2 , 10 , 2 );

var SILJAK4 = new CILINDER(RM.cubeMaterial1);
SILJAK4.OBJECT.position.set(4000 , 1000 , -4000 );
SILJAK4.OBJECT.scale.set( 2 , 10 , 2 );


  var CUBE1 = new CUBE( RM.materialLambertDouble  )
  CUBE1.LOADED = function(){
  CUBE1.OBJECT.position.set(4000 , 160 , 0);
  CUBE1.OBJECT.scale.z = 20;
  CUBE1.OBJECT.scale.x = 0.4;
  CUBE1.OBJECT.name = 'KOCKA';
  CUBE1.OBJECT.castShadow = true;
  CUBE1.OBJECT.receiveShadow = true;
      
  CANNON_SCENE.CREATE_BOX_CANNON_STATIC( CUBE1.OBJECT.position , {x:200,y:200,z:4000} )
  CUBE1.OBJECT.position.set(4000 , 500 , 0);
  
  };
  CUBE1.LOADED()
  
  var CUBE2 = new CUBE( RM.materialLambertDouble )
  CUBE2.LOADED = function(){
  CUBE2.OBJECT.position.set(-4000 , 160 ,  0)
  CUBE2.OBJECT.scale.z = 20;
  CUBE2.OBJECT.scale.x = 0.4;
  CUBE2.OBJECT.name = 'KOCKA';
  CUBE2.OBJECT.castShadow = true;
  CUBE2.OBJECT.receiveShadow = true;
    
        CANNON_SCENE.CREATE_BOX_CANNON_STATIC( CUBE2.OBJECT.position , {x:200,y:200,z:4000} )
  CUBE2.OBJECT.position.set(-4000 , 500 , 0);
  
  };
  CUBE2.LOADED()
  
  var CUBE3 = new CUBE( RM.materialLambertDouble )
     CUBE3.LOADED = function(){
  CUBE3.OBJECT.position.set( 0 , 150 , -4000)
  CUBE3.OBJECT.scale.z = 20;
  CUBE3.OBJECT.scale.x = 0.4;
  CUBE3.OBJECT.rotation.y = 1.57;
  CUBE3.OBJECT.name = 'KOCKA';
  CUBE3.OBJECT.castShadow = true;
  CUBE3.OBJECT.receiveShadow = true;
  
        CANNON_SCENE.CREATE_BOX_CANNON_STATIC( CUBE3.OBJECT.position , {x:4000,y:200,z:200} )
  CUBE3.OBJECT.position.set(0 , 500 , -4000);
  
  };
  CUBE3.LOADED()
  
  
  var CUBE4 = new CUBE( RM.materialLambertDouble )
     CUBE4.LOADED = function(){
  CUBE4.OBJECT.position.set( 0 , 150 , 4000)
  CUBE4.OBJECT.scale.z = 20;
  CUBE4.OBJECT.scale.x = 0.4;
  CUBE4.OBJECT.rotation.y = 1.57;
  CUBE4.OBJECT.name = 'KOCKA';
  CUBE4.OBJECT.castShadow = true;
  CUBE4.OBJECT.receiveShadow = true;
      CANNON_SCENE.CREATE_BOX_CANNON_STATIC( CUBE4.OBJECT.position , {x:4000,y:200,z:200} )
  CUBE4.OBJECT.position.set(0 , 500 , 4000);
  
  };
  CUBE4.LOADED()
  // corner block 
  
  
    var BLOCK1 = new CUBE( RM.PhongMaterial )
       BLOCK1.LOADED = function(){
  BLOCK1.OBJECT.position.set(3755 , 190 , 3750);
  BLOCK1.OBJECT.scale.z = 1;
  BLOCK1.OBJECT.scale.x = 1;    BLOCK1.OBJECT.scale.y = 2;
  BLOCK1.OBJECT.name = 'KOCKA';
  BLOCK1.OBJECT.receiveShadow = true;
    CANNON_SCENE.CREATE_BOX_CANNON_STATIC( BLOCK1.OBJECT.position , {x:280,y:200,z:280})
  BLOCK1.OBJECT.position.set(3750 , 660 , 3750);
  
  };
  BLOCK1.LOADED()
  
  var BLOCK2 = new CUBE( RM.PhongMaterial )
       BLOCK2.LOADED = function(){
  BLOCK2.OBJECT.position.set(2500 , 190 , 3750);
  BLOCK2.OBJECT.scale.z = 1;
  BLOCK2.OBJECT.scale.x = 1;    BLOCK2.OBJECT.scale.y = 2;
  BLOCK2.OBJECT.name = 'KOCKA';
  BLOCK2.OBJECT.receiveShadow = true;
  CANNON_SCENE.CREATE_BOX_CANNON_STATIC( BLOCK2.OBJECT.position , {x:280,y:200,z:280})
  BLOCK2.OBJECT.position.set(2500 , 660 , 3750);
  
  };
  BLOCK2.LOADED()
	  
     var BLOCK3 = new CUBE( RM.PhongMaterial )
     BLOCK3.LOADED = function(){
  BLOCK3.OBJECT.position.set(1500 , 190 , 3750);
  BLOCK3.OBJECT.scale.z = 1;
  BLOCK3.OBJECT.scale.x = 1;    BLOCK3.OBJECT.scale.y = 2;
  BLOCK3.OBJECT.name = 'KOCKA';
  BLOCK3.OBJECT.receiveShadow = true;
           CANNON_SCENE.CREATE_BOX_CANNON_STATIC( BLOCK3.OBJECT.position , {x:280,y:200,z:280})
  BLOCK3.OBJECT.position.set(1500 , 660 , 3750);
  
  };
      BLOCK3.LOADED()
  
     var BLOCK4 = new CUBE( RM.PhongMaterial )
          BLOCK4.LOADED = function(){
  BLOCK4.OBJECT.position.set(500 , 190 , 3750);
  BLOCK4.OBJECT.scale.z = 1;
  BLOCK4.OBJECT.scale.x = 1;    BLOCK4.OBJECT.scale.y = 2;
  BLOCK4.OBJECT.name = 'KOCKA';
  BLOCK4.OBJECT.receiveShadow = true;
          CANNON_SCENE.CREATE_BOX_CANNON_STATIC( BLOCK4.OBJECT.position , {x:280,y:200,z:280})
  BLOCK4.OBJECT.position.set(500 , 660 , 3750);
  
  };
      BLOCK4.LOADED()
         
       var BLOCK5 = new CUBE( RM.PhongMaterial )
        BLOCK5.LOADED = function(){
  BLOCK5.OBJECT.position.set(-500 , 190 , 3750);
  BLOCK5.OBJECT.scale.z = 1;
  BLOCK5.OBJECT.scale.x = 1;    BLOCK5.OBJECT.scale.y = 2;
  BLOCK5.OBJECT.name = 'KOCKA';
  BLOCK5.OBJECT.receiveShadow = true;
  CANNON_SCENE.CREATE_BOX_CANNON_STATIC( BLOCK5.OBJECT.position , {x:280,y:200,z:280})
  BLOCK5.OBJECT.position.set(-500 , 660 , 3750);
  
  };
      BLOCK5.LOADED()
	  
  
       var BLOCK6 = new CUBE( RM.PhongMaterial )
      BLOCK6.LOADED = function(){
  BLOCK6.OBJECT.position.set(-1500 , 190 , 3750);
  BLOCK6.OBJECT.scale.z = 1;
  BLOCK6.OBJECT.scale.x = 1;    BLOCK6.OBJECT.scale.y = 2;
  BLOCK6.OBJECT.name = 'KOCKA';
  BLOCK6.OBJECT.receiveShadow = true;
      CANNON_SCENE.CREATE_BOX_CANNON_STATIC( BLOCK6.OBJECT.position , {x:280,y:200,z:280})
  BLOCK6.OBJECT.position.set(-1500  , 660 , 3750);
  
  };
      BLOCK6.LOADED()
	  
  
       var BLOCK7 = new CUBE( RM.PhongMaterial )
    BLOCK7.LOADED = function(){
  BLOCK7.OBJECT.position.set(-2500 , 190 , 3750);
  BLOCK7.OBJECT.scale.z = 1;
  BLOCK7.OBJECT.scale.x = 1;    BLOCK7.OBJECT.scale.y = 2;
  BLOCK7.OBJECT.name = 'KOCKA';
  BLOCK7.OBJECT.receiveShadow = true;
    CANNON_SCENE.CREATE_BOX_CANNON_STATIC( BLOCK7.OBJECT.position , {x:280,y:200,z:280})
  BLOCK7.OBJECT.position.set(-2500 , 660 , 3750);
  
  };
      BLOCK7.LOADED()
  
  
       var BLOCK8 = new CUBE( RM.PhongMaterial )
  BLOCK8.LOADED = function(){
  BLOCK8.OBJECT.position.set(-3750 , 190 , 3750);
  BLOCK8.OBJECT.scale.z = 1;
  BLOCK8.OBJECT.scale.x = 1;    BLOCK8.OBJECT.scale.y = 2;
  BLOCK8.OBJECT.name = 'KOCKA';
  BLOCK8.OBJECT.receiveShadow = true;
  CANNON_SCENE.CREATE_BOX_CANNON_STATIC( BLOCK8.OBJECT.position , {x:280,y:200,z:280})
  BLOCK8.OBJECT.position.set(-3750 , 660 , 3750);
  
  };
      BLOCK8.LOADED()
  
  
  //side 2
  
    var BLOCK9 = new CUBE( RM.PhongMaterial )
    BLOCK9.LOADED = function(){
  BLOCK9.OBJECT.position.set( 3750, 190 , 2500 );
  BLOCK9.OBJECT.scale.z = 1;
  BLOCK9.OBJECT.scale.x = 1;    BLOCK9.OBJECT.scale.y = 2;
  BLOCK9.OBJECT.name = 'KOCKA';
  BLOCK9.OBJECT.receiveShadow = true;
   CANNON_SCENE.CREATE_BOX_CANNON_STATIC( BLOCK9.OBJECT.position , {x:280,y:200,z:280})
  BLOCK9.OBJECT.position.set(3750 , 660 , 2500);
  
  };
      BLOCK9.LOADED()
	  
	  
     var BLOCK10 = new CUBE( RM.PhongMaterial )
  BLOCK10.LOADED = function(){
  BLOCK10.OBJECT.position.set(3750 , 200 , 1500);
  BLOCK10.OBJECT.scale.z = 1;
  BLOCK10.OBJECT.scale.x = 1;    
  BLOCK10.OBJECT.scale.y = 2;
  BLOCK10.OBJECT.name = 'KOCKA';
  BLOCK10.OBJECT.receiveShadow = true;
  
  CANNON_SCENE.CREATE_BOX_CANNON_STATIC( BLOCK10.OBJECT.position , {x:280,y:200,z:280})
  BLOCK10.OBJECT.position.set(3750 , 660 , 1500);
  
  };
    BLOCK10.LOADED()
	
	
     var BLOCK11 = new CUBE( RM.PhongMaterial )
    BLOCK11.LOADED = function(){
  BLOCK11.OBJECT.position.set(3750 , 190 , 500);
  BLOCK11.OBJECT.scale.z = 1;
  BLOCK11.OBJECT.scale.x = 1;    BLOCK11.OBJECT.scale.y = 2;
  BLOCK11.OBJECT.name = 'KOCKA';
  BLOCK11.OBJECT.receiveShadow = true;
    CANNON_SCENE.CREATE_BOX_CANNON_STATIC( BLOCK11.OBJECT.position , {x:280,y:200,z:280})
  BLOCK11.OBJECT.position.set(3750 , 660 , 500);
  
  };
    BLOCK11.LOADED()
  
       var BLOCK12 = new CUBE( RM.PhongMaterial )
    BLOCK12.LOADED = function(){
  BLOCK12.OBJECT.position.set(3750 , 190 , -500 );
  BLOCK12.OBJECT.scale.z = 1;
  BLOCK12.OBJECT.scale.x = 1;    BLOCK12.OBJECT.scale.y = 2;
  BLOCK12.OBJECT.name = 'KOCKA';
  BLOCK12.OBJECT.receiveShadow = true;
    CANNON_SCENE.CREATE_BOX_CANNON_STATIC( BLOCK12.OBJECT.position , {x:280,y:200,z:280})
  BLOCK12.OBJECT.position.set(3750 , 660 ,  -500);
  
  };
    BLOCK12.LOADED()
  
       var BLOCK13 = new CUBE( RM.PhongMaterial )
    BLOCK13.LOADED = function(){
  BLOCK13.OBJECT.position.set(3750 , 190 , -1500 );
  BLOCK13.OBJECT.scale.z = 1;
  BLOCK13.OBJECT.scale.x = 1;    BLOCK13.OBJECT.scale.y = 2;
  BLOCK13.OBJECT.name = 'KOCKA';
  BLOCK13.OBJECT.receiveShadow = true;
    CANNON_SCENE.CREATE_BOX_CANNON_STATIC( BLOCK13.OBJECT.position , {x:280,y:200,z:280})
  BLOCK13.OBJECT.position.set(3750 , 660 , -1500);
  
  };
    BLOCK13.LOADED()
	
       var BLOCK14 = new CUBE( RM.PhongMaterial )
    BLOCK14.LOADED = function(){
  BLOCK14.OBJECT.position.set(3750 , 190 , -2500 );
  BLOCK14.OBJECT.scale.z = 1;
  BLOCK14.OBJECT.scale.x = 1;    BLOCK14.OBJECT.scale.y = 2;
  BLOCK14.OBJECT.name = 'KOCKA';
  BLOCK14.OBJECT.receiveShadow = true;
   CANNON_SCENE.CREATE_BOX_CANNON_STATIC( BLOCK14.OBJECT.position , {x:280,y:200,z:280})
  BLOCK14.OBJECT.position.set(3750 , 660 , -2500);
  
  };
    BLOCK14.LOADED()
  //side 
  
    //side 2
  
    var BLOCK15 = new CUBE( RM.PhongMaterial )
    BLOCK15.LOADED = function(){
  BLOCK15.OBJECT.position.set( -3750, 190 , 2500 );
  BLOCK15.OBJECT.scale.z = 1;
  BLOCK15.OBJECT.scale.x = 1;    BLOCK15.OBJECT.scale.y = 2;
  BLOCK15.OBJECT.name = 'KOCKA';
  BLOCK15.OBJECT.receiveShadow = true;
    CANNON_SCENE.CREATE_BOX_CANNON_STATIC( BLOCK15.OBJECT.position , {x:280,y:200,z:280})
  BLOCK15.OBJECT.position.set(-3750 , 660 , 2500);
  
  };
    BLOCK15.LOADED()
	
	
     var BLOCK16 = new CUBE( RM.PhongMaterial )
    BLOCK16.LOADED = function(){
  BLOCK16.OBJECT.position.set(-3750 , 190 , 1500);
  BLOCK16.OBJECT.scale.z = 1;
  BLOCK16.OBJECT.scale.x = 1;    BLOCK16.OBJECT.scale.y = 2;
  BLOCK16.OBJECT.name = 'KOCKA';
  BLOCK16.OBJECT.receiveShadow = true;
   CANNON_SCENE.CREATE_BOX_CANNON_STATIC( BLOCK16.OBJECT.position , {x:280,y:200,z:280})
  BLOCK16.OBJECT.position.set(-3750 , 660 , 1500);
  
  };
    BLOCK16.LOADED()
  
     var BLOCK17 = new CUBE( RM.PhongMaterial )
    BLOCK17.LOADED = function(){
  BLOCK17.OBJECT.position.set(-3750 , 190 , 500);
  BLOCK17.OBJECT.scale.z = 1;
  BLOCK17.OBJECT.scale.x = 1;    BLOCK17.OBJECT.scale.y = 2;
  BLOCK17.OBJECT.name = 'KOCKA';
  BLOCK17.OBJECT.receiveShadow = true;
    CANNON_SCENE.CREATE_BOX_CANNON_STATIC( BLOCK17.OBJECT.position , {x:280,y:200,z:280})
  BLOCK17.OBJECT.position.set(-3750 , 660 , 500);
  
  };
    BLOCK17.LOADED()
  
       var BLOCK18 = new CUBE( RM.PhongMaterial )
    BLOCK18.LOADED = function(){
  BLOCK18.OBJECT.position.set(-3750 , 190 , -500 );
  BLOCK18.OBJECT.scale.z = 1;
  BLOCK18.OBJECT.scale.x = 1;    BLOCK18.OBJECT.scale.y = 2;
  BLOCK18.OBJECT.name = 'KOCKA';
  BLOCK18.OBJECT.receiveShadow = true;
    CANNON_SCENE.CREATE_BOX_CANNON_STATIC( BLOCK18.OBJECT.position , {x:280,y:200,z:280})
  BLOCK18.OBJECT.position.set(-3750 , 660 ,  -500);
  
  };
    BLOCK18.LOADED()
  
       var BLOCK19 = new CUBE( RM.PhongMaterial )
    BLOCK19.LOADED = function(){
  BLOCK19.OBJECT.position.set(-3750 , 190 , -1500 );
  BLOCK19.OBJECT.scale.z = 1;
  BLOCK19.OBJECT.scale.x = 1;    BLOCK19.OBJECT.scale.y = 2;
  BLOCK19.OBJECT.name = 'KOCKA';
  BLOCK19.OBJECT.receiveShadow = true;
    CANNON_SCENE.CREATE_BOX_CANNON_STATIC( BLOCK19.OBJECT.position , {x:280,y:200,z:280})
  BLOCK19.OBJECT.position.set(-3750 , 660 , -1500);
  
  };
    BLOCK19.LOADED()
	
       var BLOCK20 = new CUBE( RM.PhongMaterial )
    BLOCK20.LOADED = function(){
  BLOCK20.OBJECT.position.set(-3750 , 190 , -2500 );
  BLOCK20.OBJECT.scale.z = 1;
  BLOCK20.OBJECT.scale.x = 1;    BLOCK20.OBJECT.scale.y = 2;
  BLOCK20.OBJECT.name = 'KOCKA';
  BLOCK20.OBJECT.receiveShadow = true;
   CANNON_SCENE.CREATE_BOX_CANNON_STATIC( BLOCK20.OBJECT.position , {x:280,y:200,z:280})
  BLOCK20.OBJECT.position.set(-3750 , 660 ,  -2500);
  
  };
    BLOCK20.LOADED()
 
  
  //side 3
  
  
    var BLOCK21 = new CUBE( RM.PhongMaterial )
    BLOCK21.LOADED = function(){
  BLOCK21.OBJECT.position.set(3755 , 190 , -3750);
  BLOCK21.OBJECT.scale.z = 1;
  BLOCK21.OBJECT.scale.x = 1;    BLOCK21.OBJECT.scale.y = 2;
  BLOCK21.OBJECT.name = 'KOCKA';
  BLOCK21.OBJECT.receiveShadow = true;
    CANNON_SCENE.CREATE_BOX_CANNON_STATIC( BLOCK21.OBJECT.position , {x:280,y:200,z:280})
  BLOCK21.OBJECT.position.set(3750 , 660 ,  -3750);
  
  };
    BLOCK21.LOADED()
	
  var BLOCK22 = new CUBE( RM.PhongMaterial )
    BLOCK22.LOADED = function(){
  BLOCK22.OBJECT.position.set(2500 , 190 , -3750);
  BLOCK22.OBJECT.scale.z = 1;
  BLOCK22.OBJECT.scale.x = 1;    BLOCK22.OBJECT.scale.y = 2;
  BLOCK22.OBJECT.name = 'KOCKA';
  BLOCK22.OBJECT.receiveShadow = true;
    CANNON_SCENE.CREATE_BOX_CANNON_STATIC( BLOCK22.OBJECT.position , {x:280,y:200,z:280})
  BLOCK22.OBJECT.position.set(2500 , 660 ,  -3750);
  
  };
    BLOCK22.LOADED()
	
	
     var BLOCK23 = new CUBE( RM.PhongMaterial )
    BLOCK23.LOADED = function(){
  BLOCK23.OBJECT.position.set(1500 , 190 , -3750);
  BLOCK23.OBJECT.scale.z = 1;
  BLOCK23.OBJECT.scale.x = 1;    BLOCK23.OBJECT.scale.y = 2;
  BLOCK23.OBJECT.name = 'KOCKA';
  BLOCK23.OBJECT.receiveShadow = true;
   CANNON_SCENE.CREATE_BOX_CANNON_STATIC( BLOCK23.OBJECT.position , {x:280,y:200,z:280})
  BLOCK23.OBJECT.position.set(1500 , 660 ,  -3750);
  
  };
    BLOCK23.LOADED()
  
     var BLOCK24 = new CUBE( RM.PhongMaterial )
    BLOCK24.LOADED = function(){
  BLOCK24.OBJECT.position.set(500 , 190 , -3750);
  BLOCK24.OBJECT.scale.z = 1;
  BLOCK24.OBJECT.scale.x = 1;    BLOCK24.OBJECT.scale.y = 2;
  BLOCK24.OBJECT.name = 'KOCKA';
  BLOCK24.OBJECT.receiveShadow = true;
    CANNON_SCENE.CREATE_BOX_CANNON_STATIC( BLOCK24.OBJECT.position , {x:280,y:200,z:280})
  BLOCK24.OBJECT.position.set(500 , 660 ,  -3750);
  
  };
    BLOCK24.LOADED()
  
       var BLOCK25 = new CUBE( RM.PhongMaterial )
    BLOCK25.LOADED = function(){
  BLOCK25.OBJECT.position.set(-500 , 190 , -3750);
  BLOCK25.OBJECT.scale.z = 1;
  BLOCK25.OBJECT.scale.x = 1;    BLOCK25.OBJECT.scale.y = 2;
  BLOCK25.OBJECT.name = 'KOCKA';
  BLOCK25.OBJECT.receiveShadow = true;
    CANNON_SCENE.CREATE_BOX_CANNON_STATIC( BLOCK25.OBJECT.position , {x:280,y:200,z:280})
  BLOCK25.OBJECT.position.set(-500 , 660 , -3750);
  
  };
    BLOCK25.LOADED()
  
       var BLOCK26 = new CUBE( RM.PhongMaterial )
    BLOCK26.LOADED = function(){
  BLOCK26.OBJECT.position.set(-1500 , 190 ,-3750);
  BLOCK26.OBJECT.scale.z = 1;
  BLOCK26.OBJECT.scale.x = 1;    BLOCK26.OBJECT.scale.y = 2;
  BLOCK26.OBJECT.name = 'KOCKA';
  BLOCK26.OBJECT.receiveShadow = true;
    CANNON_SCENE.CREATE_BOX_CANNON_STATIC( BLOCK26.OBJECT.position , {x:280,y:200,z:280})
  BLOCK26.OBJECT.position.set(-1500 , 660 ,  -3750);
  
  };
    BLOCK26.LOADED()
	
       var BLOCK27 = new CUBE( RM.PhongMaterial )
    BLOCK27.LOADED = function(){
  BLOCK27.OBJECT.position.set(-2500 , 190 , -3750);
  BLOCK27.OBJECT.scale.z = 1;
  BLOCK27.OBJECT.scale.x = 1;    BLOCK27.OBJECT.scale.y = 2;
  BLOCK27.OBJECT.name = 'KOCKA';
  BLOCK27.OBJECT.receiveShadow = true;
    CANNON_SCENE.CREATE_BOX_CANNON_STATIC( BLOCK27.OBJECT.position , {x:280,y:200,z:280})
  BLOCK27.OBJECT.position.set(-2500 , 660 ,  -3750);
  
  };
    BLOCK27.LOADED()
  
  
       var BLOCK28 = new CUBE( RM.PhongMaterial )
    BLOCK28.LOADED = function(){
  BLOCK28.OBJECT.position.set(-3750 , 190 , -3750);
  BLOCK28.OBJECT.scale.z = 1;
  BLOCK28.OBJECT.scale.x = 1;    BLOCK28.OBJECT.scale.y = 2;
  BLOCK28.OBJECT.name = 'KOCKA';
  BLOCK28.OBJECT.receiveShadow = true;
    CANNON_SCENE.CREATE_BOX_CANNON_STATIC( BLOCK28.OBJECT.position , {x:280,y:200,z:280})
  BLOCK28.OBJECT.position.set(-3750 , 660 ,  -3750);
  
  };
    BLOCK28.LOADED()
	
  
  // Rock 
  //IMPORT.OBJ
   RM.CREATE_CUBE_REFRACTION ( 'res/textures/reflection1/' , 'rock_mats' );
  //
  
  
  /* 
   var ROCK__1  = new IMPORT.OBJ ('ROCK1' , 'res/obj/rock1/rock.obj' ) 
   ROCK__1.LOADED_OBJECT = function(){
  
     ROCK1.children[0].material = RM.rock_mats.Chrome3;
	 ROCK1.scale.set(222,222,222)
	 ROCK1.position.set(-1222, 50 ,  0)
	  };
  
   
   var ROCK__2  = new IMPORT.OBJ ('ROCK2' , 'res/obj/rock1/rock.obj' ) 
   
     ROCK__2.LOADED_OBJECT = function(){
  
     ROCK2.children[0].material = RM.rock_mats.Chrome;
	 ROCK2.scale.set(422,422,222)
	 ROCK2.position.set(2222, 50 ,  0)
	 
	 
  
  };
  
  
     var ROCK__3  = new IMPORT.OBJ ('ROCK3' , 'res/obj/rock1/rock.obj' ,  'res/obj/rock1/tex/Rock_6_d512.png' ) 
     ROCK__3.LOADED_OBJECT = function(){
  
     //ROCK3.children[0].material = RM.rock_mats.Chrome2;
	 ROCK3.scale.set(222,322,322)
	 ROCK3.position.set(-2622 , 50 ,  -1000)
	 
  };
   */ 
   
   for (var x=0;x<11;x++) {
	   
	//    GENERATE_NEW_DIAMOND ()
   }
   
   var SUM_INITIAL_DIAMOND = 6;
      GENERATE_NEW_DIAMOND ()
   function GENERATE_NEW_DIAMOND () {
   //randomIntFromTo
     window['diamond___'+ SUM_INITIAL_DIAMOND]  = new IMPORT.OBJ ('diamond'+ SUM_INITIAL_DIAMOND , 'res/obj/diamond/diamond.obj'  ) 
      window['diamond___'+ SUM_INITIAL_DIAMOND] .LOADED_OBJECT = function(){

     window['diamond'+ SUM_INITIAL_DIAMOND].children[0].material = RM.rock_mats.Chrome2;
	 window['diamond'+ SUM_INITIAL_DIAMOND].children[1].material = RM.rock_mats.Chrome1;
	 window['diamond'+ SUM_INITIAL_DIAMOND].scale.set(0.5, 0.7 , 0.5)
	 window['diamond'+ SUM_INITIAL_DIAMOND].position.set( randomIntFromTo(-4000 , 4000) , 30 ,   randomIntFromTo(-4000 , 4000) )
	 window['diamond'+ SUM_INITIAL_DIAMOND].name = 'diamond' + SUM_INITIAL_DIAMOND; 
	 var group = new THREE.Group();
	 var F = new THREE.PointLight( 0xff0440 , 3 , 200 );
	  F.position.y = 300;
	 var F1 = new THREE.PointLight( 0x0404ff , 3 , 200 );
	  F1.position.y = -100;
	  
	  F1.position.x = -30;
	  F.position.x = -40;
	  
	 var sphere = new THREE.SphereGeometry( 2, 16, 8 );
     group.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: 0xff0040 } ) ) );
	 group.add(  F );
	 group.add(  F1 );
	 window['diamond'+ SUM_INITIAL_DIAMOND].add(group);
	 
		  
	 window['diamond'+ SUM_INITIAL_DIAMOND].AUTO_UPDATE = function(){
	 
	// window['diamond'+ SUM_INITIAL_DIAMOND].rotateY(0.1);
	 

	 
	 };
	 
  PROGRAM.AUTO_UPDATE.push(window['diamond'+ SUM_INITIAL_DIAMOND]);
	 	 if (SUM_INITIAL_DIAMOND > 0){
		 
	 SUM_INITIAL_DIAMOND--;
	    GENERATE_NEW_DIAMOND ()
		 
	 }
  };
  
   }
   
/*    var diamond1__  = new IMPORT.OBJ ('billboard1' , 'res/obj/billboard/billboard.obj'  ) 
     diamond1__.LOADED_OBJECT = function(){
  
     billboard1.children[0].material = RM.rock_mats.Chrome1;
	 //billboard1.children[1].material = RM.rock_mats.Chrome2;
	 billboard1.scale.set(0.2, 0.2 , 0.2)
	 billboard1.position.set( -1211 , 80 ,   422)
	 
	 
	 
	 }; */
  
  
  
  //JS_JSON_ANIMATED : function( name_ , path_  , position  , isPlayer)
  var position = {x:0 , y : 0 , z:0 };
  var pilarLion  = new IMPORT.JS_JSON('pilar1' , 'res/js_blender/pilar/pilar/pilar1.js' , position , false ) 
  pilarLion.LOADED_OBJECT = function(){
  
  pilar1.rotateY( to_rad(-90)  );
	 pilar1.scale.set(90, 90 , 90);
     pilar1.position.set( -500 , 0 ,   -1000)
	 CANNON_SCENE.CREATE_BOX_CANNON_STATIC(  pilar1.position , {x:110, y:110, z:250 } ) 
	 
	 };
  
  
  var position = {x:0 , y : 0 , z:0 };
  var pilarLion1  = new IMPORT.JS_JSON('pilar2' , 'res/js_blender/pilar/pilar/pilar1.js' , position , false ) 
  pilarLion1.LOADED_OBJECT = function(){
  
     pilar2.rotateY( to_rad(-90)  );
	 pilar2.scale.set(90, 90 , 90);
     pilar2.position.set( 500 , 0 ,   -1000)
	 
	 CANNON_SCENE.CREATE_BOX_CANNON_STATIC(  pilar2.position , {x:110, y:110, z:250 } ) 
	 
	 };
  
  
  
/////////////////////////////////////			
//Player 
/////////////////////////////////////
 scene.fog = new THREE.Fog( 0x000000, 110, 10000 );
 
   //var PLAYER = new MD2 ( MD2_config , true , true , true);
    var PLAYER = new MD2 ( configOgro , true , true , true);
    PLAYER.INDIKATOR2.position.z = -72;
    directionalLight.position.set(1,1,1)
	
	
	
	
/*  var MONSTERSLIKESYOU  = new IMPORT.OBJ ('MONSTER_TEXT' , 'res/obj/monsterlikesyou/m.obj' ) 
  
     MONSTERSLIKESYOU.LOADED_OBJECT = function(){
  
     MONSTER_TEXT.children[0].material = RM.rock_mats.Chrome3;
	 MONSTER_TEXT.scale.set(21,21,21)
	 MONSTER_TEXT.position.set(-333, 250 ,  0)
	  }; */
  
  
/*   
    var boxShape = new CANNON.Box(new CANNON.Vec3(111,111,111));
    var shapeBody = new CANNON.Body({ mass: 30 });
	shapeBody.addShape(shape);
    var pos = new CANNON.Vec3(0,110,200);
        shapeBody.position.set(0,size,size*2);
        shapeBody.velocity.set(0,0,0);
        shapeBody.angularVelocity.set(0,0,0);
        world.add(shapeBody);		
*/