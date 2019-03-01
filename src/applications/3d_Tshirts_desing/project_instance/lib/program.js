
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
function PROGRAM(s,c){var bE=this;this.DRAW_INTERVAL=APPLICATION.PROGRAM.RENDER_SPEED;this.UPDATE_INTERVAL=15;this.BASELINE="\x6D\x69\x64\x64\x6C\x65";this.GLOBAL_TRANSLATE=0;this.DO_GLOBAL_TRANSLATE=false;bE.TRANSLATE=function(bF){bE.GLOBAL_TRANSLATE=bF;bE.DO_GLOBAL_TRANSLATE=true};this.GAME_MAP=function(){var bG=this;this.TOTAL_LEFT=2;this.TOTAL_RIGHT=4;this.TOTAL_UP=2;this.TOTAL_DOWN=4;this.LEFT=function(){return bG.TOTAL_LEFT*-VIEW.W()};this.WIDTH=function(){return bG.TOTAL_RIGHT*VIEW.W()};this.UP=function(){return bG.TOTAL_UP*-VIEW.H()};this.HEIGHT=function(){return bG.TOTAL_DOWN*VIEW.W()}};bE.MAP= new bE.GAME_MAP();this.AUTO_UPDATE= new Array();this.ENGINE= new ENGINE(c);s.textAlign="\x73\x74\x61\x72\x74";s.textBaseline=this.BASELINE;this.DRAW=function(){s.clearRect(bE.MAP.LEFT(),bE.MAP.UP(),bE.MAP.WIDTH(),bE.MAP.HEIGHT());if(bE.DO_GLOBAL_TRANSLATE==true){bE.DO_GLOBAL_TRANSLATE=false;s.translate(bE.GLOBAL_TRANSLATE,0)};bE.ENGINE.DRAW_MODULES(s);setTimeout(function(){bE.UPDATE()},this.UPDATE_INTERVAL)};this.UPDATE=function(){bE.ENGINE.UPDATE_MODULES();for(var bF=0;bF<this.AUTO_UPDATE;bF++){ROOT.AUTO_UPDATE[bF].UPDATE()};setTimeout(function(){bE.DRAW()},this.DRAW_INTERVAL)}}