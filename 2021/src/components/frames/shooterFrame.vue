
<template>
  <div v-bind:style="styleObject">
    <md-chip @click="showMe()" class="md-chip-mini md-primary" md-clickable>Play Hang3D Nightmare</md-chip>
    <md-chip @click="hideMe()" class="md-accent md-chip-mini" md-clickable>hide me</md-chip>
    <md-chip @click="destroyMe()" class=" md-chip-mini" md-clickable>Destroy game</md-chip>
    <a href="https://maximumroulette.com/downloads/hang3d-nightmare/beta/Hang3dNightmareWin64.zip" download>
      <md-chip class="md-accent md-chip-mini" md-clickable>download hang3d nightmare win64</md-chip>
    </a>
    <object ref="frameForShooter" class="brm-logo" data="https://maximumroulette.com/apps/shooter/ShooterGame.html"></object>
  </div>
</template>

<style scoped>

.brm-logo {
  width: 100%;
  height: 100vh;
  background: #373737 url("../../../public/assets/images/bg.png") 0 0 repeat;
  font: 14px/20px 'Helvetica Neue', Helvetica, Arial, sans-serif;
  color: #6DA9CD;
}

.brm-logo {
  margin-bottom: 10px;
}

a {
  color: #00a1d2;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}

.md-chip {
  height: 200px;
}

.md-chip-mini {
  height: 32px;
}

.md-content {
  display: flex;
  flex-direction: column;
  -webkit-box-shadow: 1px 1px 3px 3px rgba(0,0,0,0.5);
  -moz-box-shadow: 2px 2px 3px 3px rgba(0,0,0,0.5);
  box-shadow: 2px 2px 3px 3px rgba(0,0,0,0.5);
  flex-wrap: wrap;
}

@media (min-width: 1034px) {
    .md-sub-content {
    margin: 10px 10px 10px 10px;
    padding: 15px 15px 15px 15px;
    width: 99%;
    min-width: 350px;
    height:auto;
    display: flex;
  }
}

@media (max-width: 1033px) {
  .md-sub-content {
    margin: 5px 5px 5px 5px;
    padding: 5px 5px 5px 5px;
    width: 100%;
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
    mdIcon,
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
  export default class ShooterFrame extends CompProps {

    constructor() {
      super()
      setTimeout(() => {
        // this.styleObject.height = '100hv'
      }, 10000)
    }

    data () {
      return {
        subpage: '1'
      }
    }

    hideMe() {
      (this.$root.$children[0] as any).showAboutsAndShooterFrame()
      // this.styleObject.display = 'none'
      this.styleObject.height = '6vh'
    }

    showMe () {
      (this.$root.$children[0] as any).showShooterFrame();
      this.styleObject.height = '100vh'
    }

    destroyMe() {
      (this.$root.$children[0] as any).showAboutComponent();
    }

    styleObject: Partial<CSSStyleDeclaration> | any = {
      display:'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: '100%',
      padding: '10px',
      height: '6vh',
      overflowY: 'scroll'
    }

  }
</script>
