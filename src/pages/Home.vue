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
        <div style="height: 400px;"></div>
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
          <b-row>
            <hr class="section-4__hr_1">
          </b-row>
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
export default {
  name: 'Home',
  data() {
    return { }
  }
}
</script>

