<template>
 <div class="stars font">
    <div class="twinkling">
      <h1 class="header">Success Stories</h1>
      <hr class="hr service__hr">
      <div class="header-2"> Filter by 
        <b-form-select v-model="selected_tech" :options="options_tech" class="selected-tech"></b-form-select>
        or
        <b-form-select v-model="selected_ind" :options="options_ind" class="selected-ind"></b-form-select>
      </div>
      <div class="carousel slide services-carousel" data-interval="false">
      <div class="carousel-inner">
          <div class="item active" >
            <b-row>
              <b-col>
                <div class="services-carousel__img-story p-3 mb-5 rounded OM SCH" @click="() => show(index)"> 
                  <a class="section-3__img-story__link" target="_blank">
                    <img src="../img/services_img_2/capital_investment_thumbnail.jpg" class="services-carousel__img-story__img" alt="cap_invest"/>
                    <h4 class="services-carousel__img-story__label">Decision Support Tool for Capital Investment</h4>
                    <h5 class="services-carousel__img-story__label-2">Technique: Optimization Modeling</h5>
                    <h5 class="services-carousel__img-story__label-2">Client: Confidential</h5>
                    <eva-icon class="section-3__img-story__arrow" name="arrow-forward" animation="shake" fill="limegreen"></eva-icon>
                  </a>
                </div>
              </b-col>
              <b-col>
                <div md="4" offset-md="4" class="services-carousel__img-story p-3 mb-5 rounded NLP SCH" @click="() => show(index + 1)">
                  <a class="section-3__img-story__link" target="_blank">
                    <img src="../img/services_img_2/inventory_thumbnail.jpg" class="services-carousel__img-story__img" alt="inventory"/>
                    <h4 class="services-carousel__img-story__label">Inventory Optimization<br>Support Tool</h4>
                    <h5 class="services-carousel__img-story__label-2">Technique: NLP Optimization Modeling</h5>
                    <h5 class="services-carousel__img-story__label-2">Client: Confidential</h5>
                    <eva-icon class="section-3__img-story__arrow" name="arrow-forward" animation="shake" fill="limegreen"></eva-icon>
                  </a>
                </div>
              </b-col>
              <b-col>
                <div class="services-carousel__img-story p-3 mb-5 rounded ML SCH" @click="() => show(index + 2)">
                  <a class="section-3__img-story__link" target="_blank">
                    <img src="../img/services_img_2/common_parts_thumbnail.png" class="services-carousel__img-story__img" alt="common_parts"/>
                    <h4 class="services-carousel__img-story__label">Material Hamonization<br>Matching Tool</h4>
                    <h5 class="services-carousel__img-story__label-2">Technique: Machine<br>Learning/Natural Language</h5>
                    <h5 class="services-carousel__img-story__label-2">Client: Confidential</h5>
                    <eva-icon class="section-3__img-story__arrow" name="arrow-forward" animation="shake" fill="limegreen"></eva-icon>
                  </a>
                </div>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <div class="services-carousel__img-story p-3 mb-5 rounded OM SCH" @click="() => show(index + 3)"> 
                  <a class="section-3__img-story__link" target="_blank">
                    <img src="../img/services_img_2/production_sched_thumbnail.jpg" class="services-carousel__img-story__img" alt="production_sched"/> 
                    <h4 class="services-carousel__img-story__label">Production Scheduling<br>Planning Tool</h4>
                    <h5 class="services-carousel__img-story__label-2">Technique: Optimization Modeling</h5>
                    <h5 class="services-carousel__img-story__label-2">Client: Confidential</h5>
                    <eva-icon class="section-3__img-story__arrow" name="arrow-forward" animation="shake" fill="limegreen"></eva-icon>
                  </a>
                </div>
              </b-col>
              <b-col>
                <div class="services-carousel__img-story p-3 mb-5 rounded OM HC" @click="() => show(index + 4)">
                  <a class="section-3__img-story__link" target="_blank"> 
                    <img src="../img/services_img_2/rads_scheduling_thumbnail.jpg" class="services-carousel__img-story__img" alt="rads_scheduling"/>
                    <h4 class="services-carousel__img-story__label">Radiology Residency Scheduling Solution</h4>
                    <h5 class="services-carousel__img-story__label-2">Technique: Optimization Modeling</h5>
                    <h5 class="services-carousel__img-story__label-2">Client: UM Hospital / Jackson<br>Memorial Hospital
                    <eva-icon class="section-3__img-story__arrow" name="arrow-forward" animation="shake" fill="limegreen"></eva-icon>
                    </h5>
                  </a>
                </div>
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
        <carousel :data="data" :controls="true" class="section-2__carousel"></carousel>
      </div>
      <div class="section-3">
        <b-row>
          <b-col sm="4">
            <div class="section-3__header"> Our clients </div> 
          </b-col>
          <b-col sm="8">
            <img class="section-3__clients" alt="client" src="../img/clients_img/jackson_health.png"/> 
            <img class="section-3__clients" alt="client_2" src="../img/clients_img/uhealth.png"/>
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
      selected_tech: null,
      selected_ind: null,
      options_tech: [
        { value: null, text: 'Technique' },
        { value: 'ALL', text: 'All' },
        { value: 'OM', text: 'Optimization Modeling' },
        { value: 'NLP', text: 'NLP Optimization Modeling' },
        { value: 'ML', text: 'Machine Learning' }
      ],
      options_ind: [
        { value: null, text: 'Industry' },
        { value: 'ALL', text: 'All' },
        { value: 'OM', text: 'Supply Chain' },
        { value: 'NLP', text: 'Healthcare' }
      ],
      visible: false,
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
    }
  }
}
</script>
