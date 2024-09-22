
<template>
  <div ref="myHeader" class="myHeader">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <md-menu md-size="medium" md-align-trigger>
      <md-button class="md-primary md-raised" md-menu-trigger>
        Published
        <md-icon class="fa fa-rocket md-accent" />
      </md-button>
      <md-menu-content md-menu-content-large>
        <md-menu-item>
          <md-button
            class="md-primary md-raised"
            v-show="loginBtnVisibility"
            @click="showAboutComponent()"
          >
            <md-icon class="fa fa-shield"></md-icon>
            Home
          </md-button>
        </md-menu-item>
        <md-menu-item>
          <md-button
            class="md-primary md-raised"
            v-show="loginBtnVisibility"
            @click="
              window.open(
                'https://maximumroulette.com/apps/visual-ts/singleplayer/app.html',
                '_blank'
              )
            "
          >
            <md-icon class="fa fa-shield"></md-icon>
            Platformer in TS
          </md-button>
        </md-menu-item>
        <md-menu-item>
          <md-button
            class="md-primary md-raised"
            v-show="loginBtnVisibility"
            @click="
              window.open(
                'http://maximumroulette.com/apps/shooter/hang3d-nightmare.html',
                '_blank'
              )
            "
          >
            <md-icon class="fa fa-shield"></md-icon>
            Multiplayer Hang3D
          </md-button>
        </md-menu-item>
        <md-menu-item>
          <md-button
            class="md-primary md-raised"
            v-show="loginBtnVisibility"
            @click="
              window.open(
                'https://maximumroulette.com/apps/shoot-the-zombie/',
                '_blank'
              )
            "
          >
            <md-icon class="fa fa-shield"></md-icon>
            Shoot the zombie 2
          </md-button>
        </md-menu-item>
        <md-menu-item>
          <md-button
            class="md-primary md-raised"
            v-show="loginBtnVisibility"
            @click="
              window.open(
                'https://maximumroulette.com/apps/realistic-rendering/',
                '_blank'
              )
            "
          >
            <md-icon class="fa fa-shield"></md-icon>
            Realistic rendering
          </md-button>
        </md-menu-item>
        <md-menu-item>
          <md-button
            class="md-primary md-raised"
            v-show="loginBtnVisibility"
            @click="showDownloadsComponent()"
          >
            <md-icon class="fa fa-shield"></md-icon>
            Downloads
          </md-button>
        </md-menu-item>
      </md-menu-content>
    </md-menu>

    <md-menu md-size="medium" md-align-trigger>
      <md-button class="md-primary md-raised" md-menu-trigger>
        Apps
        <md-icon class="fa fa-rocket md-accent" />
      </md-button>
      <md-menu-content md-menu-content-large>
        <md-menu-item>
          <md-button
            class="md-primary md-raised"
            v-show="loginBtnVisibility"
            @click="
              window.open('https://roulette.maximumroulette.com', '_blank')
            "
          >
            <md-icon class="fa fa-shield"></md-icon>
            Ultimate Roulette
          </md-button>
        </md-menu-item>
        <md-menu-item>
          <md-button
            class="md-primary md-raised"
            v-show="loginBtnVisibility"
            @click="
              window.open(
                'https://maximumroulette.com/apps/magic/public/module.html',
                '_blank'
              )
            "
          >
            <md-icon class="fa fa-shield"></md-icon>
            HANG3D Reborn - threejs/ammojs/kurento/ov ✅
          </md-button>
        </md-menu-item>
        <md-menu-item>
          <md-button
            class="md-primary md-raised"
            v-show="loginBtnVisibility"
            @click="window.open('https://maximumroulette.com:2020', '_blank')"
          >
            <md-icon class="fa fa-shield"></md-icon>
            Kure Orange Video Chat ✅
          </md-button>
        </md-menu-item>
        <md-menu-item>
          <md-button
            class="md-primary md-raised"
            v-show="loginBtnVisibility"
            @click="window.open('https://maximumroulette.com:3000', '_blank')"
          >
            <md-icon class="fa fa-shield"></md-icon>
            VuleTube 3d youtube ❌
          </md-button>
        </md-menu-item>
        <md-menu-item>
          <md-button
            class="md-primary md-raised"
            v-show="loginBtnVisibility"
            @click="
              window.open(
                'https://maximumroulette.com/apps/matrix-engine/examples-build.html',
                '_blank'
              )
            "
          >
            <md-icon class="fa fa-shield"></md-icon>
            Matrix Engine
          </md-button>
        </md-menu-item>
        <md-menu-item>
          <md-button
            class="md-primary md-raised"
            v-show="loginBtnVisibility"
            @click="
              window.open(
                'https://maximumroulette.com/apps/nidza/nidza/examples/example-build.html?u=multi-nidza-3dindentity.js',
                '_blank'
              )
            "
          >
            <md-icon class="fa fa-shield"></md-icon>
            Nidza.js
          </md-button>
        </md-menu-item>
        <md-menu-item>
          <md-button
            class="md-primary md-raised"
            v-show="loginBtnVisibility"
            @click="
              window.open(
                'https://maximumroulette.com/apps/tshirts/project_instance/tshirts.html?tshirts',
                '_blank'
              )
            "
          >
            <md-icon class="fa fa-shield"></md-icon>
            t-shirts webgl vs 2d [very old project]
          </md-button>
        </md-menu-item>
        <md-menu-item>
          <md-button
            class="md-primary md-raised"
            v-show="loginBtnVisibility"
            @click="
              window.open('https://maximumroulette.com/apps/monsters', '_blank')
            "
          >
            <md-icon class="fa fa-shield"></md-icon>
            Three.js TPS demo
          </md-button>
        </md-menu-item>
      </md-menu-content>
    </md-menu>
    <md-menu>
      <md-button class="md-primary md-raised" md-menu-trigger>MORE</md-button>
      <md-menu-content>
        <md-menu-item>
          <md-button
            class="md-primary md-raised"
            ref="switchThemeBtn"
            @click="switchTheme"
          >
            <md-icon>T</md-icon>
            Theme {{ switchThemeBtnLabel }}
          </md-button>
        </md-menu-item>
        <md-menu-item>
          <md-button
            @click="showAboutDialogClick()"
            class="md-primary md-raised"
            md-menu-trigger
            >Donate, About and Credits</md-button
          >
        </md-menu-item>
      </md-menu-content>
    </md-menu>

    <md-dialog :md-active.sync="showAboutDialog">
      <md-dialog-title>Credits and About</md-dialog-title>
      <md-tabs md-dynamic-height>
        <md-tab md-label="Credits">
          <md-content class="md-scrollbar">
            <h3>Used in my project:</h3>
            <md-content v-bind:style="optionsStyle">
              <h4>Project structural/methodology</h4>
              <a target="_blank" href="https://vuejs.org/"
                >https://vuejs.org/</a
              >
              <h4>JavaScript 3D library.</h4>
              <a target="_blank" href="https://threejs.org/"
                >https://threejs.org/</a
              >
            </md-content>
          </md-content>
        </md-tab>

        <md-tab md-label="Donate">
          <md-content class="md-scrollbar" style="text-align: center">
            <h3>Thank you for using my software.</h3>
            <br />
            <div id="paypal-button-container"></div>
          </md-content>
        </md-tab>

        <md-tab md-label="About Maximumroulette Service">
          <md-content class="md-scrollbar" v-bind:style="optionsStyle">
            <img
              style="width: 100%; max-width: 600px; margin: -5px -5px -5px -5px"
              src="/assets/about-maxi.png"
            />
            <h3>Project name: Maximumroulette.com</h3>
            <br />
            <span>https://maximumroulette.com</span>
            <p>This project is open source :</p>
            <a
              target="_blank"
              href="https://github.com/zlatnaspirala//blob/master/LICENSE"
              >LICENCE</a
            >
            <br />
            <a target="_blank" href="https://github.com/zlatnaspirala/"
              >Download source code</a
            >

            <div>
              zlatnaspirala/goldenspiral software zlatnaspirala/zlatnaspirala is
              just github readme template. it is my first touch with javaScript.
              It is funny but this webgl app works on android 3 from 2007
              [opengles1.1]. Modern version and scene object orientend version
              of this code is matrix-engine. Matrix-engine comes with click
              trigger raycast, bvh animation, transformations,
              video/camera/canvas2d active textures and more. Matrix-engine at
              the moment support only opengle300 SL ver but can be manual
              downgraded to the 1.1 [1.1 openglews will limit engine features]
              Safir is simple direct DOM update with own return render
              <div>...</div>
              based on ECMA6 special on CustomEvent and literals - i figure why
              vanilla is best and i push rerender principe in secound plan.
              Updating direct html tag mehanics with optimal arg LEVEL of saving
              content [in fly, session storage, local storage ]. Nidza.js is
              2dcanvas oriented but also i put special webgl/glmatrix
              basic/custom shaders for webGL surface. Global shema for
              zlatnaspirala software Database used MongoDB Ref:
              https://www.mongodb.com/why-use-mongodb I make uniq shema for
              database jobs. REST HTTP SERVER - HANDLING ACCOUNT SESSION
              Communication only with http request. This project lead in backend
              part. Used by kickstart/safir, rocket-craft projects. RCS Server
              Communication only with websockets[webRTC]. Same DB used (like
              rocketcraftingserver). This project is standalone powered with
              Node.js/mongoDB/webRTC. Visual-TS GE server part ROCKET CRAFT -
              UE4 projetcs In ue4.24 i use http/https request data format JSON.
              empty BarbarianRoadMashines Shoot the zombie Hang3d FPShooter
              Safir Light virtual DOM. Tech: Based on ECMA6 programming
              paradigms builded on Template Literals, CustomEvents, Custom Tags.
              Alternative software - High Performace Matrix-engine WebGL library
              based on glmatrix ver 2.xx. Can be downgraded with url param to
              the glsl 1.1. For networking used broadcaster class.Same used in
              RCS/Visual-ts GE. Broadcaster don't care about DB record it is
              singnaling server very usefull in 3d context(multiplayer modes
              etc.). Visual-ts Game Engine 2d canvas game engine based on
              Matter.js 2D physics engine for the web supported with backend
              node.js/mongoDB and visual GUI tool 2d map creator/python3.
              <br />
              https://github.com/zlatnaspirala/visual-ts-game-engine
              <br />
              Tags:<br />
              canvas2d-webgl-webrtc-android-sockets-realtime-nodejs-ue4-unity-xcode-visual-studio
              Personal dev stage server https://maximumroulette.com

              <br />
              YT Channel<br />
              https://www.youtube.com/channel/UCc1NtMtvoVzKnOtnai9LGsA/videos
              <br />
              Stackoverflow:<br />
              https://stackoverflow.com/users/1513187/nikola-lukic Hackerrank AI
              Leaderboard<br />
              https://www.hackerrank.com/leaderboard?page=2&track=ai&type=practice<br />
              Open Source hosted projects [standard maximumroulette links]:<br />
              Shader playground - I need more skills in this area. All
              shaders<br />
              will be part of buildin matrix-engine custom shaders but only
              with<br />
              MIT Licence. https://github.com/zlatnaspirala/GLSL-Shaders<br />
              https://maximumroulette.com/apps/glsl-editor/<br />
              [matrix-engine-starter] wip<br />
              https://maximumroulette.com/apps/matrix-engine-starter/projects/matrix-roulette/<br />
              [SAFIR] My own virtual DOM ECMA6 project<br />
              https://maximumroulette.com/apps/safir/ UE4 Hang3d Nightmare
              FPS<br />
              Multiplayer [dedicated server runs / maybe not always] New high<br />
              Quallity: http://maximumroulette.com/apps/hang3d/ Old:<br />
              http://maximumroulette.com/apps/shooter/hang3d-nightmare.html<br />
              https://maximumroulette.com/apps/shoot-the-zombie <br />
              UE4 [ no running dedicated server ]<br />
              https://maximumroulette.com/apps/realistic-rendering UE4<br />
              http://rocketcraft.maximumroulette.com UE4 Barbarian Road Mashines
              Beta [no server run for multiplayer only single]<br />
              https://maximumroulette.com/apps/visual-ts/singleplayer/app.html<br />
              VisualTS Game engine Platformer with video chat<br />
              [nodejs,js,ts,matter.js] [own] https://maximumroulette.com:3000<br />
              [Link Not active at the moment] Vuletube YouTube experimental
              player[own]
              https://maximumroulette.com/apps/matrix-engine/examples-build.html<br />
              Matrix Engine [own webgl engine] [based on glmatrix]<br />
              https://maximumroulette.com/apps/matrix-engine-starter/projects/matrix-slot/index.html<br />
              Slot mashine based on matrix-engine
              https://maximumroulette.com/apps/magic/public/module.html <br />
							Magic
              (three.js) Multiplayer run on signaling matrix-engine server.
              https://maximumroulette.com/apps/tshirts/project_instance/tshirts.html?tshirts
              [own/old] https://maximumroulette.com/apps/monsters [own/old]
              https://maximumroulette.com/downloads/UA0.2free/UAinstaller.rar
              Free 3d anatomy [win desktop exe] Freeware.
            </div>
          </md-content>
        </md-tab>
      </md-tabs>

      <md-dialog-actions>
        <md-button color="md-primary" @click="showAboutDialog = false"
          >HIDE</md-button
        >
      </md-dialog-actions>
    </md-dialog>
  </div>
