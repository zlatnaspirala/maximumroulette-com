
function canvasEngine(interActionController) {

  var root = this;

  root.interActionController = interActionController;

  // create dom element
  this.canvasDom = document.createElement("canvas");
  this.canvasDom.setAttribute("id", "drawer");
  this.canvasDom.setAttribute("width", "640px");
  this.canvasDom.setAttribute("height", "480px");
  this.canvasDom.setAttribute("style", "position: absolute;z-index:20;left: 0; top: 0;");
  this.ctx = this.canvasDom.getContext("2d");
  var content = getDom("content")
  content.appendChild(this.canvasDom);

  this.systemOnPause = false;
  this.elements = [];

  this.removeElementByName = function(name){
    this.elements.forEach(function(item, index, array) {
      if (item.name == name) {
        array.splice(index, 1);
      }
    });
  }

  this.getCanvasWidth = function(per) {
    if (per == 0) {
      return 0;
    }
    return this.canvasDom.width / 100 * per
  };

  this.getCanvasHeight = function(per) {
    if (per == 0) {
      return 0;
    }
    return this.canvasDom.height / 100 * per
  };

  this.draw = function() {

    root.ctx.clearRect(0, 0, root.getCanvasWidth(100), root.getCanvasHeight(100));

    this.elements.forEach(function(element) {
      element.draw(root);
      element.update(root);
    });


    setTimeout(function() {
      root.draw();
    }, 20);
  }

  // NUI STAFF

  var content = getDom('content');
  var video = getDom('webcam');

  this.blockIndicatorSize = 8;

  for (var j = 0 ; j < root.blockIndicatorSize * root.blockIndicatorSize; j++) {
    var domIndicator = document.createElement("div");
    domIndicator.setAttribute("id", "note" + j)
    domIndicator.setAttribute("class", "note")
    domIndicator.innerHTML = `
        <div class="gui-func-field" > field ` + j + ` </div>
    `;
    getDom("xylo").appendChild(domIndicator)
  }

  var notesPosY = [];
  var notesPosX = [];

  function hasGetUserMedia() {
    // Note: Opera builds are unprefixed.
    return !!(navigator.getUserMedia || navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia || navigator.msGetUserMedia);
  }

  if (hasGetUserMedia()) {
    console.log("hasGetUserMedia TRUE")
  } else {
    console.warn("hasGetUserMedia FALSE")
    return;
  }

  var webcamError = function(e) {
    alert('Webcam error!', e);
  };

  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({video: true}).then(function(stream) {
      video.srcObject = stream;
      initialize();
    }, webcamError);
  } else if (navigator.getUserMedia) {
    navigator.getUserMedia({video: true}, function(stream) {
      video.srcObject = stream;
      initialize();
    }, webcamError);
  } else if (navigator.webkitGetUserMedia) {
    navigator.webkitGetUserMedia({video:true}, function(stream) {
      video.srcObject = window.webkitURL.createObjectURL(stream);
      initialize();
    }, webcamError);
  } else {
    //video.src = 'somevideo.webm'; // fallback.
  }

  var AudioContext = (
    window.AudioContext ||
    window.webkitAudioContext ||
    null
  );

  var timeOut, lastImageData;
  var canvasSource = getDom("canvas-source");
  var canvasBlended = getDom("canvas-blended");
  var contextSource = canvasSource.getContext('2d');
  var contextBlended = canvasBlended.getContext('2d');

  var soundContext;
  var bufferLoader;

  this.notes = [];
  // mirror video
  contextSource.translate(canvasSource.width, 0);
  contextSource.scale(-1, 1);

  var c = 5;

  function initialize() {
    if (!AudioContext) {
      alert("AudioContext not supported!");
    }
    else {
      setTimeout(loadSounds, 1000);
    }
  }

  function loadSounds() {
    soundContext = new AudioContext();
    bufferLoader = new BufferLoader(soundContext,
      [
        'sounds/note1.mp3',
        'sounds/note2.mp3',
        'sounds/note3.mp3',
        'sounds/note4.mp3',
        'sounds/note5.mp3',
        'sounds/note6.mp3',
        'sounds/note7.mp3',
        'sounds/note8.mp3'
      ],
      finishedLoading
    );
    bufferLoader.load();
  }

  function finishedLoading(bufferList) {


   for (var j = 0; j < root.blockIndicatorSize; j++) {
    for (var d = 0; d < root.blockIndicatorSize; d++) {
      notesPosX.push(d * root.getCanvasWidth(100) / root.blockIndicatorSize);
      notesPosY.push(j * root.getCanvasHeight(100) / root.blockIndicatorSize);
    }
  }


    for (var i=0; i<root.blockIndicatorSize * root.blockIndicatorSize; i++) {
      var source = soundContext.createBufferSource();
      source.buffer = bufferList[i];
      source.connect(soundContext.destination);

      var note = {
        note: source,
        ready: true,
        visual: getDom("note" + i)
      };

      note.area = {
        x: notesPosX[i],
        y: notesPosY[i],
        w: root.getCanvasWidth(100) / root.blockIndicatorSize,
        h: root.getCanvasHeight(100) / root.blockIndicatorSize,
        status: true
      };

      root.notes.push(note);
    }

    start();
  }

  function playSound(obj) {
    if (!obj.ready) return;
    var source = soundContext.createBufferSource();
    source.buffer = obj.note.buffer;
    source.connect(soundContext.destination);
    source.start(0);
    obj.ready = false;
    // throttle the note
    setTimeout(setNoteReady, 400, obj);
  }

  function setNoteReady(obj) {
    obj.ready = true;
  }

  function start() {
    // getDom(canvasSource).delay(600).fadeIn();
    // getDom(canvasBlended).delay(600).fadeIn();
    root.update();
  }

  window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame    ||
      window.oRequestAnimationFrame      ||
      window.msRequestAnimationFrame     ||
      function( callback ){
        window.setTimeout(callback, 1000 / 60);
      };
  })();

  this.update = function() {

    if (!root.systemOnPause) {
      root.drawVideo();
      root.blend();
      root.checkAreas();
      requestAnimFrame(root.update);
    }

  }

  this.drawVideo = function() {
    contextSource.drawImage(video, 0, 0, video.width, video.height);
  }

  this.blend = function() {
    var width = canvasSource.width;
    var height = canvasSource.height;
    // get webcam image data
    var sourceData = contextSource.getImageData(0, 0, width, height);
    // create an image if the previous image doesn’t exist
    if (!lastImageData) lastImageData = contextSource.getImageData(0, 0, width, height);
    // create a ImageData instance to receive the blended result
    var blendedData = contextSource.createImageData(width, height);
    // blend the 2 images
    differenceAccuracy(blendedData.data, sourceData.data, lastImageData.data);
    // draw the result in a canvas
    contextBlended.putImageData(blendedData, 0, 0);
    // store the current webcam image
    lastImageData = sourceData;
  }

  function fastAbs(value) {
    // funky bitwise, equal Math.abs
    return (value ^ (value >> 31)) - (value >> 31);
  }

  function threshold(value) {
    return (value > 0x15) ? 0xFF : 0;
  }

  function difference(target, data1, data2) {
    // blend mode difference
    if (data1.length != data2.length) return null;
    var i = 0;
    while (i < (data1.length * 0.25)) {
      target[4*i] = data1[4*i] == 0 ? 0 : fastAbs(data1[4*i] - data2[4*i]);
      target[4*i+1] = data1[4*i+1] == 0 ? 0 : fastAbs(data1[4*i+1] - data2[4*i+1]);
      target[4*i+2] = data1[4*i+2] == 0 ? 0 : fastAbs(data1[4*i+2] - data2[4*i+2]);
      target[4*i+3] = 0xFF;
      ++i;
    }
  }

  function differenceAccuracy(target, data1, data2) {
    if (data1.length != data2.length) return null;
    var i = 0;
    while (i < (data1.length * 0.25)) {
      var average1 = (data1[4*i] + data1[4*i+1] + data1[4*i+2]) / 3;
      var average2 = (data2[4*i] + data2[4*i+1] + data2[4*i+2]) / 3;
      var diff = threshold(fastAbs(average1 - average2));
      target[4*i] = diff;
      target[4*i+1] = diff;
      target[4*i+2] = diff;
      target[4*i+3] = 0xFF;
      ++i;
    }
  }

  this.checkAreas = function() {
    // loop over the note areas
    for (var r = 0;r < root.notes.length; ++r) {
      if (root.notes[r].area.status == true) {

      var blendedData = contextBlended.getImageData(root.notes[r].area.x, root.notes[r].area.y, root.notes[r].area.w, root.notes[r].area.h);
      var i = 0;
      var average = 0;
      // loop over the pixels
      while (i < (blendedData.data.length * 0.25)) {
        // make an average between the color channel
        average += (blendedData.data[i*4] + blendedData.data[i*4+1] + blendedData.data[i*4+2]) / 3;
        ++i;
      }
      // calculate an average between of the color values of the note area
      average = Math.round(average / (blendedData.data.length * 0.25));

      if (average > 10) {
        // over a small limit, consider that a movement is detected
        // play a note and show a visual feedback to the user
        playSound(root.notes[r]);
        if(root.notes[r].visual) {
          root.notes[r].visual.style.opacity = 1;
        }

        if ( typeof root.interActionController.main[r] !== 'undefined' &&
             typeof root.interActionController.main[r].action !== 'undefined'
            ) {

          root.interActionController.main[r].action();



      }

      } else {

        if (root.notes[r].visual.style.opacity <= 0) {
          root.notes[r].visual.style.opacity = 0;
        } else {
          root.notes[r].visual.style.opacity -= 0.1;
        }

      }
    }

    }

  }


}
