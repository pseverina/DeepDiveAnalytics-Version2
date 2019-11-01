<template>
   <div class="container-fluid stars font">
     <div class="twinkling">
       <!-- First section -->
       <div class="homepage-1">
         <h1 class="homepage-1__head">CodeMD is here.</h1>
         <p class="homepage-1__text">
            Advanced analytics for health care providers.<br>
            Automated provider scheduling solution based on&nbsp;unique rules and requirerements.<br>
            Custom, Accurate, and Modular.<br>
         </p>
         <span class="homepage-1__btn">
           <router-link to="/codeMd" class="link_home">Learn more >&nbsp;&nbsp;&nbsp;</router-link>
           <router-link to="/contact" class="link_home">Contact us ></router-link>
         </span><br>
         <img class="homepage-1__img" src="../img/home_page_img/codemd_logo.png"/>
       </div>
        <!--  Second Section -->
        <div class="homepage-2">
          <h1 class="homepage-2__head">Driving Performance for Supply Chain</h1>
          <p class="homepage-2__text">
            Make the system smarter with Deep Dive Analytics.<br>
            End-to-End supply chain solutions.<br>
            Data-drive.Custom.<br>
          </p>
          <span class="homepage-2__btn">
            <router-link to="/supplyChain" class="link_home">Learn more >&nbsp;&nbsp;&nbsp;</router-link>
            <router-link to="/contact" class="link_home">Contact us ></router-link>
          </span><br>
          <img class="homepage-2__img" src="../img/home_page_img/supplychain_homev2.png" />
        </div>
        <!-- Third Section -->
        <div class="homepage-3">
          <h1 class="homepage-3__head">Industry Agnostic</h1>
          <p class="homepage-3__text">
            Any industry. Any business.<br>
            We&nbsp;drive business advantage by delivering<br>
            cutting edge analytical capabilities and technologies.<br>
          </p>
          <span class="homepage-3__btn">
            <router-link to="/customServices" class="link_home">Learn more >&nbsp;&nbsp;&nbsp;</router-link>
            <router-link to="/contact" class="link_home">Contact us ></router-link>
          </span>
          <br>
          <img class="homepage-3__img" src="../img/home_page_img/industry_agnostic.png"/>
        </div>
      <!-- <carousel 
          :perPageCustom="[[600, 2], [830, 3], [1130, 4], [1430, 5]]"
          class="homepage-3__carousel"
          >
          <slide>
            <div class="homepage-3__img-story p-3 mb-5 rounded" @click="() => show(index)"> 
              <a target="_blank" class="homepage-3__img-story__link">
                <img src="../img/services_img_2/capital_investment_thumbnail.jpg" class="homepage-3__img-story__img" alt="cap_invest"/>
                <h4 class="homepage-3__img-story__label">Decision Support Tool for Capital Investment</h4>
                <h5 class="homepage-3__img-story__label-2">Technique: Optimization Modeling</h5>
                <h5 class="homepage-3__img-story__label-2">Client: Confidential</h5>
                <eva-icon class="homepage-3__img-story__arrow" name="arrow-forward" animation="shake" fill="limegreen"></eva-icon>
              </a>
            </div>
           </slide>
           <slide>
            <div class="homepage-3__img-story p-3 mb-5 rounded"  @click="() => show(index + 1)">
              <a target="_blank" class="homepage-3__img-story__link">
                <img src="../img/services_img_2/inventory_thumbnail.jpg" class="homepage-3__img-story__img" alt="inventory"/>
                <h4 class="homepage-3__img-story__label">Inventory Optimization<br>Support Tool</h4>
                <h5 class="homepage-3__img-story__label-2">Technique: NLP Optimization Modeling</h5>
                <h5 class="homepage-3__img-story__label-2">Client: Confidential</h5>
                <eva-icon class="homepage-3__img-story__arrow" name="arrow-forward" animation="shake" fill="limegreen"></eva-icon>
              </a>
            </div>
           </slide>
          <slide>
            <div class="homepage-3__img-story p-3 mb-5 rounded" @click="() => show(index + 2)">
             <a target="_blank" class="homepage-3__img-story__link">
               <img src="../img/services_img_2/common_parts_thumbnail.png" class="homepage-3__img-story__img" alt="common_parts"/>
              <h4 class="homepage-3__img-story__label">Material Hamonization<br>Matching Tool</h4>
              <h5 class="homepage-3__img-story__label-2">Technique: Machine<br>Learning/Natural Language</h5>
              <h5 class="homepage-3__img-story__label-2">Client: Confidential</h5>
              <eva-icon class="homepage-3__img-story__arrow" name="arrow-forward" animation="shake" fill="limegreen"></eva-icon>
             </a>
           </div>
          </slide>
           <slide>
            <div class="homepage-3__img-story p-3 mb-5 rounded" @click="() => show(index + 3)">
              <a target="_blank" class="homepage-3__img-story__link">
                <img src="../img/services_img_2/production_sched_thumbnail.jpg" class="homepage-3__img-story__img" alt="production_sched"/>
                <h4 class="homepage-3__img-story__label">Production Scheduling<br>Planning Tool</h4>
                <h5 class="homepage-3__img-story__label-2">Technique: Optimization Modeling</h5>
                <h5 class="homepage-3__img-story__label-2">Client: Confidential</h5>
                <eva-icon class="homepage-3__img-story__arrow" name="arrow-forward" animation="shake" fill="limegreen"></eva-icon>
              </a>
            </div> 
           </slide>
           <slide>
            <div class="homepage-3__img-story p-3 mb-5 rounded" @click="() => show(index + 4)">
              <a target="_blank" class="homepage-3__img-story__link"> 
                <img src="../img/services_img_2/rads_scheduling_thumbnail.jpg" class="homepage-3__img-story__img" alt="rads_scheduling"/>
                <h4 class="homepage-3__img-story__label">Radiology Residency Scheduling Solutio</h4>
                <h5 class="homepage-3__img-story__label-2">Technique: Optimization Modeling</h5>
                <h5 class="homepage-3__img-story__label-2">Client: UM Hospital / Jackson<br>Memorial Hospital
                <eva-icon class="homepage-3__img-story__arrow" name="arrow-forward" animation="shake" fill="limegreen"></eva-icon>
                </h5>
              </a>
            </div> 
           </slide>
        </carousel> 
        <VueEasyLightbox :visible="visible" :imgs="images[index]" @hide="handleHide"></VueEasyLightbox> -->
        
        <!-- Fourth Section -->
        <div class="homepage-4">
          <h1 class="homepage-4__head">Agile Project Management</h1>
          <p class="homepage-4__text">
            Innovate and deliver faster with Deep Dive Analytics.<br>
            Experience a&nbsp;professional and effecient working engagement.<br>
          </p>
          <p class="homepage-4__btn">
            <router-link to="/contact" class="link_home">Contact us ></router-link>
          </p>
          <b-row class="homepage-4__row">
            <b-col class="homepage-4__col" sm>
              <div class="homepage-4__img-left">
                <img class="homepage-4__img-left-img" src="../img/home_page_img/strategy.png"/><br><br>
                <span class="homepage-4__img-left-head blue">Define a Strategy</span>
                <p class="homepage-4__img-left-text">
                  Assess the opportunity, 
                  thinking strategically and
                  holistically when defining the plan
                  to&nbsp;help your organization.
                </p>
              </div>
            </b-col>
            <b-col class="homepage-4__col" sm>
              <div class="homepage-4__img-middle">
                <img class="homepage-4__img-middle-img" src="../img/home_page_img/iterative_development.png"/><br><br>
                <span class="homepage-4__img-middle-head blue">Iterative Development</span>
                <p class="homepage-4__img-middle-text">
                  Working in&nbsp;agile sprints to&nbsp;define, 
                  build, and deploy your solution so&nbsp;your 
                  business can reap the benefits quickly.
                </p>
              </div>
            </b-col>
            <b-col class="homepage-4__col" sm>
              <div class="homepage-4__img-right">
                <img class="homepage-4__img-right-img" src="../img/home_page_img/business_impact.png"/><br><br>
                <span class="homepage-4__img-right-head blue">Deliver Business Impact</span>
                <p class="homepage-4__img-right-text">
                  Driving performance and
                  efficiency across your
                  organization through advanced
                  analytics and automation.
                </p>
              </div>
            </b-col>
          </b-row>
        </div>
        <!--  Fifth Section -->
        <div class="homepage-5">
          <div class="homepage-5__head">
            <span class="homepage-5__head-green">Deep Dive </span>
            <span class="homepage-5__head-white">into your data <br> to make </span>
            <span class="homepage-5__head-green">Smarter Decisions</span>.
          </div> 
          <b-row>
            <b-col sm="6">
              <p class="homepage-5__text">
                We&nbsp;combine business knowledge with advanced 
                analytics, building custom analytical solutions based 
                on&nbsp;your unique business needs. We&nbsp;have a&nbsp;proven 
                track record of&nbsp;delivering business value.
              </p>
              <p class="homepage-5__text">
                Let&rsquo;s Deep Dive into the black hole of&nbsp;your data.<br>
              </p>
              <p class="homepage-5__btn">
                <router-link to="/contact" class="link_home">Contact us ></router-link>
              </p>
            </b-col>
            <b-col sm="6">
              <img class="homepage-5__black_hole" alt="black_hole" src="../img/bg_img/black_hole.png"/> 
              <img class="homepage-5__spaceman" alt="spaceman" src="../img/home_page_img/blackhole_spaceman.png"/>
            </b-col>
          </b-row>
        </div>
      </div>
    </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
