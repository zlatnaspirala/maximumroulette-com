
/* globals cv dat Stats */

export default class VideoProcessing {

  constructor(options) {

    console.log("VideoProcessing : loading...")

    if (typeof options == "undefined") {
      options = {
        injectVideo: null,
        injectCanvas: null,
        dim: { width: 320 , height: 240},
        ignoreDataGui: true
      }
    }

    if (typeof options.dim === 'undefined') {
        options.dim = { width: 320 , height: 240}
    }

    if (typeof options.ignoreDataGui === 'undefined') {
      // Default
      options.ignoreDataGui = true;
    }

    console.log("VideoProcessing : options => ", options)

    // default
    this.canvasOutputFlagStr = "canvasOutput"

    // In this case, We set width 320, and the height will be computed based on the input stream.
    this.width = options.dim.width
    this.height = options.dim.height

    // whether this.streaming video from the camera.
    this.streaming = false
    this.video = null

    if (options.injectVideo === null) {
      // Default
      this.video = document.getElementById("video")
    } else {
      console.log("VideoProcessing injectVideo => ", options.injectVideo)
      this.video = options.injectVideo
      // this.injectVideo(options.injectVideo)
    }

    if (options.injectCanvas !== 'undefined') {
      this.canvasOutputFlagStr = options.injectCanvas
      console.log("VideoProcessing injectCanvas =>", options.injectCanvas)
    } else {
      console.error("VideoProcessing will use default canvas id =>", this.canvasOutputFlagStr)
    }

    this.stream = null
    this.vc = null

    this.lastFilter = ""
    this.src = null
    this.dstC1 = null
    this.dstC3 = null
    this.dstC4 = null

    this.contoursColor = []
    for (let i = 0; i < 10000; i++) {
      this.contoursColor.push(
        [
          Math.round(Math.random() * 255),
          Math.round(Math.random() * 255),
          Math.round(Math.random() * 255),
          0,
        ]
      )
    }

    this.base
    this.stats = null

    this.filters = {
      "passThrough": "Pass Through",
      "gray": "Gray",
      "hsv": "HSV",
      "canny": "Canny Edge Detection",
      "inRange": "In Range",
      "threshold": "Threshold",
      "adaptiveThreshold": "Adaptive Threshold",
      "gaussianBlur": "Gaussian Blurring",
      "medianBlur": "Median Blurring",
      "bilateralFilter": "Bilateral Filtering",
      "sobel": "Sobel Derivatives",
      "scharr": "Scharr Derivatives",
      "laplacian": "Laplacian Derivatives",
      "contours": "Contours",
      "calcHist": "Calculation",
      "equalizeHist": "Equalization",
      "backprojection": "Backprojection",
      "erosion": "Erosion",
      "dilation": "Dilation",
      "morphology": "Morphology",
    }

    this.filterName = document.getElementById("filterName")
    this.controls

    this.stats = new Stats()
    this.stats.showPanel(0)

    this.processVideo = () => {

      this.stats.begin()
      this.vc.read(this.src)
      let result

      // console.log("...this.controls.filter...", this.controls.filter)
      if (typeof this.controls !== "undefined") {
        switch (this.controls.filter) {
        case "passThrough": result = this.passThrough(this.src); break
        case "gray": result = this.gray(this.src); break
        case "hsv": result = this.hsv(this.src); break
        case "canny": result = this.canny(this.src); break
        case "inRange": result = this.inRange(this.src); break
        case "threshold": result = this.threshold(this.src); break
        case "adaptiveThreshold": result = this.adaptiveThreshold(this.src); break
        case "gaussianBlur": result = this.gaussianBlur(this.src); break
        case "bilateralFilter": result = this.bilateralFilter(this.src); break
        case "medianBlur": result = this.medianBlur(this.src); break
        case "sobel": result = this.sobel(this.src); break
        case "scharr": result = this.scharr(this.src); break
        case "laplacian": result = this.laplacian(this.src); break
        case "contours": result = this.contours(this.src); break
        case "calcHist": result = this.calcHist(this.src); break
        case "equalizeHist": result = this.equalizeHist(this.src); break
        case "backprojection": result = this.backprojection(this.src); break
        case "erosion": result = this.erosion(this.src); break
        case "dilation": result = this.dilation(this.src); break
        case "morphology": result = this.morphology(this.src); break
        default: result = this.passThrough(this.src)
        }

        cv.imshow(this.canvasOutputFlagStr, result)

      }

      this.stats.end()

      if (typeof this.controls !== "undefined") {
        this.lastFilter = this.controls.filter
      }

      requestAnimationFrame(this.processVideo)

    }

    console.log("VideoProcessing class instance is ready.")

    this.initUI(options)

    if (options.injectVideo === null) {
      this.startCamera()
    }

  }

