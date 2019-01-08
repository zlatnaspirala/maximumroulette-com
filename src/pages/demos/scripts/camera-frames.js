
SYS.DOM.CREATE_SURFACE("SURF", "HELLO_WORLD", 100, 99.4, "DIAMETRIC");
HELLO_WORLD.ENGINE.CREATE_MODUL("STARTER");
HELLO_WORLD.MAP.CLEAR_MAP = false;
HELLO_WORLD.ENGINE.EXIT_EDIT_MODE()
RESOURCE.Tiles = { source: ["https://maximumroulette.com/framework/res/animations/Tiles/boxCrate.png"] };
HELLO_WORLD.ENGINE.MODULES.ACCESS_MODULE("STARTER").NEW_OBJECT("IamWebCam", 15, 15, 22, 22, 10);
IamWebCam.CREATE_WEBCAM('NORMAL', 'GAME_OBJECT');

TESLA = {};
TESLA.X = new OSCILLATOR(1, VIEW.W(15), 20);
TESLA.Y = 0;
TESLA.COUNT = 0;

TESLA.X.on_maximum_value = function() {

  TESLA.Y += IamWebCam.DIMENSION.HEIGHT() / 5;
  TESLA.COUNT++;
  if (TESLA.COUNT > 4) { TESLA.COUNT = 0; TESLA.Y = 0; }

};

IamWebCam.ON_UPDATE = function() {

  IamWebCam.POSITION.SET_POSITION(TESLA.X.UPDATE(), TESLA.Y, 'DIAMETRIC')

};

//access object try in console to look this component
//IamWebCam.WEBCAM
