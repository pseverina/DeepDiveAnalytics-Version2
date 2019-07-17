<template>
  <div>
    <div class="footer">
      <span>© Deep Dive Analytics. 2019 All Rights Reserved</span>
      <Facebook scale="2" url="https://www.facebook.com/deepdiveanalytics.io" class="footer__icon"/>
      <Twitter scale="2" url="https://twitter.com/deepdiveAI" class="footer__icon"/>
      <Linkedin scale="2" url="https://www.linkedin.com/company/deepdiveanalytics" class="footer__icon"/>
    </div>
  </div>
</template>

<script>
import { Facebook, Twitter, Linkedin } from 'vue-socialmedia-share'

export default {
  name: 'Footer',
  data() {
    return { }
  },
  components: { Facebook, Linkedin, Twitter }
}
</script>