  set setVc(vc) {
    this.vc = vc
  }

  /**
   * @description For now run own video tag for webcam access.
   */
  startCamera() {

    var root = this

    if (this.streaming) return
    navigator.mediaDevices.getUserMedia({video: true, audio: false,})
      .then((s) => {
        root.stream = s
        this.video.srcObject = s
        this.video.play()
      })
      .catch(function(err) {
        console.log("An error occured! " + err)
      })

    this.video.addEventListener("canplay", () => {
      if (!this.streaming) {
        root.height = this.video.videoHeight / (this.video.videoWidth/root.width)
        this.video.setAttribute("width", root.width)
        this.video.setAttribute("height", root.height)
        root.streaming = true
        root.vc = new cv.VideoCapture(this.video)
      }
      root.startVideoProcessing()
    }, false)

  }

  injectVideo (injectedVideo) {

    /**
     * @description Solution for injected video
     * (already prepared - playing video)
     * injectVideo is method for setup by calling
     * other way will be inject video object intro
     * constructor if options flag is `true`.
     */
    var root = this
    this.video = injectedVideo
    this.height = this.video.videoHeight / (this.video.videoWidth/root.width)
    this.video.setAttribute("width", root.width)
    this.video.setAttribute("height", root.height)
    this.streaming = true
    this.stream = window.STREAM
    this.video.classList.remove("hidden")
    this.setVc = new cv.VideoCapture(injectedVideo)
    root.startVideoProcessing()

    // setTimeout(()=> {
    //root.startVideoProcessing()
    //}, 1500)

  }

