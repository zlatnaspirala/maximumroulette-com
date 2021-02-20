
# opencv-starter #

  Implement opencv for web platform. Make it like a npm package at the end (module). Easy implementation like git submodules manir.

 - download link {/version/opencv.js} :
   `https://docs.opencv.org/3.4.0/opencv.js`

 - Run program on:
   `src\ecma6\index.html`


![screenshot](https://github.com/zlatnaspirala/opencv-starter/blob/master/screenshot.png)
![screenshot](https://github.com/zlatnaspirala/opencv-starter/blob/master/alternative-youtube.png)

### About running ###


 Must be script type module.

```js
  import { cvjsLoader, asyncLoad } from "./loader.js"
  import CvStarter from './main.js'

  cvjsLoader(function() {

    // `opencvjs` is ready for use.

    const options = {
      videoProcessing: true
    }

    let cvStarter = new CvStarter(options)

  })
```

### Proccedure from npm package ###
 On waiting , need browser part on nodejs ....

```
  npm init
  npm publish
  SOME UPDATE
  npm version 1.0.1
  npm publish
```

### EXTERNAL LICENCE ###

  Source code for base class VideoProcessing used from =>
  - https://codepen.io/huningxin/pen/wqBvRo [wip]
  - https://codepen.io/huningxin/pen/EvmMYN [next]
