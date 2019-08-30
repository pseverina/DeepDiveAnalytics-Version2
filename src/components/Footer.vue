<template>
  <div>
    <div class="footer">
      <ul class="footer__list">
        <hr class="footer__list-hr"/>
        <li class="footer__list-rights"> © Deep Dive Analytics. 2019 All Rights Reserved</li>
        <li class="footer__list-icon">
          <a href="https://www.facebook.com/deepdiveanalytics.io"><eva-icon name="facebook-outline" animation="pulse" fill="whitesmoke"></eva-icon>
          </a>
        </li>
        <li class="footer__list-icon">
          <a href="https://twitter.com/deepdiveAI"><eva-icon name="twitter-outline" animation="pulse" fill="whitesmoke"></eva-icon>
          </a>
        </li>
        <li class="footer__list-icon">
          <a href="https://www.linkedin.com/company/deepdiveanalytics"><eva-icon name="linkedin-outline" animation="pulse" fill="whitesmoke"></eva-icon>
          </a>
        </li>
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