  initUI(options) {

    var root = this

    document.getElementById("vp-debug").appendChild(this.stats.domElement)

    this.controls = {
      filter: "passThrough",
      setFilter: (filter) => {
        this.filter = filter
        root.filterName.innerHTML = this.filters[filter]
      },
      passThrough: function() { this.setFilter("passThrough") },
      gray: function() { this.setFilter("gray") },
      hsv: function() { this.setFilter("hsv") },
      inRange: function() {
        console.log("this.setFilter => ", this.setFilter)
        this.setFilter("inRange")
        console.log("this.filter => ", this.filter)

      },
      inRangeLow: 75,
      inRangeHigh: 150,
      threshold: function() { this.setFilter("threshold") },
      thresholdValue: 100,
      adaptiveThreshold: function() { this.setFilter("adaptiveThreshold") },
      adaptiveBlockSize: 3,
      gaussianBlur: function() { this.setFilter("gaussianBlur") },
      gaussianBlurSize: 7,
      medianBlur: function() { this.setFilter("medianBlur") },
      medianBlurSize: 5,
      bilateralFilter: function() { this.setFilter("bilateralFilter") },
      bilateralFilterDiameter: 5,
      bilateralFilterSigma: 75,
      sobel: function() { this.setFilter("sobel") },
      sobelSize: 3,
      scharr: function() { this.setFilter("scharr") },
      laplacian: function() { this.setFilter("laplacian") },
      laplacianSize: 3,
      canny: function() { this.setFilter("canny") },
      cannyThreshold1: 150,
      cannyThreshold2: 300,
      cannyApertureSize: 3,
      cannyL2Gradient: false,
      contours: function() { this.setFilter("contours") },
      contoursMode: cv.RETR_CCOMP,
      contoursMethod: cv.CHAIN_APPROX_SIMPLE,
      calcHist: function() { this.setFilter("calcHist") },
      equalizeHist: function() { this.setFilter("equalizeHist") },
      backprojection: function() { this.setFilter("backprojection") },
      backprojectionRangeLow: 0,
      backprojectionRangeHigh: 150,
      morphology: function () { this.setFilter("morphology") },
      morphologyShape: cv.MORPH_RECT,
      morphologyOp: cv.MORPH_ERODE,
      morphologySize: 5,
      morphologyBorderType: cv.BORDER_CONSTANT,
    }

    if (options.ignoreDataGui === true) {
      return;
    }

    let gui = new dat.GUI({ autoPlace: false, })
    let guiContainer = document.getElementById("guiContainer")
    guiContainer.innerHTML = ""
    guiContainer.appendChild(gui.domElement)

    let lastFolder = null
    function closeLastFolder(folder) {
      if (lastFolder != null && lastFolder != folder) {
        lastFolder.close()
      }
      lastFolder = folder
    }

    let passThrough = gui.add(this.controls, "passThrough").name(root.filters["passThrough"]).onChange(() => {
      this.controls.filter = "passThrough"
      closeLastFolder(null)
    })
    console.log(passThrough)

    let colorConversion = gui.addFolder("Color Conversion")
    colorConversion.add(this.controls, "gray").name(root.filters["gray"]).onChange(() => {
      this.controls.filter = "gray"
      closeLastFolder(null)
    })

    colorConversion.add(this.controls, "hsv").name(root.filters["hsv"]).onChange(() => {
      this.controls.filter = "hsv"
      closeLastFolder(null)
    })

    let inRange = colorConversion.addFolder(root.filters["inRange"])
    inRange.domElement.onclick = () => {
      closeLastFolder(inRange)
      this.controls.filter = "inRange"
      root.controls.inRange()
    }

    inRange.add(root.controls, "inRangeLow", 0, 255, 1).name("lower boundary")
    inRange.add(root.controls, "inRangeHigh", 0, 255, 1).name("higher boundary")

    // let geometricTransformations = gui.addFolder('Geometric Transformations')
    // TODO

    let thresholding = gui.addFolder("Thresholding")

    let threshold = thresholding.addFolder(this.filters["threshold"])
    threshold.domElement.onclick = () => {
      this.controls.filter = "threshold"
      closeLastFolder(threshold)
      this.controls.threshold()
    }
    threshold.add(this.controls, "thresholdValue", 0, 200, 1).name("threshold value")

    let adaptiveThreshold = thresholding.addFolder(this.filters["adaptiveThreshold"])
    adaptiveThreshold.domElement.onclick = () => {
      closeLastFolder(adaptiveThreshold)
      this.controls.filter = "adaptiveThreshold"
      this.controls.adaptiveThreshold()
    }
    adaptiveThreshold.add(this.controls, "adaptiveBlockSize", 3, 99, 1).name("block size").onChange((value) => { if (value % 2 === 0) this.controls.adaptiveBlockSize = value + 1})

    let smoothing = gui.addFolder("Smoothing")

    let gaussianBlur = smoothing.addFolder(this.filters["gaussianBlur"])
    gaussianBlur.domElement.onclick = () => {
      closeLastFolder(gaussianBlur)
      this.controls.filter = "gaussianBlur"
      this.controls.gaussianBlur()
    }
    gaussianBlur.add(this.controls, "gaussianBlurSize", 7, 99, 1).name("kernel size").onChange((value) => { if (value % 2 === 0) this.controls.gaussianBlurSize = value + 1})

    let medianBlur = smoothing.addFolder(this.filters["medianBlur"])
    medianBlur.domElement.onclick = () => {
      closeLastFolder(medianBlur)
      this.controls.medianBlur()
    }
    medianBlur.add(this.controls, "medianBlurSize", 3, 99, 1).name("kernel size").onChange((value) => { if (value % 2 === 0) this.controls.medianBlurSize = value + 1})

    let bilateralFilter = smoothing.addFolder(this.filters["bilateralFilter"])
    bilateralFilter.domElement.onclick = () => {
      closeLastFolder(bilateralFilter)
      this.controls.filter = "bilateralFilter"
      this.controls.bilateralFilter()
    }
    bilateralFilter.add(this.controls, "bilateralFilterDiameter", 1, 15, 1).name("diameter")
    bilateralFilter.add(this.controls, "bilateralFilterSigma", 1, 255, 1).name("sigma")

    let morphology = gui.addFolder("Morphology")
    morphology.domElement.onclick = () => {
      closeLastFolder(morphology)
      this.controls.filter = "morphology"
      this.controls.morphology()
    }
    morphology.add(this.controls, "morphologyOp", {"MORPH_ERODE": cv.MORPH_ERODE, "MORPH_DILATE": cv.MORPH_DILATE, "MORPH_OPEN ": cv.MORPH_OPEN, "MORPH_CLOSE": cv.MORPH_CLOSE, "MORPH_GRADIENT": cv.MORPH_GRADIENT, "MORPH_TOPHAT": cv.MORPH_TOPHAT, "MORPH_BLACKHAT": cv.MORPH_BLACKHAT,}).name("operation")
    morphology.add(this.controls, "morphologyShape", {"MORPH_RECT": cv.MORPH_RECT, "MORPH_CROSS": cv.MORPH_CROSS, "MORPH_ELLIPSE": cv.MORPH_ELLIPSE,}).name("shape")
    morphology.add(this.controls, "morphologySize", 1, 15, 1).name("kernel size").onChange(function(value) { if (value % 2 === 0) root.controls.morphologySize = value + 1})
    morphology.add(this.controls, "morphologyBorderType", {"BORDER_CONSTANT": cv.BORDER_CONSTANT, "BORDER_REPLICATE": cv.BORDER_REPLICATE, "BORDER_REFLECT": cv.BORDER_REFLECT, "BORDER_REFLECT_101": cv.BORDER_REFLECT_101,}).name("boarder type")

    let gradients = gui.addFolder("Gradients")
    let sobel = gradients.addFolder(this.filters["sobel"])

    sobel.domElement.onclick = () => {
      closeLastFolder(sobel)
      this.controls.filter = "sobel"
      this.controls.sobel()
    }

    sobel.add(this.controls, "sobelSize", 3, 19, 1).name("kernel size").onChange((value) => {
      if (value % 2 === 0) root.controls.sobelSize = value + 1
    })

    gradients.add(this.controls, "scharr").name(this.filters["scharr"]).onChange(() => {
      closeLastFolder(null)
      this.controls.filter = "scharr"
    })

    let laplacian = gradients.addFolder(this.filters["laplacian"])
    laplacian.domElement.onclick = () => {
      closeLastFolder(laplacian)
      this.controls.filter = "laplacian"
      this.controls.laplacian()
    }
    laplacian.add(this.controls, "laplacianSize", 1, 19, 1).name("kernel size").onChange((value) => {
      if (value % 2 === 0) root.controls.laplacianSize = value + 1
    })

    let canny = gui.addFolder(this.filters["canny"])
    canny.domElement.onclick = () => {
      closeLastFolder(canny)
      this.controls.filter = "canny"
      this.controls.canny()
    }
    canny.add(this.controls, "cannyThreshold1", 1, 500, 1).name("threshold1")
    canny.add(this.controls, "cannyThreshold2", 1, 500, 1).name("threshold2")
    canny.add(this.controls, "cannyApertureSize", 3, 7, 1).name("aperture size").onChange(function(value) { if (value % 2 === 0) root.controls.cannyApertureSize = value + 1})
    canny.add(this.controls, "cannyL2Gradient").name("l2 gradient")

    let contours = gui.addFolder(this.filters["contours"])
    contours.domElement.onclick = () => {
      closeLastFolder(contours)
      this.controls.filter = "contours"
      root.controls.contours()
    }
    contours.add(root.controls, "contoursMode", {"RETR_EXTERNAL": cv.RETR_EXTERNAL, "RETR_LIST": cv.RETR_LIST, "RETR_CCOMP": cv.RETR_CCOMP, "RETR_TREE": cv.RETR_TREE,}).name("mode")
    contours.add(root.controls, "contoursMethod", {"CHAIN_APPROX_NONE": cv.CHAIN_APPROX_NONE, "CHAIN_APPROX_SIMPLE": cv.CHAIN_APPROX_SIMPLE, "CHAIN_APPROX_TC89_L1": cv.CHAIN_APPROX_TC89_L1, "CHAIN_APPROX_TC89_KCOS": cv.CHAIN_APPROX_TC89_KCOS,}).name("method")

    let histograms = gui.addFolder("Histograms")
    histograms.add(root.controls, "calcHist").name(root.filters["calcHist"]).onChange(() => {
      closeLastFolder(null)
      this.controls.filter = "calcHist"
    })
    histograms.add(this.controls, "equalizeHist").name(root.filters["equalizeHist"]).onChange(() => {
      closeLastFolder(null)
      this.controls.filter = "equalizeHist"
    })

    let backprojection = histograms.addFolder(root.filters["backprojection"])
    backprojection.domElement.onclick = () => {
      closeLastFolder(backprojection)
      this.controls.filter = "backprojection"
      root.controls.backprojection()
    }
    backprojection.add(root.controls, "backprojectionRangeLow", 0, 255, 1).name("range low")
    backprojection.add(root.controls, "backprojectionRangeHigh", 0, 255, 1).name("range high")
  }

