<template>
  <div>
    <div class="footer">
      <span>© Deep Dive Analytics. 2019 All Rights Reserved</span>
      <a href="https://www.facebook.com/deepdiveanalytics.io"><eva-icon name="facebook-outline" animation="pulse" fill="whitesmoke" class="footer__icon"></eva-icon></a>
      <a href="https://twitter.com/deepdiveAI"><eva-icon name="twitter-outline" animation="pulse" fill="whitesmoke" class="footer__icon"></eva-icon></a>
      <a href="https://www.linkedin.com/company/deepdiveanalytics"><eva-icon name="linkedin-outline" animation="pulse" fill="whitesmoke" class="footer__icon"></eva-icon></a>
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
