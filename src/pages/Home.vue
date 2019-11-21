<template>
   <div class="container-fluid stars font">
     <div class="twinkling">
       <!-- First section -->
       <div class="transforCodeMD">
         <h1 class="transforCodeMD__head">CodeMD is Transformational</h1>
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
          <h2 class="header-small supplyChain__head">Driving Performance for Supply Chain</h2>
          <p class="supplyChain__text">
            Make the system smarter with Deep Dive Analytics.<br>
            End-to-End supply chain solutions.<br>
            Data-driven. Custom.<br>
          </p>
          <div class="supplyChain__btn">
            <router-link to="/supplyChain" class="homelink">Learn more >&nbsp;&nbsp;&nbsp;</router-link>
            <router-link to="/contact" class="homelink">Contact us ></router-link>
          </div><br>
          <img class="supplyChain__img" src="../assets/styles/img/home_page_img/supplychain_homev2.png" />
        </div>
        <!-- Third Section -->
        <div class="industryAgnostic">
          <h2 class="industryAgnostic__head">Industry Agnostic</h2>
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
          <h2 class="agileManagement__head">Agile Project Management</h2>
          <p class="agileManagement__text">
            Innovate and deliver faster with Deep Dive Analytics.<br>
            Experience a&nbsp;professional and effecient working engagement.<br>
          </p>
          <div class="agileManagement__btn">
            <router-link to="/contact" class="homelink">Contact us ></router-link>
          </div>
          <b-row class="agileManagement__row">
            <b-col class="agileManagement__col" sm>
              <div class="agileManagement__img-left">
                <span class="agileManagement__img-left-head blue">Define a Strategy</span>
                <p class="agileManagement__img-left-text">
                  Assess the opportunity, 
                  thinking strategically and
                  holistically when defining the plan
                  to&nbsp;help your organization.
                </p>
              </div>
            </b-col>
            <b-col class="agileManagement__col" sm>
              <div class="agileManagement__img-middle">
                <img class="agileManagement__img-middle-img" src="../assets/styles/img/home_page_img/iterative_development.png"/><br><br>
                <span class="agileManagement__img-middle-head blue">Iterative Development</span>
                <p class="agileManagement__img-middle-text">
                  Working in&nbsp;agile sprints to&nbsp;define, 
                  build, and deploy your solution so&nbsp;your 
                  business can reap the benefits quickly.
                </p>
              </div>
            </b-col>
            <b-col class="agileManagement__col" sm>
              <div class="agileManagement__img-right">
                <img class="agileManagement__img-right-img" src="../assets/styles/img/home_page_img/business_impact.png"/><br><br>
                <span class="agileManagement__img-right-head blue">Deliver Business Impact</span>
                <p class="agileManagement__img-right-text">
                  Driving performance and
                  efficiency across your
                  organization through advanced
                  analytics and automation.
                </p>
              </div>
            </b-col>
          </b-row>
        </div>
        <!--  Fifth Section -->
        <div class="deepDive">
          <div class="deepDive__head">
            <div class="deepDive__head-green">Deep Dive </div>
            <div class="deepDive__head-white">into your data to make </div>
            <div class="deepDive__head-green">Smarter Decisions</div>.
          </div> 
          <b-row>
            <b-col sm="6">
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
            </b-col>
            <b-col sm="6">
              <img class="deepDive__blackhole" alt="blackhole" src="../assets/styles/img/bg_img/black_hole.png"/> 
              <img class="deepDive__spaceman" alt="spaceman" src="../assets/styles/img/home_page_img/blackhole_spaceman.png"/>
            </b-col>
          </b-row>
        </div>
      </div>
    </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      visible: false,
      quote1: false,
      quote2: false,
      count: 0,
      words: ['BETTER', 'SMARTER', 'QUICKER', 'TRUSTED'],
      quotes:[
        { id: '“More of these data-driven projects should take place throughout J&J” - Everyone , President at Company Name 1 !' },
        { id: '“More of these data-driven projects should take place throughout J&J” - Everyone , President at Company Name 2 !' }
      ]
    }
  },
  mounted(){
   window.setInterval(()=>{
      this.changeWords()
      this.count += 1
      if(this.count % 2 == 0){
        this.quote1 = true
        this.quote2 = false
      } else {
        this.quote1 = false
        this.quote2 = true
      }
    }, 2000)
  },
  methods: {
    changeWords(){
      const first = this.words.shift()
      this.words = this.words.concat(first)
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



