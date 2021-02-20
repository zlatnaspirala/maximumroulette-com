
/**
 * Main file for creating instances.
 *
 */

 app = {};

 window.onload = function() {

  var browser = new detectBrowser();
  app.drawer = new canvasEngine(interActionController);
  app.drawer.draw();
  SCRIPT.LOAD("scripts/controls/main-function-menu.js");
  SCRIPT.LOAD("scripts/controls/nui-msg-box.js");
  SCRIPT.LOAD("scripts/controls/nui-button.js");

  setTimeout( function() {
    app.drawer.elements.push(
      new nuiButton(
        " Control video ",
        function (answer) {
          console.log(answer)
          app.drawer.removeElementByName("nuiButton")
        }));

        /*
        // clear it first
        indicatorsBlocks.icons = [];
        for (var x = 0; x < 64; x++) {
          var commanderIconField = new Image();
          commanderIconField.src = "images/note1.png";
          commanderIconField.onload = function () {
            indicatorsBlocks.icons.push(this)
          }
        }
        */

  }, 200)

 }


