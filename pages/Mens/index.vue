<template>
  <div>
    <InviteAlert />
      
    <MensClothing />

  </div>
</template>

<script>
import InviteAlert from '../../components/InviteAlert'
import MensClothing from '../../components/MensClothing'

export default {
       head: {
     title: 'mens page',
  },
  components:{
    InviteAlert,
    MensClothing,
  }
}
</script>

<style>
body {
  font-family: Roboto;
}


</style>
