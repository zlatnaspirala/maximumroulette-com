
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
var LOCAL_COMMUNICATOR=io.connect("\x68\x74\x74\x70\x3A\x2F\x2F"+APPLICATION.LOCAL_SERVER+"\x3A\x31\x30\x31\x33");LOCAL_COMMUNICATOR.on("\x63\x6F\x6E\x6E\x65\x63\x74",function(){console.log("\x43\x4F\x4E\x4E\x45\x43\x54\x45\x44\x20\x57\x49\x54\x48\x20\x4C\x4F\x43\x41\x4C\x5F\x43\x4F\x4D\x4D\x55\x4E\x49\x43\x41\x54\x4F\x52")});LOCAL_COMMUNICATOR.on("\x72\x65\x61\x6C\x74\x69\x6D\x65",function(b,a){if(a!=""){console.log("\x63\x68\x61\x74\x20\x64\x61\x74\x61\x20\x65\x6D\x70\x74\x79",b,a)}else {console.log("\x63\x68\x61\x74\x20\x64\x61\x74\x61\x20\x65\x6D\x70\x74\x79")}});LOCAL_COMMUNICATOR.on("\x52\x45\x54\x55\x52\x4E",function(c,a){if(c=="\x47\x45\x54\x5F\x41\x4C\x4C\x5F\x47\x41\x4D\x45\x5F\x4F\x42\x4A\x45\x43\x54\x53"){console.log(a+"\x3C\x3C\x3C\x3C\x3C\x3C\x3C\x3C\x3C\x20\x66\x72\x6F\x6D\x20")}else {if(c=="\x4C\x4F\x41\x44\x5F\x53\x43\x52\x49\x50\x54"){console.log("\x4C\x4F\x41\x44\x5F\x53\x43\x52\x49\x50\x54\x20\x3A\x20"+a);CALL_OR_WAIT(a)}else {if(c=="\x4C\x4F\x41\x44\x5F\x53\x43\x52\x49\x50\x54\x5F\x41\x46\x54\x45\x52\x5F\x46\x35"){}else {if(c=="\x45\x52\x52\x4F\x52"){alert("\x53\x65\x72\x76\x65\x72\x20\x73\x61\x79\x73\x20\x65\x72\x72\x6F\x72\x3A"+a)}}}}});function CALL_OR_WAIT(a){var a=a;setTimeout(function(){SYS.DEBUG.LOG(a+"\x2E\x2E\x2E\x2E\x2E\x2E\x2E\x2E\x2E\x2E\x2E");if(SYS.READY==true&& typeof a!="\x75\x6E\x64\x65\x66\x69\x6E\x65\x64"){if(a.indexOf("\x61\x32")== -1){setTimeout(function(){SYS.SCRIPT.LOAD(a);SYS.DEBUG.LOG("\x20\x56\x49\x53\x55\x41\x4C\x20\x53\x43\x52\x49\x50\x54\x20\x45\x58\x45\x43\x55\x54\x45\x44\x20")},100)}else {SYS.SCRIPT.LOAD(a);SYS.DEBUG.LOG("\x20\x56\x49\x53\x55\x41\x4C\x20\x53\x43\x52\x49\x50\x54\x20\x45\x58\x45\x43\x55\x54\x45\x44\x20")}}else {setTimeout(function(){CALL_OR_WAIT(a)},50)}},1)}function ADD(w,z,A,y,k,x,v){LOCAL_COMMUNICATOR.emit("\x41\x44\x44\x5F\x4E\x45\x57\x5F\x47\x41\x4D\x45\x5F\x4F\x42\x4A\x45\x43\x54",w,z,A,y,k,x,v)}function GET_ALL_GAME_OBJECTS(){LOCAL_COMMUNICATOR.emit("\x47\x45\x54\x5F\x41\x4C\x4C\x5F\x47\x41\x4D\x45\x5F\x4F\x42\x4A\x45\x43\x54\x53")}function DESTROY(w){LOCAL_COMMUNICATOR.emit("\x44\x45\x53\x54\x52\x4F\x59\x5F\x47\x41\x4D\x45\x5F\x4F\x42\x4A\x45\x43\x54",w)}function DESTROY_DELAY(w,bw,v,x){LOCAL_COMMUNICATOR.emit("\x44\x45\x53\x54\x52\x4F\x59\x5F\x47\x41\x4D\x45\x5F\x4F\x42\x4A\x45\x43\x54\x5F\x57\x49\x54\x48\x5F\x44\x45\x4C\x41\x59",w,bw,v,x)}function SET_NEW_START_UP_POS(w,x,v,cB,cC,y,k){LOCAL_COMMUNICATOR.emit("\x53\x45\x54\x5F\x4E\x45\x57\x5F\x53\x54\x41\x52\x54\x5F\x55\x50\x5F\x50\x4F\x53\x49\x54\x49\x4F\x4E",w,x,v,cB,cC,y,k)}function ADD_ANIMATION(w,x,v,B){LOCAL_COMMUNICATOR.emit("\x41\x44\x44\x5F\x41\x4E\x49\x4D\x41\x54\x49\x4F\x4E",w,x,v,B)}function ADD_COLLISION(w,x,v,C){LOCAL_COMMUNICATOR.emit("\x41\x44\x44\x5F\x43\x4F\x4C\x4C\x49\x53\x49\x4F\x4E",w,x,v,C)}function REMOVE_COLLISION(w,x,v){LOCAL_COMMUNICATOR.emit("\x52\x45\x4D\x4F\x56\x45\x5F\x43\x4F\x4C\x4C\x49\x53\x49\x4F\x4E",w,x,v)}function CREATE_PLAYER(w,x,v,D,bv){LOCAL_COMMUNICATOR.emit("\x41\x54\x41\x43\x48\x5F\x50\x4C\x41\x59\x45\x52",w,x,v,D,bv)}function DEATACH_PLAYER(w,x,v,D){LOCAL_COMMUNICATOR.emit("\x44\x45\x41\x54\x41\x43\x48\x5F\x50\x4C\x41\x59\x45\x52",w,x,v,D)}function ADD_PARTICLE(w,x,v,D){LOCAL_COMMUNICATOR.emit("\x41\x44\x44\x5F\x50\x41\x52\x54\x49\x43\x4C\x45",w,x,v,D)}function REMOVE_PARTICLE(w,x,v){LOCAL_COMMUNICATOR.emit("\x52\x45\x4D\x4F\x56\x45\x5F\x50\x41\x52\x54\x49\x43\x4C\x45",w,x,v)}function ADD_TEXTBOX(w,x,v,G,F,E,H){LOCAL_COMMUNICATOR.emit("\x41\x44\x44\x5F\x54\x45\x58\x54\x42\x4F\x58",w,x,v,G,F,E,H)}function REMOVE_TEXTBOX(w,x,v){LOCAL_COMMUNICATOR.emit("\x52\x45\x4D\x4F\x56\x45\x5F\x54\x45\x58\x54\x42\x4F\x58",w,x,v)}function ADD_WEBCAM(w,x,v,K,L,J,I){LOCAL_COMMUNICATOR.emit("\x41\x44\x44\x5F\x57\x45\x42\x43\x41\x4D",w,x,v,K,L,J,I)}function REMOVE_WEBCAM(w,x,v){LOCAL_COMMUNICATOR.emit("\x52\x45\x4D\x4F\x56\x45\x5F\x57\x45\x42\x43\x41\x4D",w,x,v)}function SET_MAIN_INTERVAL(w,x,v,h,X){LOCAL_COMMUNICATOR.emit("\x53\x45\x54\x5F\x4D\x41\x49\x4E\x5F\x49\x4E\x54\x45\x52\x56\x41\x4C",x,h,X)}