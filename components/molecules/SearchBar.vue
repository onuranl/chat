<template>
    <div class="search is-flex is-align-items-center	">
        <div>
            <search-icon size="17" class="custom-class has-text-white"></search-icon>
        </div>
        <div class="ml-3">
            <input type="text" placeholder="Search">
        </div>
    </div>
</template>

<script>
import { SearchIcon } from 'vue-feather-icons'

export default {
  components: {
    SearchIcon
  }
}
</script>

<style lang="scss" scoped>
.search {
    background: #3C393F;
    border-radius: 8px;
    padding: 15px;
    max-height: 48px;
}

input {
    background: #3C393F ;
    width: 100%;
    border: none;
}
</style>  