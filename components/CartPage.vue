<template>
  <b-container>
    <div v-if="cartItem.length  <= 0">
    
      <img src="~/assets/emptycart.png" alt="">
    </div>
    <div v-else>
      {{cartItem}}
    </div>
  </b-container>
</template>
<script>
export default {
  name: "CartPage",
  props: {
    data: {
      type: Object,
      required: false,
    },
    option: {
      type: String,
      required: false,
    },
  },
  data(){
    return {
      cartItem : []
    }
  },

  computed : {
  getData () {
    // return this.$store.state.cart
   }
  },
  methods : {  
    

  }
};
</script>
<style scoped>
</style>