<template>
 <div class="container-fluid stars font">
    <div class="twinkling">
      <h1 class="header">Success Stories</h1>
      <form class="services__form">
        <fieldset class="services__form-fieldset">
        <legend class="services__form-legend">Filter by</legend>
        <b-row>
          <b-col style="text-align:center;">
            <span>
            <label for="all">All
              <input v-on:click="allStories" checked type="radio" name="filters"/>
            </label>
          </span>
          </b-col>        
        </b-row>
        <hr class="services__form-hr">
        <b-row>
          <b-col class="services__form-span">
            <span>
              <label for="Optimization Modeling">Optimization Modeling
                <input v-on:click="optimizationModeling" type="radio" name="filters"/>
              </label>
            </span>
            <br>
            <span>
              <label for="Machine Learning">Machine Learning
                <input v-on:click="machineLearning" type="radio" name="filters"/>
              </label>
            </span>
            <br>
             <span>
              <label for="NLP Optimization Modeling">NLP Optimization Modeling
                <input v-on:click="nlpOptimizationModeling" type="radio" name="filters"/>
              </label>
            </span>
          </b-col>
          <b-col class="services__form-span">
            <span>
              <label for="Supply Chain">Supply Chain
                <input v-on:click="supplyChain" type="radio" name="filters"/>
              </label>
            </span>
            <br>
            <span>
              <label for="Healthcare">Healthcare
                <input v-on:click="healthcare" type="radio" name="filters"/>
              </label>
            </span>
          </b-col>
        </b-row>
      </fieldset>
      </form>
      <div class="carousel slide services-carousel" data-interval="false">
      <div class="carousel-inner">
          <div class="item active" >
            <b-row>
              <b-col>
                <transition name="slide-fade">
                  <div v-show="decision_support" class="services-carousel__img-story p-3 mb-5 rounded" @click="() => show(index)"> 
                    <a class="section-3__img-story__link" target="_blank">
                      <img src="" class="services-carousel__img-story__img" alt="cap_invest"/>
                      <h4 class="services-carousel__img-story__label">Decision Support Tool for Capital Investment</h4>
                      <h5 class="services-carousel__img-story__label-2">Technique: Optimization Modeling</h5>
                      <h5 class="services-carousel__img-story__label-2">Client: Confidential</h5>
                      <eva-icon class="section-3__img-story__arrow" name="arrow-forward" animation="shake" fill="limegreen"></eva-icon>
                    </a>
                  </div>
                </transition>
              </b-col>
              <b-col>
                <transition name="slide-fade">
                  <div v-show="inventory_optimization" md="4" offset-md="4" class="services-carousel__img-story p-3 mb-5 rounded" @click="() => show(index + 1)">
                    <a class="section-3__img-story__link" target="_blank">
                      <img src="" class="services-carousel__img-story__img" alt="inventory"/>
                      <h4 class="services-carousel__img-story__label">Inventory Optimization<br>Support Tool</h4>
                      <h5 class="services-carousel__img-story__label-2">Technique: NLP Optimization Modeling</h5>
                      <h5 class="services-carousel__img-story__label-2">Client: Confidential</h5>
                      <eva-icon class="section-3__img-story__arrow" name="arrow-forward" animation="shake" fill="limegreen"></eva-icon>
                    </a>
                  </div>
                </transition>
              </b-col>
              <b-col>
                <transition name="slide-fade">
                  <div v-show="material_harmonization" class="services-carousel__img-story p-3 mb-5 rounded" @click="() => show(index + 2)">
                    <a class="section-3__img-story__link" target="_blank">
                      <img src="" class="services-carousel__img-story__img" alt="common_parts"/>
                      <h4 class="services-carousel__img-story__label">Material Harmonization<br>Matching Tool</h4>
                      <h5 class="services-carousel__img-story__label-2">Technique: Machine<br>Learning/Natural Language</h5>
                      <h5 class="services-carousel__img-story__label-2">Client: Confidential</h5>
                      <eva-icon class="section-3__img-story__arrow" name="arrow-forward" animation="shake" fill="limegreen"></eva-icon>
                    </a>
                  </div>
                </transition>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <transition name="slide-fade">
                  <div v-show="production_scheduling" class="services-carousel__img-story p-3 mb-5 rounded" @click="() => show(index + 3)"> 
                    <a class="section-3__img-story__link" target="_blank">
                      <img src="" class="services-carousel__img-story__img" alt="production_sched"/> 
                      <h4 class="services-carousel__img-story__label">Production Scheduling<br>Planning Tool</h4>
                      <h5 class="services-carousel__img-story__label-2">Technique: Optimization Modeling</h5>
                      <h5 class="services-carousel__img-story__label-2">Client: Confidential</h5>
                      <eva-icon class="section-3__img-story__arrow" name="arrow-forward" animation="shake" fill="limegreen"></eva-icon>
                    </a>
                  </div>
                </transition>
              </b-col>
              <b-col>
                <transition name="slide-fade">
                  <div v-show="radilogy_residency" class="services-carousel__img-story p-3 mb-5 rounded" @click="() => show(index + 4)">
                    <a class="section-3__img-story__link" target="_blank"> 
                      <img src="" class="services-carousel__img-story__img" alt="rads_scheduling"/>
                      <h4 class="services-carousel__img-story__label">Radiology Residency Scheduling Solution</h4>
                      <h5 class="services-carousel__img-story__label-2">Technique: Optimization Modeling</h5>
                      <h5 class="services-carousel__img-story__label-2">Client: UM Hospital / Jackson<br>Memorial Hospital
                      <eva-icon class="section-3__img-story__arrow" name="arrow-forward" animation="shake" fill="limegreen"></eva-icon>
                      </h5>
                    </a>
                  </div>
                </transition>
              </b-col>
              <b-col>
              </b-col>
            </b-row>
          </div>
        </div>
      </div>
      <VueEasyLightbox :visible="visible" :imgs="images[index]" @hide="handleHide"></VueEasyLightbox>
      <div class="section-2">
        <h2 class="section-2__header">Testimonials</h2>
        <!-- 
        <b-carousel
          class="section-2__carousel"
          v-model="slide"
          controls
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
        >
          <b-carousel-slide
            caption="First slide"
            text="Things are coming shortly"
            style="backgroud-color: whitesmoke"
            img src="none"
          >
          </b-carousel-slide>

          <b-carousel-slide>
            <span style="color: whitesmoke;"> Hello</span>
          </b-carousel-slide>

        </b-carousel>
        -->
      </div>
      <div class="section-3">
        <b-row>
          <b-col sm="4">
            <div class="section-3__header"> Our clients </div> 
          </b-col>
          <b-col sm="8">
            <img class="section-3__clients" alt="client" src="../assets/styles/img/clients_img/jackson_health.png"/> 
            <img class="section-3__clients" alt="client_2" src="../assets/styles/img/clients_img/uhealth.png"/>
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>

