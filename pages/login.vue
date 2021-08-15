<template>
    <section class="section">
         <div class="columns">
            <div class="column is-4 is-offset-4">
               <div class="field">
                  <label class="label">Email</label>
                  <div class="control">
                     <input class="input" type="email" v-model="info.email">
                  </div>
               </div>
               <div class="field">
                  <label class="label">Password</label>
                  <div class="control">
                     <input class="input" type="password" v-model="info.password">
                  </div>
               </div>
               <div class="field is-grouped">
                  <div class="control">
                     <button @click="login" class="button is-link">Submit</button>
                  </div>
                  <nuxt-link to="/register">
                    <button>
                      <p>register ? </p>
                    </button>
                  </nuxt-link>
               </div>
            </div>
         </div>
      </section>
</template>

<script>
export default {
  layout: 'empty',
  data() {
    return {
      info: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async login() {
      try {
         await this.$auth
          .loginWith('local', {
            data: this.info
          })
          .then((response) => {
            this.$auth.setUser(response.data.user)
            this.$router.push('/')
          })
          .catch((error) => {
            console.log(error)
          })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>