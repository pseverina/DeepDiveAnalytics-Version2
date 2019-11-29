<template>
  <div class="container-fluid stars font">
    <div class="twinkling">
      <div class="contact">
        <div class="contact__content">
          <h1 class="contact__title">Deep Dive into your Data</h1>
          <h1 class="contact__title contact__title-mobile">Deep Dive<br>into your Data</h1>
          <div class="contact__text">Let's go on this jorney together.</div>
          <div class="contact__text contact__text-mobile">Contact us today to learn more.</div>
        </div>
        <b-row> 
          <b-col sm="6">
            <form
              ref="contactInfo"
              class="form"
              :model="form" 
              action="https://mailthis.to/pseverina1@cougars.ccis.edu" 
              method="POST"
              encType="multipart/form-data"
              >
              <b-row>
                <b-col lg="6">
                  <label for="input__first-name">First Name <span style="color:red">*</span></label>
                  <b-form-input 
                    v-model="form.first_name" 
                    placeholder="First Name" 
                    class="form__input"
                    name="name"
                    type="name"
                    required
                  ></b-form-input>
                </b-col>
                <b-col lg="6">
                  <label for="input__last-name">Last Name <span style="color:red">*</span></label>
                  <b-form-input 
                    v-model="form.last_name"
                    placeholder="Last Name"
                    class="form__input"
                    name="lastname"
                    type="lastname"
                    required
                  ></b-form-input>
                </b-col>
              </b-row>
              <b-row>
                <b-col lg="6">
                  <label for="input__email">Email <span style="color:red">*</span></label>
                  <b-form-input 
                    v-model="form.email"
                    placeholder="name@example.com"
                    class="form__input"
                    type="email"
                    name="email"
                    required
                  ></b-form-input>
                </b-col>
                  <b-col lg="6">
                    <label for="input__company">Company <span style="color:red">*</span></label>
                    <b-form-input 
                      v-model="form.company"
                      placeholder="Google.com" 
                      class="form__input"
                      type="message"
                      name="_replyto"
                      required
                    ></b-form-input>
                </b-col>
              </b-row>
              <b-form-group>
                <label for="input__textarea">Message</label>
                <b-form-textarea 
                  v-model="form.text" 
                  rows="6" 
                  class="form__textarea"
                  type="message"
                  name="message"
                  required
                >
                </b-form-textarea>
              </b-form-group>
              <b-form-group class="form-group">
                <b-row class="justify-content-md-center">
                  <b-button 
                    class="form__btn form__btn-submit" 
                    size="lg"
                    variant="outline-light"
                    type="submit"
                  >
                    Submit
                  </b-button>
                  <b-button 
                    class="form__btn form__btn-clear"
                    size="lg"
                    variant="outline-light"
                    @click="clearForm('contactInfo')"
                  >
                    Clear
                  </b-button>
                </b-row>   
              </b-form-group>
            </form> 
          </b-col>
          <b-col sm="6">
            <div class="contact-info">
              <img class="contact-info__blackhole" src="../assets/styles/img/bg_img/black_hole.png"/>
              <img class="contact-info__spaceman" src="../assets/styles/img/home_page_img/blackhole_spaceman.png"/>
            </div>
          </b-col>
        </b-row>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      form:{
        first_name: '',
        last_name: '',
        email: '',
        company: '',
        text: 'I am interested  to learn more about your services. We have a particular business problem where we need help getting insights and answers from our data. Can we schedule a call to discuss further?'
      }
    }
  },
  methods: {
    clearForm () {
      this.form.first_name = ''
      this.form.last_name = ''
      this.form.email = ''
      this.form.company = ''
      this.form.text = ''
    }
  }
}
</script>
