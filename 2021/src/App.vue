
<template>
  <div id="app">
    <myHeader slogan='Maximumroulette web site'></myHeader>
    <div ref="mybodycontent" v-bind:style="styleObject">

      <div class="loader" ref="loader" style="display: block;">
        <md-progress-spinner md-mode="indeterminate"></md-progress-spinner>
      </div>

      <!--AboutMe v-show="visibility.welcomeNote"
               slogan="Everything is possible" >
      </AboutMe>

      <Downloads v-show="visibility.welcomeNote"
               slogan="Everything is possible" >
      </Downloads-->

      <template v-for="(child) in fields">
        <component :is="child" :key="child.id" v-bind="inputBodyProps">>
          {{ child.id }}
        </component>
      </template>

    </div>
    <myFooter textContent='https://maximumroulette.com 2022 GoldenSpiralSoftware'></myFooter>
  </div>
</template>

<script lang="ts">

  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  import myHeader from './components/myHeader.vue'
  import myFooter from './components/myFooter.vue'
  import Downloads from './components/downloads.vue'
  import { mapState, mapMutations } from 'vuex'
  import IApp from './IApp'
  import LocalStorageMemory from './local-storage/local-storage'
  import VueMaterial from 'vue-material'
  import 'vue-material/dist/vue-material.min.css'
  import './styles/style.scss'
  import CountrySelector from './components/countries-selector/country-selector.vue'
  import AboutMe from './components/about-me.vue'
  import ShooterFrame from "./components/frames/shooterFrame.vue"
import { isMobile } from './my-common/common-func'

  Vue.use(VueMaterial as any)

  /**
   *  We declare the props separately
   *  to make props types inferable.
   */
  const AppProps = Vue.extend({
    props: {
      AppPropVersion: String,
      AppDomainHost: String
    }
  });

  // Register for components
  @Component({
    components: {
      myHeader,
      myFooter,
      CountrySelector,
      AboutMe,
      Downloads,
      ShooterFrame
    },
    computed: mapState([
      'permission'
    ]),
    methods: mapMutations([
      'cookieAccept'
    ])
  })

  export default class App extends AppProps {

    /**
     * @description  Annotate refs type
     * typescript addition.
     */
    $refs!: {
      myHeader: myHeader,
      countrySelector: CountrySelector,
      mybodycontent: HTMLDivElement,
      loader: HTMLDivElement
    }

    /**
     * @description `ls` is instance for localstorage operation
     * I will use it like singletone for injection in places
     * where is needed.
     */
    public ls: LocalStorageMemory = new LocalStorageMemory()

    /**
     * @description Additional declaration is needed.
     * When you declare some properties in `Component` decorator.
     * count!: number
     * increment!: () => void
     */
    count!: number
    increment!: () => void
    saveResponse!: () => void
    permission!: Object
    inputBodyProps: Object

    fields: any[]

    public styleObject;

    /**
     * @description options are main object
     * for user in fly setup. If user clear
     * cache memory(localStorege) everything
     * goes back to the default values.
     */
    public options: Object = {}
    public currentRoute

    /**
     * @description Initial method construct.
     */
    constructor() {
      super()

      if (isMobile()) {
        this.fields = [AboutMe]
      } else {
        this.fields = [AboutMe]
      }

      this.inputBodyProps = {
        slogan: "Everything is possible"
      }

      this.styleObject = {
        display: 'flex',
        flexDirection: 'column',
        height: '92vh',
        width: '100%'
      }

      /**
       * @description  Check page localStorage
       * Note: Only lower chars for naming ls objects.
       */
      if (this.ls.load("first_time") === null) {

        console.info("App starts first time. Prepare storage data...")
        /**
         * In future enumerate for global config...
         */
        // this.ls.save("o_camera", false)
        /**
         * @description Permission staff
         * Cant be read or write
         */
        this.ls.save("permission_level", "read")
        this.options = {
          permissionLevel: this.ls.load("permission_level"),
        };
        this.ls.save("first_time", 'storage-loaded')

      } else {

        console.info("App loading storage data...")
        this.options = {
          permissionLevel: this.ls.load("permission_level")
        }

      }

      this.$root.$on('global.copyclipboard', (args: any) => {
        try {
          console.info("Event global.copyclipboard => ", args)
        } catch(err) {
          console.warn(err)
        }
      })

    }

    data() {
      return {
        visibility: {
          welcomeNote: true,
        },
      }
    }

    setupInstance = () => {
      this.currentRoute = window.location.pathname
      this.$refs.loader.style.display = 'none'
      // console.log('Test Application refs mybodycontent => ', this.$refs.mybodycontent)
    }

    get computedMsg (): string {
      return 'computed'
    }

    mounted (): void {
      this.setupInstance()
    }

    created (): void {
      console.log("App created.")
    }

    showDownloads (): void {
      this.fields = [Downloads]
    }

    showAbouts (): void {
      this.fields = [AboutMe]
    }

    showShooterFrame(): void {
      this.fields = [ShooterFrame]
    }

    showAboutsAndShooterFrame(): void {
      this.fields = [AboutMe]
    }

  }
</script>

<style>

  body {
     overflow: hidden;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }

  .loader {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: black;
    z-index: 99999;
    text-align: center;
    /* justify-items: center; */
    /* align-items: center; */
    /* align-self: center; */
    /* vertical-align: middle; */
    margin: 0;
    padding-top: 21%;
  }

    .myshadows {
    -webkit-box-shadow: 1px 1px 3px 3px rgba(0,0,0,0.5);
    -moz-box-shadow: 2px 2px 3px 3px rgba(0,0,0,0.5);
    box-shadow: 2px 2px 3px 3px rgba(0,0,0,0.5);
  }

</style>
