var _0x49de=['currentWinningNumber','reflectionCube','spiningEndAudio','STATIC','addEventListener','abs','contact','addShape','addVisual','updater','push','Box','collide','ballMeshes','getImpactVelocityAlongNormal','ended','last20Numbers','currentTime','Body','quaternion','MeshPhongMaterial','add','pause','wheelnum','TorusGeometry','matShema','materials','Vec3','play','Quaternion','createTorus','setFromAxisAngle','Ball\x20touch\x20down\x20e\x20->\x20','gamePlay','flatShading','Trimesh','assets/wheel-roll/metal/2.jpg','spiningAudio','Current\x20wining\x20number\x20is:\x20','info','addBody','removeEventListener','paused','log','Mesh','container','setHSL'];(function(_0x590aa7,_0x49deb9){var _0x56b010=function(_0xf35ab){while(--_0xf35ab){_0x590aa7['push'](_0x590aa7['shift']());}};_0x56b010(++_0x49deb9);}(_0x49de,0x1da));var _0x56b0=function(_0x590aa7,_0x49deb9){_0x590aa7=_0x590aa7-0x0;var _0x56b010=_0x49de[_0x590aa7];return _0x56b010;};var TOTAL_Y=1.3;function initWheelRoll(_0x5a2a45){var _0x5aee9b=0x1;var _0x34f464=0.35;var _0x960222=0.15;var _0x12079d=0xa;var _0x37194e=new CANNON[(_0x56b0('0xe'))]({'mass':_0x12079d,'position':new CANNON[(_0x56b0('0x17'))](0x0,TOTAL_Y,0x0),'type':CANNON[_0x56b0('0xe')]['STATIC']});_0x37194e[_0x56b0('0xf')][_0x56b0('0x1b')](new CANNON[(_0x56b0('0x17'))](0x0,0x1,0x0),Math['PI']/0x20);var _0x528863=new CANNON[(_0x56b0('0x7'))](new CANNON[(_0x56b0('0x17'))](0.5*_0x5aee9b,0.5*_0x34f464,0.5*_0x960222));for(var _0x203ee0=0x0;_0x203ee0<0x25;_0x203ee0++){var _0x2f9b54={'x':0x3,'y':0x3,'z':0x0};_0x2f9b54=orbit(0x0,0x0,_0x203ee0/5.905,_0x2f9b54);var _0x4a60d5=_0x2f9b54['x'];var _0x5464b4=0xa;var _0x5a187b=_0x2f9b54['y'];var _0x417b35=null;if(_0x203ee0==0x0){_0x417b35=new CANNON[(_0x56b0('0x19'))](0x0,0x0,0x0,0x0);_0x417b35['setFromAxisAngle'](new CANNON[(_0x56b0('0x17'))](0x0,0x1,0x0),-0x5a*Math['PI']/0x168);}else{var _0x48c0c9=-_0x203ee0/5.95-0x5a*Math['PI']/0x168;_0x417b35=new CANNON[(_0x56b0('0x19'))](0x0,0x0,0x0,0x0);_0x417b35[_0x56b0('0x1b')](new CANNON[(_0x56b0('0x17'))](0x0,0x1,0x0),_0x48c0c9);}_0x37194e[_0x56b0('0x3')](_0x528863,new CANNON[(_0x56b0('0x17'))](_0x4a60d5,0x6,_0x5a187b),_0x417b35);}_0x5a2a45[_0x56b0('0x24')](_0x37194e);var _0x3812d4=new THREE[(_0x56b0('0x10'))]({'color':0x996633,'envMap':app[_0x56b0('0x16')][_0x56b0('0x2c')],'specular':0x50505,'shininess':0x64});demo[_0x56b0('0x4')](_0x37194e,_0x3812d4);_0x37194e[_0x56b0('0xf')]['setFromAxisAngle'](new CANNON[(_0x56b0('0x17'))](0x0,0x1,0x0),5.23*Math['PI']/0x20);app['wheelRoll2']=initWheelRollS();initWheelRing();return _0x37194e;}function initWheelRollS(){var _0x5ded52=0x1;var _0x3665f5=0.15;var _0x543797=0.72;var _0x5a5627=0x5;var _0x1498bb=new CANNON[(_0x56b0('0xe'))]({'mass':_0x5a5627,'position':new CANNON[(_0x56b0('0x17'))](0x0,TOTAL_Y-0.3,0x0),'type':CANNON[_0x56b0('0xe')][_0x56b0('0x2e')]});_0x1498bb[_0x56b0('0xf')][_0x56b0('0x1b')](new CANNON[(_0x56b0('0x17'))](0x0,0x1,0x0),Math['PI']/0x20);for(var _0x5540b2=0x0;_0x5540b2<0x25;_0x5540b2++){var _0x151939=new CANNON[(_0x56b0('0x7'))](new CANNON[(_0x56b0('0x17'))](0.5*_0x5ded52,0.5*_0x3665f5,0.5*_0x543797));var _0x5579dc={'x':0x3,'y':0x3,'z':0x0};_0x5579dc=orbit(0x0,0x0,_0x5540b2/5.89,_0x5579dc);var _0x1435dc=_0x5579dc['x'];var _0x4b9721=0xa;var _0x10b5e9=_0x5579dc['y'];var _0xc6446b=-0x5a;var _0x2d9192=null;if(_0x5540b2==0x0){_0x2d9192=new CANNON[(_0x56b0('0x19'))](0x0,0x0,0x0,0x0);_0x2d9192[_0x56b0('0x1b')](new CANNON[(_0x56b0('0x17'))](0x0,0x1,0x0),_0xc6446b*Math['PI']/0x168);}else{var _0x246826=-_0x5540b2/5.85+_0xc6446b*Math['PI']/0x168;_0x2d9192=new CANNON['Quaternion'](0x0,0x0,0x0,0x0);_0x2d9192[_0x56b0('0x1b')](new CANNON[(_0x56b0('0x17'))](0x0,0x1,0x0),_0x246826);}_0x151939['wheelnum']=_0x5540b2+0x1;_0x1498bb['addShape'](_0x151939,new CANNON[(_0x56b0('0x17'))](_0x1435dc,0x6,_0x10b5e9),_0x2d9192);}world[_0x56b0('0x24')](_0x1498bb);var _0x5a5d48=[];var _0x12c54a=[0x0,0x20,0xf,0x13,0x4,0x15,0x2,0x19,0x11,0x22,0x6,0x1b,0xd,0x24,0xb,0x1e,0x8,0x17,0xa,0x5,0x18,0x10,0x21,0x1,0x14,0xe,0x1f,0x9,0x16,0x12,0x1d,0x7,0x1c,0xc,0x23,0x3,0x1a];app[_0x56b0('0x15')]=_0x12c54a;for(var _0x47c681=0x0;_0x47c681<0x25;_0x47c681++){_0x5a5d48[_0x56b0('0x6')](new THREE['MeshPhongMaterial']({'color':0xffffff,'map':tex('assets/wheel-roll/numbers-128/'+_0x12c54a[_0x47c681]+'.png'),'shininess':0xc8}));}_0x1498bb[_0x56b0('0x0')](_0x56b0('0x8'),function(_0x5f532a){var _0x20e8d1=_0x5f532a[_0x56b0('0x2')][_0x56b0('0xa')]();if(Math[_0x56b0('0x1')](_0x20e8d1)>0xa){}else{if(audioSys[_0x56b0('0x21')][_0x56b0('0x26')]===!![]){return;}var _0x1a57a8=_0x5f532a[_0x56b0('0x2')]['sj'][_0x56b0('0x13')];if(_0x1a57a8>-0x1&&_0x1a57a8<0x26){_0x1a57a8=app[_0x56b0('0x15')][_0x1a57a8-0x1];audioSys[_0x56b0('0x21')][_0x56b0('0xd')]=0x0;audioSys[_0x56b0('0x21')][_0x56b0('0x25')](_0x56b0('0xb'),app['onSpiningEndAudio'],!![]);audioSys['spiningAudio'][_0x56b0('0x12')]();audioSys[_0x56b0('0x2d')][_0x56b0('0x18')]();app['gamePlay'][_0x56b0('0x2b')]=_0x1a57a8;app[_0x56b0('0x1d')][_0x56b0('0xc')][_0x56b0('0x6')](_0x1a57a8);console[_0x56b0('0x23')](_0x56b0('0x22'),_0x1a57a8);setWinningNumber(_0x1a57a8);}console[_0x56b0('0x27')](_0x56b0('0x1c'),_0x5f532a);}});demo[_0x56b0('0x4')](_0x1498bb,_0x5a5d48);return _0x1498bb;}function initWheelRing(){var _0x11a83d=0x20;var _0xf4396a=new CANNON[(_0x56b0('0xe'))]({'mass':0x1,'type':CANNON[_0x56b0('0xe')][_0x56b0('0x2e')],'shape':CANNON[_0x56b0('0x1f')][_0x56b0('0x1a')](3.7,0.2,_0x11a83d,_0x11a83d),'position':new CANNON[(_0x56b0('0x17'))](0x0,TOTAL_Y+5.92,0x0)});_0xf4396a[_0x56b0('0xf')][_0x56b0('0x1b')](new CANNON[(_0x56b0('0x17'))](0x1,0x0,0x0),-Math['PI']/0x2);world[_0x56b0('0x24')](_0xf4396a);var _0xe67ce3=new THREE[(_0x56b0('0x14'))](3.7,0.2,_0x11a83d,_0x11a83d);var _0x36f898=new THREE['MeshPhongMaterial']({'color':0xffffff,'map':tex(_0x56b0('0x20')),'specular':0xffffff,'shininess':0x78});_0x36f898['color'][_0x56b0('0x2a')](0x1,0x0,0.5);_0x36f898[_0x56b0('0x1e')]=![];var _0x3efa55=new THREE[(_0x56b0('0x28'))](_0xe67ce3,_0x36f898);scene[_0x56b0('0x11')](_0x3efa55);app[_0x56b0('0x29')]['balls'][_0x56b0('0x6')](_0xf4396a);app[_0x56b0('0x5')][_0x56b0('0x9')][_0x56b0('0x6')](_0x3efa55);initCenterRoll();}