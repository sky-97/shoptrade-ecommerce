<template>

 <div>
     &nbsp
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/1/26/da81fe0e-9616-43b1-a2c9-2f8ed876e41f1611677035261-H-M_Desk_Banner.jpg"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/1/26/b5ec5f4f-b404-43a9-8dfd-e20342e94a111611677198549-Desktop-Vday-Unisex.jpg">
        <h1>Hello world!</h1>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/1/26/cff0d343-3631-45f9-9a0b-cc69a4cf27671611677096992-Sarees_Desktop_Banner.jpg"></b-carousel-slide>




    </b-carousel>
  </div>
</template>

<script>
  export default {
      name  : 'HomePageCarousel',
    data() {
      return {
        slide: 0,
        sliding: null,
        
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>
<style  scoped>
img{
    height :100px;
}
</style>