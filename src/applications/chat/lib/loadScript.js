



INCLUDE.SCRIPT("lib/threejs/dat.gui.min.js");
INCLUDE.SCRIPT("lib/threejs/GeometryUtils.js");
INCLUDE.SCRIPT("res/resource.audio")
INCLUDE.SCRIPT("lib/math.js");
INCLUDE.SCRIPT("lib/audio/audio.js");
INCLUDE.SCRIPT("lib/update.js");
INCLUDE.SCRIPT("lib/stars.js");
INCLUDE.SCRIPT("lib/star.js");
INCLUDE.SCRIPT("lib/Projector.js");
INCLUDE.SCRIPT("js/mirror.js");

INCLUDE.SCRIPT("lib/events/keyboard.js");


if (PROGRAM.SKY == true) {

	INCLUDE.SCRIPT("lib/threejs/SkyShader.js");
	INCLUDE.SCRIPT("lib/sky/sky.js");
}


if (PROGRAM.ACCOUNTS_NETWORKING == true) {

	INCLUDE.SCRIPT("lib/io/socket.io.js");
	INCLUDE.SCRIPT("network/account.js");
}


if (PROGRAM.STREAM_TEXTURE == true) {

	INCLUDE.SCRIPT("lib/rtc/checkCamera.js");
	INCLUDE.SCRIPT("lib/rtc/initStream.js");


}


if (PROGRAM.VIDEO_CONFERENCE == true) {


	INCLUDE.SCRIPT("lib/rtc/RTCMultiConnection.js");
	INCLUDE.SCRIPT("lib/rtc/conference.js");

} else {
	document.getElementById('RTCMULTICONNECTION').style.display = 'none';
}



if (PROGRAM.VIDEO_CONFERENCE_IO_NODEJS == true) {


	INCLUDE.SCRIPT("lib/rtc/RTCMultiConnection2.js");
	var HTML_CODE_FOR_CHAT = new GET_HTML("lib/rtc/html/chatnode.html");
	document.getElementById('RTCNODEJS').innerHTML = HTML_CODE_FOR_CHAT.VALUE;
	INCLUDE.SCRIPT("lib/rtc/linkify.js");
	//UI PART
	INCLUDE.SCRIPT("lib/rtc/ui.main.js");


	function LOAD_CHAT_IO() {

		setTimeout(function() {

			if (typeof RTCMultiConnection != 'undefined') {

				INCLUDE.SCRIPT("lib/rtc/ui.peer-connection.js");
				LOAD_CHAT_INSTANCE_IO_STREAM();

			}
			else {

				LOAD_CHAT_IO();

			}

		}, 200);


	}

	LOAD_CHAT_IO();


	//rtcMultiConnection

	function LOAD_CHAT_INSTANCE_IO_STREAM() {


		setTimeout(function() {

			if (typeof rtcMultiConnection != 'undefined') {

				INCLUDE.SCRIPT("lib/rtc/ui.share-files.js");
				INCLUDE.SCRIPT("lib/rtc/ui.users-list.js");
				INCLUDE.SCRIPT("lib/rtc/ui.settings.js");

			}
			else {

				LOAD_CHAT_INSTANCE_IO_STREAM();

			}

		}, 200);


	}



}











INCLUDE.SCRIPT("lib/AnimationClipCreator.js");

if (PROGRAM.DDSLoader == true) {

	INCLUDE.SCRIPT("lib/loaders/DDSLoader.js");

}
if (PROGRAM.OBJLoader == true) {

	INCLUDE.SCRIPT("lib/loaders/OBJLoader.js");
}
if (PROGRAM.MTLLoader == true) {

	INCLUDE.SCRIPT("lib/loaders/MTLLoader.js");
}
if (PROGRAM.MD2Loader == true) {

	INCLUDE.SCRIPT("lib/loaders/MD2Loader.js");
}
if (PROGRAM.ColladaLoader == true) {

	INCLUDE.SCRIPT("lib/loaders/ColladaLoader.js");
}


if (PROGRAM.MD2Character == true) {

	INCLUDE.SCRIPT("lib/Gyroscope.js");
	INCLUDE.SCRIPT("lib/OrbitControls.js");
	INCLUDE.SCRIPT("lib/MD2CharacterComplex.js");
	INCLUDE.SCRIPT("lib/MD2Character.js");
	INCLUDE.SCRIPT("js/md2.js");

}
if (PROGRAM.MD2Character == true) {

	INCLUDE.SCRIPT("lib/loaders/FBXLoader.js");

}

if (PROGRAM.GROUND == true) {

	INCLUDE.SCRIPT("lib/ground.js");
}
if (PROGRAM.RAYCAST == true) {

	INCLUDE.SCRIPT("lib/ray.js");
}
if (PROGRAM.PARTICLE_ENGINE == true) {

	INCLUDE.SCRIPT("js/particle.js");

}
if (PROGRAM.LIGHTS == true) {

	INCLUDE.SCRIPT("lib/lights.js")

}
if (PROGRAM.MATERIALS == true) {

	INCLUDE.SCRIPT("lib/materials.js")
	INCLUDE.SCRIPT("lib/geo.js")

}
/*    if (PROGRAM.PHYSI == true) {

   INCLUDE.SCRIPT("lib/physi/physi.js")


setTimeout( function(){

  Physijs.scripts.worker = 'lib/physi/physijs_worker.js';
  Physijs.scripts.ammo = 'lib/physi/ammo.js';
setTimeout( function(){
  INCLUDE.SCRIPT("lib/physi/physi_functions.js")
} , 500)

} , 500)


   } */



//

if (PROGRAM.CANNON == true) {

	INCLUDE.SCRIPT("lib/cannon/cannon/build/cannon.js")

	//INCLUDE.SCRIPT("lib/cannon.js")
	INCLUDE.SCRIPT("lib/cannonBeta.js")


}

