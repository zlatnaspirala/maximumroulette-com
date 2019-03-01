
### Project maximumroulette.com ###

 Project is personal dev server for demostration.
 Owned by Nikola Lukic zlatnaspirala@gmail.com 2019 Serbia Nis.

 Skills :

JavaScript advanced (opengles 1.1/2.0/3.0-webGL2,websockets,native 2dcanvas,real-time app/multiplayer
games with full response for all modern desktop or mobile browsers). From scratch with or without
frameworks.JQ,http request,100% response or fixing specific response bugs.Xml,json,glmatrix,three.js.Pure
JavaScript Motion capture (make your site interactive without mouse,AR just use hand in the air,videoChat
on mobile web),made custom script. cannon.js ,drag,multiTouchHandler,canvas effect,porting on android /ios
without plugins). sip.js run with freeswitch, kurento, web voip client.
-ObjectiveC,Swift3(Xcode-openglesx.x-basic knowledge,html/xmlparse,soap,2dcanvas native no web
 Micro draw-2d games,animations with standard UI)
-Network TCP/IP(client/server c#/VBA, websockets node.js, typescript)
-VisualBasic&VisualC# windows desktop app (not asp and web)
-windows API
-Unity3d js/c# script solid knowledge
-Ue 4.x blueprint solid knowledge
-Blender - beginner/mid
-Android Studio - solid (native canvas2d,opengles,UI,sockets, classic app, services, no framework implementation web hybrid app)

### Structure ###

 src/applications "Old and new demos any kind."
   3d slot - need fix -old
   3d tshirts desing - Three.js vs visual JS game engine 2d
   Monsters - TPS basic demo with three.js and cannon.js
   kurento - multiplatfor video chat
 css/             "General style for site"
 imgs/            "Image resources"
 pages/           "Pages on site like Home , about + demos"
 scripts/         "JavaScript files"


### Initial actions for deploying VPS ###

 OS : cent 7.5
 public address : maximumroulette.com

 Install screen :

```console
  yum -y install screen

  sudo yum install -y yum-utils device-mapper-persistent-data lvm2

  sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo

  sudo yum install docker-ce docker-ce-cli containerd.io
```

```
  sudo yum install mod24_ssl
```
