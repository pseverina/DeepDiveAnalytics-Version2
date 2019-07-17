<template>
   <div class="stars font">
     <div class="twinkling">
        <!-- First section -->
        <img src="../assets/img/home_page_img/deepdive_logo_landing.png" id="head_name">
        <span id="dive_in"> DIVE IN </span> 
        <img src="../assets/img/icons_img/icon_arrow_down.png" alt="arrow_down" id="arrow_down">
         <!--  Second Section -->
         <div class="section-2">
           <div class="section-2__head">We&nbsp;drive business advantage by <br> delivering
            industry leading analytical capabilities</div>
            <b-row>
              <b-col sm="3" class="section-2__pic-1"> 
                <a>
                  <img src="../assets/img/icons_img/icon_machinelearning.png" alt="img_icon1" class="section-2__img">
                  <h2 class="section-2__head-3"> Predictive <br> Analytics </h2>
                  <h3 class="section-2__head-4"> Sense the future </h3>
                  <h5 class="section-2__text-1">
                      Natural Language Processing <br>
                      Artificial Intelligence <br>
                      Machine Learning <br>
                      Deep Learning
                  </h5>
                </a>
              </b-col>
               <b-col sm="3" class="section-2__pic-2">
                  <a>
                    <img src="../assets/img/icons_img/icon_mathmodeling.png" alt="img_icon2" class="section-2__img-2">
                    <h2 class="section-2__head-3"> Prespriptive <br> Analytics </h2>
                    <h3 class="section-2__head-4"> Pivot and Adapt </h3>
                    <h5 class="section-2__text-1">
                        Optimization Mathematical Modeling<br>
                        Stochastic Optimization <br>
                        Heuristics
                    </h5>  
                  </a>
               </b-col>
               <b-col sm="3" class="section-2__pic-3">
                  <a href="custom_solution_deployment.html" style="text-decoration: none;">
                    <img src="../assets/img/icons_img/icon_nlp.png" alt="img_icon3" 
                        class="section-2__img-3">
                    <h2 class="section-2__head-3"> End-to-End<br> Solutions </h2>
                    <h3 class="section-2__head-4" style="margin-bottom: 30%;"> Custom Solution Deployment</h3>
                  </a>
               </b-col>
            </b-row>
        </div>
        <!--  Third Section -->
        <div class="section-3__head"> Our work </div>
        <carousel 
          :perPageCustom="[[600, 2], [830, 3], [1130, 4], [1430, 5]]" 
          class="section-3__carousel">
          <slide>
            <div class="section-3__img-story p-3 mb-5 rounded"> 
              <a target="_blank" href="..//assets/img/services_img/capital_ investment.jpg" class="section-3__img-story__link"> 
                <img src="..//assets/img/services_img_2/capital_investment_thumbnail.jpg" class="section-3__img-story__img" alt="cap_invest"/>
                <h4 class="section-3__img-story__label"> Decision Support Tool for Capital Investment</h4>
                <h5 class="section-3__img-story__label-2"> Technique: Optimization Modeling</h5>
                <h5 class="section-3__img-story__label-2"> Client: Confidential</h5>
                <eva-icon class="section-3__img-story__arrow" name="arrow-forward" animation="shake" fill="limegreen"></eva-icon>
              </a>
            </div>
           </slide>
           <slide>
            <div class="section-3__img-story p-3 mb-5 rounded">
              <a target="_blank" href="../assets/img/services_img/Inventory_Optimization.jpg" class="section-3__img-story__link">
                <img src="../assets/img/services_img_2/inventory_thumbnail.jpg" class="section-3__img-story__img" alt="inventory"/>
                <h4 class="section-3__img-story__label"> Inventory Optimization <br> Support Tool </h4>
                <h5 class="section-3__img-story__label-2"> Technique: NLP Optimization Modeling </h5>
                <h5 class="section-3__img-story__label-2"> Client: Confidential</h5>
                <eva-icon class="section-3__img-story__arrow" name="arrow-forward" animation="shake" fill="limegreen"></eva-icon>
              </a>
            </div>
           </slide>
          <slide>
            <div class="section-3__img-story p-3 mb-5 rounded">
             <a target="_blank" href="../assets/img/services_img/Materials_Harmonization.jpg" class="section-3__img-story__link">
               <img src="../assets/img/services_img_2/common_parts_thumbnail.png" class="section-3__img-story__img" alt="common_parts"/>
              <h4 class="section-3__img-story__label"> Material Hamonization <br> Matching Tool </h4>
              <h5 class="section-3__img-story__label-2"> Technique: Machine <br> Learning/Natural Language </h5>
              <h5 class="section-3__img-story__label-2"> Client: Confidential</h5>
              <eva-icon class="section-3__img-story__arrow" name="arrow-forward" animation="shake" fill="limegreen"></eva-icon>
             </a>
           </div>
          </slide>
           <slide>
            <div class="section-3__img-story p-3 mb-5 rounded">
              <a target="_blank" href="../assets/img/services_img/Production_Scheduling.jpg" class="section-3__img-story__link">
                <img src="../assets/img/services_img_2/production_sched_thumbnail.jpg" class="section-3__img-story__img" alt="production_sched"/>
                <h4 class="section-3__img-story__label"> Production Scheduling <br> Planning Tool </h4>
                <h5 class="section-3__img-story__label-2"> Technique: Optimization Modeling </h5>
                <h5 class="section-3__img-story__label-2"> Client: Confidential</h5>
                <eva-icon class="section-3__img-story__arrow" name="arrow-forward" animation="shake" fill="limegreen"></eva-icon>
              </a>
            </div> 
           </slide>
           <slide>
            <div class="section-3__img-story p-3 mb-5 rounded">
              <a target="_blank" href="../assets/img/services_img/Radiology_Scheduling.jpg" class="section-3__img-story__link"> 
                <img src="../assets/img/services_img_2/rads_scheduling_thumbnail.jpg" class="section-3__img-story__img" alt="rads_scheduling"/>
                <h4 class="section-3__img-story__label"> Radiology Residency Scheduling Solution </h4>
                <h5 class="section-3__img-story__label-2"> Technique: Optimization Modeling </h5>
                <h5 class="section-3__img-story__label-2"> Client: UM Hospital / Jackson <br> Memorial Hospital
                <eva-icon class="section-3__img-story__arrow" name="arrow-forward" animation="shake" fill="limegreen"></eva-icon>
                 </h5>
              </a>
            </div> 
           </slide>
        </carousel>
        <!-- Fourth Section -->
        <div class="section-4">
          <b-row>
            <b-col sm="4">
              <div class="section-4__head-1"> Our clients </div> 
            </b-col>
            <b-col sm="8">
              <img class="section-4__clients" alt="client" src="../assets/img/cllients_img/jackson_health.png"/> 
              <img class="section-4__clients" alt="client_2" src="../assets/img/cllients_img/uhealth.png"/>
            </b-col>
          </b-row>
          <hr class="section-4__hr_1">
          <b-row>
            <b-col sm="4"> 
              <div class="section-4__head-2"> Testimonials</div>
            </b-col>
            <b-col sm="6">
              <div class="section-4__quotes">
                <img class="section-4__quotes-img" alt="quote" src="../assets/img/icons_img/quotation.svg"/>
                “More of these data-driven projects should take place throughout J&J” <br>
                - Everyone , President at Company Name 1 !
              </div>
            </b-col> 
          </b-row>
        </div>
        <!--  Fifth Section -->
        <div class="section-5__head"> DEEP DIVE into your data, gaining insights to help make <br>
            <div id="vertical_flip" style="display: none;">
                <span> BETTER </span>
                <span> SMARTER </span>
                <span> QUICKER </span>
                <span> TRUSTED </span>
            </div> 
            <span class="section-5__head-decisions"> DECISIONS </span>
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
            <img class="section-5__black_hole" alt="black_hole" src="../assets/img/bg_img/black_hole.png"/> 
            <img class="section-5__spaceman" alt="spaceman" src="../assets/img/home_page_img/blackhole_spaceman.png"/>
          </b-col>
        </b-row>
      </div>
    </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
import { EvaIcon } from 'vue-eva-icons'

export default {
  name: 'Home',
  data() {
    return {}
  },
  components: {
    Carousel,
    Slide,
    [EvaIcon.name]: EvaIcon
  }
}
</script>