</template>

<style lang="scss" scoped>
@media only screen and (max-width: 600px) {
  .md-button {
    font-size: xx-small;
  }
}

.main-container {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

.md-menu {
  margin: 1px;
}

.md-button {
  font-weight: 400;
}

.myHeader {
  width: 100%;
  height: 41px;
  -webkit-box-shadow: 1px 1px 3px 3px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 1px 1px 3px 3px rgba(0, 0, 0, 0.5);
  box-shadow: 1px 1px 3px 3px rgba(0, 0, 0, 0.5);
}

.md-content {
  font-size: 110%;
  height: 500px;
}
</style>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import {
  mdMenu,
  mdButton,
  mdIcon,
  mdContent,
  mdProgressSpinner,
} from "vue-material";
import { switchTheme, isMobile } from "./../my-common/common-func";
import IHeader from "./IHeader";

const CompProps = Vue.extend({
  props: {
    slogan: String,
    switchPlaceA: { type: Function },
  },
});

// Register for components
@Component({
  components: {
    mdButton,
    mdMenu,
    mdIcon,
    mdProgressSpinner,
    mdContent,
  },
})
@Component
export default class myHeader extends CompProps implements IHeader {
  declare windowGlobal: Window | any;
  declare paypal: any;

  private showAboutDialog: boolean = false;

  public optionsStyle = {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    paddingBottom: "10px",
    itemsAlign: "left",
    height: "650px",
    overflow: "scroll",
  };

  constructor() {
    super();
    this.windowGlobal = window;
    this.switchTheme = switchTheme.bind(this);
  }

  data() {
    return {
      myData: "test",
      tyfetchVisibility: true,
      loginBtnVisibility: false,
      switchThemeBtnLabel: "Dark",
      isMobile: isMobile,
    };
  }

  switchTheme() {}

  changeTheme(themeEnu: string) {
    this.$set(this, "switchThemeBtnLabel", themeEnu);
  }

  visibilityUsersComponent(): void {
    (this.$root.$children[0] as any).setUsersVisibility();
  }

  mounted(): void {
    (this.$root as any).$material.theming.theme = "Dark";
    this.$set(this, "tyfetchVisibility", false);
    this.$set(this, "loginBtnVisibility", true);
    this.$set(this, "switchThemeBtnLabel", "Dark");
  }

  createPayPalDonateButton() {
    var root = this;
    var myPaypal = document.createElement("script");
    myPaypal.src =
      "https://www.paypal.com/sdk/js?client-id=AT1RiWCQ0vlgUA7ZC0Qnvu1p_pfqrD-AIYSRw0fAweI0FBJJgt1n4yiwhdxjEwMBWxaAIUFS8Ixu1vMc&currency=USD";
    myPaypal.setAttribute("data-sdk-integration-source", "button-factory");
    document.head.appendChild(myPaypal);

    myPaypal.onload = function () {
      root.windowGlobal.paypal
        .Buttons({
          style: {
            shape: "rect",
            color: "blue",
            layout: "vertical",
            label: "paypal",
          },
          createOrder: function (data, actions) {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: "20",
                  },
                },
              ],
            });
          },
          onApprove: function (data, actions) {
            return actions.order.capture().then(function (details) {
              console.warn(
                "Transaction completed by " +
                  details.payer.name.given_name +
                  "!"
              );
            });
          },
        })
        .render("#paypal-button-container");
    };
  }

  public showAboutDialogClick() {
    this.showAboutDialog = true;
    this.createPayPalDonateButton();
  }

  public showDownloadsComponent() {
    (this.$root.$children[0] as any).showDownloads();
  }

  public showAboutComponent() {
    (this.$root.$children[0] as any).showAbouts();
  }

  public showShooterFrame() {
    (this.$root.$children[0] as any).showAboutsAndShooterFrame();
  }
}
</script>