import { EvaIcon } from 'vue-eva-icons'
import VueEasyLightbox from 'vue-easy-lightbox'


export default {
  name: 'Home',
  data() {
    return {
      visible: false,
      quote1: false,
      quote2: false,
      count: 0,
      words: ['BETTER', 'SMARTER', 'QUICKER', 'TRUSTED'],
      quotes:[
        { id: '“More of these data-driven projects should take place throughout J&J” - Everyone , President at Company Name 1 !' },
        { id: '“More of these data-driven projects should take place throughout J&J” - Everyone , President at Company Name 2 !' }
      ],
      index: 0,
      images: [
        require('../img/services_img/capital_ investment.jpg'),
        require('../img/services_img/Inventory_Optimization.jpg'),
        require('../img/services_img/Materials_Harmonization.jpg'),
        require('../img/services_img/Production_Scheduling.jpg'),
        require('../img/services_img/Radiology_Scheduling.jpg')
        ]
    }
  },
  components: {
    Carousel,
    Slide,
    [EvaIcon.name]: EvaIcon,
    VueEasyLightbox
  },
  mounted(){
   window.setInterval(()=>{
      this.changeWords()
      this.count += 1
      if(this.count % 2 == 0){
        this.quote1 = true
        this.quote2 = false
      } else {
        this.quote1 = false
        this.quote2 = true
      }
    }, 2000)
  },
  methods: {
    changeWords(){
      const first = this.words.shift()
      this.words = this.words.concat(first)
    },
    show(index) {
      this.index = index 
      this.visible = true
    },
    handleHide() {
      this.visible = false
      this.index = 0
    }
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>



