
/**
 * Middle part
 * @description Opencvjs Exporter 1.0.0
 */

export function asyncLoad(path, callback) {

  if (typeof callback === "undefined") {
    callback = function() {
      console.info("Opencvjs is ready.")
    }
  }

  var nuiScript = document.createElement("script")
  nuiScript.src = path
  document.head.appendChild(nuiScript)
  nuiScript.onload = function() {
    callback()
  }

}

export var cvjsLoader = function(cvjsCallback) {

  asyncLoad("../../node_modules/webrtc-adapter/out/adapter.js", () => {
    asyncLoad("../lib/stats.js", () => {
      asyncLoad("../lib/data-gui.js", () => {
        asyncLoad("../lib/opencv-3.4.0.js", cvjsCallback)
      })
    })
  })

}
