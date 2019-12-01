<template>
   <div class="container-fluid stars font">
     <div class="twinkling">
        <!-- section 1 -->
        <div class="newStandard">
          <b-row class="flex-column flex-md-row">
            <b-col class="newStandard__leftside">
              <h1 class="newStandard__title">
                The New Standard.<br>
                Custom Scheduling.<br>
                Smart Automation.<br>
                Tailored Algorithms.<br>
              </h1>
              <p class="newStandard__text">
                Industry leading advanced analytics<br>
                for health care providers.<br>
              </p>
              <p class="newStandard__btn">
                <router-link to="/contact" class="codeMdLink">Contact us ></router-link>
              </p>
            </b-col>
            <b-col>
              <img class="newStandard__img" src="../assets/styles/img/home_page_img/codemd_logo.png" />
            </b-col>
          </b-row>
        </div>
        <!-- section 2 -->
        <div class="transformOrganization">
          <div class="transformOrganization__content">
            <h2 class="transformOrganization__title"> Transform your Organization</h2>
            <p class="transformOrganization__text">Establish an analytical mindset and process. Improve & simplify your workflow.</p>
            <p class="transformOrganization__text">CodeMD is built with cutting-edge technology to drive efficiency across your organization.</p>
            <router-link to="/contact" class="codeMdLink">Contact us ></router-link>
          </div>
          <img src="../assets/styles/img/code_md/codemd_transform.png" class="transformOrganization__img" />
          <img src="../assets/styles/img/code_md/codemd_transform_mobile.png" class="transformOrganization__img-mobile" />
        </div>
        <!-- section 3 -->
        <div class="revolutionizeSchedule">
          <h1 class="revolutionizeSchedule__title">Revolutionize your Scheduling</h1>
          <p class="revolutionizeSchedule__text">
            Simplify your scheduling process and generate the most accurate schedule <br>
            to&nbsp;drive performance and efficiency across your organization.
          </p>
          <!-- Description boxes-->
          <!-- Rules-Based Scheduling -->
          <b-row class="revolutionizeSchedule__info flex-column flex-md-row">
            <b-col cols="2">
              <img class="revolutionizeSchedule__img-schedule-rules" src="../assets/styles/img/code_md/schedule_rules.png"/>
            </b-col>
            <b-col cols="10" class="revolutionizeSchedule__info-content">
              <span class="revolutionizeSchedule__info-title">Rules-Based Scheduling</span>
              <p class="revolutionizeSchedule__info-text">
                CodeMD&rsquo;s automated scheduling algorithm can be&nbsp;customized around
                your rules and requirements with high accuracy and performance. The
                framework is&nbsp;flexible, allowing CodeMD to&nbsp;tailor to&nbsp;your needs.
              </p>
            </b-col>
          </b-row>
          <!-- Balanced Schedules -->
          <b-row class="revolutionizeSchedule__info flex-column flex-md-row">
            <b-col cols="2">
              <img class="revolutionizeSchedule__img-balanced" src="../assets/styles/img/code_md/balanced.png"/>
            </b-col>
            <b-col cols="10" class="revolutionizeSchedule__info-content">
              <span class="revolutionizeSchedule__info-title">Balanced Schedules</span>
              <p class="revolutionizeSchedule__info-text">
                CodeMD&rsquo;s automated scheduling algorithm is&nbsp;designed to&nbsp;evenly distribute 
                your schedule while still taking into account all your custom rules 
                and requirements. Let CodeMD manage the spread using advanced analytics.
              </p>
            </b-col>
          </b-row>
          <!-- Automated, Reuseable, Scientific -->
          <b-row class="revolutionizeSchedule__info flex-column flex-md-row">
            <b-col cols="2">
              <img class="revolutionizeSchedule__img-reuseable-scientific" src="../assets/styles/img/code_md/reuseable_scientific.png"/>
            </b-col>
            <b-col cols="10" class="revolutionizeSchedule__info-content">
              <span class="revolutionizeSchedule__info-title">Automated, Reuseable, Scientific</span>
              <p class="revolutionizeSchedule__info-text">
                CodeMD&rsquo;s automated scheduling algorithm is&nbsp;designed to&nbsp;generate new &amp;&nbsp;
                updated schedules quickly. Need to&nbsp;refresh your schedule? No&nbsp;problem. 
                Make smarter decisions using CodeMD when you need to&nbsp;pivot and adapt.
              </p>
            </b-col>
          </b-row>
          <!-- Comprehensive Scheduling -->
          <b-row class="revolutionizeSchedule__info flex-column flex-md-row">
            <b-col cols="2">
              <img class="revolutionizeSchedule__img-comprehensive" src="../assets/styles/img/code_md/codemd_comprehensive.png"/>
            </b-col>
            <b-col cols="10" class="revolutionizeSchedule__info-content">
              <span class="revolutionizeSchedule__info-title">Comprehensive Scheduling</span>
              <p class="revolutionizeSchedule__info-text">
                CodeMD&nbsp;is for all healthcare institutions, specialties and staff. From private groups 
                to&nbsp;large health systems, CodeMD can successfully create your schedule(s). It&nbsp;can even 
                help with automating vacation request decisions.
              </p>
            </b-col>
          </b-row>
          <!-- Improved Service to Patients -->
          <b-row class="revolutionizeSchedule__info flex-column flex-md-row">
            <b-col cols="2">
              <img class="revolutionizeSchedule__img-patient-impact" src="../assets/styles/img/code_md/patient_impact.png" />
            </b-col>
            <b-col cols="10" class="revolutionizeSchedule__info-content">
              <span class="revolutionizeSchedule__info-title">Improved Service to Patients</span>
              <p class="revolutionizeSchedule__info-text">
                CodeMD dramatically improves your organization&rsquo;s efficiency. Reduce the 
                time and side-effects of&nbsp;inefficient scheduling. Dedicate more time to&nbsp;your 
                patients while also improving your work-life balance.
              </p>
            </b-col>
          </b-row>
        </div>
        <!-- section 4 -->
        <div class="industryLeading">
          <h1 class="industryLeading__title">Industry Leading Performance and Accuracy.</h1>
          <p class="industryLeading__text">
            CodeMD&rsquo;s analytical capabilites differentiate it&nbsp;from the competition.<br>
            Don&rsquo;t settle for less. Get more productive with CodeMD.
          </p>
          <b-row class="industryLeading__bar">
            <b-col sm>
              <el-progress 
                :width="200" 
                :height="200" 
                type="circle" 
                :percentage="percentage_leftbar" 
                color="#58f86e">
              </el-progress><br><br>
              <span class="industryLeading__subtitle">Adherence to Schedule <br> Rules & Requirements</span>
            </b-col>
            <b-col sm>
              <el-progress 
                :width="200" 
                :height="200" 
                type="circle" 
                :percentage="percentage_middlebar" 
                color="#58f86e">
              </el-progress><br><br>
              <span class="industryLeading__subtitle">Reducation in Time <br> to Create Schedules</span>
            </b-col>
            <b-col sm>
              <el-progress 
                :width="200" 
                :height="200"  
                type="circle" 
                :percentage="percentage_rightbar" 
                color="#58f86e">
              </el-progress><br><br>
              <span class="industryLeading__subtitle">Reducation in Time <br> Changing Schedules</span>
            </b-col>
          </b-row>
          <p class="industryLeading__btn">
            <router-link to="/contact" class="codeMdLink">Contact us ></router-link>
          </p>
        </div>
        <!-- section 5 -->
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
                <p class="codeMdApp__text codeMdApp__text-mobile">
                  Visualize your data. Modify your schedule.<br>
                  Run your custom functions on&nbsp;demand.
                </p>
                <p class="codeMdApp__btn">
                  <router-link to="/contact" class="codeMdLink">Contact us ></router-link>
                </p>
              </div>
            </b-col>
          </b-row>
        </div>
        <!-- section 6 -->
        <div class="carouselSection"> 
          <b-carousel
            id="carousel-fade"
            :interval="4000"
            class="carousel"
            fade
            indicators
          >
           <b-carousel-slide>
              <div class="carousel-caption text-left">
                <h2 class="carousel__title">What customers are saying</h2>
                <b-row>
                  <b-col cols="2">
                    <img src="../assets/styles/img/code_md/quotation_1.png" class="carousel__img-quote-open"/>
                  </b-col>
                  <b-col class="carousel__border">
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
              <div class="carousel-caption text-left">
                <h2 class="carousel__title">What customers are saying</h2>
                <b-row>
                  <b-col cols="2">
                    <img src="../assets/styles/img/code_md/quotation_1.png" class="carousel__img-quote-open"/>
                  </b-col>
                  <b-col class="carousel__border">
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




