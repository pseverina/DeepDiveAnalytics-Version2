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

      <lingallery :width="width" :height="height" :items="items" class="services-gallery"/>
    <!-- 
    <b-carousel> 
      <b-carousel-slide>
        <div class="services-carousel__img-story"> 
          <a target="_blank" href="..//assets/img/services_img/capital_ investment.jpg">
            <img src="..//assets/img/services_img_2/capital_investment_thumbnail.jpg" alt="cap_invest"/>
            <h4 class="services-carousel__img-story__label"> Decision Support Tool for Capital Investment</h4>
            <h5 class="services-carousel__img-story__label-2"> Technique: Optimization Modeling</h5>
            <h5 class="services-carousel__img-story__label-2"> Client: Confidential</h5>
          </a>
        </div>
        <div class="services-carousel__img-story">
          <a target="_blank" href="../assets/img/services_img/Inventory_Optimization.jpg">
            <img src="../assets/img/services_img_2/inventory_thumbnail.jpg" alt="inventory"/>
            <h4 class="services-carousel__img-story__label"> Inventory Optimization <br> Support Tool </h4>
            <h5 class="services-carousel__img-story__label-2"> Technique: NLP Optimization Modeling </h5>
            <h5 class="services-carousel__img-story__label-2"> Client: Confidential</h5>
          </a>
        </div>
        <div class="services-carousel__img-story">
          <a target="_blank" href="../assets/img/services_img/Materials_Harmonization.jpg">
          <img src="../assets/img/services_img_2/common_parts_thumbnail.png" alt="common_parts"/>
          <h4 class="services-carousel__img-story__label"> Material Hamonization <br> Matching Tool </h4>
          <h5 class="services-carousel__img-story__label-2"> Technique: Machine <br> Learning/Natural Language </h5>
          <h5 class="services-carousel__img-story__label-2"> Client: Confidential</h5>
          </a>
        </div>
        <div class="services-carousel__img-story">
          <a target="_blank" href="../assets/img/services_img/Production_Scheduling.jpg">
            <img src="../assets/img/services_img_2/production_sched_thumbnail.jpg" alt="production_sched"/> 
            <h4 class="services-carousel__img-story__label"> Production Scheduling <br> Planning Tool </h4>
            <h5 class="services-carousel__img-story__label-2"> Technique: Optimization Modeling </h5>
            <h5 class="services-carousel__img-story__label-2"> Client: Confidential</h5>
          </a>
        </div>
        <div class="services-carousel__img-story">
          <a target="_blank" href="../assets/img/services_img/Radiology_Scheduling.jpg"> 
            <img src="../assets/img/services_img_2/rads_scheduling_thumbnail.jpg" alt="rads_scheduling"/> 
            <h4 class="services-carousel__img-story__label"> Radiology Residency Scheduling Solution </h4>
            <h5 class="services-carousel__img-story__label-2"> Technique: Optimization Modeling </h5>
            <h5 class="services-carousel__img-story__label-2"> Client: UM Hospital / Jackson <br> Memorial Hospital </h5>
          </a>
        </div>
      </b-carousel-slide> 
    </b-carousel> -->
    <div class="section-3">
      <b-row>
        <b-col sm="4">
          <div class="section-3__header"> Our clients </div> 
        </b-col>
        <b-col sm="8">
          <img class="section-3__clients" alt="client" src="../assets/img/cllients_img/jackson_health.png"/> 
          <img class="section-3__clients" alt="client_2" src="../assets/img/cllients_img/uhealth.png"/>
        </b-col>
      </b-row>
    </div>
    </div>
 </div>
</template>

<script>
import Lingallery from 'lingallery'

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
      width: 600,
      height: 400,
      items: [{
          src: '../assets/img/services_img/capital_ investment.jpg',
          thumbnail: '../assets/img/services_img_2/rads_scheduling_thumbnail.jpg',
          caption: 'Some Caption'
        },
        {
          src: 'https://picsum.photos/600/400/?image=10',
          thumbnail: 'https://picsum.photos/64/64/?image=10'
        },
        {
          src: 'https://picsum.photos/600/400/?image=10',
          thumbnail: 'https://picsum.photos/64/64/?image=10'
        },
        {
          src: 'https://picsum.photos/600/400/?image=10',
          thumbnail: 'https://picsum.photos/64/64/?image=10'
        },
        {
          src: 'https://picsum.photos/600/400/?image=10',
          thumbnail: 'https://picsum.photos/64/64/?image=10'
        }
      ]
    }
  },
  components: {
    Lingallery
  }
}
</script>