  backprojection(src) {
    if (this.lastFilter !== "backprojection") {
      if (this.base instanceof cv.Mat)
        this.base.delete()
      this.base = src.clone()
      cv.cvtColor(this.base, this.base, cv.COLOR_RGB2HSV, 0)
    }
    cv.cvtColor(src, this.dstC3, cv.COLOR_RGB2HSV, 0)
    let baseVec = new cv.MatVector(), targetVec = new cv.MatVector()
    baseVec.push_back(this.base)
    targetVec.push_back(this.dstC3)
    let mask = new cv.Mat(), hist = new cv.Mat()
    let channels = [0,], histSize = [50,]
    let ranges
    if (this.controls.backprojectionRangeLow < this.controls.backprojectionRangeHigh)
      ranges = [this.controls.backprojectionRangeLow, this.controls.backprojectionRangeHigh,]
    else
      return src
    cv.calcHist(baseVec, channels, mask, hist, histSize, ranges)
    cv.normalize(hist, hist, 0, 255, cv.NORM_MINMAX)
    cv.calcBackProject(targetVec, channels, hist, this.dstC1, ranges, 1)
    baseVec.delete()
    targetVec.delete()
    mask.delete()
    hist.delete()
    return this.dstC1
  }

  erosion(src) {
    let kernelSize = this.controls.erosionSize
    let kernel = cv.Mat.ones(kernelSize, kernelSize, cv.CV_8U)
    let color = new cv.Scalar()
    cv.erode(src, this.dstC4, kernel, {x: -1, y: -1,}, 1, Number(this.controls.erosionBorderType), color)
    kernel.delete()
    return this.dstC4
  }

