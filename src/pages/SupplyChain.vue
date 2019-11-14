<template>
   <div class="container-fluid stars font">
     <div class="twinkling">
       <div class="supplychain-1">
         <h1 class="supplychain-1__head">Digital Supply Chain</h1>
         <p class="supplychain-1__text">
           Custom, Accurate, and Modular.<br>
           Establish a data-driven process with Deep Dive Analytics.
         </p>
         <div class="supplychain-1__img1">
           <z-canvas 
            :views="myViews" 
            class="canvas"
            style="width: 40%; height: 400px; border-radius: 50%"
            >Home</z-canvas>
         </div>
         <!-- <img src="../img/home_page_img/supplychain_homev2.png" class="supplychain-1__img"/> -->
       </div>
       <div class="supplychain-2">
         <b-row>
           <b-col>
             <img src="../img/supplychain_img/world.png" class="supplychain-2__img"/>
           </b-col>
           <b-col>
             <h1 class="header supplychain-2__header">Optimize the Network</h1>
             <p class="subtitle">
               Make the system smarter by using data driven<br>
               analytics to evaluate end-to-end tradeoffs for<br>
               all nodes simultanesouly.
             </p>
             <p class="subtitle">
               Where to open or close a DC?<br>
               Where to open or close a plant?<br>
               Which customer base will each DC serve?<br>
               What is the optimal DC to plant allocation?<br>
               What should be my modes or transportation?<br>
               What is the optimal product to line allocation?<br>
               What is the optimal batch sizing and sequencing?
             </p>
             <span class="blue">Contact us ></span>
           </b-col>
         </b-row>
       </div>
       <div class="supplychain-3">
         <b-row>
           <b-col>
             <img src="../img/supplychain_img/deepdive_app.png" class="supplychain-3__img" />
           </b-col>
           <b-col>
             <h1 class="header supplychain-3__header">Get your Custom App</h1>
             <p class="subtitle">
               Run your custom algorithms on demand.<br>
               Own your analytical solution. Visualize your data.
             </p>
             <span class="blue">Contacts us ></span>
           </b-col>
         </b-row>
       </div>
       <div class="supplychain-4">
         <b-row>
           <b-col>
             <img src="../img/supplychain_img/decisive_confident.jpg" class="supplychain-4__img"/>
           </b-col>
           <b-col>
             <img src="../img/supplychain_img/analytical_process.jpg" class="supplychain-4__img"/>
           </b-col>
         </b-row>
         <br>
         <b-row>
           <b-col>
             <img src="../img/supplychain_img/lead_team.jpg" class="supplychain-4__img"/>
           </b-col>
           <b-col>
             <img src="../img/supplychain_img/impact_customers.jpg" class="supplychain-4__img"/>
           </b-col>
         </b-row>
       </div>
        <div class="supplychain-5">
          <img src="../img/supplychain_img/sc_testimonial.jpg" class="supplychain-5__img" />
          <b-carousel
            id="carousel-fade"
            class="supplychain-5__carousel"
            fade
            indicators
          >
            <b-carousel-slide>
              <div class="carousel-caption d-md-block">
                <h1 class="supplychain-5__header">What CodeMD customers are saying</h1>
                <h3 class="supplychain-5__header-subtext">Our analytical capabilities differentiate us from our competitors.</h3>
                <p class="supplychain-5__text">
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
                  <span class="supplychain-5__author">
                    - Dr. Edilberto Alvarez <br> Neuroradiology at the University of Miami Hospital
                  </span>
              </div>  
            </b-carousel-slide>
            <b-carousel-slide>
              <div class="carousel-caption d-md-block">
                <h1 class="supplychain-5__header">What CodeMD customers are saying</h1>
                <h3 class="supplychain-5__header-subtext">Our analytical capabilities differentiate us from our competitors.</h3>
                <p class="supplychain-5__text">
                    &laquo;CodeMD was able to&nbsp;quickly and accurately provide a&nbsp;solution 
                    to&nbsp;an&nbsp;extremely complex problem that had become too complex for our 
                    group to&nbsp;solve in&nbsp;a&nbsp;reasonable time. The Deep Dive Analytics 
                    team was able to&nbsp;program a&nbsp;better, more tailored, solution that was 
                    even better than the industry standard. It&nbsp;ultimately consolidated months 
                    of&nbsp;work into a&nbsp;weekend. During the development, the staff was timely 
                    and professional; whereas other companies had set false expectations and had 
                    mislead our team. I&nbsp;can recommend CodeMD without reserve.&raquo;
                  </p>
                  <span class="supplychain-5__author">
                    - Dr. Mohammed Ezuddin <br> Vascular & Interventional Radiology the University of Miami Hospital
                  </span>
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