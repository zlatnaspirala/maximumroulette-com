
function nuiButton(textMsg, callback) {

  this.name = "nuiBotton";
  this.sensitivity = "mid";
  this.callback = callback;
  this.shemaX = 8;
  this.shemaY = 8;
  this.text = textMsg;
  this.myOpacity = 0.3;

  this.discretePositionX = 4;
  this.discretePositionY = 3;
  this.discreteWidth = 3;
  this.discreteHeight = 2;

  this.borderColors = {
    r: 10,
    g: 150,
    b: 110
  };

  this.draw = function(engine) {

    engine.ctx.save()

    engine.ctx.fillStyle = "rgba(" + this.borderColors.r + ", 150, " + this.borderColors.b + ", " + this.myOpacity + " )"

    engine.ctx.fillRect(
    engine.getCanvasWidth(100) / this.shemaX * 4 - 10,
    engine.getCanvasHeight(100) / this.shemaY * 2 - 10,
    engine.getCanvasWidth(100) / this.shemaX * 3 + 20,
    engine.getCanvasHeight(100) / this.shemaY * 1 + 20);

    engine.ctx.font = "30px sans-serif";
    engine.ctx.fillStyle = "white";
    // engine.ctx.fillStyle = "rgba(210, 90, 110, " + this.myOpacity + " )"

    engine.ctx.fillRect(
      engine.getCanvasWidth(100) / this.shemaX * 4,
      engine.getCanvasHeight(100) / this.shemaY * 2,
      engine.getCanvasWidth(100) / this.shemaX * 3,
      engine.getCanvasHeight(100) / this.shemaY * 1);

    engine.ctx.fillStyle = "black";

    engine.ctx.fillText(
      this.text,
      engine.getCanvasWidth(100) / this.shemaX * 4,
      engine.getCanvasHeight(100) / this.shemaY * 2.7,
      engine.getCanvasWidth(35),
      engine.getCanvasHeight(9));

    engine.ctx.restore();

  };

  this.update = function(engine) {

    var n1 = engine.interActionController.main[20].status
    var n2 = engine.interActionController.main[21].status
    var n3 = engine.interActionController.main[22].status

    if (this.sensitivity === "mid") {

      if ((n1 === true && n2 === true) || (n2 === true && n3 === true)) {
        console.log("Button is triggered.");
        this.callback("no")
      }

      if (n1 === true || n2 === true || n3 === true) {
        if (this.borderColors.r < 255) {
          this.borderColors.r += 20;
        }
        if (this.borderColors.b < 255) {
          this.borderColors.b += 20;
        }
      } else {

        if (this.borderColors.r > 0.1) {
          this.borderColors.r -= 20;
        }
        if (this.borderColors.b > 0.1) {
          this.borderColors.b -= 20;
        }


      }

    }

  };

  }
