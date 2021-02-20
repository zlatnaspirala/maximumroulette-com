

var interActionController = {
  main: []
}

for (var x = 0; x < 64; x++) {
  interActionController.main.push(new modelBlock(x))
}

interActionController.main[0].onAction = function() {
  console.log("Default command ... ", this.status)
}


