<template>
  <div>
    <HomePageCarousel />
      
    <DealsOfTheDay />
<b-container class="categories">
   <h2>CATEGORIES</h2>
   <div class="category">
     <div><nuxt-link to='/mens'>
       <img src="https://images.unsplash.com/photo-1516257984-b1b4d707412e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVucyUyMGZhc2hpb258ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="">
     </nuxt-link>
     <h3>Mens</h3>
     </div>
     <div>
       <img src="https://images.unsplash.com/photo-1557771551-634f8d68b0a5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fHdvbWVucyUyMGZhc2hpb258ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="">
          <h3>Women</h3>
     </div>
   </div>
</b-container>
  </div>
</template>

<script>
import InviteAlert from '../components/InviteAlert'
import MensClothing from '../components/MensClothing'
import HomePageCarousel from '../components/HomePageCarousel'
import DealsOfTheDay from '../components/DealsOfTheDay'
export default {
   head: {
     title: 'home page',
  },
  components:{
    InviteAlert,
    MensClothing,
    HomePageCarousel,
    DealsOfTheDay
  }
}
</script>

<style>
body {
  font-family: Roboto;
}

.categories {
  margin-top: 100px;
}
.category{
  display: flex;
  text-align: center;
}


.category img {
  width: 45%;
}
</style>
