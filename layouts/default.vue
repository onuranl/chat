<template>
  <div class="columns">
    <div class="column is-one-quarter p-0" style="background: #120F13; width:324px; height: 100vh; position: relative;">
      <server-bar v-if="!toogle" @change="change" />
      <server-detail-bar v-if="toogle" @change="change" />
      <navbar />
    </div>
    <div class="column p-0" style="background: #252329;">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import Navbar from '~/components/molecules/Navbar.vue'
import ServerDetailBar from '~/components/atoms/ServerDetailBar.vue'
import ServerBar from '~/components/atoms/ServerBar.vue'


export default {
  components: {ServerDetailBar,ServerBar, Navbar},
  data() {
    return {
      toogle: false
    }
  },
  methods: {
    change() {
      this.toogle = !this.toogle
    }
  }
  
}
</script>

<style lang="scss" scoped>

</style>