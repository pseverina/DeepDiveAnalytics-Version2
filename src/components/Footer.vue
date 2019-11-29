<template>
  <div class="container-fluid stars font">
    <div class="twinkling">
      <div class="footer">
        <div class="footer-list">
          <div class="footer-list__leftside">
            <img class="footer-list__leftside-img" src="../assets/styles/img/footer/deepdive.png"/><br>
            <span class="footer-list__leftside-text">Deep Dive Analytics is&nbsp;an&nbsp;advanced analytics compnay that specializes in&nbsp;strategy, innovation, &amp;&nbsp;deployement. We&nbsp;provide custom software services for enabling automation of&nbsp;advanced analytics capabilities across all industries.</span>
          </div>
          <div class="footer-list__products">
            <span class="footer-list__products-title">Products & Servies</span>
            <ul class="footer-list__products-services">
              <li><router-link to="/codeMd" class="footerlink">CodeMD</router-link></li>
              <li><router-link to="/supplyChain" class="footerlink">Supply Chain Analytic</router-link></li>
              <li><router-link to="/customServices" class="footerlink">Custom Services</router-link></li>
            </ul>
          </div>
          <div class="footer-list__info">
            <span class="footer-list__info-title">Information</span>
            <ul class="footer-list__info-details">
              <li><router-link to="/about" class="footerlink">About us</router-link></li>
              <li><router-link to="/about" class="footerlink">Skillset</router-link></li>
              <li><router-link to="/about" class="footerlink">Our Team</router-link></li>
              <li><router-link to="termsAndServices" class="footerlink">Terms & Services</router-link></li>
              <li><router-link to="/legalInfo" class="footerlink">Policy</router-link></li>
              <li><router-link to="/legalInfo" class="footerlink">Legal</router-link></li>
              <li><router-link to="/contact" class="footerlink">Contact</router-link></li>
            </ul>
          </div>
          <div class="footer-list__follow">
            <span class="footer-list__follow-title">Follow Us</span>
            <ul class="footer-list__follow-media">
              <li class="footer-list__follow-media-icon">
                <a href="https://www.linkedin.com/company/deepdiveanalytics">
                  <eva-icon name="linkedin-outline" animation="pulse" fill="#808080"></eva-icon>
                </a>
              </li>
              <li class="footer-list__follow-media-icon">
                <a href="https://www.facebook.com/deepdiveanalytics.io">
                  <eva-icon name="facebook-outline" animation="pulse" fill="#808080"></eva-icon>
                </a>
              </li>
              <li class="footer-list__follow-media-icon">
                <a href="https://twitter.com/deepdiveAI">
                  <eva-icon name="twitter-outline" animation="pulse" fill="#808080"></eva-icon>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <!-- <b-row> 
          <b-col lg="5" class="footer-list__leftside">
            <img class="footer-list__leftside-img" src="../assets/styles/img/footer/deepdive.png"/><br>
            <span class="footer-list__leftside-text">Deep Dive Analytics is&nbsp;an&nbsp;advanced analytics compnay that specializes in&nbsp;strategy, innovation, &amp;&nbsp;deployement. We&nbsp;provide custom software services for enabling automation of&nbsp;advanced analytics capabilities across all industries.</span>
          </b-col>
          <b-col md="3" lg="2" class="footer-list__products">
            <span class="footer-list__products-title">Products & Servies</span>
            <ul class="footer-list__products-services">
              <li><router-link to="/codeMd" class="footerlink">CodeMD</router-link></li>
              <li><router-link to="/supplyChain" class="footerlink">Supply Chain Analytic</router-link></li>
              <li><router-link to="/customServices" class="footerlink">Custom Services</router-link></li>
            </ul>
          </b-col>
          <b-col md="3" lg="2" class="footer-list__info">
            <span class="footer-list__info-title">Information</span>
            <ul class="footer-list__info-details">
              <li><router-link to="/about" class="footerlink">About us</router-link></li>
              <li><router-link to="/about" class="footerlink">Skillset</router-link></li>
              <li><router-link to="/about" class="footerlink">Our Team</router-link></li>
              <li><router-link to="termsAndServices" class="footerlink">Terms & Services</router-link></li>
              <li><router-link to="/legalInfo" class="footerlink">Policy</router-link></li>
              <li><router-link to="/legalInfo" class="footerlink">Legal</router-link></li>
              <li><router-link to="/contact" class="footerlink">Contact</router-link></li>
            </ul>
          </b-col>
          <b-col md="3" lg="2" class="footer-list__follow">
            <span class="footer-list__follow-title">Follow Us</span>
            <ul class="footer-list__follow-media">
              <li class="footer-list__follow-media-icon">
                <a href="https://www.linkedin.com/company/deepdiveanalytics">
                  <eva-icon name="linkedin-outline" animation="pulse" fill="#808080"></eva-icon>
                </a>
              </li>
              <li class="footer-list__follow-media-icon">
                <a href="https://www.facebook.com/deepdiveanalytics.io">
                  <eva-icon name="facebook-outline" animation="pulse" fill="#808080"></eva-icon>
                </a>
              </li>
              <li class="footer-list__follow-media-icon">
                <a href="https://twitter.com/deepdiveAI">
                  <eva-icon name="twitter-outline" animation="pulse" fill="#808080"></eva-icon>
                </a>
              </li>
            </ul>
          </b-col>
        </b-row> -->
        <!-- <ul class="footer-list">
          <li class="footer-list__leftside"> 
            <img class="footer-list__leftside-img" src="../assets/styles/img/footer/deepdive.png"/><br>
            <span class="footer-list__leftside-text">Deep Dive Analytics is&nbsp;an&nbsp;advanced analytics compnay that specializes in&nbsp;strategy, innovation, &amp;&nbsp;deployement. We&nbsp;provide custom software services for enabling automation of&nbsp;advanced analytics capabilities across all industries.</span>
          </li>
          <li class="footer-list__products">
            <span class="footer-list__products-title">Products & Servies</span>
            <ul class="footer-list__products-services">
              <li><router-link to="/codeMd" class="footerlink">CodeMD</router-link></li>
              <li><router-link to="/supplyChain" class="footerlink">Supply Chain Analytic</router-link></li>
              <li><router-link to="/customServices" class="footerlink">Custom Services</router-link></li>
            </ul>
          </li>
          <li class="footer-list__info">
            <span class="footer-list__info-title">Info</span>
            <ul class="footer-list__info-details">
              <li><router-link to="/about" class="footerlink">About us</router-link></li>
              <li><router-link to="/about" class="footerlink">Skillset</router-link></li>
              <li><router-link to="/about" class="footerlink">Our Team</router-link></li>
              <li><router-link to="termsAndServices" class="footerlink">Terms & Services</router-link></li>
              <li><router-link to="/legalInfo" class="footerlink">Policy</router-link></li>
              <li><router-link to="/legalInfo" class="footerlink">Legal</router-link></li>
              <li><router-link to="/contact" class="footerlink">Contact</router-link></li>
            </ul>
          </li>
          <li class="footer-list__follow">
            <span class="footer-list__follow-title">Follow Us</span>
            <ul class="footer-list__follow-media">
              <li class="footer-list__follow-media-icon">
                <a href="https://www.linkedin.com/company/deepdiveanalytics">
                  <eva-icon name="linkedin-outline" animation="pulse" fill="#808080"></eva-icon>
                </a>
              </li>
              <li class="footer-list__follow-media-icon">
                <a href="https://www.facebook.com/deepdiveanalytics.io">
                  <eva-icon name="facebook-outline" animation="pulse" fill="#808080"></eva-icon>
                </a>
              </li>
              <li class="footer-list__follow-media-icon">
                <a href="https://twitter.com/deepdiveAI">
                  <eva-icon name="twitter-outline" animation="pulse" fill="#808080"></eva-icon>
                </a>
              </li>
            </ul>
          </li>      
          <li class="footer__rightside-list-rights"> © Deep Dive Analytics. 2019 All Rights Reserved</li>
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
          </li>
        </ul> -->
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
