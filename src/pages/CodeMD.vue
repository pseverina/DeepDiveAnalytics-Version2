<template>
   <div class="container-fluid stars font">
     <div class="twinkling">
        <!-- section 1 -->
        <div class="codeMd-1">
          <b-row class="flex-column flex-md-row">
            <b-col class="codeMd-1__leftside">
              <h1 class="codeMd-1__leftside-head">
                The New Standard.<br>
                Custom Scheduling.<br>
                Smart Automation.<br>
                Tailored Algorithms.<br>
              </h1>
              <p class="codeMd-1__leftside-text">
                Industry leading advanced analytics<br>
                for health care providers.<br>
              </p>
              <p class="codeMd-1__leftside-btn">
                <router-link to="/contact" class="link_codeMd">Contact us ></router-link>
              </p>
            </b-col>
            <b-col class="codeMd-1__rightside">
              <img class="codeMd-1__rightside-img" src="../img/home_page_img/codemd_logo.png" />
            </b-col>
          </b-row>
        </div>
        <!-- additional section -->
        <div class="codeMd-addSection">
          <img src="../img/code_md/codemd_hero_image.jpg" class="codeMd-addSection-img" />
        </div>
        <!-- section 2 -->
        <div class="codeMd-2">
          <h1 class="codeMd-2__head">Revolutionize your Scheduling</h1>
          <p class="codeMd-2__text">
            Simplify your scheduling process and generate the most accurate schedule <br>
            to&nbsp;drive performance and efficiency across your organization.
          </p>
          <!-- Description boxes-->
          <!-- Rules-Based Scheduling -->
          <b-row class="codeMd-2__info flex-column flex-md-row">
            <b-col>
              <img class="codeMd-2__info-img__first" src="../img/code_md/schedule_rules.png"/>
            </b-col>
            <b-col cols="10" class="codeMd-2__info-text">
              <span class="codeMd-2__info-text-head">Rules-Based Scheduling</span>
              <p class="codeMd-2__info-text-description">
                CodeMD&rsquo;s automated scheduling algorithm can be&nbsp;customized around
                your rules and requirements with high accuracy and performance. The
                framework is&nbsp;flexible, allowing CodeMD to&nbsp;tailor to&nbsp;your needs.
              </p>
            </b-col>
          </b-row>
          <!-- Balanced Schedules -->
          <b-row class="codeMd-2__info flex-column flex-md-row">
            <b-col>
              <img class="codeMd-2__info-img__second" src="../img/code_md/balanced.png"/>
            </b-col>
            <b-col cols="10" class="codeMd-2__info-text">
              <span class="codeMd-2__info-text-head">Balanced Schedules</span>
              <p class="codeMd-2__info-text-description">
                CodeMD&rsquo;s automated scheduling algorithm is&nbsp;designed to&nbsp;evenly distribute 
                your schedule while still taking into account all your custom rules 
                and requirements. Let CodeMD manage the spread using advanced analytics.
              </p>
            </b-col>
          </b-row>
          <!-- Automated, Reuseable, Scientific -->
          <b-row class="codeMd-2__info flex-column flex-md-row">
            <b-col>
              <img class="codeMd-2__info-img__third" src="../img/code_md/reuseable_scientific.png"/>
            </b-col>
            <b-col cols="10" class="codeMd-2__info-text">
              <span class="codeMd-2__info-text-head">Automated, Reuseable, Scientific</span>
              <p class="codeMd-2__info-text-description">
                CodeMD&rsquo;s automated scheduling algorithm is&nbsp;designed to&nbsp;generate new &amp;&nbsp;
                updated schedules quickly. Need to&nbsp;refresh your schedule? No&nbsp;problem. 
                Make smarter decisions using CodeMD when you need to&nbsp;pivot and adapt.
              </p>
            </b-col>
          </b-row>
          <!-- Comprehensive Scheduling -->
          <b-row class="codeMd-2__info flex-column flex-md-row">
            <b-col>
              <img class="codeMd-2__info-img__fourth" src="../img/code_md/codemd_comprehensive.png"/>
            </b-col>
            <b-col cols="10" class="codeMd-2__info-text">
              <span class="codeMd-2__info-text-head">Comprehensive Scheduling</span>
              <p class="codeMd-2__info-text-description">
                CodeMD&nbsp;is for all healthcare institutions, specialties and staff. From private groups 
                to&nbsp;large health systems, CodeMD can successfully create your schedule(s). It&nbsp;can even 
                help with automating vacation request decisions.
              </p>
            </b-col>
          </b-row>
          <!-- Improved Service to Patients -->
          <b-row class="codeMd-2__info flex-column flex-md-row">
            <b-col>
              <img class="codeMd-2__info-img__fifth" src="../img/code_md/patient_impact.png" />
            </b-col>
            <b-col cols="10" class="codeMd-2__info-text">
              <span class="codeMd-2__info-text-head">Improved Service to Patients</span>
              <p class="codeMd-2__info-text-description">
                CodeMD dramatically improves your organization&rsquo;s efficiency. Reduce the 
                time and side-effects of&nbsp;inefficient scheduling. Dedicate more time to&nbsp;your 
                patients while also improving your work-life balance.
              </p>
            </b-col>
          </b-row>
        </div>
        <!-- section 3 -->
        <div class="codeMd-3">
          <h1 class="codeMd-3__head">Industry Leading Performance and Accuracy.</h1>
          <p class="codeMd-3__text">
            CodeMD&rsquo;s analytical capabilites differentiate it&nbsp;from the competition.<br>
            Don&rsquo;t settle for less. Get more productive with CodeMD.
          </p>
          <b-row class="codeMd-3__bar">
            <b-col sm>
              <el-progress 
                :width="200" 
                :height="200" 
                class="codeMd-3__bar-circle" 
                type="circle" 
                :percentage="percentage_leftbar" 
                color="#58f86e">
              </el-progress><br><br>
              <span class="codeMd-3__bar-text">Adherence to Schedule <br> Rules & Requirements</span>
            </b-col>
            <b-col sm>
              <el-progress 
                :width="200" 
                :height="200" 
                class="codeMd-3__bar-circle" 
                type="circle" 
                :percentage="percentage_middlebar" 
                color="#58f86e">
              </el-progress><br><br>
              <span class="codeMd-3__bar-text">Reducation in Time <br> to Create Schedules</span>
            </b-col>
            <b-col sm>
              <el-progress 
                :width="200" 
                :height="200" 
                class="codeMd-3__bar-circle" 
                type="circle" 
                :percentage="percentage_rightbar" 
                color="#58f86e">
              </el-progress><br><br>
              <span class="codeMd-3__bar-text">Reducation in Time <br> Changing Schedules</span>
            </b-col>
          </b-row>
          <p class="codeMd-3__btn">
            <router-link to="/contact" class="link_codeMd">Contact us ></router-link>
          </p>
        </div>
        <!-- section 4 -->
        <div class="codeMd-4">
          <h1 class="codeMd-4__head">Establish an Analytical Workflow</h1>
          <p class="codeMd-4__text">
            Customize to&nbsp;your needs beyond scheduling.<br>
            Add tailored modules with cutting-edge technology<br>
            to&nbsp;drive efficiency across your organization
          </p>
          <p class="codeMd-4__btn">
            <router-link to="/contact" class="link_codeMd">Contact us ></router-link>
          </p>
          <img class="codeMd-4__img" src="../img/code_md/codemd_ai.png"/>
        </div>
        <!-- section 5 -->
        <div class="codeMd-5">
          <b-row class="flex-column-reverse flex-md-row">
            <b-col md="7" sm="4" class="codeMd-5__leftside">
              <img class="codeMd-5__leftside-img" src="../img/code_md/codemd_app.png"/>
            </b-col>
            <b-col md="5" sm="8" class="codeMd-5__rightside">
              <h1 class="codeMd-5__rightside-head">Get the CodeMD App</h1>
              <p class="codeMd-5__rightside-text">
                Run your custom algorithms on&nbsp;demand.<br>
                Own your analytical solution. Visualize your data.
              </p>
              <p class="codeMd-5__rightside-btn">
                <router-link to="/contact" class="link_codeMd">Contact us ></router-link>
              </p>
            </b-col>
          </b-row>
        </div>
        <!-- section 6 -->
        <div class="codeMd-6"> 
          <img src='../img/code_md/codemd_testimonial_background.jpg' class="codeMd-6__img" />
          <b-carousel
            id="carousel-fade"
            class="codeMd-6__carousel"
            fade
            indicators
          >
            <b-carousel-slide>
              <div class="carousel-caption d-md-block">
                <h1 class="codeMd-6__header">What CodeMD customers are saying</h1>
                <h3 class="codeMd-6__header-subtext">Our analytical capabilities differentiate us from our competitors.</h3>
                <p class="codeMd-6__text">
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
                  <span class="codeMd-6__author">
                    - Dr. Edilberto Alvarez <br> Neuroradiology at the University of Miami Hospital
                  </span>
              </div>  
            </b-carousel-slide>
            <b-carousel-slide>
              <div class="carousel-caption d-md-block">
                <h1 class="codeMd-6__header">What CodeMD customers are saying</h1>
                <h3 class="codeMd-6__header-subtext">Our analytical capabilities differentiate us from our competitors.</h3>
                <p class="codeMd-6__text">
                    &laquo;CodeMD was able to&nbsp;quickly and accurately provide a&nbsp;solution 
                    to&nbsp;an&nbsp;extremely complex problem that had become too complex for our 
                    group to&nbsp;solve in&nbsp;a&nbsp;reasonable time. The Deep Dive Analytics 
                    team was able to&nbsp;program a&nbsp;better, more tailored, solution that was 
                    even better than the industry standard. It&nbsp;ultimately consolidated months 
                    of&nbsp;work into a&nbsp;weekend. During the development, the staff was timely 
                    and professional; whereas other companies had set false expectations and had 
                    mislead our team. I&nbsp;can recommend CodeMD without reserve.&raquo;
                  </p>
                  <span class="codeMd-6__author">
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

export default {
  name: 'CodeMD',
  data() {
    return {
      percentage_leftbar: 0,
      percentage_middlebar: 0,
      percentage_rightbar: 0
    }
  },
  created() {
    this.automatedCircles()
  },
  methods: {
    async automatedCircles() {
      let progressBar = setInterval(() => {
        if (this.percentage_leftbar < 100) {
          this.percentage_leftbar += 1
        }

        if (this.percentage_middlebar < 84) {
          this.percentage_middlebar += 1
        }

        if (this.percentage_rightbar < 87) {
          this.percentage_rightbar += 1
        }

      }, 100)

      setTimeout(() => { 
        clearInterval(progressBar) 
      }, 10500)

    }
  }
}

</script>




