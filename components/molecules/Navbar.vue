<template>
    <div class="container is-flex">
        <div class="is-flex is-align-items-center	">
          <div class="is-flex my-4 ml-2" style="width: 230px;">
            <c-avatar/>
            <p class="ml-5 mt-2 name"> Onur Anıl</p>
          </div>
          <ChevronDownIcon class="has-text-white"/>
        </div>
    </div>
</template>

<script>
import {ChevronDownIcon  } from 'vue-feather-icons'
import CAvatar from '~/components/lib/CAvatar.vue'


export default {
  components: {ChevronDownIcon, CAvatar}

}
</script>

<style lang="scss" scoped>
.container {
  height: 75px;
  width: 324px;
  padding: 25px;
  position: absolute;
  bottom: 0;
  background: #0B090C;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>