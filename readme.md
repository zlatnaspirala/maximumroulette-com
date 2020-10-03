
### Project maximumroulette.com ###

 https://maximumroulette.com

 #### Project is personal dev server for demostration.
 #### Owned by Nikola Lukic zlatnaspirala@gmail.com 2019 Serbia Nis.

 #### Public server host: cent os 7

 ### Skills : ###

JavaScript advanced (opengles 1.1/2.0/3.0-webGL2,websockets,native 2dcanvas,real-time app/multiplayer <br/>
games with full response for all modern desktop or mobile browsers). From scratch with or without <br/>
frameworks.JQ,http request,100% response or fixing specific response bugs.Xml,json,glmatrix,three.js.Pure<br/>
JavaScript Motion capture (make your site interactive without mouse,AR just use hand in the air,videoChat<br/>
on mobile web),made custom script. cannon.js ,drag,multiTouchHandler,canvas effect,porting on android /ios<br/>
without plugins). sip.js run with freeswitch, kurento, web voip client.<br/>
-ObjectiveC,Swift3(Xcode-openglesx.x-basic knowledge,html/xmlparse,soap,2dcanvas native no web<br/>
 Micro draw-2d games,animations with standard UI)<br/>
-Network TCP/IP(client/server c#/VBA, websockets node.js, typescript)<br/>
-VisualBasic&VisualC# windows desktop app (not asp and web)<br/>
-windows API<br/>
-Unity3d js/c# script solid knowledge<br/>
-Ue 4.x blueprint solid knowledge<br/>
-Blender - beginner/mid<br/>
-Android Studio - solid (native canvas2d,opengles,UI,sockets, classic app,
 services, no framework implementation web hybrid app)<br/>
<br/>

### Structure ###
<pre>
 src/applications "Old and new demos any kind."<br/>
   3d slot - need fix -old<br/>
   3d tshirts desing - Three.js vs visual JS game engine 2d<br/>
   Monsters - TPS basic demo with three.js and cannon.js<br/>
   kurento - multiplatfor video chat<br/>
  css/            "General style for site"<br/>
  imgs/           "Image resources"<br/>
  pages/          "Pages on site like Home , about + demos"<br/>
  scripts/        "JavaScript files"
</pre>

Update submodules command:
```bash
git submodule update --remote
```

#### Join maximumroulette.com project contribution team at:
- https://join.slack.com/t/maximumroulette/shared_invite/zt-ffcgl80x-CYu4s~YC0bD9Od9_bkqmzw

### Initial actions for deploying VPS ###

 OS : cent 7.5
 public address : maximumroulette.com

#### Apache centos 7.5 setup renew ssl letsencrypt ####

```bash
sudo /usr/bin/letsencrypt --apache -d maximumroulette.com -d apps.maximumroulette.com -d kure.maximumroulette.com -d roulette.maximumroulette.com -d artificialintelligence.maximumroulette.com
```

### About commercial projetcs

 Some sub project are encoded. You can try demo it's free.

  - Kure video chat link:</BR>
  https://maximumroulette.com:2020

  - HTML5 Roulette project:</BR>
  https://roulette.maximumroulette.com

  [WIP] VuleBule YTube service
  https://maximumroulette.com:3000

### Standard stable links:

  - Multiplayer Platformer variant nightly build:</BR>
  https://maximumroulette.com/applications/visual-typescript-game-engine/build/app.html
  - Single player solution for Platformer `nidzica`</BR>
  https://maximumroulette.com/applications/visual-typescript-game-engine/single-player/app.html
  - Experimental example for visula ts game engine project</BR>
  https://maximumroulette.com/applications/visual-typescript-game-engine/basket-ball-chat/app.html
  - Application html index:</BR>
  https://maximumroulette.com/applications/
  - WIP emsdk implementations</BR>
  https://maximumroulette.com/applications/c-cpp-to-js-tutorials/index.html
  - WebRTC vs wevGL (three.js vs multiRTC)</BR>
  https://maximumroulette.com/applications/chat/index.html
  - My own 3d framework:</BR>
  https://maximumroulette.com/webgl2/examples.html
  - Opengles 1.1 First person controller (my own - first touch with javascript):</BR>
  https://maximumroulette.com/applications/zlatnaspirala/index.html
  - Tshirts javascript free source: </BR>
  https://maximumroulette.com/framework/3d_Tshirts_desing/project_instance/tshirts.html?tshirts
  - TPS basic demo in three.js Shooter game demo:</BR>
  https://maximumroulette.com/framework/monsters/


### Gallery ###

![roulette](https://github.com/zlatnaspirala/maximumroulette-com/blob/master/promo-material/ultimate-roulette.jpg)
![3d-slot-based on three.js](https://github.com/zlatnaspirala/maximumroulette-com/blob/master/promo-material/3d_slot_source_code.png)
![platformer - based on matter.ts ](https://github.com/zlatnaspirala/maximumroulette-com/blob/master/promo-material/platformer.png)
![House](https://github.com/zlatnaspirala/maximumroulette-com/blob/master/promo-material/house.jpg)

### Install screen , apache ssl & other centos staff: ###

```console
  yum -y install screen
  sudo yum install -y yum-utils device-mapper-persistent-data lvm2
  sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
  sudo yum install docker-ce docker-ce-cli containerd.io
```

```console
  sudo yum install mod24_ssl
```
