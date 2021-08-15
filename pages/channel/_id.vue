<template>
  <div>
    <div class="header">
      <div class="is-flex mt-3">
        <p style="margin-left: 70px; text-transform: uppercase; color: #E0E0E0; font-weight: bold;">{{data.name}} </p>
      </div>
    </div>
    <div class="main">
      <div class="is-flex mb-6" v-for="message in messages" :key="message">
        <c-avatar />
        <div class="ml-5" style="width: 1000px;">
          <div class="is-flex text-centered">
            <p class="name mr-3 ">{{message.authorID.name}} </p>
            <i>{{message.createdAt}} </i>
          </div>
          <div class="mt-1">
            <p class="hey">{{message.message}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="message-bar">
      <div class="message-bar-input ml-2">
        <input v-model="message" type="text" placeholder="Type a message here">
      </div>
      <button @click="sendMessage" class="button message-bar-submit is-info">
        <SendIcon size="15" />
      </button>
    </div>
  </div>
</template>

<script>
import { SendIcon } from 'vue-feather-icons'
import CAvatar from '~/components/lib/CAvatar.vue'

export default {
  components: {CAvatar, SendIcon},
  data() {
    return {
      message: "",
      data: [],
      messages: []
    }
  },
  async created() {
    try {
        let channel = await this.$services.channel.channelsByID(this.$route.params.id);
        if(channel) {
            this.data = channel.data.channel[0]
        }
        let messages = await this.$services.channel.channelMessages(this.$route.params.id)
        if(messages) {
          this.messages = messages.data.messages
        }
    } catch (error) {
        console.log(error)
    }
  },
  mounted() {
    this.socket = this.$nuxtSocket({
      channel: '/'
    })
    this.socket.on('broadcast', async (msg) => {
      try {
        let messages = await this.$services.channel.channelMessages(this.$route.params.id)
        console.log(messages);
        if(messages) {
          this.messages = messages.data.messages
        }
      } catch (error) {
        console.log(error)
      }
    });
  },
  methods: {
    async sendMessage() {
      let result = {
        channelID: this.$route.params.id,
        // edit nuxt auth user _id
        authorID: "61161010e35ff03d848f644e",
        message: this.message,
        created: new Date()
      }
      
      this.socket.emit('message', result)
    }
  }
}
</script>

<style lang="scss" scoped>

.header {
  height: 60px;
  display: flex;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.message-bar {
  height: 52px;
  max-width: 1100px;
  margin-left: 70px;
  margin-top: 30px;
  background: #3C393F;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px;
  position: absolute;
  bottom: 60px;

  &-submit {
    // background: #2F80ED;
    border-radius: 8px;
  }

  &-input {
    input {
      background: #3C393F ;
      width: 100%;
      border: none;
    }
      width: 100%;
  }
}

.main {
  max-width: 1100px;
  max-height: 500px ;
  margin-top: 50px;
  margin-left: 70px;
  overflow: scroll;
  overflow-x: hidden;
  overflow-anchor: none;
  position: relative;
}

.hey {
  font-size: 18px;
  line-height: 25px;
  letter-spacing: -0.035em;

  color: #E0E0E0;
}

i {
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  /* identical to box height */

  letter-spacing: -0.035em;

  color: #828282;
}


</style>