<script>
import { EvaIcon } from 'vue-eva-icons'
import VueEasyLightbox from 'vue-easy-lightbox'

export default {
  name: 'Services',
  data() {
    return { 
      decision_support: true,
      inventory_optimization: true,
      material_harmonization: true,
      production_scheduling: true,
      radilogy_residency: true,
      selected_tech: null,
      selected_ind: null,
      slide: 0,
      sliding: null,
      options_tech: [
        { input: null, text: 'Technique' },
        { input: 'ALL', text: 'All' },
        { input: 'OM', text: 'Optimization Modeling' },
        { input: 'NLP', text: 'NLP Optimization Modeling' },
        { input: 'ML', text: 'Machine Learning' }
      ],
      options_ind: [
        { input: null, text: 'Industry' },
        { input: 'ALL', text: 'All' },
        { input: 'OM', text: 'Supply Chain' },
        { input: 'NLP', text: 'Healthcare' }
      ],
      visible: false,
      index: 0,
      images: [
        require('../assets/styles/img/services_img/capital_ investment.jpg'),
        require('../assets/styles/img/services_img/Inventory_Optimization.jpg'),
        require('../assets/styles/img/services_img/Materials_Harmonization.jpg'),
        require('../assets/styles/img/services_img/Production_Scheduling.jpg'),
        require('../assets/styles/img/services_img/Radiology_Scheduling.jpg')
        ]
    }
  },
  components: {
    [EvaIcon.name]: EvaIcon,
    VueEasyLightbox
  },
  methods: {
    show(index) {
      this.index = index 
      this.visible = true
    },
    handleHide() {
      this.visible = false
      this.index = 0
    },
    allStories() {
      this.decision_support = true,
      this.inventory_optimization = true,
      this.material_harmonization = true,
      this.production_scheduling = true,
      this.radilogy_residency = true
    },
    optimizationModeling() {
      this.decision_support = true,
      this.inventory_optimization = true,
      this.material_harmonization = false,
      this.production_scheduling = true,
      this.radilogy_residency = false
    }, 
    nlpOptimizationModeling() {
      this.decision_support = false,
      this.inventory_optimization = true,
      this.material_harmonization = false,
      this.production_scheduling = false,
      this.radilogy_residency = false
    },
    machineLearning() {
      this.decision_support = false,
      this.inventory_optimization = false,
      this.material_harmonization = true,
      this.production_scheduling = false,
      this.radilogy_residency = false
    },
    supplyChain() {
      this.decision_support = true,
      this.inventory_optimization = true,
      this.material_harmonization = true,
      this.production_scheduling = true,
      this.radilogy_residency = false
    },
    healthcare() {
      this.decision_support = false,
      this.inventory_optimization = false,
      this.material_harmonization = false,
      this.production_scheduling = false,
      this.radilogy_residency = true
    }
    /*onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    }*/
  }
}
</script>
