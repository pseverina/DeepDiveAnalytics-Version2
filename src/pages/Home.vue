<template>
   <div class="container-fluid stars font">
     <div class="twinkling">
       <!-- First section -->
       <div class="transforCodeMD">
         <h2 class="transforCodeMD__title">CodeMD is Transformational</h2>
         <p class="transforCodeMD__text">
            Advanced analytics for health care providers.<br>
            Automated provider scheduling solution based on&nbsp;unique rules and requirements.<br>
            Custom, Accurate, and Modular.<br>
         </p>
         <div class="transforCodeMD__btn">
           <router-link to="/codeMd" class="homelink">Learn more >&nbsp;&nbsp;&nbsp;</router-link>
           <router-link to="/contact" class="homelink">Contact us ></router-link>
         </div><br>
         <img class="transforCodeMD__img" src="../assets/styles/img/home_page_img/codemd_logo.png"/>
       </div>
        <!--  Second Section -->
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
        </div>
        <!-- Third Section -->
        <div class="industryAgnostic">
          <h2 class="industryAgnostic__title">Industry Agnostic</h2>
          <p class="industryAgnostic__text">
            Any industry. Any business.<br>
            We&nbsp;drive business advantage by delivering<br>
            cutting-edge analytical capabilities and technologies.<br>
          </p>
          <div class="industryAgnostic__btn">
            <router-link to="/customServices" class="homelink">Learn more >&nbsp;&nbsp;&nbsp;</router-link>
            <router-link to="/contact" class="homelink">Contact us ></router-link>
          </div>
          <br>
          <img class="industryAgnostic__img" src="../assets/styles/img/home_page_img/industry_agnostic.png"/>
        </div>
        <!-- Fourth Section -->
        <div class="agileManagement">
          <div class="agileManagement__content">
            <h2 class="agileManagement__title">Agile Project Management</h2>
            <p class="agileManagement__text">
              Innovate and deliver faster with Deep Dive Analytics.<br>
              Experience a&nbsp;professional and effecient working engagement.<br>
            </p>
            <router-link to="/contact" class="homelink agileManagement__btn">Contact us ></router-link>
          </div>
          <div class="agileManagement__row">
             <div class="agileManagement__card">
                <img src="../assets/styles/img/home_page_img/agile_strategy.png" class="agileManagement__left-img"/><br>
                <span class="agileManagement__card-title">Define a Strategy</span>
                <p class="agileManagement__card-text">
                  Assess the opportunity, 
                  thinking strategically and
                  holistically when defining the plan
                  to&nbsp;help your organization.
                </p>
              </div>
              <div class="agileManagement__card">
                <img src="../assets/styles//img/home_page_img/agile_iterative_development.png" class="agileManagement__middle-img"/><br>
                <span class="agileManagement__card-title">Iterative Development</span>
                <p class="agileManagement__card-text">
                  Working in&nbsp;agile sprints to&nbsp;define, 
                  build, and deploy your solution so&nbsp;your 
                  business can reap the benefits quickly.
                </p>
              </div>
              <div class="agileManagement__card">
                <img src="../assets/styles//img/home_page_img/agile_business_impact.png" class="agileManagement__right-img" /><br>
                <span class="agileManagement__card-title">Deliver Business Impact</span>
                <p class="agileManagement__card-text">
                  Driving performance and
                  efficiency across your
                  organization through advanced
                  analytics and automation.
                </p>
              </div>
          </div>
        </div>
        <!--  Fifth Section -->
        <div class="deepDive">
          <b-row>
            <b-col sm="6">
              <div class="deepDive__content">
                <div class="deepDive__title">
                  <span class="deepDive__title-green">Deep Dive </span>
                  <span class="deepDive__title-white"> into your data to make </span>
                  <span class="deepDive__title-green">Smarter Decisions</span>.
                </div> 
                <p class="deepDive__text">
                  We&nbsp;combine business knowledge with advanced 
                  analytics, building custom analytical solutions based 
                  on&nbsp;your unique business needs. We&nbsp;have a&nbsp;proven 
                  track record of&nbsp;delivering business value.
                </p>
                <p class="deepDive__text">
                  Let&rsquo;s Deep Dive into the black hole of&nbsp;your data.<br>
                </p>
                <p class="deepDive__btn">
                  <router-link to="/contact" class="homelink">Contact us ></router-link>
                </p>
              </div>
            </b-col>
            <b-col sm="6">
              <div class="deepDive__img">
                <img class="deepDive__blackhole" alt="blackhole" src="../assets/styles/img/bg_img/black_hole.png"/> 
                <img class="deepDive__spaceman" alt="spaceman" src="../assets/styles/img/home_page_img/blackhole_spaceman.png"/>
              </div>
            </b-col>
          </b-row>
        </div>
      </div>
    </div>
</template>

<script>

export default {
  name: 'Home',
}
</script>



