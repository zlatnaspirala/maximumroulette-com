
<template>
  <div v-bind:style="styleObject" class="specialbody">
    <md-content class="md-sub-content">
      <div class="brm-logo" > <h3>Ultimate Anatomy 0.2 Freeware</h3> <br>
        <a href="https://maximumroulette.com/downloads/UA0.2free/UAinstaller.rar" download>
          <md-chip class="md-accent md-chip-mini" md-clickable>win64</md-chip>
        </a>
      </div>

      <div class="brm-logo" > <h3>Download Hang3d Dark Places Android on Google Play, Nice for old devices.</h3> <br>
      <a href='https://play.google.com/store/apps/details?id=com.Zlatnaspirala.hang3d_area&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
      <img width="200" alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'/>
      </a>
      </div>

      <div class="brm-logo" > <h3>Download Hang3d Shot and fear Android App on Google Play, Nice for old devices.</h3> <br>
      <a href='https://play.google.com/store/apps/details?id=com.CompanyZlatnaspirala.hang3d'>
         https://play.google.com/store/apps/details?id=com.CompanyZlatnaspirala.hang3d
      </a>
      </div>
      
      <div class="brm-logo" > <h3>Download Hang3d Space Android App on Google Play</h3> <br>
      <a href='https://play.google.com/store/apps/details?id=com.nikolalukic.hangspace'>
         https://play.google.com/store/apps/details?id=com.nikolalukic.hangspace
      </div>

      <div class="brm-logo" > <h3>Hang3d Nightmare Beta</h3> <br>
        <a href="https://maximumroulette.com/downloads/hang3d-nightmare/beta/Hang3dNightmareWin64.zip" download>
          <md-chip class="md-accent md-chip-mini " md-clickable>
            Hang3d Nightmare Beta for win64
          </md-chip>
        </a> <br>
        <a href="https://maximumroulette.com/downloads/hang3d-nightmare/beta/Hang3dNightmareWin32.zip" download>
          <md-chip class="md-accent md-chip-mini " md-clickable>
            Hang3d Nightmare Beta for win32
          </md-chip>
        </a> <br>
        <a href="https://maximumroulette.com/downloads/hang3d-nightmare/beta/WindowsDedicatedServer.zip" download>
          <md-chip class="md-accent md-chip-mini " md-clickable>
            Hang3d Nightmare windows dedicated server
          </md-chip>
        </a> <br>
        <a href="https://maximumroulette.com/downloads/hang3d-nightmare/beta/LinuxDedicatedServer.zip" download>
          <md-chip class="md-accent md-chip-mini " md-clickable>
            Hang3d Nightmare linux dedicated server
          </md-chip>
        </a> <br>
      </div>
      <div class="brm-logo" > <h3>BarbarianRoadMashines Beta</h3> <br>
      <a href="https://maximumroulette.com/downloads/brm/beta/brm-win32.zip" download>
        <md-chip class="md-accent md-chip-mini " md-clickable>
          Brm Beta for win32
        </md-chip>
      </a> <br>
      <a href="https://maximumroulette.com/downloads/brm/beta/brm-win64.zip" download>
        <md-chip class="md-accent md-chip-mini " md-clickable>
          Brm Beta for win64
        </md-chip>
      </a><br>
      <a href="https://maximumroulette.com/downloads/brm/beta/brm-win-server.zip" download>
        <md-chip class="md-accent md-chip-mini " md-clickable>
          Brm Dedicated server for win64
        </md-chip>
      </a> <br>
      <a href="https://maximumroulette.com/downloads/brm/beta/brm-linux.zip" download>
        <md-chip class="md-accent md-chip-mini " md-clickable>
          Brm Beta for Linux
        </md-chip>
      </a> <br>
      <a href="https://maximumroulette.com/downloads/brm/beta/brm-linuxAArch64.zip" download>
        <md-chip class="md-accent md-chip-mini " md-clickable>
          Brm Beta for linuxAArch64
        </md-chip>
      </a> <br>
      <a href="https://maximumroulette.com/downloads/brm/beta/brm-linux-server.zip" download>
        <md-chip class="md-accent md-chip-mini " md-clickable>
          Brm Beta for Linux
        </md-chip>
      </a> <br>
      </div>
    </md-content>
  </div>
</template>

<style scoped>

 .specialbody {
    background: #373737 url("../../public/assets/images/bg.png") 0 0 repeat;
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
