<template>
  <div class="container-fluid stars font">
    <div class="twinkling">
      <h1 class="header">Contact Us</h1>
      <b-row>
        <b-col md="6">
          <form
            ref="contactInfo"
            class="contact__form"
            :model="form" 
            >
            <h3 class="contact__form-header">Let's go on this journey together!</h3>
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
                class="contact__form-input"
                required
              >
              </b-form-textarea>
            </b-form-group>
            <b-form-group class="form-group">
              <b-row>
                <b-button 
                  class="contact__form-btn" 
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
                  Clear form
                </b-button>
              </b-row>   
            </b-form-group>
          </form> 
        </b-col>
        <b-col md="6">
          <div class="contact__info">
            <img src="../img/logo_img/helmet.png" alt="logo" class="contact__info-brand"/><br>
            <span class="contact__info-header">Partner with DeepDiveAnalytics</span><br>
            <span class="contact__info-details">Enter your details & we'll be in touch with you to discuss your project</span>
          </div>
        </b-col>
      </b-row>
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
