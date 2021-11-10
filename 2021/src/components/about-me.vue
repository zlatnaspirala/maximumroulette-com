
<template>
  <div v-bind:style="styleObject">

    <h1 style="width:100%">{{ $props.slogan }}</h1>
 
    <md-content class="md-sub-content" style="height:auto;height:450px;overflow:scroll;overflow-x: hidden;">
      <h2>News</h2>
      <p> <b>RocketCrafting Projects</b> </p>
      <p>Use Unreal engine to create classic 2d context applications.
         Similar to the standard web application. Rocket is most powerfull
         cross platform tool i need to use it. 4.24 version is most interest
         checkpoint for UE. Last version with opengles 2.0 devices support (mobile).
         Also is version where we use new feature exstension HTML5 build. Explanation:
         with opengles 2.0 we can still build our application for old android os.
         In other way 4.24 is one of the last releases. Future upgrade will be easy.
         Please join the team and participate: 
         <a href="https://github.com/orgs/RocketCraftingServer/teams/rocketcraftingteam" target="_blank">
           RocketCraftingServer/teams/rocketcraftingteam
         </a>

         Test beta version direct link: <br>
         <a href="http://rocketcraft.maximumroulette.com/" target="_blank" >rocketcraft.maximumroulette.com</a><br>
         <a href="http://maximumroulette.com/apps/shooter/hang3d-nightmare.html" target="_blank" >Multiplayer hang3d-nightmare</a><br>
         <a href="https://maximumroulette.com/apps/shoot-the-zombie/" target="_blank" >Shoot-the-zombie</a><br>
         <a href="https://maximumroulette.com/apps/realistic-rendering/" target="_blank" >Realistic rendering</a><br>

      </p>

      <h2 class="marginTopH2 marginTopH2low">News</h2>
      <p  class="marginTopH2"> <b>VisualTsGameEngine</b> </p>
      <p class="marginTopH2"> <b>VisualTS GE prepared for npm service </b> </p>
      <p>
          Whats good in this project:<br>
          No strange logs - No need for forums just follow stackoverflow.com and wc3.
          Fast console log access, tracking code
          no single eval ('popular' js frameworks usually are based on eval)
          Fast rebuild <br>
          <span>Simple there is nothing between you and making the app.</span>
          Written in typescript current version 3.7.4. <br>
          Text editor used and recommended: Last version of Visual Studio Code.<br>
           Luanch debugger configuration comes with this project (for server part).<br>
          Physics engine based on Matter.js - Matter.ts (npm project).<br>
          Multiplatform video chat (for all browsers) implemented. SocketIO used for session staff.<br>
          MultiRTC2 used for data transfer also for video chat. MultiRTC3 alias 'broadcaster' used for video chat.<br>
          Mobile controls / Tested on android.<br>

          Please join the team and participate:<br>
         <a href="https://github.com/zlatnaspirala/visual-ts-game-engine" target="_blank">
           GitHub hosted open source project
         </a>

         Live:
         <a href="https://maximumroulette.com/apps/visual-ts/singleplayer/app.html" target="_blank" >Single player</a>
      </p>
      </md-content>

    <md-content class="md-sub-content" style="height:auto;height:450px;overflow:scroll;overflow-x: hidden;">
      <h2>News</h2>
      <p> <b>CrossK App Engine</b> </p>

      <img style="width:80%" src="/assets/images/crossk-app-engine.png" />

      <md-button class="md-primary" @click="window.open('https://github.com/zlatnaspirala/cross-k', '_blank');">
        Download source code CrossK App engine  <md-icon class="fa fa-github md-size-2x" ></md-icon>
      </md-button>

      <p>

      </p>

    </md-content>

      <md-content class="md-sub-content" style="display:flex;flex-direction: column">
        <h2>Welcome to my developing stage server</h2>
          <strong>Graphics and Networking</strong>
          JavaScript (opengles 1.1/2.0/3.0//webGL webRTC WebSockets 2DCanvas) real-time applications or 
          multiplayer games with full response for all modern desktop or mobile browsers.

        <md-button class="md-primary" @click="window.open('https://github.com/zlatnaspirala', '_blank');">
          zlatnaspirala  <md-icon class="fa fa-github md-size-2x" ></md-icon>
        </md-button>

        <md-button class="md-primary" @click="window.open('https://stackoverflow.com/story/3d', '_blank');">
          stackoverflow.com/story/3d <md-icon class="fa fa-stack-overflow md-size-2x" ></md-icon>
        </md-button>

        <md-button class="md-primary" @click="window.open('https://www.linkedin.com/in/3dprogramer', '_blank');">
          linkedin.com/in/3dprogramer <md-icon class="fa fa-linkedin-square md-size-2x"></md-icon>
        </md-button>

        <md-button class="md-primary" @click="window.open('https://www.hackerrank.com/leaderboard?page=1&track=ai&type=practice', '_blank');">
          hackerrank.com leaderboard ai practice <md-icon class="fa fa-list-ol md-size-2x"></md-icon>
        </md-button>
        
      </md-content>

      <md-content class="md-sub-content">
        <h2>From scratch with or without frameworks HTML/JS/CSS role. My favorite tags list:</h2>
        <md-chip class="md-primary md-accent">vanilla-javascript</md-chip>
        <md-chip class="md-accent md-primary">server-side-nodejs</md-chip>
        <md-chip md-disabled>mongoDB</md-chip>
        <md-chip md-disabled>VisualBasic</md-chip>
        <md-chip md-disabled>VisualC#</md-chip>
        <md-chip md-disabled>windows desktop</md-chip>
        <md-chip md-disabled>windows-api</md-chip>
        <md-chip md-disabled>blender-beginner</md-chip>
        <md-chip md-disabled>opengles</md-chip>
        <md-chip md-disabled>sockets</md-chip>
        <md-chip md-disabled>C++ beginner</md-chip>
        <md-chip class="md-accent" md-clickable>glmatrix</md-chip>
        <md-chip class="md-accent" md-clickable>three.js</md-chip>
        <md-chip class="md-accent" md-clickable>cannon.js</md-chip>
        <md-chip class="md-accent" md-clickable>matter.js</md-chip>
        <md-chip class="md-accent" md-clickable>sip.js</md-chip>
        <md-chip class="md-accent" md-clickable>kurento</md-chip>
        <md-chip class="md-accent" md-clickable>open-vidu</md-chip>
        <md-chip class="md-primary" md-clickable>motion-capture</md-chip>
        <md-chip class="md-primary" md-clickable>ar</md-chip>
        <md-chip class="md-primary" md-clickable>video-Chat</md-chip>
        <md-chip class="md-primary" md-clickable>cross-platform</md-chip>
        <md-chip class="md-primary" md-clickable>multiTouchHandler</md-chip>
        <md-chip class="md-primary" md-clickable>porting</md-chip>
        <md-chip class="md-primary" md-clickable>android</md-chip>
        <md-chip class="md-primary" md-clickable>ios</md-chip>
        <md-chip class="md-primary" md-clickable>2dcanvas</md-chip>
        <md-chip class="md-primary" md-clickable>animations</md-chip> 
        <md-chip class="md-primary" md-clickable>animations</md-chip>
        <md-chip class="md-primary" md-clickable>games</md-chip>
        <md-chip class="md-primary" md-clickable>web micro draw-2dsockets</md-chip>
        <md-chip class="md-primary" md-clickable>websockets</md-chip>
        <md-chip class="md-primary" md-clickable>TCP/IP</md-chip>
        <md-chip class="md-primary" md-clickable>ObjectiveC</md-chip>
        <md-chip class="md-primary" md-clickable>swift3-openglesx.x</md-chip>
        <md-chip class="md-primary" md-clickable style="background-color:#448aff">multi-touch-handler</md-chip>
        <md-chip class="md-primary" md-clickable style="background-color:#448aff">typescript</md-chip>
        <md-chip class="md-primary" md-clickable style="background-color:#448aff">reactjs</md-chip>
        <md-chip class="md-primary" md-clickable style="background-color:#448aff">nextjs</md-chip>
        <md-chip class="md-primary" md-clickable style="background-color:#448aff">reactjs-typescript</md-chip>
        <md-chip class="md-primary" md-clickable style="background-color:#448aff">nextjs-typescript</md-chip>
        <md-chip class="md-primary" md-clickable style="background-color:#448aff">vue</md-chip>
        <md-chip class="md-primary" md-clickable style="background-color:#448aff">vue-typescript</md-chip>
        <md-chip class="md-primary" md-clickable style="background-color:#b2ff59">unreal-engine</md-chip>
        <md-chip class="md-primary" md-clickable style="background-color:#b2ff59">unity</md-chip>
        <md-chip class="md-primary" md-clickable style="background-color:#ff1744">visual-studio</md-chip>
        <md-chip class="md-primary" md-clickable style="background-color:#ff1744">xcode</md-chip>
        <md-chip class="md-primary" md-clickable style="background-color:#ff1744">android-studio</md-chip>
        <md-chip class="md-primary" md-clickable style="background-color:#ff5252">emsdk</md-chip>
        <md-chip class="md-primary" md-clickable style="background-color:#ff5252">cef</md-chip>
        
      </md-content>

      <md-content class="md-sub-content" style="height:auto">
        <iframe width="100%" style="height:320px"  src="/apps/funny-slot/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
       <p> ECMA5 Vanilla JS</p>
      </md-content>

      <md-content class="md-sub-content" style="height:auto;width:23%">
        <object width="100%" style="height:320px"  data="/apps/zlatnaspirala/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></object>
        <p>My first touch with JS, interest fact this app works from android 3.x</p>
      </md-content>

      <md-content class="md-sub-content" style="height:auto;height:450px;overflow:scroll;overflow-x: hidden;">
        <p><b>UE4</b> is most powerfull tool why not use it. You can download freeware application human anatomy 3d.</p>
        <p>Source of 3d objects: </p>
        <p>"BodyParts3D, © The Database Center for Life
           Science licensed under CCAttribution-Share Alike 2.1 Japan".</p>
        <p>Origin license link:</p>
        <p><a href="https://dbarchive.biosciencedbc.jp/en/bodyparts3d/lic.html">Link</a></p>
        <p>Modification (optimisation) on origin data</p>
        <p>CCAttribution-Share Alike 2.1 Japan ©</p>
        <p>Nikola Lukic maximumroulette.com</p>
        <p><b>Download link win64 version: </b> <a href="https://maximumroulette.com/downloads/UA0.2free/UAinstaller.rar"> UltimateAnatomy 0.2 </a></p>
        <br><br>
        <img src="/assets/images/ua/1.png" >
        <img src="/assets/images/ua/2.png" >
        <img src="/assets/images/ua/3.png" >
        <img src="/assets/images/ua/4.png" >
        <img src="/assets/images/ua/5.png" >
        <img src="/assets/images/ua/6.png" >
        <img src="/assets/images/ua/7.png" >
      </md-content>

    <!--
    <md-table v-model="countries" md-sort="name" md-sort-order="asc" md-card>
      <md-table-toolbar>
        <h1 class="md-title">Users</h1>
      </md-table-toolbar>

      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Name" md-sort-by="name">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="Code" md-sort-by="code">{{ item.code }}</md-table-cell>
      </md-table-row>
    </md-table> -->

  </div>
</template>

<style scoped>

  .marginTopH2 {
    margin-top: 25px;
  }

  .marginTopH2low {
    margin-top: 35px;
  }

  .md-content {
    display: flex;
    flex-direction: row;
    -webkit-box-shadow: 1px 1px 3px 3px rgba(0,0,0,0.5);
    -moz-box-shadow: 2px 2px 3px 3px rgba(0,0,0,0.5);
    box-shadow: 2px 2px 3px 3px rgba(0,0,0,0.5);
    flex-wrap: wrap;
  }

  @media (min-width: 1034px) {
      .md-sub-content {
      margin: 10px 10px 10px 10px;
      padding: 15px 15px 15px 15px;
      max-width: 48%;
      min-width: 350px;
      height:auto;
      display: flex;
    }
  }

  @media (max-width: 1033px) {
    .md-sub-content {
      margin: 5px 5px 5px 5px;
      padding: 5px 5px 5px 5px;
      max-width: 100%;
      min-width: 320px;
      height:auto;
      display: flex;
    }
  }

  .md-sub-content .md-button {
    height:50px;
  }

  p {
    margin: 7px 1px 1px 1px;
    word-wrap: break-word;
  }

</style>

<script lang="ts">

  import Vue from 'vue'
  import Component from 'vue-class-component'
  import {
    mdTabs,
    mdTab,
    mdButton,
    mdDialogActions,
    mdContent,
    mdTable,
    mdSelect,
    mdInput,
    mdIcon,
    MdField
   }  from 'vue-material'

  const CompProps = Vue.extend({
    props: {
      slogan: String
    }
  });

  @Component({
    components: {
      mdButton,
      mdTabs,
      mdTab,
      mdDialogActions,
      mdContent,
      mdIcon
    }
  })

  @Component
  export default class AboutMe extends CompProps {

    data () {
      return {
        subpage: '1'
      }
    }

    styleObject: Partial<CSSStyleDeclaration> | any = {
      display:'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: '100%',
      padding: '10px',
      height: '100vh',
      overflowY: 'scroll'
    }

  }
</script>