  dilation(src) {
    let kernelSize = this.controls.dilationSize
    let kernel = cv.Mat.ones(kernelSize, kernelSize, cv.CV_8U)
    let color = new cv.Scalar()
    cv.dilate(src, this.dstC4, kernel, {x: -1, y: -1,}, 1, Number(this.controls.dilationBorderType), color)
    kernel.delete()
    return this.dstC4
  }

  morphology(src) {
    let kernelSize = this.controls.morphologySize
    let kernel = cv.getStructuringElement(Number(this.controls.morphologyShape), {width: kernelSize, height: kernelSize,})
    let color = new cv.Scalar()
    let op = Number(this.controls.morphologyOp)
    let image = src
    if (op === cv.MORPH_GRADIENT || op === cv.MORPH_TOPHAT || op === cv.MORPH_BLACKHAT) {
      cv.cvtColor(src, this.dstC3, cv.COLOR_RGBA2RGB)
      image = this.dstC3
    }
    cv.morphologyEx(image, this.dstC4, op, kernel, {x: -1, y: -1,}, 1, Number(this.controls.morphologyBorderType), color)
    kernel.delete()
    return this.dstC4
  }

  stopVideoProcessing() {

    if (this.src != null && !this.src.isDeleted()) this.src.delete()
    if (this.dstC1 != null && !this.dstC1.isDeleted()) this.dstC1.delete()
    if (this.dstC3 != null && !this.dstC3.isDeleted()) this.dstC3.delete()
    if (this.dstC4 != null && !this.dstC4.isDeleted()) this.dstC4.delete()

  }

