const channel_repository = require("../repositories/channel-repository");

async function create(channel) {
    return await channel_repository.createChannel(channel);
}

async function message(channelID, message) {
    return await channel_repository.sendMessage(channelID, message);
}

async function getChannels() {
    return await channel_repository.getChannels();
}

async function getChannelsByID(channelID) {
    return await channel_repository.getChannelsByID(channelID);
}

async function getMessages(channelID) {
    return await channel_repository.getMessages(channelID);
}

module.exports = {create, message, getChannels, getChannelsByID, getMessages};
