/* eslint-disable no-undef */

// eslint-disable-next-line no-unused-vars
var audioSys = {

  chipStackAudio: document.getElementById("chipStackAudio"),
  removeChipsAudio: document.getElementById("removeChipsAudio"),
  spiningAudio: document.getElementById("spiningAudio"),
  spiningEndAudio: document.getElementById("spiningEndAudio"),

  init: function() {

    this.chipStackAudio.onloadeddata = function() {
      // console.log(" AUDIO LOADED");
    };

    this.removeChipsAudio.onloadeddata = function() {
      // console.log(" AUDIO LOADED");
    };

    this.spiningAudio.onloadeddata = function() {
      // console.log(" AUDIO LOADED");
    };

  },

  initBufferAudios: function() {

    // Fix for older browsers, Max 6 per user click

    try {
      this.chipStackAudio.play();
      this.chipStackAudio.pause();
    } catch(err) { /* console.log("ONLY CATCH"); */ }

    try {
      this.removeChipsAudio.play();
      this.removeChipsAudio.pause();
    } catch(err) { /* console.log("ONLY CATCH"); */ }

    try {
      this.spiningAudio.play();
      this.spiningAudio.pause();
    } catch(err) { /* console.log("ONLY CATCH"); */ }

    try {
      this.spiningEndAudio.play();
      this.spiningEndAudio.pause();
    } catch(err) { /* console.log("ONLY CATCH"); */ }

    // console.log("ONLY ONE TIME EXE");

    if (isMobile()) {
      window.removeEventListener("touchstart", app.audios.initBufferAudios, true);
    } else {
      window.removeEventListener("click", app.audios.initBufferAudios, true);
    }

  },

};