  stopCamera() {
    if (!this.streaming) return
    this.stopVideoProcessing()
    document.getElementById(this.canvasOutputFlagStr).getContext("2d").clearRect(0, 0, this.width, this.height)
    this.video.pause()
    this.video.srcObject=null
    this.stream.getVideoTracks()[0].stop()
    this.streaming = false
  }

  contours(src) {
    cv.cvtColor(src, this.dstC1, cv.COLOR_RGBA2GRAY)
    cv.threshold(this.dstC1, this.dstC4, 120, 200, cv.THRESH_BINARY)
    let contours  = new cv.MatVector()
    let hierarchy = new cv.Mat()
    cv.findContours(this.dstC4, contours, hierarchy, Number(this.controls.contoursMode), Number(this.controls.contoursMethod), {x: 0, y: 0,})
    this.dstC3.delete()
    this.dstC3 = cv.Mat.ones(this.height, this.width, cv.CV_8UC3)
    for (let i = 0; i < contours.size();++i)
    {
      let color = this.contoursColor[i]
      cv.drawContours(this.dstC3, contours, i, color, 1, cv.LINE_8, hierarchy)
    }
    contours.delete()
    hierarchy.delete()
    return this.dstC3
  }

  calcHist(src) {
    cv.cvtColor(src, this.dstC1, cv.COLOR_RGBA2GRAY)
    let srcVec = new cv.MatVector()
    srcVec.push_back(this.dstC1)
    let scale = 2
    let channels = [0,], histSize = [src.cols/scale,], ranges = [0,255,]
    let hist = new cv.Mat(), mask = new cv.Mat(), color = new cv.Scalar(0xfb, 0xca, 0x04, 0xff)
    cv.calcHist(srcVec, channels, mask, hist, histSize, ranges)
    let result = cv.minMaxLoc(hist, mask)
    var max = result.maxVal
    cv.cvtColor(this.dstC1, this.dstC4, cv.COLOR_GRAY2RGBA)
    // draw histogram on src
    for(var i = 0; i < histSize[0]; i++)
    {
      var binVal = hist.data32F[i] * src.rows / max
      cv.rectangle(this.dstC4, {x: i * scale, y: src.rows - 1,}, {x: (i + 1) * scale - 1, y: src.rows - binVal/3,}, color, cv.FILLED)
    }
    srcVec.delete()
    mask.delete()
    hist.delete()
    return this.dstC4
  }

  equalizeHist(src) {
    cv.cvtColor(src, this.dstC1, cv.COLOR_RGBA2GRAY, 0)
    cv.equalizeHist(this.dstC1, this.dstC1)
    return this.dstC1
  }

  laplacian(src) {
    var mat = new cv.Mat(this.height, this.width, cv.CV_8UC1)
    cv.cvtColor(src, mat, cv.COLOR_RGB2GRAY)
    cv.Laplacian(mat, this.dstC1, cv.CV_8U, this.controls.laplacianSize, 1, 0, cv.BORDER_DEFAULT)
    mat.delete()
    return this.dstC1
  }

