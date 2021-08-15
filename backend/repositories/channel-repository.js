const channel_model = require("../models/channel");

async function createChannel(channel) {
    return await channel_model.create(channel);
}

async function sendMessage(channelID, message) {
    let result = await channel_model.findOneAndUpdate(
        { _id: channelID },
        { $push: { messages: message } }
    )
    console.log(result)
}

async function getChannels() {
    return await channel_model.find({}, '_id name')
}

async function getChannelsByID(channelID) {
    return await channel_model.find({_id: channelID}, '_id name description members')
}

async function getMessages(channelID) {
    return await channel_model.findOne({_id: channelID}).populate('messages.authorID').exec()
}

module.exports = {createChannel, sendMessage, getChannels, getChannelsByID, getMessages}