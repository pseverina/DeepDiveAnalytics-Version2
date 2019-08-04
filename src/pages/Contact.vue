<template>
  <div class="stars font">
    <div class="twinkling">
      <h1 class="header">Contact Us</h1>
      <hr class="hr contact__hr">
      <b-row>
        <b-col class="col-lg-6">
          <form class="contact__form" :model="form" v-on:submit="validateForm">
            <h2 class="contact__form-h2">Let's go on this journey together!</h2>
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
            <div class="form-group col-md-12">
              <b-button class="contact__form-btn" block variant="outline-light" size="lg">Submit</b-button>
            </div>
          </form> 
        </b-col>
        <b-col>
          <img src="../img/logo_img/helmet.png" alt="logo" class="contact__brand"/>
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
  }
}
</script>