  startVideoProcessing() {

    if (!this.streaming) { console.warn("Please startup your webcam"); return }
    this.stopVideoProcessing()
    this.src = new cv.Mat(this.height, this.width, cv.CV_8UC4)
    this.dstC1 = new cv.Mat(this.height, this.width, cv.CV_8UC1)
    this.dstC3 = new cv.Mat(this.height, this.width, cv.CV_8UC3)
    this.dstC4 = new cv.Mat(this.height, this.width, cv.CV_8UC4)
    requestAnimationFrame(this.processVideo)

  }

  passThrough(src) {
    return src
  }

  gray(src) {
    cv.cvtColor(src, this.dstC1, cv.COLOR_RGBA2GRAY)
    return this.dstC1
  }

  hsv(src) {
    cv.cvtColor(src, this.dstC3, cv.COLOR_RGBA2RGB)
    cv.cvtColor(this.dstC3, this.dstC3, cv.COLOR_RGB2HSV)
    return this.dstC3
  }

  canny(src) {
    cv.cvtColor(src, this.dstC1, cv.COLOR_RGBA2GRAY)
    cv.Canny(this.dstC1, this.dstC1, this.controls.cannyThreshold1, this.controls.cannyThreshold2, this.controls.cannyApertureSize, this.controls.cannyL2Gradient)
    return this.dstC1
  }

  inRange(src) {
    let lowValue = this.controls.inRangeLow
    let lowScalar = new cv.Scalar(lowValue, lowValue, lowValue, 255)
    let highValue = this.controls.inRangeHigh
    let highScalar = new cv.Scalar(highValue, highValue, highValue, 255)
    let low = new cv.Mat(this.height, this.width, src.type(), lowScalar)
    let high = new cv.Mat(this.height, this.width, src.type(), highScalar)
    cv.inRange(src, low, high, this.dstC1)
    low.delete()
    high.delete()
    return this.dstC1
  }

  threshold(src) {
    cv.threshold(src, this.dstC4, this.controls.thresholdValue, 200, cv.THRESH_BINARY)
    return this.dstC4
  }

  adaptiveThreshold(src) {
    let mat = new cv.Mat(this.height, this.width, cv.CV_8U)
    cv.cvtColor(src, mat, cv.COLOR_RGBA2GRAY)
    cv.adaptiveThreshold(mat, this.dstC1, 200, cv.ADAPTIVE_THRESH_GAUSSIAN_C, cv.THRESH_BINARY, Number(this.controls.adaptiveBlockSize), 2)
    mat.delete()
    return this.dstC1
  }

  gaussianBlur(src) {
    cv.GaussianBlur(src, this.dstC4, {width: this.controls.gaussianBlurSize, height: this.controls.gaussianBlurSize,}, 0, 0, cv.BORDER_DEFAULT)
    return this.dstC4
  }

  bilateralFilter(src) {
    let mat = new cv.Mat(this.height, this.width, cv.CV_8UC3)
    cv.cvtColor(src, mat, cv.COLOR_RGBA2RGB)
    cv.bilateralFilter(mat, this.dstC3, this.controls.bilateralFilterDiameter, this.controls.bilateralFilterSigma, this.controls.bilateralFilterSigma, cv.BORDER_DEFAULT)
    mat.delete()
    return this.dstC3
  }

  medianBlur(src) {
    cv.medianBlur(src, this.dstC4, this.controls.medianBlurSize)
    return this.dstC4
  }

  sobel(src) {
    var mat = new cv.Mat(this.height, this.width, cv.CV_8UC1)
    cv.cvtColor(src, mat, cv.COLOR_RGB2GRAY, 0)
    cv.Sobel(mat, this.dstC1, cv.CV_8U, 1, 0, this.controls.sobelSize, 1, 0, cv.BORDER_DEFAULT)
    mat.delete()
    return this.dstC1
  }

  scharr(src) {
    var mat = new cv.Mat(this.height, this.width, cv.CV_8UC1)
    cv.cvtColor(src, mat, cv.COLOR_RGB2GRAY, 0)
    cv.Scharr(mat, this.dstC1, cv.CV_8U, 1, 0, 1, 0, cv.BORDER_DEFAULT)
    mat.delete()
    return this.dstC1
  }

}
