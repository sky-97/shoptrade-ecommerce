<template>
<div>
  <b-navbar toggleable="lg" style="background-color:white !important" variant="info">
      <b-navbar-brand href="/">
     <Logo />
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse"  is-nav>
      <b-navbar-nav class="ml-auto"  style="justify-content:space-around">
          <b-nav-item-dropdown text="Shop" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item href="#" >About Us</b-nav-item>
        <b-nav-item href="#" >Our Stores</b-nav-item>
        <b-nav-item href="#" >Contact US</b-nav-item>


      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
 <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>
        <b-nav-item href="#" >user</b-nav-item>
        <!-- <b-nav-item href="#" ><img src="~/assets/navbar/user.png" style="width:10%" alt=""></b-nav-item> -->
        <b-nav-item href="/cart" >cart</b-nav-item>

      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {
   name: "Navbar",
    
}
</script>
<style scoped>

</style>