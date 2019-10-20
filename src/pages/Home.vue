<template>
   <div class="container-fluid stars font">
     <div class="twinkling">
       <!-- First section -->
       <div class="section-1">
         <h1 class="section-1__head">CodeMD is here.</h1>
         <p class="section-1__text">
            Advanced analytics for health care providers.
            Automated provider scheduling solution based on unique rules and requirerements.
            Custom, Accurate, and Modular.<br>
            <span><router-link to="/codeMd" class="link_home">Learn more > </router-link></span>
            <span><router-link to="/contact" class="link_home">Contact us ></router-link></span>
         </p>
         <img class="section-1__img" src="../img/home_page_img/codemd_logo.png"/>
       </div>
        <!--  Second Section -->
        <div class="section-2 homepage-row">
          <b-row class="flex-column-reverse flex-md-row">
            <b-col>
              <img class="section-2__leftside-img" src="../img/home_page_img/supplychain_1_original.png"/>
            </b-col>
            <b-col>
              <div class="section-2__rightside">
                <h1 class="section-2__rightside-head">Driving Performance for Supply Chain</h1>
                <p class="section-2__rightside-text">
                  Make the system smarter with Deep Dive Analytics.
                  End-to-End supply chain solutions.
                  Data-drive.Custom.<br>
                  <span><router-link to="/supplyChain" class="link_home">Learn more > </router-link></span>
                  <span><router-link to="/contact" class="link_home">Contact us ></router-link></span>
                </p>
              </div>
            </b-col>
          </b-row>
        </div>
        <!-- Third Section -->
        <div class="section-3 homepage-row">
          <h1 class="section-3__head">Industry Agnostic</h1>
          <p class="section-3__text">
            Any industry. Any business.
            We drive business advantage by delivering
            cutting edge analytical capabilities and technologies.<br>
            <span><router-link to="/customServices" class="link_home">Learn more > </router-link></span>
            <span><router-link to="/contact" class="link_home">Contact us ></router-link></span>
          </p>
          <img class="section-3__img" src="../img/home_page_img/industry_agnostic.png"/>
        </div>
      <!-- <carousel 
          :perPageCustom="[[600, 2], [830, 3], [1130, 4], [1430, 5]]"
          class="section-3__carousel"
          >
          <slide>
            <div class="section-3__img-story p-3 mb-5 rounded" @click="() => show(index)"> 
              <a target="_blank" class="section-3__img-story__link">
                <img src="../img/services_img_2/capital_investment_thumbnail.jpg" class="section-3__img-story__img" alt="cap_invest"/>
                <h4 class="section-3__img-story__label">Decision Support Tool for Capital Investment</h4>
                <h5 class="section-3__img-story__label-2">Technique: Optimization Modeling</h5>
                <h5 class="section-3__img-story__label-2">Client: Confidential</h5>
                <eva-icon class="section-3__img-story__arrow" name="arrow-forward" animation="shake" fill="limegreen"></eva-icon>
              </a>
            </div>
           </slide>
           <slide>
            <div class="section-3__img-story p-3 mb-5 rounded"  @click="() => show(index + 1)">
              <a target="_blank" class="section-3__img-story__link">
                <img src="../img/services_img_2/inventory_thumbnail.jpg" class="section-3__img-story__img" alt="inventory"/>
                <h4 class="section-3__img-story__label">Inventory Optimization<br>Support Tool</h4>
                <h5 class="section-3__img-story__label-2">Technique: NLP Optimization Modeling</h5>
                <h5 class="section-3__img-story__label-2">Client: Confidential</h5>
                <eva-icon class="section-3__img-story__arrow" name="arrow-forward" animation="shake" fill="limegreen"></eva-icon>
              </a>
            </div>
           </slide>
          <slide>
            <div class="section-3__img-story p-3 mb-5 rounded" @click="() => show(index + 2)">
             <a target="_blank" class="section-3__img-story__link">
               <img src="../img/services_img_2/common_parts_thumbnail.png" class="section-3__img-story__img" alt="common_parts"/>
              <h4 class="section-3__img-story__label">Material Hamonization<br>Matching Tool</h4>
              <h5 class="section-3__img-story__label-2">Technique: Machine<br>Learning/Natural Language</h5>
              <h5 class="section-3__img-story__label-2">Client: Confidential</h5>
              <eva-icon class="section-3__img-story__arrow" name="arrow-forward" animation="shake" fill="limegreen"></eva-icon>
             </a>
           </div>
          </slide>
           <slide>
            <div class="section-3__img-story p-3 mb-5 rounded" @click="() => show(index + 3)">
              <a target="_blank" class="section-3__img-story__link">
                <img src="../img/services_img_2/production_sched_thumbnail.jpg" class="section-3__img-story__img" alt="production_sched"/>
                <h4 class="section-3__img-story__label">Production Scheduling<br>Planning Tool</h4>
                <h5 class="section-3__img-story__label-2">Technique: Optimization Modeling</h5>
                <h5 class="section-3__img-story__label-2">Client: Confidential</h5>
                <eva-icon class="section-3__img-story__arrow" name="arrow-forward" animation="shake" fill="limegreen"></eva-icon>
              </a>
            </div> 
           </slide>
           <slide>
            <div class="section-3__img-story p-3 mb-5 rounded" @click="() => show(index + 4)">
              <a target="_blank" class="section-3__img-story__link"> 
                <img src="../img/services_img_2/rads_scheduling_thumbnail.jpg" class="section-3__img-story__img" alt="rads_scheduling"/>
                <h4 class="section-3__img-story__label">Radiology Residency Scheduling Solutio</h4>
                <h5 class="section-3__img-story__label-2">Technique: Optimization Modeling</h5>
                <h5 class="section-3__img-story__label-2">Client: UM Hospital / Jackson<br>Memorial Hospital
                <eva-icon class="section-3__img-story__arrow" name="arrow-forward" animation="shake" fill="limegreen"></eva-icon>
                </h5>
              </a>
            </div> 
           </slide>
        </carousel> 
        <VueEasyLightbox :visible="visible" :imgs="images[index]" @hide="handleHide"></VueEasyLightbox> -->
        <!-- Fourth Section -->
        <div class="section-4 homepage-row">
          <h1 class="section-4__head">Agile Project Management</h1>
          <p class="section-4__text">
            Innovate and deliver faster with Deep Dive Analytics.
            Experience a professional and effecient working engagement.<br>
            <span><router-link to="/contact" class="link_home">Contact us ></router-link></span>
          </p>
          <b-row style="margin: 0 auto;  width: 70%;">
            <b-col class="section-4-col">
              <div class="section-4__img-left">
                <img class="section-4__img-left-img" src="../img/home_page_img/strategy.png"/><br><br>
                <span class="section-4__img-left-head blue">Define a Strategy</span>
                <p class="section-4__img-left-text">
                  Assess the opportunity, 
                  thinking strategically and
                  holistically when defining the plan
                  to help your organization.
                </p>
              </div>
            </b-col>
            <b-col class="section-4-col">
              <div class="section-4__img-middle">
                <img class="section-4__img-middle-img" src="../img/home_page_img/iterative_development.png"/><br><br>
                <span class="section-4__img-middle-head blue">Iterative Development</span>
                <p class="section-4__img-middle-text">
                  Working in agile sprints to
                  define, build, and deploy your
                  solution so your business can
                  reap the benefits quickly.
                </p>
              </div>
            </b-col>
            <b-col class="section-4-col">
              <div class="section-4__img-right">
                <img class="section-4__img-right-img" src="../img/home_page_img/business_impact.png"/><br><br>
                <span class="section-4__img-right-head blue">Deliver Business Impact</span>
                <p class="section-4__img-right-text">
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
        <div class="section-5">
          <div class="section-5__head">
            <span style="color: #58F86F;">Deep Dive</span> into your data <br> to make <span style="color: #58F86F;">Smarter Decisions</span>.
          </div> 
          <b-row>
            <b-col sm="6">
              <p class="section-5__text">
                We&nbsp;combine business knowledge with advanced 
                analytics, building custom analytical solutions based 
                on&nbsp;your unique business needs. We&nbsp;have a&nbsp;proven 
                track record of&nbsp;delivering business value.
              </p>
              <p class="section-5__text">
                Let&rsquo;s Deep Dive into the black hole of&nbsp;your data.<br>
                <span><router-link to="/contact" class="link_home">Contact us ></router-link></span>
              </p>
            </b-col>
            <b-col sm="6">
              <img class="section-5__black_hole" alt="black_hole" src="../img/bg_img/black_hole.png"/> 
              <img class="section-5__spaceman" alt="spaceman" src="../img/home_page_img/blackhole_spaceman.png"/>
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



