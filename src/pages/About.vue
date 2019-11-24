<template>
 <div class="container-fluid stars font">
  <div class="twinkling">
    <div class="drivingBusiness">
      <h1 class="drivingBusiness__title" >Strategy, Innovation, & Data Science.</h1>
      <p class="drivingBusiness__text">Driving business advantage by delivering industry leading analytical capabilities.</p>
      <router-link to="/contact" class="drivingBusiness__btn aboutlink">Contact us ></router-link>
      <img src="../assets/styles/img/aboutus_img/deepdive_logo_landing.png" class="drivingBusiness__img"/>
      <div class="drivingBusiness__img-mobile">
        <img src="../assets/styles/img/logo_img/helmet.png" class="drivingBusiness__img-mobile-helmet"/>
        <img src="../assets/styles/img/logo_img/dt.png" class="drivingBusiness__img-mobile-logo"/>
      </div>
      <p class="drivingBusiness__divein">DIVE IN</p>
      <img src="../assets/styles/img/aboutus_img/icon_arrow_down.png" class="drivingBusiness__arrow" /> 
    </div>
    <div class="imageSection">
      <b-row>
        <b-col sm="6">
          <img src="../assets/styles/img/aboutus_img/about_us_experienced.jpg" class="imageSection__img"/>
        </b-col>
        <b-col sm="6">
          <img src="../assets/styles/img/aboutus_img/about_us_analytical.jpg" class="imageSection__img"/>
        </b-col>
      </b-row>
      <br>
      <b-row>
        <b-col sm="6">
          <img src="../assets/styles/img/aboutus_img/about_us_impactful.jpg" class="imageSection__img"/>
        </b-col>
        <b-col sm="6">
          <img src="../assets/styles/img/aboutus_img/about_us_empowering.jpg" class="imageSection__img"/>
        </b-col>
      </b-row>
    </div>
    <div class="successStories">
      <h1 class="header">Success Stories</h1>
      <p class="subtitle">
        High-level information for some of&nbsp;our projects.<br>
        Only information we&nbsp;have permission to&nbsp;share is&nbsp;provided.
      </p>
      <router-link to="/contact"  class="blue">Contact us ></router-link>
      <carousel 
        :perPageCustom="[[600, 2], [830, 3], [1130, 4], [1430, 5]]"
        class="successStories__carousel"
        >
        <slide>
          <div class="successStories__imgstory"  @click="() => show(index + 1)"> 
            <a target="_blank">
              <img src="../assets/styles/img/aboutus_img/stories_capitalinvestment.jpg" class="successStories__imgstory-img" alt="cap_invest"/>
              <h4 class="successStories__imgstory-label">Capital Investment Optimization</h4>
            </a>
          </div>
        </slide>
        <slide>
          <div class="successStories__imgstory"  @click="() => show(index + 1)">
            <a target="_blank">
              <img src="../assets/styles/img/aboutus_img/stories_residentsched.jpg" class="successStories__imgstory-img" alt="inventory"/>
              <h4 class="successStories__imgstory-label">Healthcare Provider Scheduling</h4>
            </a>
          </div>
        </slide>
        <slide>
          <div class="successStories__imgstory" @click="() => show(index + 2)">
            <a target="_blank">
              <img src="../assets/styles/img/aboutus_img/stories_socialmedia.jpg" class="successStories__imgstory-img" alt="common_parts"/>
              <h4 class="successStories__imgstory-label" style="width: 99%">Social Media Analytics</h4>
            </a>
          </div>
        </slide>
        <slide>
          <div class="successStories__imgstory" @click="() => show(index + 3)">
            <a target="_blank">
              <img src="../assets/styles/img/aboutus_img/stories_productionsched.jpg" class="successStories__imgstory-img" alt="production_sched"/>
              <h4 class="successStories__imgstory-label" style="margin-top: -85px">Automated Producation Scheduling</h4>
            </a>
          </div> 
        </slide>
        <slide>
          <div class="successStories__imgstory" @click="() => show(index + 4)">
            <a target="_blank"> 
              <img src="../assets/styles/img/aboutus_img/stories_inventoryopt.jpg" class="successStories__imgstory-img" alt="rads_scheduling"/>
              <h4 class="successStories__imgstory-label">Inventory Optimization</h4>
            </a>
          </div> 
        </slide>
        <slide>
          <div class="successStories__imgstory" @click="() => show(index + 5)">
            <a target="_blank"> 
              <img src="../assets/styles/img/aboutus_img/stories_abc.jpg" class="successStories__imgstory-img" alt="rads_scheduling"/>
              <h4 class="successStories__imgstory-label">Inventory Criticality Segmentation</h4>
            </a>
          </div> 
        </slide>
        <slide>
          <div class="successStories__imgstory" @click="() => show(index + 6)">
            <a target="_blank"> 
              <img src="../assets/styles/img/aboutus_img/stories_commonmatch.jpg" class="successStories__imgstory-img" alt="rads_scheduling"/>
              <h4 class="successStories__imgstory-label">Material Harmonization</h4>
            </a>
          </div> 
        </slide>
      </carousel> 
      <VueEasyLightbox :visible="visible" :imgs="images[index]" @hide="handleHide"></VueEasyLightbox> 
    </div>
  </div>
 </div>
</template>

<script>
import VueEasyLightbox from 'vue-easy-lightbox'
import { Carousel, Slide } from 'vue-carousel'

export default {
  name: 'About',
  components: {
    Carousel,
    Slide,
    VueEasyLightbox
  },
  data() {
    return { 
      index: 0,
      images: [
        require('../assets/styles/img/aboutus_img/onepager_capitalinvest.jpg'),
        require('../assets/styles/img/aboutus_img/onepager_capitalinvest.jpg'),
        require('../assets/styles/img/aboutus_img/onepager_socialmedia.jpg'),
        require('../assets/styles/img/aboutus_img/onepager_productionscheduling.jpg'),
        require('../assets/styles/img/aboutus_img/onepager_invoptimization.jpg'),
        require('../assets/styles/img/aboutus_img/onepager_residentscheduling.jpg'),
        require('../assets/styles/img/aboutus_img/onepager_materialharmonization.jpg')
      ]
    }
  },
  methods: {
    show(index) {
      this.index = index 
      this.visible = true
    },
    handleHide() {
      this.visible = false
      this.index = 0
    }
  }
}
</script>
