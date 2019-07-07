<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand href="#">NavBar</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item>Home</b-nav-item>
        <b-nav-item-dropdown text="Our Work" right>
          <b-dropdown-item href="#">Success Stories</b-dropdown-item>
          <b-dropdown-item href="#">Prescriptive Analytics</b-dropdown-item>
          <b-dropdown-item href="#">Predictive Analytics</b-dropdown-item>
          <b-dropdown-item href="#">Custom Solution Deployment</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item>Products & Services</b-nav-item>
        <b-nav-item>About</b-nav-item>
        <b-nav-item>Contact</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
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
