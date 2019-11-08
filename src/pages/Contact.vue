<template>
  <div class="container-fluid stars font">
    <div class="twinkling">
      <div class="contact">
        <b-row class="flex-column-reverse flex-md-row"> 
          <b-col md="6">
            <form
              ref="contactInfo"
              class="contact__form"
              :model="form" 
              >
              <b-row>
                <b-col lg="6">
                  <label for="input__first-name">First Name <span style="color:red">*</span></label>
                  <b-form-input 
                    v-model="form.first_name" 
                    placeholder="First Name" 
                    class="contact__form-input"
                    required
                  ></b-form-input>
                </b-col>
                <b-col lg="6">
                  <label for="input__last-name">Last Name <span style="color:red">*</span></label>
                  <b-form-input 
                    v-model="form.last_name"
                    placeholder="Last Name"
                    class="contact__form-input"
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
                    class="contact__form-input"
                    type="email"
                    required
                  ></b-form-input>
                </b-col>
                  <b-col lg="6">
                    <label for="input__company">Company <span style="color:red">*</span></label>
                    <b-form-input 
                      v-model="form.company"
                      placeholder="Google.com" 
                      class="contact__form-input"
                      required
                    ></b-form-input>
                </b-col>
              </b-row>
              <b-form-group>
                <label for="input__textarea">Message</label>
                <b-form-textarea 
                  v-model="form.text" 
                  rows="6" 
                  class="contact__form-input contact__form-textarea"
                  required
                >
                </b-form-textarea>
              </b-form-group>
              <b-form-group class="form-group">
                <b-row class="justify-content-md-center">
                  <b-button 
                    class="contact__form-btn" 
                    style="margin-right: 20px"
                    size="lg"
                    variant="outline-light"
                    @click="submitForm('contactInfo')"
                  >
                    Submit
                  </b-button>
                  <b-button 
                    class="contact__form-btn" 
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
          <b-col md="6">
            <div class="contact__info">
              <span class="contact__info-header">Deep Dive into your Data</span><br>
              <span class="contact__info-details">Let's go on this jorney together.</span>
              <img class="contact__info-blackhole" src="../img/bg_img/black_hole.png"/>
              <img class="contact__info-spaceman" src="../img/home_page_img/blackhole_spaceman.png"/>
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
  asyncMethods: {
    async submitForm (formName) {
      this.clearForm()
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
