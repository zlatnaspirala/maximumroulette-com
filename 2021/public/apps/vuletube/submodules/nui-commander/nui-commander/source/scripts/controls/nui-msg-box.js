
function nuiMsgBox(textMsg, callback) {

  this.name = "nuiMsgBox";
  this.sensitivity = "mid";
  this.callback = callback;
  this.shemaX = 8;
  this.shemaY = 8;
  this.yesText = "YES";
  this.noText = "NO";
  this.messageText = textMsg;
  this.myOpacity = 0.3;

  this.draw = function(engine) {

    engine.ctx.save()

    engine.ctx.fillStyle = "rgba(10, 150, 110, " + this.myOpacity + " )"

    engine.ctx.fillRect(
    engine.getCanvasWidth(100) / this.shemaX * 1,
    engine.getCanvasHeight(100) / this.shemaY * 1,
    engine.getCanvasWidth(100) / this.shemaX * 6,
    engine.getCanvasHeight(100) / this.shemaY * 2);

    engine.ctx.fillStyle = "black";
    engine.ctx.font = "30px sans-serif";

    engine.ctx.fillText(
      this.messageText,
      engine.getCanvasWidth(100) / this.shemaX * 2,
      engine.getCanvasHeight(100) / this.shemaY * 1.5,
      engine.getCanvasWidth(35),
      engine.getCanvasHeight(9));


    engine.ctx.fillStyle = "rgba(210, 50, 110, " + this.myOpacity + " )"

    engine.ctx.fillRect(
      engine.getCanvasWidth(100) / this.shemaX * 1,
      engine.getCanvasHeight(100) / this.shemaY * 2,
      engine.getCanvasWidth(100) / this.shemaX * 3,
      engine.getCanvasHeight(100) / this.shemaY * 1);

    engine.ctx.fillStyle = "white";

    engine.ctx.fillText(
      this.yesText,
      engine.getCanvasWidth(100) / this.shemaX * 2,
      engine.getCanvasHeight(100) / this.shemaY * 2.7,
      engine.getCanvasWidth(15),
      engine.getCanvasHeight(9));

    engine.ctx.fillStyle = "rgba(210, 90, 110, " + this.myOpacity + " )"

    engine.ctx.fillRect(
      engine.getCanvasWidth(100) / this.shemaX * 4,
      engine.getCanvasHeight(100) / this.shemaY * 2,
      engine.getCanvasWidth(100) / this.shemaX * 3,
      engine.getCanvasHeight(100) / this.shemaY * 1);

    engine.ctx.fillStyle = "black";

    engine.ctx.fillText(
      this.noText,
      engine.getCanvasWidth(100) / this.shemaX * 5.1,
      engine.getCanvasHeight(100) / this.shemaY * 2.7,
      engine.getCanvasWidth(35),
      engine.getCanvasHeight(9));

    engine.ctx.restore();

  };

  this.update = function(engine) {

    var y1 = engine.interActionController.main[17].status
    var y2 = engine.interActionController.main[18].status
    var y3 = engine.interActionController.main[19].status

    var n1 = engine.interActionController.main[20].status
    var n2 = engine.interActionController.main[21].status
    var n3 = engine.interActionController.main[22].status

    if (this.sensitivity === "mid") {

      if ((n1 === true && n2 === true) || (n2 === true && n3 === true)) {
        console.log("MsgBox answer is no.");
        this.callback("no")
      }

      if ((y1 === true && y2 === true) || (y2 === true && y3 === true)) {
        console.log("MsgBox answer is yes.");
        this.callback("yes")
      }

    }

  };

  }
