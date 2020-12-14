
<template>
  <div v-bind:style="styleObject">

    <h1>welcome to maximumroulette.com</h1>

    <md-content>

      <md-content class="md-sub-content">
         JavaScript (opengles 1.1/2.0/3.0//webGL webRTC WebSockets 2DCanvas) real-time applications or 
         multiplayer games with full response for all modern desktop or mobile browsers.
      </md-content>

      <md-content class="md-sub-content">
        <h2>From scratch with or without frameworks HTML/JS/CSS role. My favorite tags list:</h2>
        <p>__________________________</p>
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

    </md-content>
    <md-icon class="fa fa-github" ></md-icon>
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
  .md-content {
    display: flex;
    flex-direction: row;
    -webkit-box-shadow: 1px 1px 3px 3px rgba(0,0,0,0.5);
    -moz-box-shadow: 2px 2px 3px 3px rgba(0,0,0,0.5);
    box-shadow: 2px 2px 3px 3px rgba(0,0,0,0.5);
    flex-wrap: wrap;
  }

  .md-sub-content {
    margin: 15px 15px 15px 15px;
    padding: 15px 15px 15px 15px;
    width: 47%;
    height: auto;
    display: flex;
  }

  p {
    margin: 1px 1px 1px 1px;
    width: 45vw;
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
      textContent: String
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
      width: '100%',
      padding: '10px',
      height: '100vh',
      border: 'solid red 1px'
    }

  }
</script>
