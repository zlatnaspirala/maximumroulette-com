
import VideoProcessing from "./video-processing.js"

export default class CvStarter {

  constructor(options) {

    console.info("-------------------------------------------------------")
    console.info("CvStarter constructor.")

    if (typeof options !== "undefined") {

      if (typeof options.videoProcessing !== "undefined" &&
          options.videoProcessing === true) {

        var optionsVideoProcessing = {
          injectVideo: null,
          injectCanvas: null,
        }

        let vp

        if (typeof options.injectVideo !== "undefined") {

          if (typeof options.injectCanvas === 'undefined') {
            // test
            console.error("For now injectCanvas is required.")
          }

          optionsVideoProcessing.injectVideo = options.injectVideo
          optionsVideoProcessing.injectCanvas = options.injectCanvas

          vp = new VideoProcessing(optionsVideoProcessing)
          setTimeout(()=> {vp.injectVideo(options.injectVideo)}, 1000)

        } else {
          vp = new VideoProcessing(optionsVideoProcessing)
        }

        // Run Video processing async
        console.info("vp object => ", vp)
        window.vp = vp

      } else if (typeof options.faceDetect !== "undefined" &&
                 options.faceDetect === true) {
        // test
      }

    }

    this.cv = window.cv
    console.info("cv object => ", this.cv)
    console.info("adapter => ", window.adapter)
    console.info("-------------------------------------------------------")

  }

}
