<template>
  <b-navbar class="navbar" sticky="true" toggleable="lg" type="dark">
    <b-navbar-brand><router-link to="/"><img class="logo-brand" src="../assets/img/logo_img/helmet.png"></router-link></b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item><router-link to="/">Home</router-link></b-nav-item>
        <b-nav-item-dropdown text="Our Work" right>
          <b-dropdown-item><router-link to="/services">Success Stories</router-link></b-dropdown-item>
          <b-dropdown-item><router-link to="/prescriptiveAnalytics">Prescriptive Analytics</router-link></b-dropdown-item>
          <b-dropdown-item><router-link to="/predictiveAnalytics">Predictive Analytics</router-link></b-dropdown-item>
          <b-dropdown-item><router-link to="/customSolutionDeployment">Custom Solution Deployment</router-link></b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item><router-link to="/productsServices">Products & Services</router-link></b-nav-item>
        <b-nav-item><router-link to="/about">About</router-link></b-nav-item>
        <b-nav-item><router-link to="/contact">Contact</router-link></b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
    }
  }
}
</script>
