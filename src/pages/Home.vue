<template>
   <div class="stars font">
     <div class="twinkling">
        <!-- First section -->
        <img src="../img/home_page_img/deepdive_logo_landing.png" id="head_name">
        <span id="dive_in">DIVE IN</span> 
        <img src="../img/icons_img/icon_arrow_down.png" alt="arrow_down" id="arrow_down">
         <!--  Second Section -->
         <div class="section-2">
           <div class="section-2__head">We&nbsp;drive business advantage by<br>delivering
            industry leading analytical capabilities</div>
            <b-row>
              <b-col sm="3" class="section-2__pic-1"> 
                <router-link tag="li" to="/predictiveAnalytics">
                    <img src="../img/icons_img/icon_machinelearning.png" alt="img_icon1" class="section-2__img">
                    <h2 class="section-2__head-3">Predictive<br>Analytics</h2>
                    <h3 class="section-2__head-4">Sense the future</h3>
                    <h5 class="section-2__text-1">
                        Natural Language Processing <br>
                        Artificial Intelligence <br>
                        Machine Learning <br>
                        Deep Learning
                    </h5>
                </router-link>
              </b-col>
               <b-col sm="3" class="section-2__pic-2">
                  <router-link tag="li" to="/prescriptiveAnalytics">
                    <img src="../img/icons_img/icon_mathmodeling.png" alt="img_icon2" class="section-2__img-2">
                    <h2 class="section-2__head-3">Prespriptive<br>Analytics</h2>
                    <h3 class="section-2__head-4">Pivot and Adapt</h3>
                    <h5 class="section-2__text-1">
                        Optimization Mathematical Modeling<br>
                        Stochastic Optimization <br>
                        Heuristics
                    </h5>  
                  </router-link>
               </b-col>
               <b-col sm="3" class="section-2__pic-3">
                 <router-link tag="li" to="/customSolutionDeployment">
                    <img src="../img/icons_img/icon_nlp.png" alt="img_icon3" class="section-2__img-3">
                    <h2 class="section-2__head-3">End-to-End<br>Solutions</h2>
                    <h3 class="section-2__head-4" style="margin-bottom: 30%;">Custom Solution Deployment</h3>
                  </router-link>
               </b-col>
            </b-row>
        </div>
        <!--  Third Section -->
        <div class="section-3__head">Our work</div>
        <carousel 
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
        <VueEasyLightbox :visible="visible" :imgs="images[index]" @hide="handleHide"></VueEasyLightbox>
        <!-- Fourth Section -->
        <div class="section-4">
          <b-row>
            <b-col sm="4">
              <div class="section-4__head-1">Our clients</div> 
            </b-col>
            <b-col sm="8">
              <img class="section-4__clients" alt="client" src="../img/clients_img/jackson_health.png"/> 
              <img class="section-4__clients" alt="client_2" src="../img/clients_img/uhealth.png"/>
            </b-col>
          </b-row>
          <hr class="section-4__hr_1">
          <b-row>
            <b-col sm="4"> 
              <div class="section-4__head-2">Testimonials</div>
            </b-col>
            <b-col sm="6">
              <div class="section-4__quotes">
                <transition name="fade" mode="out-in">
                  <div v-if="quotesMove">
                    <img class="section-4__quotes-img" alt="quote" src="../img/icons_img/quotation.svg"/>{{ quotes[0]}}
                  </div>
                </transition>
              </div>
            </b-col> 
          </b-row>
        </div>
        <!--  Fifth Section -->
        <div class="section-5__head">DEEP DIVE into your data, gaining insights to help make<br>
          <span style="color: #58F86F;">{{ words[0] }}</span> DECISIONS
        </div> 
        <b-row>
          <b-col sm="6">
            <p class="section-5__text">
                We&nbsp;combine business knowledge with 
                advanced analytics, building custom 
                analytical solutions based on&nbsp;your
                unique business needs.
            </p>
            <p class="section-5__text">
                We&nbsp;have a&nbsp;proven track record of 
                delivering business value. Let&rsquo;s Deep
                Dive into the &laquo;black hole&raquo; of&nbsp;your data. 
            </p>
          </b-col>
          <b-col sm="6">
            <img class="section-5__black_hole" alt="black_hole" src="../img/bg_img/black_hole.png"/> 
            <img class="section-5__spaceman" alt="spaceman" src="../img/home_page_img/blackhole_spaceman.png"/>
          </b-col>
        </b-row>
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
      quotesMove: false,
      count: 0,
      words: ['BETTER', 'SMARTER', 'QUICKER', 'TRUSTED'],
      quotes:[ 
        '“More of these data-driven projects should take place throughout J&J” - Everyone , President at Company Name 1 !',
        '“More of these data-driven projects should take place throughout J&J” - Everyone , President at Company Name 2 !'
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
    }, 2000),
     window.setInterval(()=>{
      
      if (this.quotesMove == false){
        this.quotesMove = true
        this.count += 1
      } 

      if (this.count == 5){
        this.quotesMove = false
      }
    }, 2500)
  },
  methods: {
    changeWords(){
      const first = this.quotes.shift()
      this.quotes = this.quotes.concat(first)
    },
    changeQuotes(){
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



