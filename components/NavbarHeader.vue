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
     <ul class="nav navbar-nav ml-auto w-100 justify-content-end">
            <li class="nav-item">
                <a class="nav-link" href="#">Search <img src="~/assets/loupe.png" style="width:30px" alt=""></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#"><img src="~/assets/navbar/user.png" style="width:30px" alt=""></a>
            </li>
            <li class="nav-item" v-if="cartItems <= 0 || cartItems === undefined">
                <a class="nav-link" href="/cart"><img src="~/assets/navbar/empty-cart.svg" style="width:30px" alt=""></a>
            </li>
            <li class="nav-item" v-else>
                <a class="nav-link" href="/cart"><img src="~/assets/navbar/cart.png" style="width:30px" alt=""></a>
            </li>
        </ul>


      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {
   name: "Navbar",
   
data(){
     return{
       cartItems : ''
     }
   },
    mounted() {
    this.cartItems = this.$store.getters.getAllCart;

  },
    
}
</script>
<style scoped>

</style>