<template>
  <b-navbar 
    class="navbar font" 
    :class="{ 'navbar__hidden': !showNavbar }"
    :sticky="true" 
    toggleable="lg"
    >
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav>
        <b-navbar-brand><router-link to="/"><img class="logo-brand" src="../img/footer/deepdive.png"></router-link></b-navbar-brand>
        <b-nav-item><router-link to="/">CodeMD</router-link></b-nav-item>
        <!-- <b-nav-item-dropdown class="dropdownLabel" text="Our Work" right>
          <b-dropdown-item><router-link to="/services">Success Stories</router-link></b-dropdown-item>
          <b-dropdown-item><router-link to="/prescriptiveAnalytics">Prescriptive Analytics</router-link></b-dropdown-item>
          <b-dropdown-item><router-link to="/predictiveAnalytics">Predictive Analytics</router-link></b-dropdown-item>
          <b-dropdown-item><router-link to="/customSolutionDeployment">Custom Solution Deployment</router-link></b-dropdown-item>
        </b-nav-item-dropdown> -->
        <!-- <b-nav-item><router-link to="/productsServices">Products & Services</router-link></b-nav-item> -->
        <b-nav-item><router-link to="">Supply Chain</router-link></b-nav-item>
        <b-nav-item><router-link to="">Custom Services</router-link></b-nav-item>
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
      showNavbar: true,
      hover: false,
      lastScrollPosition: 0
    }
  },
  mounted () {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll () {
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
      if (currentScrollPosition < 0) {
        return
      }
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
        return
      }
      this.showNavbar = currentScrollPosition < this.lastScrollPosition
      this.lastScrollPosition = currentScrollPosition
    }
  } 
}
</script>
