<template>
   <div class="container-fluid stars font">
     <div class="twinkling">
       <!-- section 1 -->
      <div class="supplyChain">
        <h2 class="supplyChain__title">Driving Performance for Supply Chain</h2>
        <p class="supplyChain__text">Make the system smarter with Deep Dive Analytics.</p>
        <p class="supplyChain__text">End-to-End supply chain solutions.</p>
        <p class="supplyChain__text">Data-driven. Custom.</p>
        <div class="supplyChain__btn">
          <router-link to="/supplyChain" class="homelink">Learn more >&nbsp;&nbsp;&nbsp;</router-link>
          <router-link to="/contact" class="homelink">Contact us ></router-link>
        </div><br>
        <img class="supplyChain__img" src="../assets/styles/img/home_page_img/supplychain_homev2.png" />
        <!-- <div class="supplychain-1__img1">
          <z-canvas 
          :views="myViews" 
          class="canvas"
          style="width: 40%; height: 400px; border-radius: 50%"
          >Home</z-canvas>
        </div> -->
      </div>
       <!-- section 2 -->
       <div class="optimizeNetwork">
         <b-row class="flex-column-reverse flex-md-row">
           <b-col>
             <img src="../assets/styles/img/supplychain_img/world.png" class="optimizeNetwork__img"/>
           </b-col>
           <b-col>
             <h1 class="optimizeNetwork__title">Optimize the Network</h1>
             <p class="optimizeNetwork__text">
               Make the system smarter by using data driven<br>
               analytics to evaluate end-to-end tradeoffs for<br>
               all nodes simultanesouly.
             </p>
             <p class="optimizeNetwork__text" style="margin-bottom: 0">
               Where to open or close a DC?<br>
               Where to open or close a plant?<br>
               Which customer base will each DC serve?<br>
               What is the optimal DC to plant allocation?<br>
               What should be my modes or transportation?<br>
               What is the optimal product to line allocation?<br>
               What is the optimal batch sizing and sequencing?
             </p>
             <span class="optimizeNetwork__btn">Contact us ></span>
           </b-col>
         </b-row>
       </div>
       <!-- section 3 -->
      <div class="codeMdApp">
        <b-row class="flex-column-reverse flex-md-row">
          <b-col>
            <img class="codeMdApp__img" src="../assets/styles/img/code_md/codemd_app.png"/>
          </b-col>
          <b-col>
            <div class="codeMdApp__content"> 
              <h1 class="codeMdApp__title">Get the CodeMD App</h1>
              <p class="codeMdApp__text">
                Run your custom algorithms on&nbsp;demand.<br>
                Own your analytical solution. Visualize your data.
              </p>
              <p class="codeMdApp__btn">
                <router-link to="/contact" class="codeMdLink">Contact us ></router-link>
              </p>
            </div>
          </b-col>
        </b-row>
      </div>
      <!-- section 4 -->
       <div class="imageSection">
         <b-row class="imageSection__row top-buffer mx-auto">
           <b-col sm="6">
             <img src="../assets/styles/img/supplychain_img/decisive_confident.jpg" class="imageSection__img"/>
           </b-col>
           <b-col sm="6">
             <img src="../assets/styles/img/supplychain_img/analytical_process.jpg" class="imageSection__img"/>
           </b-col>
         </b-row>
         <b-row class="imageSection__row top-buffer mx-auto">
           <b-col sm="6">
             <img src="../assets/styles/img/supplychain_img/lead_team.jpg" class="imageSection__img"/>
           </b-col>
           <b-col sm="6">
             <img src="../assets/styles/img/supplychain_img/impact_customers.jpg" class="imageSection__img"/>
           </b-col>
         </b-row>
       </div>
       <!-- section 5 -->
        <div class="carousel"> 
          <b-carousel
            id="carousel-fade"
            class="carousel"
            fade
            indicators
          >
            <b-carousel-slide>
              <div class="carousel-caption text-left d-md-block">
                <h2 class="carousel__title">What customers are saying</h2>
                <b-row>
                  <b-col cols="2">
                    <img src="../assets/styles/img/code_md/quotation_1.png" class="carousel__img-quote-open"/>
                  </b-col>
                  <b-col style="border-bottom: 1px solid grey; padding: 0">
                    <img src="../assets/styles/img/code_md/codedm_just-logo.png" class="carousel__img-logo"/>
                  </b-col>
                </b-row>
                <p class="carousel__text">
                  &laquo;With CodeMD, Deep Dive Analytics brought a&nbsp;degree of&nbsp;service 
                  to&nbsp;our department&rsquo;s complex schedule which was very obviously 
                  on&nbsp;an&nbsp;engineering level. CodeMD took historical data and 
                  the complex educational requirements for residents into account, 
                  intelligently producing a&nbsp;schedule which was far beyond what a&nbsp;human 
                  could produce. What really stood out though was Deep Dive&rsquo;s commitment 
                  to&nbsp;tailor every aspect to&nbsp;the nuances of&nbsp;our department 
                  and the professionalism with which they did&nbsp;it. It&nbsp;seems 
                  that CodeMD&nbsp;is a&nbsp;generation beyond what is&nbsp;offered by&nbsp;other 
                  firms. &mdash;&nbsp;Dr. Edilberto Alvarez Neuroradiology at&nbsp;the University 
                  of&nbsp;Miami Hospital.&raquo;
                </p>
                <b-row>
                  <b-col cols="2">
                    <img src="../assets/styles/img/code_md/codemd_logo_brain.png" class="carousel__img-brain"/>
                  </b-col>
                  <b-col>
                    <span class="carousel__author">- DR. EDILBERTO ALVAREZ</span><br>
                    <span class="carousel__contact">Neuroradiology at the University of Miami Hospital</span>
                  </b-col>
                  <b-col cols="1">
                    <img src="../assets/styles/img/code_md/quotation.png" class="carousel__img-quote-end"/>
                  </b-col>
                </b-row>
              </div>  
            </b-carousel-slide>
            <b-carousel-slide>
              <div class="carousel-caption text-left d-md-block">
                <h2 class="carousel__title">What customers are saying</h2>
                <b-row>
                  <b-col cols="2">
                    <img src="../assets/styles/img/code_md/quotation_1.png" class="carousel__img-quote-open"/>
                  </b-col>
                  <b-col style="border-bottom: 1px solid grey; padding: 0">
                    <img src="../assets/styles/img/code_md/codedm_just-logo.png" class="carousel__img-logo"/>
                  </b-col>
                </b-row>
                <p class="carousel__text">
                  &laquo;CodeMD was able to&nbsp;quickly and accurately provide a&nbsp;solution 
                  to&nbsp;an&nbsp;extremely complex problem that had become too complex for our 
                  group to&nbsp;solve in&nbsp;a&nbsp;reasonable time. The Deep Dive Analytics 
                  team was able to&nbsp;program a&nbsp;better, more tailored, solution that was 
                  even better than the industry standard. It&nbsp;ultimately consolidated months 
                  of&nbsp;work into a&nbsp;weekend. During the development, the staff was timely 
                  and professional; whereas other companies had set false expectations and had 
                  mislead our team. I&nbsp;can recommend CodeMD without reserve.&raquo;
                </p>
                <b-row>
                  <b-col cols="2">
                    <img src="../assets/styles/img/code_md/codemd_logo_brain.png" class="carousel__img-brain"/>
                  </b-col>
                  <b-col>
                    <span class="carousel__author">- DR. MOHAMMED EZUDDIN</span><br>
                    <span class="carousel__contact">Vascular & Interventional Radiology the University of Miami Hospital</span>
                  </b-col>
                  <b-col cols="1">
                     <img src="../assets/styles/img/code_md/quotation.png" class="carousel__img-quote-end"/>
                  </b-col>
                </b-row>
              </div> 
            </b-carousel-slide>
          </b-carousel>
        </div>
      </div>
    </div>
</template>

<script>
import Customers from './canvas/Customers'
import Distribution from './canvas/Distribution'
import Manufacturing from './canvas/Manufacturing'
import Planning from './canvas/Planning'
import Quality from './canvas/Quality'
import Sourcing from './canvas/Sourcing'

export default {
  name: 'SupplyChain',
  data () {
    return {
      myViews: {
        Customers,
        Distribution,
        Manufacturing,
        Planning,
        Quality,
        Sourcing
      }
    }
  },
  mounted () {
    this.$zircle.config({
      style: {
        theme: 'black',
        mode: 'dark'
      }
    })
  },
}

</script>