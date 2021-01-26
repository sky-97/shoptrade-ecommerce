<template>
  <b-container>
    <b-row>
      <b-card-group
        class="col-md-3 col-6 my-1"
        v-for="item in items"
        :key="item.id"
       
      >
        <b-card
          :title="item.vendor"
          :sub-title="item.name"
          :img-src="item.image_src[0]"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 15rem; padding: 5px; border: none"
          class="mb-1"
        >
         <div class="middle" style="display:flex">
    <div class="text" style="display:flex" v-for="option in item.options" :key="option.id">
       
     <p  @click="addToCart(item, option.value)">  {{option.value}}</p>
    </div>
  </div>

          <span class="price"
            >${{ item.price }}
            <del class="old_price">${{ item.compare_at_price }}</del
            ><span class="percentage">
              ( {{ calculatePercentage(item.price, item.compare_at_price) }}%
              OFF )</span
            ></span
          >
        </b-card>
      </b-card-group>
    </b-row>
    <AddCartModal
    v-if="modalAddCart" 
    :component = "selectedData"
    :option = "selectedOption"
     @close="modalAddCart = false"
    />
  </b-container>
</template>
<script>

import AddCartModal from './AddCartModal';
export default {
  name: "MensClothing",
  components : {
    AddCartModal
  },
  data() {
    return {
      active: false,
      selectedOption : '',
      selectedData : '',
      modalAddCart : false
    };
  },
  computed: {
    items() {
      return this.$store.state.data;
    },
  },
  methods: {
    calculatePercentage(partialValue, totalValue) {
      return Math.round((100 * partialValue) / totalValue);
    },
    addToCart(data, option){
      console.log(this.modalAddCart);
      this.selectedData = data,
      this.selectedOption = option
      this.modalAddCart = true;
    }
  },
};
</script>
<style scoped>
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



.image {
  opacity: 1;
  display: block;
  width: 100%;
  height: auto;
  transition: .5s ease;
  backface-visibility: hidden;
}

.middle {
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}

.container .card:hover .img {
  opacity: 0.3;
}

.container .card:hover .middle {
  opacity: 1;
}

 .text {
  background-color: white;
  color: black;
  padding:2px
}

/* .container:hover .card:not(:hover) {
  -webkit-filter: blur(1px);
  -moz-filter: blur(1px);
  filter: blur(1px);
} */


</style>