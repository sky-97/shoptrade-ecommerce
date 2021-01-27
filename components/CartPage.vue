<template>
  <b-container>
    <div v-if="cartItems.length <= 0">
      <img class="empty-cart" src="~/assets/pngfind.com-cart-png-2727925.png" alt="" />
    <div class="empty-cart-description">
        <p>Hey, it feels so light!</p>
      <p>There is nothing in your bag. Let's add some items.</p>
    </div>
    </div>
    <div v-else>
      <p>Total Amount : $ {{getTotalAmount()}}</p>
      <p>Total Amount Saved: $ {{getTotalAmountSaved()}}</p>

      <b-row>
        <b-col
          cols="12"
          v-for="(cartItem, cardItemIndx) in cartItems"
          :key="cartItem.id"
        >
          <b-card
            :title="cartItem.name"
            :sub-title="'sold by ' + cartItem.vendor"
            :img-src="cartItem.image_src[0]"
            img-alt="Card image"
           
            img-left
          >
            <b-card-text>
              <span class="price"
                >${{ cartItem.price }}
                <del class="old_price">${{ cartItem.compare_at_price }}</del
                ><span class="percentage">
                  (
                  {{
                    calculatePercentage(
                      cartItem.price,
                      cartItem.compare_at_price
                    )
                  }}% OFF )</span
                ></span
              >
              <div style="padding: 5px">
                Selected Size :
                <b-form-select
                 v-on:input="changeOption(cartItem, cardItemIndx )"
                  v-model="cartItem.selectedoption.value"
                  :options="cartItem.options"
                  class="mb-3"
                  value-field="value"
                  text-field="value"
                  disabled-field="notEnabled"
                ></b-form-select>
               
              </div>
            </b-card-text>

            <b-button
              v-on:click="removeFromCart(cardItemIndx)"
              squared
              id="remove_button"
              >Remove</b-button
            >
          </b-card>
        </b-col>
      </b-row>
    </div>
    <div v-if="isSuccess">
       <b-alert class="alert"  show variant="success">Successfully Deleted <a @click="closeAlert" href=""><img class="close-img" src="~/assets/close.svg" alt=""></a> </b-alert>
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
  data() {
    return {
      cartItems: "",
      isSuccess : false,
      dismissSecs : 3,
        dismissCountDown: 0,
    };
  },

  mounted() {
    this.cartItems = this.$store.getters.getAllCart;

  },
  methods: {
    calculatePercentage(partialValue, totalValue) {
      return Math.round((100 * partialValue) / totalValue);
    },
    removeFromCart(index) {
    this.$store.commit("REMOVE_CART", index);
      this.isSuccess = !this.isSuccess
    },
    closeAlert(){
      this.isSuccess = !this.isSuccess
    },
    changeOption(data, idx){
      console.log(`this is data`, data);
      console.log(`this is idx`, idx);
      
       this.$store.commit("EDIT_CART", {
         payload : data,
         idx : idx
       });
    },
    getTotalAmount(){
      return this.cartItems.reduce((a, b) => +a + +b.price, 0);
    },
    getTotalAmountSaved(){
let data = this.getTotalAmount();
let total = this.cartItems.reduce((a, b) => +a + +b.compare_at_price, 0);
return  total - data
    }
  },
};
</script>
<style scoped>
.empty-cart{

width: 60%; 
 height: auto;
    display: table;
    margin: 0 auto;


}

.empty-cart-description{
  padding: 10px;
  text-align: center; 
   font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  text-transform: capitalize;

  color: #000000;
}

img{
  object-fit: contain;
}

.card-title {
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  text-transform: capitalize;

  color: #000000;
}

.card-subtitle {
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  text-transform: capitalize;

  color: #878787;
}
.price {
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  text-transform: capitalize;

  color: #000000;
}
.old_price {
  color: #878787;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 14px;
}

.percentage {
  color: red;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 14px;
}

select {
  width: 20%;
}

.card-body #remove_button {
  display: inline;
  background-color: coral;
  color: white;
  padding-left: 25px;
  padding-right: 25px;
  text-decoration: none;
}

.alert{
 width: 50%;
   height: 50px;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);

}

.close-img {
  float: right;
  width: 20px
}
</style>