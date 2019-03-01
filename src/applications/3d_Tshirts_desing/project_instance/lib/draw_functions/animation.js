
/**
Copyright 2016, zlatnaspirala@gmail.com
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are
met:

    * Redistributions of source code must retain the above copyright
notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above
copyright notice, this list of conditions and the following disclaimer
in the documentation and/or other materials provided with the
distribution.
    * Neither the name of zlatnaspirala@gmail.com nor the names of its
contributors may be used to endorse or promote products derived from
this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
'AS IS' AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*//***************************************************************************/
/*                                                                         */
/*  This obfuscated code was created by Javascript Obfuscator Free Version.*/
/*  Javascript Obfuscator Free Version can be downloaded here              */
/*  http://javascriptobfuscator.com                                        */
/*                                                                         */
/***************************************************************************/
function ANIMATION(F,H,u,C,B,v,t,z,y,E,D,A){var G=F;this.TYPE=H;this.DRAW_TYPE="\x50\x41\x52\x45\x4E\x54";this.ROTATE={ENABLE:true,ANGLE:0};if(D!==undefined){this.speed=D;this.initial_speed=D}else {this.speed=null};if(t=="\x79\x65\x73"){this.blink= new OSCILLATOR(z,y,E)}else {this.blink=null};if(v===undefined){var w=SYS.MATH.RANDOM_INT_FROM_TO(1,666);var x=SYS.MATH.RANDOM_INT_FROM_TO(666,1234);this.ID="\x49\x44"+(w+x)+x*66}else {this.ID=v};this.X=function(){return B.POSITION.X()};this.Y=function(){return B.POSITION.Y()};this.W=function(){return B.DIMENSION.WIDTH()};this.H=function(){return B.DIMENSION.HEIGHT()};for(var I=0;I<C.source.length;I++){window["\x66\x5F"+this.ID+I]= new Image();window["\x66\x5F"+this.ID+I].src="\x72\x65\x73\x2F\x61\x6E\x69\x6D\x61\x74\x69\x6F\x6E\x73\x2F"+C.source[I];window["\x66\x5F"+this.ID+I].onload=function(){SYS.RES.SUM_OF_LOADED_IMAGES++}};this.NUMBERS_OF_FRAMES=C.source.length;if(u==null){this.CURRENT_FRAME=0}else {this.CURRENT_FRAME=u};this.SET_SPEED=function(J){if( typeof J!=="\x75\x6E\x64\x65\x66\x69\x6E\x65\x64"&& typeof J!=null|| typeof J!="\x6E\x75\x6D\x62\x65\x72"){this.initial_speed=J}else {SYS.DEBUG.WARNING("\x20\x53\x50\x45\x45\x44\x20\x41\x52\x52\x47\x53\x20\x6D\x75\x73\x74\x20\x62\x65\x20\x6E\x75\x6D\x62\x65\x72\x20\x2E")}};this.DRAW=function(M,O,P,N,L,K){if(K=="\x79\x65\x73"){G.globalAlpha=Math.sin(this.blink.get())};if(this.TYPE=="\x4C\x4F\x4F\x50"){if(this.DRAW_TYPE="\x50\x41\x52\x45\x4E\x54"){if(this.ROTATE.ENABLE==false){G.drawImage(window["\x66\x5F"+this.ID+this.CURRENT_FRAME],this.X(),this.Y(),this.W(),this.H())}else {drawRotatedImage(window["\x66\x5F"+this.ID+this.CURRENT_FRAME],this.X(),this.Y(),SYS.MATH.TO_RADIANS(this.ROTATE.ANGLE),this.W(),this.H(),G)}}else {if(this.DRAW_TYPE="\x44\x49\x52\x45\x43\x54"){G.drawImage(window["\x66\x5F"+this.ID+M],O,P,N,L)}else {console.log("\x65\x72\x72\x6F\x72\x20\x69\x6E\x20\x64\x72\x61\x77\x20\x6C\x6F\x6F\x70\x20\x2C\x20\x63\x6C\x61\x73\x73\x20\x61\x6E\x69\x6D\x61\x74\x6F\x72\x20"+this.ID+this.CURRENT_FRAME+"\x20\x3C\x3C\x3C\x3C\x3C\x3C\x3C\x3C\x3C\x3C\x3C\x3C\x3C\x3C\x3C\x3C\x3C")}};if(this.CURRENT_FRAME<this.NUMBERS_OF_FRAMES-1){if(this.speed==null){this.CURRENT_FRAME++}else {if(this.speed>0){this.speed--}else {this.CURRENT_FRAME++;this.speed=this.initial_speed}}}else {this.CURRENT_FRAME=0}}else {if(this.TYPE=="\x44\x52\x41\x57\x5F\x46\x52\x41\x4D\x45"){if(this.DRAW_TYPE="\x50\x41\x52\x45\x4E\x54"&&this.CURRENT_FRAME<this.NUMBERS_OF_FRAMES){if(this.ROTATE.ENABLE==false){G.drawImage(window["\x66\x5F"+this.ID+this.CURRENT_FRAME],this.X(),this.Y(),this.W(),this.H())}else {drawRotatedImage(window["\x66\x5F"+this.ID+this.CURRENT_FRAME],this.X(),this.Y(),SYS.MATH.TO_RADIANS(this.ROTATE.ANGLE),this.W(),this.H(),G)}}else {if(this.DRAW_TYPE="\x44\x49\x52\x45\x43\x54"&&this.CURRENT_FRAME<this.NUMBERS_OF_FRAMES){G.drawImage(window["\x66\x5F"+this.ID+M],this.X(),this.Y(),this.W(),this.H())}else {SYS.DEBUG.WARNING("\x65\x72\x72\x6F\x72\x20\x69\x6E\x20\x61\x6E\x69\x6D\x61\x74\x69\x6F\x6E\x20\x64\x72\x61\x77\x20\x70\x72\x6F\x63\x65\x64\x75\x72\x65\x20\x2C\x20\x63\x6C\x61\x73\x73\x20\x61\x6E\x69\x6D\x61\x74\x6F\x72\x20\x73\x61\x79\x73\x20\x3A\x20\x74\x79\x70\x65\x20\x69\x73\x20\x44\x52\x41\x57\x20\x46\x52\x41\x4D\x45\x20\x2E\x20\x74\x68\x69\x73\x20\x69\x73\x20\x69\x64\x20\x3A\x20"+this.ID+"\x3E\x3E\x3E\x6D\x61\x79\x20\x62\x65\x20\x3E\x20\x74\x68\x69\x73\x2E\x43\x55\x52\x52\x45\x4E\x54\x5F\x46\x52\x41\x4D\x45\x3C\x74\x68\x69\x73\x2E\x4E\x55\x4D\x42\x45\x52\x53\x5F\x4F\x46\x5F\x46\x52\x41\x4D\x45\x53\x20\x69\x73\x20\x6E\x6F\x74\x20\x74\x72\x75\x65\x20\x2C\x20\x41\x6C\x73\x6F\x20\x44\x52\x41\x57\x5F\x54\x59\x50\x45\x20\x6D\x75\x73\x74\x20\x62\x65\x20\x50\x41\x52\x45\x4E\x54\x20\x6F\x72\x20\x44\x49\x52\x45\x43\x54\x21")}}}};G.globalAlpha=1}}