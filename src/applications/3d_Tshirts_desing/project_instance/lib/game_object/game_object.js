
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
function GAME_OBJECT(cz,cy,x,F,w,h,cC,cA){window[""+cz]=this;var cB=this;this.ID=parseFloat(Math.random()*4560000+Math.random()*1230000).toFixed(0);this.PARENT=cy;this.PROGRAM_NAME=cA;this.NAME=cz;this.VISIBLE=true;this.AUTO_UPDATE=true;this.FOCUS=false;this.TYPE_OF_GAME_OBJECT="\x65\x6D\x70\x74\x79";this.ENUMERATION=["\x65\x6D\x70\x74\x79","\x41\x4E\x49\x4D\x41\x54\x49\x4F\x4E","\x54\x45\x58\x54\x5F\x42\x4F\x58","\x50\x41\x54\x52\x49\x43\x4C\x45","\x4E\x4F\x5F\x52\x45\x4E\x44\x45\x52","\x41\x4E\x49\x4D\x41\x54\x49\x4F\x4E\x5F\x54\x45\x58\x54\x5F\x42\x4F\x58","\x41\x4E\x49\x4D\x41\x54\x49\x4F\x4E\x5F\x50\x41\x54\x52\x49\x43\x4C\x45"];this.DESTROY_ON_GAMEMAP_EXIT=true;this.DRAG_STATUS=true;this.DRAG=true;this.DRAG_START_X=0;this.DRAG_START_Y=0;this.DRAG_DELTA=0;this.zoom_scale=0;this.globalAlpha=1;if(( typeof x&& typeof F)==="\x6E\x75\x6D\x62\x65\x72"){if( typeof cC==="\x6E\x75\x6D\x62\x65\x72"){this.POSITION= new POSITION(x,F,x,F,cC)}else {this.POSITION= new POSITION(x,F,x,F,1)}}else {this.POSITION= new POSITION(10,10,200,200,1)};if(( typeof w&& typeof h)==="\x6E\x75\x6D\x62\x65\x72"){this.DIMENSION= new DIMENSION(w,h)}else {this.DIMENSION= new DIMENSION(10,10)};this.POSITION.parentModul=cy;this.POSITION.parentGameObject=cz;this.POSITION.PROGRAM_NAME=cA;this.POSITION.DIMENSION=this.DIMENSION;this.ANIMATION=null;this.CREATE_ANIMATION=function(cM,cN,cE,cJ,cF,cD,cH,cG,cL,cK,cI){this.ANIMATION= new ANIMATION(cM,cN,cE,cJ,cB,cF,cD,cH,cG,cL,cK,cI);this.TYPE_OF_GAME_OBJECT="\x41\x4E\x49\x4D\x41\x54\x49\x4F\x4E"};this.CREATE_PLAYER=function(cO){cB.PLAYER={TYPE:cO,X:0,Y:0,SPEED:1,CONTROL:{RIGHT:false,LEFT:false,JUMP:false,DOWN:false},POSITION:cB.POSITION,BREAK_AT_MOMENT_STATUS:false};window["\x50\x4C\x41\x59\x45\x52"]=cB.PLAYER;this.POSITION.PLAYER=cB.PLAYER;if(cO=="\x50\x4C\x41\x54\x46\x4F\x52\x4D\x45\x52"){window[cA].ENGINE.GAME_TYPE="\x50\x4C\x41\x54\x46\x4F\x52\x4D\x45\x52";cB.POSITION.TYPE="\x50\x4C\x41\x59\x45\x52"}else {window[cA].ENGINE.GAME_TYPE="\x4E\x4F\x52\x4D\x41\x4C\x5F\x43\x4F\x4E\x54\x52\x4F\x4C";cB.POSITION.TYPE="\x50\x4C\x41\x59\x45\x52"}};this.TEXTBOX=null;this.TRACK_KEY=null;this.CREATE_TEXTBOX=function(cR,cQ,cP,cS){if(( typeof cR!="\x75\x6E\x64\x65\x66\x69\x6E\x65\x64"&& typeof cQ!="\x75\x6E\x64\x65\x66\x69\x6E\x65\x64"&& typeof cP!="\x75\x6E\x64\x65\x66\x69\x6E\x65\x64"&& typeof cS!="\x75\x6E\x64\x65\x66\x69\x6E\x65\x64")){this.TEXTBOX= new RECT(cR,cB,cQ,cP,cS);this.TYPE_OF_GAME_OBJECT="\x54\x45\x58\x54\x5F\x42\x4F\x58";this.TRACK_KEY=true;this.TEXTBOX.TEXT=cR;this.TEXTBOX.TEXT+=window[cB.PROGRAM_NAME].ENGINE.KEYBOARD.CAPTURE_CHAR;this.FOCUS=true;cB.EDITOR.BUTTONS[6].text="\x52\x65\x6D\x6F\x76\x65\x20\x74\x65\x78\x74\x62\x6F\x78"}else {SYS.DEBUG.WARNING("\x54\x45\x58\x54\x5F\x42\x4F\x58\x20\x65\x72\x72\x6F\x72\x20\x69\x6E\x20\x63\x6F\x6E\x73\x74\x72\x75\x63\x74\x6F\x72\x20\x3A\x20\x28\x20\x74\x65\x78\x74\x20\x2C\x20\x72\x61\x64\x69\x75\x73\x20\x2C\x20\x63\x6F\x6C\x6F\x72\x2C\x20\x74\x65\x78\x74\x43\x6F\x6C\x6F\x72\x29\x20\x63\x61\x6E\x74\x20\x62\x65\x20\x75\x6E\x64\x65\x66\x69\x6E\x65\x64\x2E")}};this.DESTROY_AFTER=null;this.DESTROY_ME_AFTER_X_SECUND=function(cU,cz,x,cT){this.DESTROY_AFTER=cU*20;if(APPLICATION.EDITOR==true){DESTROY_DELAY(cz,cU,cB.PARENT,cB.PROGRAM_NAME)}};this.COLLISION=null;this.POSITION.STATIC=false;this.COLIDER=function(cW,cV){this.TYPE=cW;if( typeof cV==="\x6E\x75\x6D\x62\x65\x72"){this.margin=cV}else {this.margin=1.02}};this.CREATE_COLLISION=function(cW,cV){cB.COLLISION= new cB.COLIDER(cW,cV);cB.EDITOR.BUTTONS[3].text="\x52\x65\x6D\x6F\x76\x65\x20\x63\x6F\x6C\x6C\x69\x73\x69\x6F\x6E"};this.EDITOR={SELECTED:false,ENABLE:HELLO_WORLD.ENGINE.ENGINE_EDITOR,ACTORS_AREA_HEIGHT:10,ACTOR_BLUE_HOVER:false,ACTOR_GREEN_HOVER:false,ACTOR_CENTER_OSCILATOR: new SYS.MATH.OSCILLATOR(0,2,0.01),ACTOR_START_X:0,ACTOR_START_Y:0,ACTOR_DELTA:0,ACTOR_X_IN_MOVE:false,ACTOR_Y_IN_MOVE:false,ACTOR_DRAG_RECT_DIM: new DIMENSION(5,5),ACTOR_DRAG_RECT_POS:this.POSITION,ACTOR_DRAG:false,BUTTONS:[ new RIGHT_MENU_BUTTON("\x44\x65\x73\x74\x72\x6F\x79\x20\x67\x61\x6D\x65\x4F\x62\x6A\x65\x63\x74",0,"\x31"), new RIGHT_MENU_BUTTON("\x44\x65\x73\x74\x72\x6F\x79\x20\x61\x66\x74\x65\x72\x20\x73\x65\x63\x75\x6E\x64\x20",20,"\x32"), new RIGHT_MENU_BUTTON("\x41\x64\x64\x20\x61\x6E\x69\x6D\x61\x74\x69\x6F\x6E\x20",40,"\x33"), new RIGHT_MENU_BUTTON("\x41\x64\x64\x20\x63\x6F\x6C\x6C\x69\x73\x69\x6F\x6E\x20",60,"\x34"), new RIGHT_MENU_BUTTON("\x41\x74\x61\x63\x68\x20\x70\x6C\x61\x79\x65\x72\x20",80,"\x35","\x72\x65\x73\x2F\x73\x79\x73\x74\x65\x6D\x2F\x69\x6D\x61\x67\x65\x73\x2F\x68\x74\x6D\x6C\x35\x2F\x70\x6C\x75\x73\x2E\x70\x6E\x67"), new RIGHT_MENU_BUTTON("\x41\x64\x64\x20\x70\x61\x72\x74\x69\x63\x6C\x65\x20",100,"\x36","\x72\x65\x73\x2F\x73\x79\x73\x74\x65\x6D\x2F\x69\x6D\x61\x67\x65\x73\x2F\x68\x74\x6D\x6C\x35\x2F\x70\x61\x72\x74\x69\x63\x6C\x65\x2E\x70\x6E\x67"), new RIGHT_MENU_BUTTON("\x41\x64\x64\x20\x74\x65\x78\x74\x62\x6F\x78\x20",120,"\x37","\x72\x65\x73\x2F\x73\x79\x73\x74\x65\x6D\x2F\x69\x6D\x61\x67\x65\x73\x2F\x68\x74\x6D\x6C\x35\x2F\x74\x65\x78\x74\x62\x6F\x78\x2E\x70\x6E\x67"), new RIGHT_MENU_BUTTON("\x41\x64\x64\x20\x77\x65\x62\x63\x61\x6D\x20\x20",140,"\x38","\x72\x65\x73\x2F\x73\x79\x73\x74\x65\x6D\x2F\x69\x6D\x61\x67\x65\x73\x2F\x68\x74\x6D\x6C\x35\x2F\x48\x54\x4D\x4C\x35\x2D\x44\x65\x76\x69\x63\x65\x2D\x41\x63\x63\x65\x73\x73\x2E\x70\x6E\x67")],GAME_OBJECT_MENU:{VISIBLE:false}};this.WEBCAM=null;this.SET_WEBCAM_VIEW=function(cO,cX){cB.WEBCAM= new Object();cB.WEBCAM.VIDEO=SYS.DOM.E("\x77\x65\x62\x63\x61\x6D");SET_STREAM(cB.WEBCAM.VIDEO);if(cX=="\x47\x41\x4D\x45\x5F\x4F\x42\x4A\x45\x43\x54"){cB.WEBCAM.DIMENSIONS_TYPE="\x47\x41\x4D\x45\x5F\x4F\x42\x4A\x45\x43\x54"}else {cB.WEBCAM.DIMENSIONS_TYPE="\x57\x45\x42\x43\x41\x4D\x5F\x44\x49\x4D\x45\x4E\x53\x49\x4F\x4E";cB.DIMENSION.H=CONVERTOR.PIY_TO_PER(SYS.DOM.E("\x77\x65\x62\x63\x61\x6D").height);cB.DIMENSION.W=CONVERTOR.PIX_TO_PER(SYS.DOM.E("\x77\x65\x62\x63\x61\x6D").width)};if(cO=="\x4E\x4F\x52\x4D\x41\x4C"){cB.TYPE_OF_GAME_OBJECT="\x57\x45\x42\x43\x41\x4D"}else {if(cO=="\x4E\x55\x49"){SYS.DOM.E("\x63\x61\x6E\x76\x61\x73\x2D\x62\x6C\x65\x6E\x64\x65\x64").height=SYS.DOM.E("\x77\x65\x62\x63\x61\x6D").height;SYS.DOM.E("\x63\x61\x6E\x76\x61\x73\x2D\x62\x6C\x65\x6E\x64\x65\x64").width=SYS.DOM.E("\x77\x65\x62\x63\x61\x6D").width;SYS.DOM.E("\x63\x61\x6E\x76\x61\x73\x2D\x72\x65\x6E\x64\x65\x72").height=SYS.DOM.E("\x77\x65\x62\x63\x61\x6D").height;SYS.DOM.E("\x63\x61\x6E\x76\x61\x73\x2D\x72\x65\x6E\x64\x65\x72").width=SYS.DOM.E("\x77\x65\x62\x63\x61\x6D").width;cB.TYPE_OF_GAME_OBJECT="\x57\x45\x42\x43\x41\x4D\x5F\x4E\x55\x49";cB.WEBCAM.BLEND_CANVAS=SYS.DOM.E("\x63\x61\x6E\x76\x61\x73\x2D\x62\x6C\x65\x6E\x64\x65\x64");cB.WEBCAM.RENDER_CANVAS=SYS.DOM.E("\x63\x61\x6E\x76\x61\x73\x2D\x72\x65\x6E\x64\x65\x72");cB.WEBCAM.NOTES=[]}}};this.CREATE_WEBCAM=function(cO,cX,cZ,cY){if( typeof cO!="\x75\x6E\x64\x65\x66\x69\x6E\x65\x64"){if(cO=="\x4E\x55\x49"){cB.SET_WEBCAM_VIEW("\x4E\x55\x49",cX);cB.WEBCAM.numFieldV=cZ;cB.WEBCAM.numFieldH=cY;cB.WEBCAM.BS=cB.WEBCAM.BLEND_CANVAS.getContext("\x32\x64");cB.WEBCAM.RC=cB.WEBCAM.RENDER_CANVAS.getContext("\x32\x64");cB.WEBCAM._N_= new Array();CREATE_MOTION_PARAMETERS(cB);CREATE_MOTION_FIELDS(cB);cB.WEBCAM.HIDE_INDICATED_POINT=true;cB.WEBCAM.DRAW=WEBCAM_DRAW}else {if("\x4E\x4F\x52\x4D\x41\x4C"){cB.SET_WEBCAM_VIEW("\x4E\x4F\x52\x4D\x41\x4C",cX)}}}else {SYS.DEBUG.WARNING("\x50\x6C\x65\x61\x73\x20\x65\x6E\x74\x65\x72\x20\x74\x79\x70\x65\x20\x6F\x66\x20\x77\x65\x62\x63\x61\x6D\x20\x63\x6F\x6D\x70\x6F\x6E\x65\x6E\x74\x20\x2E\x20\x20\x5B\x20\x4E\x55\x49\x20\x2C\x20\x4E\x4F\x52\x4D\x41\x4C\x20\x5D\x20\x20")}};this.DESTROY_WEBCAM=function(){cB.TYPE_OF_GAME_OBJECT="\x4E\x4F\x5F\x52\x45\x4E\x44\x45\x52";cB.WEBCAM.DRAW=function(){};cB.WEBCAM.NOTES=[];cB.WEBCAM.BS=null;cB.WEBCAM.RC=null;cB.WEBCAM._N_=[];delete (cB.WEBCAM);cB.WEBCAM=null};this.GROUP={ADD:function(cz){var dc=window[cB.PROGRAM_NAME].ENGINE.MODULES.ACCESS_MODULE(cB.PARENT).GAME_OBJECTS.ACCESS(cz).POSITION.x;var dd=window[cB.PROGRAM_NAME].ENGINE.MODULES.ACCESS_MODULE(cB.PARENT).GAME_OBJECTS.ACCESS(cz).POSITION.y;var da=cB.GROUP.MASTER_INITIALS.x-dc;var db=cB.GROUP.MASTER_INITIALS.y-dd;cB.GROUP.GROUP_INITIALS.push({x:da,y:db});cB.GROUP.GROUP.push(cz);delete (dc);delete (dd)},GROUP:[],GROUP_INITIALS:[],MASTER:cB.NAME,MASTER_INITIALS:{x:cB.POSITION.x,y:cB.POSITION.y},UPDATE:function(){}};this.EFFECTS={FADE:{IN:function(cU){var de=setTimeout(function(){cB.globalAlpha+=0.02;if(cB.globalAlpha<1){cB.EFFECTS.FADE.IN()}else {cB.globalAlpha=1}},cU)},OUT:function(cU){var de=setTimeout(function(){cB.globalAlpha-=0.02;if(cB.globalAlpha>0){cB.EFFECTS.FADE.OUT()}else {cB.globalAlpha=0}},cU)}},ZOOM:{STATUS_FOR_IN:false,STATUS_FOR_OUT:false,ZOOM_IN_FINISHED:function(){console.log("\x7A\x6F\x6F\x6D\x20\x69\x6E\x20\x20\x2D\x2D\x2D\x2D\x66\x69\x6E\x69\x73\x68\x65\x64\x2E")},ZOOM_OUT_FINISHED:function(){console.log("\x7A\x6F\x6F\x6D\x20\x6F\x75\x74\x20\x2D\x2D\x2D\x2D\x66\x69\x6E\x69\x73\x68\x65\x64\x2E")},VALUE:0.5,IN:function(cU){var cU=cU;this.STATUS_FOR_IN=true;var de=setTimeout(function(){if(cB.zoom_scale<cB.EFFECTS.ZOOM.VALUE){cB.zoom_scale+=0.01;cB.POSITION.SET_POSITION(cB.POSITION.x-cB.zoom_scale,cB.POSITION.y-cB.zoom_scale,"\x44\x49\x41\x4D\x45\x54\x52\x49\x43");cB.DIMENSION.W=cB.DIMENSION.W+cB.zoom_scale*2;cB.DIMENSION.H=cB.DIMENSION.H+cB.zoom_scale*2;cB.EFFECTS.ZOOM.IN(cU)}else {cB.EFFECTS.ZOOM.ZOOM_IN_FINISHED();cB.EFFECTS.ZOOM.STATUS_FOR_IN=false}},cU)},OUT:function(cU){var cU=cU;this.STATUS_FOR_OUT=true;var de=setTimeout(function(){if(cB.POSITION.x<cB.GROUP.MASTER_INITIALS.x){cB.zoom_scale-=0.009;cB.POSITION.SET_POSITION(cB.POSITION.x+cB.zoom_scale,cB.POSITION.y+cB.zoom_scale,"\x44\x49\x41\x4D\x45\x54\x52\x49\x43");cB.DIMENSION.W=cB.DIMENSION.W-cB.zoom_scale*2;cB.DIMENSION.H=cB.DIMENSION.H-cB.zoom_scale*2;cB.EFFECTS.ZOOM.OUT(cU)}else {cB.zoom_scale=0;cB.EFFECTS.ZOOM.ZOOM_OUT_FINISHED();cB.EFFECTS.ZOOM.STATUS_FOR_OUT=false}},cU)}}};this.PARTICLE=null;this.CREATE_PARTICLE=function(cO){cB.PARTICLE= new PARTICLE_FONTAN(cB);cB.TYPE_OF_GAME_OBJECT="\x50\x41\x54\x52\x49\x43\x4C\x45"};this.CUSTOM=function(){};this.DESELECT_ALL=function(){var df=""+cB.PROGRAM_NAME.toString();for(var G=0;G<window[df].ENGINE.MODULES.ACCESS(cB.PARENT).GAME_OBJECTS.length;G++){window[df].ENGINE.MODULES.ACCESS(cB.PARENT).GAME_OBJECTS[G].EDITOR.SELECTED=false}};this.TOUCH_DOWN=function(){SYS.DEBUG.LOG("\x4E\x6F\x20\x61\x74\x61\x63\x68\x65\x64\x20\x65\x76\x65\x6E\x74\x20\x2E\x20\x45\x56\x45\x4E\x54\x5F\x54\x4F\x55\x43\x48\x5F\x44\x4F\x57\x4E")};this.TAP=function(){SYS.DEBUG.LOG("\x4E\x6F\x20\x61\x74\x61\x63\x68\x65\x64\x20\x65\x76\x65\x6E\x74\x20\x2E\x20\x45\x56\x45\x4E\x54\x5F\x54\x41\x50\x20\x3A\x20\x73\x69\x6D\x69\x6C\x61\x72\x20\x63\x6C\x69\x63\x6B")};this.TOUCH_UP=function(){SYS.DEBUG.LOG("\x4E\x6F\x20\x61\x74\x61\x63\x68\x65\x64\x20\x65\x76\x65\x6E\x74\x20\x2E\x20\x45\x56\x45\x4E\x54\x5F\x54\x4F\x55\x43\x48\x5F\x55\x50")};this.TOUCH_MOVE=function(){};this.UPDATE_STATUS={STOP:function(){}};this.ROTATE={ANGLE:0,RADIANS:0,ROTATE_ARROUNT_CENTER:function(){ORBIT(50,50,cB.ROTATE.ANGLE,cB.POSITION)}};this.DRAW=function(s){s.save();s.globalAlpha=cB.globalAlpha;if(this.TYPE_OF_GAME_OBJECT=="\x41\x4E\x49\x4D\x41\x54\x49\x4F\x4E"){this.ANIMATION.DRAW()}else {if(this.TYPE_OF_GAME_OBJECT=="\x54\x45\x58\x54\x5F\x42\x4F\x58"){this.TEXTBOX.DRAW(s)}else {if(this.TYPE_OF_GAME_OBJECT=="\x54\x45\x58\x54\x5F\x42\x4F\x58\x5F\x41\x4E\x49\x4D\x41\x54\x49\x4F\x4E"){this.TEXTBOX.DRAW(s);this.ANIMATION.DRAW()}else {if(this.TYPE_OF_GAME_OBJECT=="\x50\x41\x54\x52\x49\x43\x4C\x45"){this.PARTICLE.DRAW(s)}else {if(this.TYPE_OF_GAME_OBJECT=="\x41\x4E\x49\x4D\x41\x54\x49\x4F\x4E\x5F\x54\x45\x58\x54\x5F\x42\x4F\x58"){this.ANIMATION.DRAW();this.TEXTBOX.DRAW(s)}else {if(this.TYPE_OF_GAME_OBJECT=="\x41\x4E\x49\x4D\x41\x54\x49\x4F\x4E\x5F\x50\x41\x54\x52\x49\x43\x4C\x45"){this.ANIMATION.DRAW();this.PARTICLE.DRAW(s)}else {if(this.TYPE_OF_GAME_OBJECT=="\x57\x45\x42\x43\x41\x4D"){if(cB.WEBCAM.DIMENSIONS_TYPE="\x47\x41\x4D\x45\x5F\x4F\x42\x4A\x45\x43\x54"){s.drawImage(cB.WEBCAM.VIDEO,cB.POSITION.X(),cB.POSITION.Y(),cB.DIMENSION.WIDTH(),cB.DIMENSION.HEIGHT())}else {s.drawImage(cB.WEBCAM.VIDEO,cB.POSITION.X(),cB.POSITION.Y(),cB.WEBCAM.VIDEO.width,cB.WEBCAM.VIDEO.height)}}else {if(this.TYPE_OF_GAME_OBJECT=="\x57\x45\x42\x43\x41\x4D\x5F\x4E\x55\x49"){if(cB.WEBCAM.DIMENSIONS_TYPE="\x47\x41\x4D\x45\x5F\x4F\x42\x4A\x45\x43\x54"){s.drawImage(cB.WEBCAM.VIDEO,cB.POSITION.X(),cB.POSITION.Y(),cB.DIMENSION.WIDTH(),cB.DIMENSION.HEIGHT())}else {s.drawImage(cB.WEBCAM.VIDEO,cB.POSITION.X(),cB.POSITION.Y(),cB.WEBCAM.VIDEO.width,cB.WEBCAM.VIDEO.height)};blend(cB,s);checkAreas(cB);cB.WEBCAM.DRAW(s,cB.WEBCAM)}else {if(this.TYPE_OF_GAME_OBJECT=="\x43\x55\x53\x54\x4F\x4D"){cB.CUSTOM()}else {if(this.TYPE_OF_GAME_OBJECT=="\x4E\x4F\x5F\x52\x45\x4E\x44\x45\x52"){}}}}}}}}}};s.restore()};this.DRAW_ACTOR=function(s){s.save();s.font="\x31\x33\x70\x78\x20\x41\x72\x69\x61\x6C";s.fillRect(0,this.POSITION.Y(),VIEW.W(),1);s.fillRect(this.POSITION.X(),0,1,VIEW.H());s.globalAlpha=0.5;s.fillRect(this.POSITION.X(),this.POSITION.Y(),this.DIMENSION.WIDTH(),this.DIMENSION.HEIGHT());s.globalAlpha=0.9;if(cB.EDITOR.SELECTED==true){s.fillText("\x4E\x61\x6D\x65\x20\x3A"+this.NAME,this.POSITION.X()+this.EDITOR.ACTORS_AREA_HEIGHT,this.POSITION.Y()-this.EDITOR.ACTORS_AREA_HEIGHT*4);s.fillText("\x50\x65\x72\x63\x65\x6E\x74\x20\x3A"+CONVERTOR.PIX_TO_PER(this.POSITION.X().toString()).toFixed(2)+"\x25\x20\x20\x79\x3A"+CONVERTOR.PIY_TO_PER(this.POSITION.Y()).toFixed(2),this.POSITION.X()+this.EDITOR.ACTORS_AREA_HEIGHT,this.POSITION.Y()-this.EDITOR.ACTORS_AREA_HEIGHT*2.5);s.fillText("\x41\x63\x74\x6F\x72\x2D\x20\x78\x3A"+this.POSITION.X().toFixed(2).toString()+"\x20\x79\x3A"+this.POSITION.Y().toFixed(2),this.POSITION.X()+this.EDITOR.ACTORS_AREA_HEIGHT,this.POSITION.Y()-this.EDITOR.ACTORS_AREA_HEIGHT)};s.strokeStyle="\x62\x6C\x75\x65";s.strokeRect(this.EDITOR.ACTOR_DRAG_RECT_POS.X()+this.EDITOR.ACTORS_AREA_HEIGHT,this.EDITOR.ACTOR_DRAG_RECT_POS.Y()+this.EDITOR.ACTORS_AREA_HEIGHT,this.EDITOR.ACTOR_DRAG_RECT_DIM.WIDTH(),this.EDITOR.ACTOR_DRAG_RECT_DIM.HEIGHT());if(this.EDITOR.ACTOR_BLUE_HOVER==true){s.fillStyle="\x6C\x69\x6D\x65"}else {s.fillStyle="\x62\x6C\x75\x65"};s.fillRect(this.POSITION.X(),this.POSITION.Y(),this.EDITOR.ACTORS_AREA_HEIGHT*15,this.EDITOR.ACTORS_AREA_HEIGHT);s.beginPath();s.moveTo(this.POSITION.X()+this.EDITOR.ACTORS_AREA_HEIGHT*10*1.5,this.POSITION.Y()-0.5*this.EDITOR.ACTORS_AREA_HEIGHT);s.lineTo(this.POSITION.X()+this.EDITOR.ACTORS_AREA_HEIGHT*10*1.5,this.POSITION.Y()+1.4*this.EDITOR.ACTORS_AREA_HEIGHT);s.lineTo(this.POSITION.X()+this.EDITOR.ACTORS_AREA_HEIGHT*12.5*1.5,this.POSITION.Y()+1/2*this.EDITOR.ACTORS_AREA_HEIGHT);s.closePath();s.fill();if(this.EDITOR.ACTOR_GREEN_HOVER==true){s.fillStyle="\x6C\x69\x6D\x65"}else {s.fillStyle="\x67\x72\x65\x65\x6E"};s.fillRect(this.POSITION.X(),this.POSITION.Y(),this.EDITOR.ACTORS_AREA_HEIGHT,this.EDITOR.ACTORS_AREA_HEIGHT*15);s.beginPath();s.moveTo(this.POSITION.X()-0.5*this.EDITOR.ACTORS_AREA_HEIGHT,this.POSITION.Y()+this.EDITOR.ACTORS_AREA_HEIGHT*10*1.5);s.lineTo(this.POSITION.X()+1.4*this.EDITOR.ACTORS_AREA_HEIGHT,this.POSITION.Y()+this.EDITOR.ACTORS_AREA_HEIGHT*10*1.5);s.lineTo(this.POSITION.X()+1/2*this.EDITOR.ACTORS_AREA_HEIGHT,this.POSITION.Y()+this.EDITOR.ACTORS_AREA_HEIGHT*12.5*1.5);s.closePath();s.fill();s.fillStyle="\x72\x65\x64";s.beginPath();s.arc(this.POSITION.X()+this.EDITOR.ACTORS_AREA_HEIGHT/2,this.POSITION.Y()+this.EDITOR.ACTORS_AREA_HEIGHT/2,this.EDITOR.ACTORS_AREA_HEIGHT/2,(0)*Math.PI,(2)*Math.PI);s.fill();s.closePath();s.beginPath();s.lineWidth=1;s.strokeStyle="\x77\x68\x69\x74\x65";s.arc(this.POSITION.X()+this.EDITOR.ACTORS_AREA_HEIGHT/2,this.POSITION.Y()+this.EDITOR.ACTORS_AREA_HEIGHT/2,this.EDITOR.ACTORS_AREA_HEIGHT,(this.EDITOR.ACTOR_CENTER_OSCILATOR.UPDATE()+0.1)*Math.PI,(this.EDITOR.ACTOR_CENTER_OSCILATOR.UPDATE()-0.1)*Math.PI);s.stroke();s.closePath();s.restore();if(cB.EDITOR.GAME_OBJECT_MENU.VISIBLE==true){for(var x=0;x<cB.EDITOR.BUTTONS.length;x++){s.save();s.globalAlpha=1;if(cB.EDITOR.BUTTONS[x].HOVER==false){s.fillStyle=APPLICATION.SYSTEM.COLOR;s.fillRect(cB.EDITOR.BUTTONS[x].POSITION.X(),cB.EDITOR.BUTTONS[x].POSITION.Y(),cB.EDITOR.BUTTONS[x].DIMENSION.WIDTH(),cB.EDITOR.BUTTONS[x].DIMENSION.HEIGHT());s.fillStyle=APPLICATION.SYSTEM.TEXT_COLOR;s.fillText(cB.EDITOR.BUTTONS[x].text,cB.EDITOR.BUTTONS[x].POSITION.X(),cB.EDITOR.BUTTONS[x].POSITION.Y()+cB.EDITOR.BUTTONS[x].DIMENSION.HEIGHT()/2,cB.EDITOR.BUTTONS[x].DIMENSION.WIDTH())}else {s.fillStyle=APPLICATION.SYSTEM.HOVER_COLOR;s.fillRect(cB.EDITOR.BUTTONS[x].POSITION.X(),cB.EDITOR.BUTTONS[x].POSITION.Y(),cB.EDITOR.BUTTONS[x].DIMENSION.WIDTH(),cB.EDITOR.BUTTONS[x].DIMENSION.HEIGHT());s.fillStyle=APPLICATION.SYSTEM.TEXT_COLOR;s.fillText(cB.EDITOR.BUTTONS[x].text,cB.EDITOR.BUTTONS[x].POSITION.X(),cB.EDITOR.BUTTONS[x].POSITION.Y()+cB.EDITOR.BUTTONS[x].DIMENSION.HEIGHT()/2,cB.EDITOR.BUTTONS[x].DIMENSION.WIDTH());if(cB.EDITOR.BUTTONS[x].icon==true){s.drawImage(window["\x69\x6D\x61\x67\x65\x5F\x73\x79\x73\x74\x65\x6D\x5F"+cB.EDITOR.BUTTONS[x].IAM],cB.EDITOR.BUTTONS[x].POSITION.X()+cB.EDITOR.BUTTONS[x].DIMENSION.WIDTH()-30,cB.EDITOR.BUTTONS[x].POSITION.Y()-5,30,30)}};s.restore();if(cB.WEBCAM!=null){}}}};this.ON_UPDATE=function(){};this.UPDATE=function(){if(this.AUTO_UPDATE==true){cB.POSITION.UPDATE()};if(cB.EDITOR.ENABLE==false){if(cB.DESTROY_AFTER!=null){if(cB.DESTROY_AFTER>0){cB.DESTROY_AFTER--}}};if(cB.GROUP.GROUP.length>0){for(var s=0;s<cB.GROUP.GROUP.length;s++){window[cB.PROGRAM_NAME].ENGINE.MODULES.ACCESS(cB.PARENT).GAME_OBJECTS.ACCESS(cB.GROUP.GROUP[s]).POSITION.x=cB.POSITION.x-cB.GROUP.GROUP_INITIALS[s].x;window[cB.PROGRAM_NAME].ENGINE.MODULES.ACCESS(cB.PARENT).GAME_OBJECTS.ACCESS(cB.GROUP.GROUP[s]).POSITION.y=cB.POSITION.y-cB.GROUP.GROUP_INITIALS[s].y}};if(cB.DESTROY_ON_GAMEMAP_EXIT==true&&cB.POSITION.Y()<window[cB.PROGRAM_NAME].MAP.UP()){window[cB.PROGRAM_NAME].ENGINE.MODULES.ACCESS_MODULE(cB.PARENT).DESTROY_OBJECT(cB.NAME)};cB.ON_UPDATE()};this.GAME_OBJECT_READY=function(){SYS.DEBUG.LOG("\x72\x65\x61\x64\x79\x20\x3A\x20"+cB.NAME)};setTimeout(cB.GAME_OBJECT_READY,12)}