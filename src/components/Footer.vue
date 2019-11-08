<template>
  <div class="container-fluid stars font">
    <div class="twinkling">
      <div class="footer">
        <div class="footer__container">
          <ul class="footer__mainlist">
            <li class="footer__mainlist-leftside"> 
              <img class="footer__mainlist-leftside-img" src="../img/footer/deepdive.png"/><br>
              <span class="footer__mainlist-leftside-text">Deep Dive Analytics is&nbsp;an&nbsp;advanced analytics compnay that specializes in&nbsp;strategy, innovation, &amp;&nbsp;deployement. We&nbsp;provide custom software services for enabling automation of&nbsp;advanced analytics capabilities across all industries.</span>
            </li>
            <li class="footer__mainlist-products">
              <span class="footer__mainlist-products-header">Products & Servies</span>
              <ul class="footer__mainlist-products-services">
                <li><router-link to="/codeMd" class="footer__link">CodeMD</router-link></li>
                <li><router-link to="/supplyChain" class="footer__link">Supply Chain Analytic</router-link></li>
                <li><router-link to="/customServices" class="footer__link">Custom Services</router-link></li>
              </ul>
            </li>
            <li class="footer__mainlist-info">
              <span class="footer__mainlist-info-header">Info</span>
              <ul class="footer__mainlist-info-details">
                <li><router-link to="/about" class="footer__link">About us</router-link></li>
                <li><router-link to="/about" class="footer__link">Skillset</router-link></li>
                <li><router-link to="/about" class="footer__link">Our Team</router-link></li>
                <li><router-link to="termsAndServices" class="footer__link">Terms & Services</router-link></li>
                <li><router-link to="/legalInfo" class="footer__link">Policy</router-link></li>
                <li><router-link to="/legalInfo" class="footer__link">Legal</router-link></li>
                <li><router-link to="/contact" class="footer__link">Contact</router-link></li>
              </ul>
            </li>
            <li class="footer__mainlist-follow">
              <span class="footer__mainlist-follow-header">Follow Us</span>
              <ul class="footer__mainlist-follow-media">
                <li class="footer__mainlist-follow-media-icon">
                  <a href="https://www.linkedin.com/company/deepdiveanalytics">
                    <eva-icon name="linkedin-outline" animation="pulse" fill="#808080"></eva-icon>
                  </a>
                </li>
                <li class="footer__mainlist-follow-media-icon">
                  <a href="https://www.facebook.com/deepdiveanalytics.io">
                    <eva-icon name="facebook-outline" animation="pulse" fill="#808080"></eva-icon>
                  </a>
                </li>
                <li class="footer__mainlist-follow-media-icon">
                  <a href="https://twitter.com/deepdiveAI">
                    <eva-icon name="twitter-outline" animation="pulse" fill="#808080"></eva-icon>
                  </a>
                </li>
              </ul>
            </li>      
            <!-- <li class="footer__rightside-list-rights"> © Deep Dive Analytics. 2019 All Rights Reserved</li>
            <li class="footer__rightside-list-icon">
              <a href="https://www.facebook.com/deepdiveanalytics.io"><eva-icon name="facebook-outline" animation="pulse" fill="whitesmoke"></eva-icon>
              </a>
            </li>
            <li class="footer__rightside-list-icon">
              <a href="https://twitter.com/deepdiveAI"><eva-icon name="twitter-outline" animation="pulse" fill="whitesmoke"></eva-icon>
              </a>
            </li>
            <li class="footer__rightside-list-icon">
              <a href="https://www.linkedin.com/company/deepdiveanalytics"><eva-icon name="linkedin-outline" animation="pulse" fill="whitesmoke"></eva-icon>
              </a>
            </li>-->
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { EvaIcon } from 'vue-eva-icons'

export default {
  name: 'Footer',
  data() {
    return { }
  },
  components: {
    [EvaIcon.name]: EvaIcon
  } 
}
</script>
