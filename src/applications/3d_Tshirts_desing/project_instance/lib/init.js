/*
Created by Nikola Lukic zlatnaspirala@gmail.com
Copyright (c) 2016 by Nikola Lukic , All Rights Reserved. 


Quick Summary
A highly permissive license nearly identical to the MIT license but with some added trademark restrictions.


Can
 Commercial Use 
Describes the ability to use the software for commercial purposes.
 Modify 
Describes the ability to modify the software and create derivatives.
 Distribute 
Describes the ability to distribute original or modified (derivative) works.
 Sublicense 
Describes the ability for you to grant/extend a license to the software.
 Private Use 
Describes the ability to use/modify software freely without distributing it.

Cannot
 Hold Liable 
Describes the warranty and if the software/license owner can be charged for damages.
 Use Trademark 
Describes the allowance of using contributors' names, trademarks or logos.

Must
 Include Copyright 
Describes whether the original copyright must be retained.
 Include License 
Including the full text of license in modified software.


*//***************************************************************************/
/*                                                                         */
/*  This obfuscated code was created by Javascript Obfuscator Free Version.*/
/*  Javascript Obfuscator Free Version can be downloaded here              */
/*  http://javascriptobfuscator.com                                        */
/*                                                                         */
/***************************************************************************/
function DETECTBROWSER(){var M,N="\x75\x6E\x6B\x6E\x6F\x77\x6E";this.NAVIGATOR=navigator.userAgent;var Q=navigator.userAgent;var L,U,Z,V,T,S,X,Y,R,P,W;L=Q.match(/gecko/gi);X=Q.match(/opera/gi);Z=Q.match(/Tablet/gi);U=Q.match(/ipad/gi);V=Q.match(/iphone/gi);T=Q.match(/Firefox/gi);W=Q.match(/mozilla/gi);S=Q.match(/Chrome/gi);Y=Q.match(/safari/gi);R=Q.match(/android/gi);P=Q.match(/mobile/gi);window["\x54\x59\x50\x45\x4F\x46\x41\x4E\x44\x52\x4F\x49\x44"]=0;window["\x4E\x4F\x4D\x4F\x42\x49\x4C\x45"]=0;var P=(/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));if(P){var ba=navigator.userAgent.toLowerCase();if((ba.search("\x61\x6E\x64\x72\x6F\x69\x64")> -1)&&(ba.search("\x6D\x6F\x62\x69\x6C\x65")> -1)){console.log("\x41\x4E\x44\x52\x4F\x49\x44\x20\x4D\x4F\x42\x49\x4C\x45")}else {if((ba.search("\x61\x6E\x64\x72\x6F\x69\x64")> -1)&& !(ba.search("\x6D\x6F\x62\x69\x6C\x65")> -1)){console.log("\x20\x41\x4E\x44\x52\x4F\x49\x44\x20\x54\x41\x42\x4C\x45\x54\x20")}};TYPEOFANDROID=1}else {NOMOBILE=1};if(T&&R&&TYPEOFANDROID==0){M="\x23";N="\x6D\x6F\x62\x69\x6C\x65\x5F\x66\x69\x72\x65\x66\x6F\x78\x5F\x61\x6E\x64\x72\x6F\x69\x64"};if(T&&R&&TYPEOFANDROID==1){M="\x23";N="\x6D\x6F\x62\x69\x6C\x65\x5F\x66\x69\x72\x65\x66\x6F\x78\x5F\x61\x6E\x64\x72\x6F\x69\x64\x5F\x74\x61\x62\x6C\x65\x74"};if(X&&R){M="\x23";N="\x6F\x70\x65\x72\x61\x5F\x6D\x6F\x62\x69\x6C\x65\x5F\x61\x6E\x64\x72\x6F\x69\x64"};if(X&&R&&Z){M="\x23";N="\x6F\x70\x65\x72\x61\x5F\x6D\x6F\x62\x69\x6C\x65\x5F\x61\x6E\x64\x72\x6F\x69\x64\x5F\x74\x61\x62\x6C\x65\x74"};if(Y){var O=Q.match(/iphone/gi);if(O){M="\x23";N="\x73\x61\x66\x61\x72\x69\x5F\x6D\x6F\x62\x69\x6C\x65\x5F\x69\x70\x68\x6F\x6E\x65"}else {if(U){M="\x23";N="\x6D\x6F\x62\x69\x6C\x65\x5F\x73\x61\x66\x61\x72\x69\x5F\x63\x68\x72\x6F\x6D\x65\x5F\x69\x70\x61\x64"}else {if(R){M="\x23";N="\x61\x6E\x64\x72\x6F\x69\x64\x5F\x6E\x61\x74\x69\x76\x65"}}}};if(S&&Y&&W&&TYPEOFANDROID==1){M="\x23";N="\x6D\x6F\x62\x69\x6C\x65\x5F\x63\x68\x72\x6F\x6D\x65\x5F\x61\x6E\x64\x72\x6F\x69\x64\x5F\x74\x61\x62\x6C\x65\x74"};if(S&&Y&&W&&TYPEOFANDROID==0){M="\x23";N="\x6D\x6F\x62\x69\x6C\x65\x5F\x63\x68\x72\x6F\x6D\x65\x5F\x61\x6E\x64\x72\x6F\x69\x64"};if(S&&TYPEOFANDROID==0){M="\x23";N="\x63\x68\x72\x6F\x6D\x65\x5F\x62\x72\x6F\x77\x73\x65\x72"};if(W&&NOMOBILE==1&&L&&T){M="\x23";N="\x66\x69\x72\x65\x66\x6F\x78\x5F\x64\x65\x73\x6B\x74\x6F\x70"};if(X&&TYPEOFANDROID==0&& !P){M="\x23";N="\x6F\x70\x65\x72\x61\x5F\x64\x65\x73\x6B\x74\x6F\x70"};this.NAME=N;this.NOMOBILE=NOMOBILE}var SCRIPT={LOAD:function addScript(r){var s=document.createElement("\x73\x63\x72\x69\x70\x74");s.setAttribute("\x73\x72\x63",r);document.body.appendChild(s)}};function LOG(){this.ENABLE=true;this.LOG=function(bB){if(this.ENABLE==true){console.log("\x25\x63"+bB,"\x62\x61\x63\x6B\x67\x72\x6F\x75\x6E\x64\x3A\x20\x23\x33\x33\x33\x3B\x20\x63\x6F\x6C\x6F\x72\x3A\x20\x6C\x69\x6D\x65")}};this.WARNING=function(bB){if(this.ENABLE==true){console.log("\x25\x63\x20\x57\x61\x72\x6E\x69\x6E\x67\x20\x3A\x20"+bB,"\x62\x61\x63\x6B\x67\x72\x6F\x75\x6E\x64\x3A\x20\x23\x33\x33\x33\x3B\x20\x63\x6F\x6C\x6F\x72\x3A\x20\x79\x65\x6C\x6C\x6F\x77")}};this.CRITICAL=function(bB){if(this.ENABLE==true){console.log("\x25\x63\x20\x43\x72\x69\x74\x69\x63\x61\x6C\x20\x3A\x20"+bB,"\x62\x61\x63\x6B\x67\x72\x6F\x75\x6E\x64\x3A\x20\x23\x33\x33\x33\x3B\x20\x63\x6F\x6C\x6F\x72\x3A\x20\x79\x65\x6C\x6C\x6F\x77")}}}function CREATE_IMG(F,r){window["\x69\x6D\x61\x67\x65\x5F"+F]= new Image();window["\x69\x6D\x61\x67\x65\x5F"+F].src=r;window["\x69\x6D\x61\x67\x65\x5F"+F].onload=function(){SYS.RES.SUM_OF_LOADED_IMAGES++}}var webcamError=function(a){alert("\x57\x65\x62\x63\x61\x6D\x20\x65\x72\x72\x6F\x72\x21",a)};function test_webcam_device(){function bS(){return !!(navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia)}if(bS()){console.log("\x77\x65\x62\x63\x61\x6D\x20\x6F\x70\x65\x72\x61\x72\x74\x69\x6F\x6E\x20\x73\x75\x70\x70\x6F\x72\x74");return true}else {console.log("\x77\x65\x62\x63\x61\x6D\x20\x6F\x70\x65\x72\x61\x72\x74\x69\x6F\x6E\x20\x66\x61\x69\x6C\x64");return false}}function SET_STREAM(bM){if(navigator.getUserMedia){navigator.getUserMedia({audio:true,video:true},function(bN){bM.src=bN},webcamError)}else {if(navigator.webkitGetUserMedia){navigator.webkitGetUserMedia({audio:true,video:true},function(bN){bM.src=window.URL.createObjectURL(bN)},webcamError)}else {alert("\x77\x65\x62\x63\x61\x6D\x20\x62\x72\x6F\x6B\x65\x6E\x2E")}}}function initialize(){if(!AudioContext){alert("\x41\x75\x64\x69\x6F\x43\x6F\x6E\x74\x65\x78\x74\x20\x6E\x6F\x74\x20\x73\x75\x70\x70\x6F\x72\x74\x65\x64\x21")}else {loadSounds()}}function CREATE_MOTION_PARAMETERS(E){window["\x6E\x6F\x74\x65\x73\x50\x6F\x73\x59"]=[];window["\x6E\x6F\x74\x65\x73\x50\x6F\x73\x58"]=[];for(var K=0;K<E.WEBCAM.numFieldV;K++){for(var J=0;J<E.WEBCAM.numFieldH;J++){E.WEBCAM._N_.push("\x30");if(J==0){notesPosX.push(0)}else {notesPosX.push(J*E.WEBCAM.BLEND_CANVAS.width/8)};if(K==0){notesPosY.push(0)}else {notesPosY.push(K*E.WEBCAM.BLEND_CANVAS.width/8)}}}}function CREATE_MOTION_FIELDS(E){var H="\x74\x65\x73\x74";var I=E.WEBCAM.numFieldV*E.WEBCAM.numFieldH;for(var C=0;C<I;C++){var G={note:H,ready:true,visual:"\x74\x65\x73\x74\x32"};G.area={x:notesPosX[C],y:notesPosY[C],width:E.WEBCAM.BLEND_CANVAS.width/8,height:E.WEBCAM.BLEND_CANVAS.height/8};E.WEBCAM.NOTES.push(G)}}window["\x41\x52\x52\x41\x59\x5F\x53\x4F\x55\x4E\x44"]=[];for(var s=0;s<1;s++){ARRAY_SOUND.push("\x73\x6F\x75\x6E\x64\x73\x2F\x6E\x6F\x74\x65\x31\x2E\x6D\x70\x33")};function loadSounds(){soundContext= new AudioContext();bufferLoader= new BufferLoader(soundContext,ARRAY_SOUND,finishedLoading);bufferLoader.load()}function finishedLoading(bA){}function playSound(bC){if(!bC.ready){return};var H=soundContext.createBufferSource();H.buffer=bC.note.buffer;H.connect(soundContext.destination);H.noteOn(0);bC.ready=false;setTimeout(setNoteReady,400,bC)}function setNoteReady(bC){bC.ready=true}var lastImageData;function blend(u,s){var A=u.WEBCAM.BLEND_CANVAS.width;var w=u.WEBCAM.BLEND_CANVAS.width;u.WEBCAM.RC.drawImage(u.WEBCAM.VIDEO,0,0,A,w);var z=u.WEBCAM.RC.getImageData(0,0,A,w);if(!lastImageData){lastImageData=u.WEBCAM.RC.getImageData(0,0,A,w)};var t=u.WEBCAM.RC.createImageData(A,w);differenceAccuracy(t.data,z.data,lastImageData.data);u.WEBCAM.BS.putImageData(t,0,0);lastImageData=z}function fastAbs(bz){return (bz^(bz>>31))-(bz>>31)}function threshold(bz){return (bz>0x15)?0xFF:0}function difference(bd,bb,bc){if(bb.length!=bc.length){return null};var C=0;while(C<(bb.length*0.25)){bd[4*C]=bb[4*C]==0?0:fastAbs(bb[4*C]-bc[4*C]);bd[4*C+1]=bb[4*C+1]==0?0:fastAbs(bb[4*C+1]-bc[4*C+1]);bd[4*C+2]=bb[4*C+2]==0?0:fastAbs(bb[4*C+2]-bc[4*C+2]);bd[4*C+3]=0xFF;++C}}function differenceAccuracy(bd,bb,bc){if(bb.length!=bc.length){return null};var C=0;while(C<(bb.length*0.25)){var be=(bb[4*C]+bb[4*C+1]+bb[4*C+2])/3;var bf=(bc[4*C]+bc[4*C+1]+bc[4*C+2])/3;var bg=threshold(fastAbs(be-bf));bd[4*C]=bg;bd[4*C+1]=bg;bd[4*C+2]=bg;bd[4*C+3]=0xFF;++C}}function checkAreas(E){for(var D=0;D<E.WEBCAM.numFieldV*E.WEBCAM.numFieldH;++D){var t=E.WEBCAM.BS.getImageData(E.WEBCAM.NOTES[D].area.x,E.WEBCAM.NOTES[D].area.y,E.WEBCAM.NOTES[D].area.width,E.WEBCAM.NOTES[D].area.height);var C=0;var B=0;while(C<(t.data.length*0.25)){B+=(t.data[C*4]+t.data[C*4+1]+t.data[C*4+2])/3;++C};B=Math.round(B/(t.data.length*0.25));if(B>10){E.WEBCAM._N_[D]="\x31";__DESTROY___(D,E.WEBCAM._N_);WEB_CAM_NUI_MAP(D,E.WEBCAM._N_)}}}function __DESTROY___(q,p){var p=p;window["\x54"+q]=setTimeout(function(){p[q]="\x30"},1333)}function WEBCAM_DRAW(bU,bV){if(this.HIDE_INDICATED_POINT==false){var bT=0;for(var C=0;C<bV.numFieldH*bV.numFieldV;C++){try{if(bV._N_[C]=="\x30"){if(bT>12){window["\x4E\x49\x4B"].SET(notesPosX[C],notesPosY[C])};bT=0;bU.fillStyle="\x72\x65\x64";bU.strokeStyle="\x62\x6C\x75\x65";bU.fillText("\x70\x6F\x69\x6E\x74\x20"+C,notesPosX[C],notesPosY[C],44,44);if(C==10){bU.fillText("\x52\x6F\x74\x61\x74\x65\x20\x20",notesPosX[C],notesPosY[C],44,44)};if(C==13){bU.fillText("\x46\x6F\x72\x77\x61\x72\x64\x20\x20",notesPosX[C],notesPosY[C],44,44)};if(C==15){bU.fillText("\x41\x74\x74\x61\x63\x6B\x20\x20",notesPosX[C],notesPosY[C],44,44)};if(C==47){bU.fillText("\x43\x6C\x65\x61\x72\x20\x20",notesPosX[C],notesPosY[C],44,44)}}else {bT++;bU.fillStyle="\x62\x6C\x75\x65";bU.strokeStyle="\x72\x65\x64";bU.strokeRect(notesPosX[C],notesPosY[C],44,44);if(C==10){bU.fillText("\x52\x6F\x74\x61\x74\x65\x20\x20",notesPosX[C],notesPosY[C],44,44)};if(C==13){bU.fillText("\x46\x6F\x72\x77\x61\x72\x64\x20\x20",notesPosX[C],notesPosY[C],44,44)};if(C==15){bU.fillText("\x41\x74\x74\x61\x63\x6B\x20\x20",notesPosX[C],notesPosY[C],44,44)};if(C==47){bU.fillText("\x43\x6C\x65\x61\x72\x20\x20",notesPosX[C],notesPosY[C],44,44)}}}catch(e){}}}}function DOM(){this.E=function(bh){return document.getElementById(bh)};this.ACCESS_IFRAME=function(F){return document.getElementById(F).contentWindow};this.GOTO=function(bi){location.assign(bi)};this.UPLOAD_FILE=function(bj,bk){var b=document.createElement("\x49\x4E\x50\x55\x54");b.setAttribute("\x74\x79\x70\x65","\x66\x69\x6C\x65");b.setAttribute("\x69\x64",bj);b.setAttribute("\x73\x74\x79\x6C\x65","\x64\x69\x73\x70\x6C\x61\x79\x3A\x62\x6C\x6F\x63\x6B\x3B");document.getElementById("\x55\x50\x4C\x4F\x41\x44\x5F\x42\x4F\x58").appendChild(b);window["\x46\x49\x4C\x45\x5F"+bj]=document.getElementById(bj);window["\x46\x49\x4C\x45\x5F"+bj].onchange=function(){SYS.DEBUG.LOG("\x4E\x65\x77\x20\x66\x69\x6C\x65\x20\x63\x6F\x6D\x65\x73\x2E\x2E\x2E")};if( typeof bk!=="\x75\x6E\x64\x65\x66\x69\x6E\x65\x64"){window["\x46\x49\x4C\x45\x5F"+bj].onchange=bk}};this.CREATE_SURFACE=function(bl,bn,bp,bm,bo){this.c=document.getElementById(bn);if( typeof bo==="\x75\x6E\x64\x65\x66\x69\x6E\x65\x64"||bo=="\x44\x49\x41\x4D\x45\x54\x52\x49\x43"){this.RESIZE_TYPE="\x44\x49\x41\x4D\x45\x54\x52\x49\x43";this.W_PIX=bp;this.H_PIX=bm;this.c.width=CONVERTOR.PER_TO_PIX(this.W_PIX);this.c.height=CONVERTOR.PER_TO_PIY(this.H_PIX)}else {if(bo=="\x46\x49\x58\x45\x44"){this.RESIZE_TYPE="\x46\x49\x58\x45\x44"}else {this.RESIZE_TYPE="\x44\x49\x41\x4D\x45\x54\x52\x49\x43"}};window[bl]=this.c.getContext("\x32\x64");SYS.DEBUG.LOG("\x53\x59\x53\x20\x3A\x20\x53\x75\x72\x66\x61\x63\x65\x20\x63\x72\x65\x61\x74\x65\x64\x20\x2C\x20\x70\x72\x6F\x67\x72\x61\x6D\x20\x6E\x61\x6D\x65\x20\x69\x73\x20"+bn);SYS.RUNNING_PROGRAMS.push(bn);window[bn]= new PROGRAM(window[bl],this.c);window[bn].DRAW()};this.removeElement=function(bt,br){if( typeof br=="\x75\x6E\x64\x65\x66\x69\x6E\x65\x64"){console.log("\x72\x65\x6D\x6F\x76\x65\x20\x6E\x6F\x77");document.body.removeChild(bt)}else {if(document.getElementById(br)){var bq=document.getElementById(br);var bs=document.getElementById(bt);bs.removeChild(bq);bs.style.zIndex=0;bs.style.display="\x6E\x6F\x6E\x65"}else {return false}}};this.DESTROY_PROGRAM=function(F){if( typeof F==="\x75\x6E\x64\x65\x66\x69\x6E\x65\x64"){SYS.DEBUG.WARNING("\x53\x59\x53\x20\x3A\x20\x77\x61\x72\x6E\x69\x6E\x67\x20\x66\x6F\x72\x20\x70\x72\x6F\x63\x65\x64\x75\x72\x65\x20\x27\x53\x59\x53\x2E\x44\x4F\x4D\x2E\x44\x45\x53\x54\x52\x4F\x59\x5F\x50\x52\x4F\x47\x52\x41\x4D\x27\x20\x20\x44\x65\x73\x63\x69\x70\x74\x69\x6F\x6E\x20\x3A\x20\x61\x72\x72\x67\x20\x6E\x61\x6D\x65\x20\x3A\x3E\x3E\x20"+ typeof F+"\x20\x3C\x3C\x20\x6E\x6F\x74\x20\x76\x61\x6C\x69\x64\x2E")}else {if( typeof window[F]==="\x75\x6E\x64\x65\x66\x69\x6E\x65\x64"){SYS.DEBUG.WARNING("\x53\x59\x53\x20\x3A\x20\x77\x61\x72\x6E\x69\x6E\x67\x20\x66\x6F\x72\x20\x70\x72\x6F\x63\x65\x64\x75\x72\x65\x20\x27\x53\x59\x53\x2E\x44\x4F\x4D\x2E\x44\x45\x53\x54\x52\x4F\x59\x5F\x50\x52\x4F\x47\x52\x41\x4D\x27\x20\x20\x44\x65\x73\x63\x69\x70\x74\x69\x6F\x6E\x20\x3A\x20\x70\x72\x6F\x67\x72\x61\x6D\x20\x77\x69\x74\x68\x20\x20\x6E\x61\x6D\x65\x3A\x20"+F+"\x20\x6E\x6F\x74\x20\x65\x78\x69\x73\x74\x2E\x20")}else {window[F].DRAW=function(){};window[F].UPDATE=function(){};window[F].DRAW_INTERVAL=undefined;window[F].UPDATE_INTERVAL=undefined;window[F].AUTO_UPDATE=[];window[F].AUTO_UPDATE=undefined;window[F]=undefined;delete window[F];SYS.RUNNING_PROGRAMS.unset(F);SYS.DEBUG.LOG("\x53\x59\x53\x20\x3A\x20\x6C\x6F\x67\x20\x66\x6F\x72\x20\x70\x72\x6F\x63\x65\x64\x75\x72\x65\x20\x27\x53\x59\x53\x2E\x44\x4F\x4D\x2E\x44\x45\x53\x54\x52\x4F\x59\x5F\x50\x52\x4F\x47\x52\x41\x4D\x27\x20\x20\x44\x65\x73\x63\x69\x70\x74\x69\x6F\x6E\x20\x3A\x20\x70\x72\x6F\x67\x72\x61\x6D\x20\x77\x69\x74\x68\x20\x20\x6E\x61\x6D\x65\x20\x3A"+F+"\x20\x69\x73\x20\x64\x65\x61\x64\x2E\x20\x4D\x65\x6D\x6F\x72\x79\x20\x63\x6C\x65\x61\x72\x20\x2E")}}};this.LANCH_FULLSCREEN=function(bu){if(bu.requestFullscreen){bu.requestFullscreen()}else {if(bu.mozRequestFullScreen){bu.mozRequestFullScreen()}else {if(bu.webkitRequestFullscreen){bu.webkitRequestFullscreen()}else {if(bu.msRequestFullscreen){bu.msRequestFullscreen()}}}}};this.EXIT_FULLSCREEN=function(){if(document.exitFullscreen){document.exitFullscreen()}else {if(document.mozCancelFullScreen){document.mozCancelFullScreen()}else {if(document.webkitExitFullscreen){document.webkitExitFullscreen()}}}};this.FS_FLAG=0;this.FULL_SCREEN=function(){if(this.FS_FLAG==0){this.LANCH_FULLSCREEN(document.documentElement);this.FS_FLAG=1}else {if(this.FS_FLAG==1){this.EXIT_FULLSCREEN();this.FS_FLAG=0}}}}var lineLength=function(b,d,c,f){return Math.sqrt((b-=c)*b+(d-=f)*d)};var PAGE={SET_ICON:function(h){var g=document.createElement("\x6C\x69\x6E\x6B");g.type="\x69\x6D\x61\x67\x65\x2F\x78\x2D\x69\x63\x6F\x6E";g.rel="\x73\x68\x6F\x72\x74\x63\x75\x74\x20\x69\x63\x6F\x6E";g.href="\x66\x61\x76\x69\x63\x6F\x6E\x2E\x70\x6E\x67";document.getElementsByTagName("\x68\x65\x61\x64")[0].appendChild(g)},ANIMATE_ICON:null,ANIMATE:function(){}};function LS_SET(F,bz){localStorage.setItem(F,bz)}function LS_GET(F){return localStorage.getItem(F)}function SAVE(F,bC){localStorage.setItem(F,JSON.stringify(bC));console.log(JSON.stringify(bC))}function LOAD(F){if(localStorage.getItem(F)=="\x75\x6E\x64\x65\x66\x69\x6E\x65\x64"||localStorage.getItem(F)==null||localStorage.getItem(F)==""){SYS.DEBUG.WARNING("\x65\x72\x72\x6F\x72\x20\x69\x6E\x20\x6C\x6F\x61\x64\x69\x6E\x67\x20\x6C\x6F\x63\x61\x6C\x73\x74\x6F\x72\x61\x67\x65\x20\x6F\x62\x6A\x65\x63\x74\x21\x20\x6E\x61\x6D\x65\x20\x6F\x66\x20\x6F\x62\x6A\x65\x63\x74\x20\x3A\x20\x6E\x61\x6D\x65"+F+"\x20\x2C\x20\x62\x75\x74\x20\x76\x61\x6C\x75\x65\x20\x69\x73\x20"+localStorage.getItem(F));return false}else {return JSON.parse(localStorage.getItem(F))}}function readXML(bE,bD){if(window.XMLHttpRequest){xmlhttpGA= new XMLHttpRequest()};xmlhttpGA.open("\x47\x45\x54",bE,false);xmlhttpGA.send();xmlDocGA=xmlhttpGA.responseXML;if( typeof bD==="\x75\x6E\x64\x65\x66\x69\x6E\x65\x64"){return xmlDocGA}else {if(bD=="\x43\x4F\x4E\x56\x45\x52\x5F\x54\x4F\x5F\x4F\x42\x4A"){return xmlToJson(xmlDocGA)}}}function xmlToJson(cb){var bC={};if(cb.nodeType==1){if(cb.attributes.length>0){bC["\x40\x61\x74\x74\x72\x69\x62\x75\x74\x65\x73"]={};for(var K=0;K<cb.attributes.length;K++){var bW=cb.attributes.item(K);bC["\x40\x61\x74\x74\x72\x69\x62\x75\x74\x65\x73"][bW.nodeName]=bW.nodeValue}}}else {if(cb.nodeType==3){bC=cb.nodeValue}};if(cb.hasChildNodes()){for(var C=0;C<cb.childNodes.length;C++){var bX=cb.childNodes.item(C);var bY=bX.nodeName;if( typeof (bC[bY])=="\x75\x6E\x64\x65\x66\x69\x6E\x65\x64"){bC[bY]=xmlToJson(bX)}else {if( typeof (bC[bY].push)=="\x75\x6E\x64\x65\x66\x69\x6E\x65\x64"){var bZ=bC[bY];bC[bY]=[];bC[bY].push(bZ)};bC[bY].push(xmlToJson(bX))}}};var ca=JSON.stringify(bC);ca.replace("\x23\x74\x65\x78\x74","\x74\x65\x78\x74");return JSON.parse(ca)}function MONITOR(){}var VIEW={W:function(i){if( typeof i==="\x75\x6E\x64\x65\x66\x69\x6E\x65\x64"){return window.innerWidth}else {return window.innerWidth/100*i}},H:function(i){if( typeof i==="\x75\x6E\x64\x65\x66\x69\x6E\x65\x64"){return window.innerHeight}else {return window.innerHeight/100*i}},ASPECT:function(){return window.innerWidth/window.innerHeight}};function OVERRIDE_TO_REF_CANVAS(){VIEW={W:function(i){if( typeof i==="\x75\x6E\x64\x65\x66\x69\x6E\x65\x64"){return SYS.DOM.E(SYS.RUNNING_PROGRAMS[0]).width}else {return SYS.DOM.E(SYS.RUNNING_PROGRAMS[0]).width/100*i}},H:function(i){if( typeof i==="\x75\x6E\x64\x65\x66\x69\x6E\x65\x64"){return SYS.DOM.E(SYS.RUNNING_PROGRAMS[0]).height}else {return SYS.DOM.E(SYS.RUNNING_PROGRAMS[0]).height/100*i}},ASPECT:function(){return SYS.DOM.E(SYS.RUNNING_PROGRAMS[0]).width/SYS.DOM.E(SYS.RUNNING_PROGRAMS[0]).height}};CONVERTOR={PER_TO_PIX:function(k){var j=SYS.DOM.E(SYS.RUNNING_PROGRAMS[0]).width/100;return k*j},PIX_TO_PER:function(k){var j=SYS.DOM.E(SYS.RUNNING_PROGRAMS[0]).width/100;return k/j},PER_TO_PIY:function(k){var j=SYS.DOM.E(SYS.RUNNING_PROGRAMS[0]).height/100;return k*j},PIY_TO_PER:function(k){var j=SYS.DOM.E(SYS.RUNNING_PROGRAMS[0]).height/100;return k/j}}}var CONVERTOR={PER_TO_PIX:function(k){var j=window.innerWidth/100;return k*j},PIX_TO_PER:function(k){var j=window.innerWidth/100;return k/j},PER_TO_PIY:function(k){var j=window.innerHeight/100;return k*j},PIY_TO_PER:function(k){var j=window.innerHeight/100;return k/j}};function remove_last(bF){return bF.slice(0,-1)}var DEEP_COPY={getCloneOfObject:function(l){var m={};if( typeof (l)=="\x6F\x62\x6A\x65\x63\x74"){for(prop in l){if(( typeof (l[prop])=="\x6F\x62\x6A\x65\x63\x74")&&(l[prop]).__isArray){m[prop]=this.getCloneOfArray(l[prop])}else {if( typeof (l[prop])=="\x6F\x62\x6A\x65\x63\x74"){m[prop]=this.getCloneOfObject(l[prop])}else {m[prop]=l[prop]}}}};return m},getCloneOfArray:function(o){var m=[];for(var n=0;n<=o.length;n++){if( typeof (o[n])=="\x6F\x62\x6A\x65\x63\x74"){m.push(this.getCloneOfObject(o[n]))}else {m.push(o[n])}};return m}};function SOUND(bP,bQ){var bO= new window.AudioContext();var bR=bO.createOscillator();bR.frequency.value=bQ;bR.connect(bO.destination);bR.start(0);setTimeout(function(){bR.stop();bO.close();bO=null;bR=null;delete bR;delete bO},bP)}var RESOURCE= new Object();RESOURCE.SUM=0;function drawRotatedImage(bw,b,d,bv,bp,bm,bx){bx.save();bx.translate(b+bp/2,d+bm/2);bx.rotate(bv);if( typeof bw!=="\x75\x6E\x64\x65\x66\x69\x6E\x65\x64"){bx.drawImage(bw,-(bp/2),-(bm/2),bp,bm)};bx.restore()}function drawRotatedText(s,by,b,d,bv,bp,bm){SURF.save();SURF.rotate(SYS.MATH.TO_RADIANS(bv));SURF.fillText(by,b+(bp/2),d+(bm/2),bp);SURF.restore()}function roundedRect(bJ,bK,b,d,A,w,bH,bG,bL,bI){bJ.save();if(bL=="\x73\x74\x72\x6F\x6B\x65"){bJ.strokeStyle=bI}else {bJ.fillStyle=bG};bJ.beginPath();bJ.moveTo(b,d+bH);bJ.lineTo(b,d+w-bH);bJ.quadraticCurveTo(b,d+w,b+bH,d+w);bJ.lineTo(b+A-bH,d+w);bJ.quadraticCurveTo(b+A,d+w,b+A,d+w-bH);bJ.lineTo(b+A,d+bH);bJ.quadraticCurveTo(b+A,d,b+A-bH,d);bJ.lineTo(b+bH,d);bJ.quadraticCurveTo(b,d,b,d+bH);if(bL=="\x73\x74\x72\x6F\x6B\x65"){bJ.stroke()}else {bJ.fill()};bJ.restore()}