<template>
  <div class="modal" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-dialog-top modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-body">
          <div class="modal-text">
            <div>
              <h3 class="text-center">Add this to cart?</h3>
              <b-row style="padding: 5px">
                <b-col cols="4">
                  <img :src="component.image_src[0]" alt="" />
                </b-col>
                <b-col cols="8">
                  <p class="product-title">{{ component.name }}</p>
                  <p class="product-subtitle">{{ component.vendor }}</p>
                  <p class="product-title">
                    <span class="product-subtitle"> Selected option :</span>
                    {{ option }}
                  </p>

                  <h4 class="product-price">Price ${{ component.price }}</h4>
                </b-col>
              </b-row>

              <div class="button-wrapper">
                <b-button
                 v-on:click="sendData"
                  squared
                  style="
                    background-color: coral;
                    color: white;
                    padding-left: 25px;
                    padding-right: 25px;
                    text-decoration: none;
                  "
                  >Add</b-button
                >

                <b-button
                  @click.stop="$emit('close')"
                  squared
                  style="
                    color: white;
                    margin-left: 10px;
                    padding-left: 25px;
                    padding-right: 25px;
                    text-decoration: none;
                  "
                  >Cancel</b-button
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CartPage from "./CartPage";

export default {
  name: "AddCartModal",
  components: {
      CartPage
  },
  props: {
    component: {
      type: Object,
      required: true,
    },
    option: {
      type: String,
      required: false,
    },
  },
  methods : {
      sendData () {
this.component.selectedoption = this.option

          this.$store.commit('ADD_CART_DATA',  this.component)
      }
  }
};
</script>

<style scoped >
.modal {
  overflow-y: auto;
  background: rgba(0, 0, 0, 0.7);
  display: block;
}

.modal-content {
  background: white;
  color: black;
  text-decoration: none;
  text-transform: none;
}

.modal-dialog {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.button-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
img {
  width: 55%;
}

.product-title {
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  text-transform: capitalize;

  color: #000000;
}

.product-subtitle {
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  text-transform: capitalize;

  color: #878787;
}
</style>
