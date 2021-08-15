<template>
  <div>
    <div class="header">
      <div class="is-flex ml-4 mt-4">
        <ChevronLeftIcon @click="change" class="has-text-white"/>
        <p class="ml-4 has-text-white">All channels</p>
      </div>
    </div>
    <div class="main">
      <div class="main-header mb-4">
        <p>{{data.name}} </p>
      </div>
      
      <div class="main-subheader mb-5">
        <p class="has-text-white">{{data.description}} </p>
      </div>
      <div class="users">
        <p class="has-text-white">MEMBERS</p>
        <div class="is-flex my-4 ">
          <c-avatar/>
          <p class="ml-5 mt-2 name"> Onur Anıl</p>
        </div>
        <div class="is-flex my-4 ">
          <c-avatar/>
          <p class="ml-5 mt-2 name"> Onur Anıl</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {ChevronLeftIcon, ChevronDownIcon  } from 'vue-feather-icons'
import CAvatar from '~/components/lib/CAvatar.vue'

export default {
  components: {CAvatar, ChevronLeftIcon, ChevronDownIcon},
  data() {
    return {
      data : []
    }
  },
  async created() {
    try {
        let channel = await this.$services.channel.channelsByID(this.$route.params.id);
        if(channel) {
            this.data = channel.data.channel[0]
        }
    } catch (error) {
        console.log(error)
    }
  },
  methods: {
    change() {
      console.log("hey")
      this.$emit('change')
    }
  }

}
</script>

<style lang="scss" scoped>
.main-header {
  p {
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    letter-spacing: -0.035em;
    text-transform: uppercase;
    color: #E0E0E0;
  }
}



.header {
  height: 60px;
  width: 324px;
  display: flex;
  align-items: center;
  background: #120F13;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.main {
  padding: 32px;
}

.users {
  p {
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    letter-spacing: -0.035em;
    color: #828282;
  }
}

</style>