<template>
    <div>
        <div class="header">
            <div class="is-flex ml-4 mt-4">
                <p class="ml-4 has-text-white">Channels</p>
            </div>
            <div @click="isActive = true" class="mt-5 mr-4">
                <PlusSquareIcon size="28" />
            </div>
        </div>
        <div class="main">
            <search-bar />
            <div @click="change" class="users">
                <div class="is-flex my-4" v-for="channel in data.channels" :key="channel._id">
                    <c-avatar/>
                    <nuxt-link :to="`/channel/${channel._id}`" >
                        <p class="ml-5 mt-2 name"> {{channel.name}} </p>
                    </nuxt-link>
                </div>
            </div>
        </div>
        <div class="modal" :class="{'is-active': isActive}">
            <div class="modal-background"></div>
                <div class="modal-content is-flex is-justify-content-center	 ">
                    <div class="create">
                        <p>NEW CHANNEL</p>
                        <input v-model="channelInfo.name" placeholder="Channel name" type="text">
                        <textarea v-model="channelInfo.textarea" placeholder="Channel Description" cols="20" rows="5"></textarea>
                        <div class="is-flex is-justify-content-flex-end">
                            <button @click="create" class="button is-info mr-0">Save</button>
                        </div>
                    </div>
            </div>
        <button @click="isActive = false" class="modal-close is-large" aria-label="close"></button>
        </div>
    </div>
</template>

<script>
import SearchBar from '~/components/molecules/SearchBar.vue'
import CAvatar from '~/components/lib/CAvatar.vue'

import { PlusSquareIcon } from 'vue-feather-icons'

export default {
    components: {SearchBar, PlusSquareIcon, CAvatar},
    data() {
        return {
            isActive: false,
            data: [],
            channelInfo: {
                name: "",
                description: ""
            }
        }
    },
    async created() {
        try {
            let channels = await this.$services.channel.channels();
            if(channels) {
                this.data = channels.data
            }
        } catch (error) {
            console.log(error)
        }
    },
    methods: {
        change() {
            this.$emit('change')
        },
        async create() {
            try {
                let create = await this.$services.channel.create(this.channelInfo);
                
                if(create) {
                    let channels = await this.$services.channel.channels();
                    if(channels) {
                        this.data = channels.data
                        this.isActive = false
                    }
                }
            } catch (error) {
                console.log(error)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.header {
  height: 60px;
  width: 324px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #120F13;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.main {
  padding: 25px;
}

.create {
    width: 656px;
    max-height: 360px;
    background: #120F13;
    border-radius: 24px;
    display: flex;
    flex-direction: column;
    padding: 35px;

    p {
        text-transform: uppercase;
        color: #F2F2F2;
    }

    * {
        margin-bottom: 20px;
    }
}

input,
textarea {
    background: #3C393F;
    border-radius: 8px; 
    border: none;
    padding: 15px;
    resize: none;
}
</style>