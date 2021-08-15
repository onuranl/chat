const mongoose = require('mongoose')

const MessageSchema = new mongoose.Schema({
    type: String,
    authorID: {
        type: mongoose.Types.ObjectId,
        ref: 'user',
    },
    message: String
},{ timestamps: true })

const ChannelSchema = new mongoose.Schema({
    authorID: {
        type: mongoose.Types.ObjectId,
        ref: 'user',
    },
    name: String,
    description: String,
    channelImage: String,
    members: [String],
    messages: [MessageSchema]
},{ timestamps: true })

module.exports = mongoose.model('channel', ChannelSchema)