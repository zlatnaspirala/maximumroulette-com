/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

function orbit(cx, cy, angle, p) {

  var s = Math.sin(angle);
  var c = Math.cos(angle);
  p.x -= cx;
  p.y -= cy;
  xnew = p.x * c - p.y * s;
  ynew = p.x * s + p.y * c;
  p.x = xnew + cx;
  p.y = ynew + cy;
  return p;

}
