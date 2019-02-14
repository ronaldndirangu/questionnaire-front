<template>
  <div>
    <nav>
      <router-link class="nav-link" v-for="routes in links" v-bind:key="routes.id"
      :to="`${routes.page}`">{{ routes.text }}</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      links: [
        {
          id: 0,
          text: 'Home',
          page: '/meetups'
        },
        {
          id: 1,
          text: 'Create Meetup',
          page: '/meetups/create'
        }
      ]
    }
  }
}
</script>

<style>
  nav {
    background: #fff;
    margin-top: 0px auto;
    padding: 20px 30px;
    box-shadow: 0 8px 6px -6px rgb(209, 208, 208);
  }
  .nav-link {
    text-decoration: none;
    margin-right: 20px;
    font-size: 1.2em;
    color: #004cc7;
    padding-right: 10px;
    border-right: solid 1px #004cc7;
  }
  .nav-link:hover {
    color: #000;
  }
</style>
