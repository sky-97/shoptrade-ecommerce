<template>
  <b-container>
    <div style="padding-top: 5px">
      <p class="total">
        ALL Products
        <span class="total_product">({{ userFilter.length }} products)</span>
      </p>
    </div>
    <div>
      FILTERS :
      <b-button
        id="filterButton"
        v-on:click="userFilterKey = 'all'"
        :class="{ active: userFilterKey == 'all' }"
        pill
        variant="outline-secondary"
        >All Products</b-button
      >
      &nbsp
      <b-button
        id="filterButton"
        v-on:click="userFilterKey = 'filterTshirt'"
        :class="{ active: userFilterKey == 'filterTshirt' }"
        pill
        variant="outline-secondary"
        >Tee Shirt</b-button
      >
      &nbsp
      <b-button
        id="filterButton"
        v-on:click="userFilterKey = 'filterDenim'"
        :class="{ active: userFilterKey == 'filterDenim' }"
        pill
        variant="outline-secondary"
        >Denim</b-button
      >
      &nbsp
      <b-button
        id="filterButton"
        v-on:click="userFilterKey = 'filterSweatshirts'"
        :class="{ active: userFilterKey == 'Sweatshirts' }"
        pill
        variant="outline-secondary"
        >Sweatshirts</b-button
      >
      &nbsp
      <b-button
        id="filterButton"
        v-on:click="userFilterKey = 'filterPoloTeeShirt'"
        :class="{ active: userFilterKey == 'PoloTeeShirt' }"
        pill
        variant="outline-secondary"
        >Polo Tee Shirt</b-button
      >
      &nbsp
      <b-button
        id="filterButton"
        v-on:click="userFilterKey = 'filterShirt'"
        :class="{ active: userFilterKey == 'filterShirt' }"
        pill
        variant="outline-secondary"
        >Shirt</b-button
      >
      &nbsp
      <div style="float: right">
        <b-button
          id="filterButton"
          v-on:click="userFilterKey = 'sortPrice'"
          :class="{ active: userFilterKey == 'sortPrice' }"
          pill
          variant="outline-secondary"
          >Sort low to high</b-button
        >
      </div>
    </div>
    <b-row>
      <b-card-group
        class="col-md-3 col-6 my-1"
        v-for="item in userFilter"
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
          <div class="middle" style="display: flex">
            <div
              class="text"
              style="display: flex"
              v-for="option in item.options"
              :key="option.id"
            >
              <p @click="addToCart(item, option)">{{ option.value }}</p>
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
      :component="selectedData"
      :option="selectedOption"
      @close="modalAddCart = false"
    />
  </b-container>
</template>
<script>
import AddCartModal from "./AddCartModal";
export default {
  name: "MensClothing",
  components: {
    AddCartModal,
  },
  data() {
    return {
      userFilterKey: "all",
      active: false,
      selectedOption: "",
      selectedData: "",
      modalAddCart: false,
    };
  },
  computed: {
    userFilter() {
      return this[this.userFilterKey];
    },
    all() {
      return this.$store.getters.getAllData;
    },
    filterTshirt() {
      return this.$store.getters.getAllData.filter(
        (type) => type.tag === "T-shirt"
      );
    },
    filterDenim() {
      return this.$store.getters.getAllData.filter(
        (type) => type.tag === "Denim"
      );
    },
    filterSweatshirts() {
      return this.$store.getters.getAllData.filter(
        (type) => type.tag === "Sweatshirts"
      );
    },
    filterPoloTeeShirt() {
      return this.$store.getters.getAllData.filter(
        (type) => type.tag === "Polo Tee Shirt"
      );
    },
    filterShirt() {
      return this.$store.getters.getAllData.filter(
        (type) => type.tag === "shirt"
      );
    },
    sortPrice() {
      return this.$store.getters.getAllData.sort(
        (a, b) => parseFloat(a.price) - parseFloat(b.price)
      );
    },
  },
  methods: {
    calculatePercentage(partialValue, totalValue) {
      return Math.round((100 * partialValue) / totalValue);
    },
    addToCart(data, option) {
      (this.selectedData = data), (this.selectedOption = option);
      this.modalAddCart = true;
    },
  },
};
</script>
<style scoped>
.active {
  font-weight: bold;
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

.total_product {
  width: 235px;
  height: 23px;
  left: 24px;
  top: 174px;
  color: #878787;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
  text-transform: capitalize;
}

.percentage {
  color: red;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 14px;
}

.total {
  width: 235px;
  height: 23px;
  left: 24px;
  top: 174px;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
  text-transform: capitalize;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #000000;
}
.image {
  opacity: 1;
  display: block;
  width: 100%;
  height: auto;
  transition: 0.5s ease;
  backface-visibility: hidden;
}

.middle {
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}

.container .card:hover img {
  opacity: 0.3;
}

.container .card:hover .middle {
  opacity: 1;
}

.text {
  background-color: white;
  color: black;
  padding: 2px;
}

.container:hover .card:not(:hover) {
  -webkit-filter: blur(1px);
  -moz-filter: blur(1px);
  filter: blur(1px);
}

/* #filterButton{
  padding-top: px;
} */
</style>