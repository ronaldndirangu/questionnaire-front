<template>
  <div class="banner">
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
export default {
  name: "Banner",
  props: ['message']
}
</script>

<style>
  .banner {
    display: flex;
    background: #004cc7;
    position: relative;
    margin-top: 0px;
    padding: 60px 40px;
    justify-content: center;
    color: #ccc;
  }
</style>

