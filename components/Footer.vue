<template>
  <div class="fluid-container">
    <p class="text-center">
      Copyright &copy; {{ currentDate.getFullYear() }}, All Rights Reserved.
    </p>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      currentDate: new Date(),
    };
  },
};
</script>
<style scoped>
.fluid-container {
  background-color: #33383b !important;
position: fixed; bottom: 0;
width: 100%;
  padding: 20px;
}

.text-center {
  background-color: #33383b !important;
  color : white

}
</style>

