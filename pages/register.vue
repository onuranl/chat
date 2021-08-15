<template>
    <section class="section">
         <div class="columns">
            <div class="column is-4 is-offset-4">
               <div class="field">
                  <label class="label">Name</label>
                  <div class="control">
                     <input class="input" type="text" v-model="name">
                  </div>
               </div>
               <div class="field">
                  <label class="label">Email</label>
                  <div class="control">
                     <input class="input" type="email" v-model="email">
                  </div>
               </div>
               <div class="field">
                  <label class="label">Password</label>
                  <div class="control">
                     <input class="input" type="password" v-model="password">
                  </div>
               </div>
               <div class="field is-grouped">
                  <div class="control">
                     <button @click="register" class="button is-link">Submit</button>
                  </div>
                  <nuxt-link to="/login">
                    <button>
                      <p>login ? </p>
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
    middleware: "auth",
    auth: 'guest',
    data() {
        return {
            name: "",
            email: "",
            password: ""
        }
    },
    methods: {
        async register() {
            try {
                let data = {
                    name: this.name,
                    email: this.email,
                    password: this.password
                }
                let response = await this.$axios.$post('/auth/register', data)
                if(response.status) {
                    await this.$auth.loginWith('local', {
                        data: {
                            email: this.email,
                            password: this.password
                        }
                    }).then(response => {
                        this.$auth.setUser(response.data.user)
                        this.$router.push('/')
                    })
                }
            } catch (error) {
                console.log(error)
            }
        }
    }
}
</script>
