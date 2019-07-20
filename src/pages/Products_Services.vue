<template>
  <div class="stars font">
    <div class="twinkling">
      <h1 class="header">Products & Services</h1>
      <hr class="hr prod_serv__hr-1">
        <b-row>
          <div class="col-xs-3 prod_serv__item">
            <img class="prod_serv__img-1" alt="item_1" src="../assets/img/icons_img/icon_deepdiveanalysis.png"/>
            <h2 class="prod_serv__h-2">Deep Dive<br>Analysis</h2>
            <div class="prod_serv__text">
                A deep dive analysis for your specific
                business needs, providing you with 
                our findings, recommendations & 
                customized algorithms.
            </div>
          </div>
          <div class="col-xs-3 prod_serv__item">
            <img class="prod_serv__img-2" alt="item_2" src="../assets/img/icons_img/custom_application.png"/>
            <h2 class="prod_serv__h-2">Custom<br>Application</h2>
            <div class="prod_serv__text">
                A customized API and web app,
                providing you a tangible, reusable 
                analytics solution for your specific 
                business needs.
            </div>
          </div>
          <div class="col-xs-3 prod_serv__item">
            <img class="prod_serv__img-3" alt="item_3" src="../assets/img/icons_img/digital_transformation.svg"/>
            <h2 class="prod_serv__h-2"> Digital<br>Transformation</h2>
            <div class="prod_serv__text">
                Transform your business so that you 
                can take advantage of the latest 
                cutting edge technology offered in
                Advanced Analytics. 
            </div>
          </div>
        </b-row>
      <hr class="hr prod_serv__hr-2">
      <div class="prod_serv__head">Our work</div>
      <carousel 
        :perPageCustom="[[600, 2], [830, 3], [1130, 4], [1430, 5]]" 
        class="prod_serv__carousel">
        <slide>
          <div class="prod_serv__img-story p-3 mb-5 rounded"> 
            <a target="_blank" href="..//assets/img/services_img/capital_ investment.jpg" class="prod_serv__img-story__link"> 
              <img src="../assets/img/services_img_2/capital_investment_thumbnail.jpg" class="prod_serv__img-story__img" alt="cap_invest"/>
              <h4 class="prod_serv__img-story__label">Decision Support Tool for Capital Investment</h4>
              <h5 class="prod_serv__img-story__label-2">Technique: Optimization Modeling</h5>
              <h5 class="prod_serv__img-story__label-2">Client: Confidential</h5>
              <eva-icon class="prod_serv__img-story__arrow" name="arrow-forward" animation="shake" fill="limegreen"></eva-icon>
            </a>
          </div>
          </slide>
          <slide>
          <div class="prod_serv__img-story p-3 mb-5 rounded">
            <a target="_blank" href="../assets/img/services_img/Inventory_Optimization.jpg" class="prod_serv__img-story__link">
              <img src="../assets/img/services_img_2/inventory_thumbnail.jpg" class="prod_serv__img-story__img" alt="inventory"/>
              <h4 class="prod_serv__img-story__label">Inventory Optimization<br>Support Tool</h4>
              <h5 class="prod_serv__img-story__label-2">Technique: NLP Optimization Modeling</h5>
              <h5 class="prod_serv__img-story__label-2">Client: Confidential</h5>
              <eva-icon class="prod_serv__img-story__arrow" name="arrow-forward" animation="shake" fill="limegreen"></eva-icon>
            </a>
          </div>
          </slide>
          <slide>
            <div class="prod_serv__img-story p-3 mb-5 rounded">
              <a target="_blank" href="../assets/img/services_img/Materials_Harmonization.jpg" class="prod_serv__img-story__link">
              <img src="../assets/img/services_img_2/common_parts_thumbnail.png" class="prod_serv__img-story__img" alt="common_parts"/>
              <h4 class="prod_serv__img-story__label">Material Hamonization<br>Matching Tool</h4>
              <h5 class="prod_serv__img-story__label-2">Technique: Machine<br>Learning/Natural Language</h5>
              <h5 class="prod_serv__img-story__label-2">Client: Confidential</h5>
              <eva-icon class="prod_serv__img-story__arrow" name="arrow-forward" animation="shake" fill="limegreen"></eva-icon>
              </a>
            </div>
          </slide>
          <slide>
          <div class="prod_serv__img-story p-3 mb-5 rounded">
            <a target="_blank" href="../assets/img/services_img/Production_Scheduling.jpg" class="prod_serv__img-story__link">
              <img src="../assets/img/services_img_2/production_sched_thumbnail.jpg" class="prod_serv__img-story__img" alt="production_sched"/>
              <h4 class="prod_serv__img-story__label">Production Scheduling<br>Planning Tool</h4>
              <h5 class="prod_serv__img-story__label-2">Technique: Optimization Modeling</h5>
              <h5 class="prod_serv__img-story__label-2">Client: Confidential</h5>
              <eva-icon class="prod_serv__img-story__arrow" name="arrow-forward" animation="shake" fill="limegreen"></eva-icon>
            </a>
          </div> 
          </slide>
          <slide>
          <div class="prod_serv__img-story p-3 mb-5 rounded">
            <a target="_blank" href="../assets/img/services_img/Radiology_Scheduling.jpg" class="prod_serv__img-story__link"> 
              <img src="../assets/img/services_img_2/rads_scheduling_thumbnail.jpg" class="prod_serv__img-story__img" alt="rads_scheduling"/>
              <h4 class="prod_serv__img-story__label">Radiology Residency Scheduling Solutio</h4>
              <h5 class="prod_serv__img-story__label-2">Technique: Optimization Modeling</h5>
              <h5 class="prod_serv__img-story__label-2">Client: UM Hospital / Jackson<br>Memorial Hospital
                <eva-icon class="prod_serv__img-story__arrow" name="arrow-forward" animation="shake" fill="limegreen"></eva-icon>
              </h5>
            </a>
          </div> 
        </slide>
      </carousel>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
import { EvaIcon } from 'vue-eva-icons'

export default {
  name: 'ProdServPage',
  data() {
    return { }
  },
  components: {
    Carousel,
    Slide,
    [EvaIcon.name]: EvaIcon
  },
}
</script>
