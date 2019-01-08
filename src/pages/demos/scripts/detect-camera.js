// visual js 0.7 comes with one lib build .
// You can make build with windows GUI visual js tools (makeBuild.exe)
// will be posted as soon as i commit

// Basic example , add new game_object add image with absolute path
// nice ofr distribution system of image res loading

// In this example program is in the edit mode but only for make look
//right click and choose "Exit edit mode"

// you cant use rigth contex menu at this page
// See https://bitbucket.org/nikola_l/visual-js


// This is first you will need :
// make surface draws and update functions
SYS.DOM.CREATE_SURFACE("SURF", "HELLO_WORLD", 100, 99.4, "DIAMETRIC");

//One program have a one engine , engine runs modules
//One modul have a gameobjects , use more modules for composition
HELLO_WORLD.ENGINE.CREATE_MODUL("STARTER");

// if you setup in manifest
// IMAGE_LOADER_PREFIX : false , you can put full url
// if you setup true , path have prefix /res/animations/
RESOURCE.Tiles = { source: ["https://maximumroulette.com/framework/res/animations/Tiles/boxCrate.png"] };
HELLO_WORLD.ENGINE.MODULES.ACCESS_MODULE("STARTER").NEW_OBJECT("IamWebCam", 65, 15, 22, 22, 10);

IamWebCam.CREATE_WEBCAM('NUI', 'GAME_OBJECT', '6', '6');
//IamWebCam.CREATE_WEBCAM('NORMAL','GAME_OBJECT' );

NUI_CONTROLER.point7 = function() {

  alert('I feel your movement!');

};
//access object try in console to look this component
//IamWebCam.WEBCAM
