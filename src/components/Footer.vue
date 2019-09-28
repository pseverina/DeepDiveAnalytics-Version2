<template>
  <div>
    <div class="footer">
      <ul class="footer__mainlist">
        <li class="footer__mainlist-leftside"> 
          <img class="footer__mainlist-leftside-img" src="../img/footer/deepdive.png"/><br>
          <span class="footer__mainlist-leftside-text">Deep Dive Analytics is&nbsp;an&nbsp;advanced analytics compnay that specializes in&nbsp;strategy, innovation, &amp;&nbsp;deployement. We&nbsp;provide custom software services for enabling automation of&nbsp;advanced analytics capabilities across all industries.</span>
        </li>
        <li class="footer__mainlist-products">
          <span class="footer__mainlist-products-header">Products & Servies</span>
          <ul class="footer__mainlist-products-services">
            <li>Code MD</li>
            <li>Supply Chain Analytics</li>
            <li>Custom Services</li>
          </ul>
        </li>
        <li class="footer__mainlist-info">
          <span class="footer__mainlist-info-header">Info</span>
          <ul class="footer__mainlist-info-details">
            <li>About us</li>
            <li>Skillset</li>
            <li>Our Team</li>
            <li>Terms & Services</li>
            <li>Privacy Policy</li>
            <li>Legal</li>
            <li>Contact</li>
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
