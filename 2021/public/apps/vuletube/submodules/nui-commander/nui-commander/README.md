
## [WIP] ##


# nui-commander #
 I will use motion detect on video stream to create and control UI Menu system with progress bar control, actions-events, popup or creating dom element or canvas staff.  Interface must be drawn on video tag in `AR` manner. Point is to create total manipulation only with your hands in the air.

![screenshot](https://github.com/zlatnaspirala/nui-commander/blob/master/screenshot.jpg)

 DOM elements are on whole document size and indicate at the moment .
 On canvas indicator table blocks canvas object will accumulate movement action and after some little period on
 idle it ill fall to the opacity `0`.

### TO DO => ###

    - Test performance for minimum 5 uniq project detect motions library.
    - Choose the one how puts less strain on the CPU.


 ### Structure: ###

   - web instance [priory]
       - must work on chrome , opera , safari , firefox and all mobile version.
       - video stream basic movement motion detect
       - make small canvas object drawer and create interface and logic for actions(some method call)
       - must have a excellent input output logic to be reusable in many ways.

   -native desktop bonus tools for basic computer commands
    with cef implementaion.

      - Visual studio -> c#  for Windows
      - Cef c-make -> xcode for Macos



### LICENCE: ###

  Based on project:
  https://github.com/soundstep/magic-xylophone
  MIT

