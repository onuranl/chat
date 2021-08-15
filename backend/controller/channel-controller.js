const channel_service = require("../services/channel-service");

async function create(req, res) {
    const {authorID, name, description} = req.body;
  
    const payload = {
        authorID,
        name,
        description,
        channelImage: ""
    };
  
    try {
      const channel = await channel_service.create(payload);
      return res.status(200).json({
        channel,
        message: "İşlem başarıyla gerçekleşti.",
      });
    } catch (error) {
      return res.status(400).json({
        error: error.message || "Bir hata meydana geldi.",
      });
    }
}

async function message(req, res) {
  const {authorID, message} = req.body;

  const payload = {
      authorID,
      message
  };

  try {
    const message = await channel_service.message(req.params.id, payload);
    return res.status(200).json({
      message,
      message: "İşlem başarıyla gerçekleşti.",
    });
  } catch (error) {
    return res.status(400).json({
      error: error.message || "Bir hata meydana geldi.",
    });
  }
}

async function getChannels(req, res) {
  try {
    const channels = await channel_service.getChannels();
    return res.status(200).json({
      channels,
      message: "İşlem başarıyla gerçekleşti.",
    });
  } catch (error) {
    return res.status(400).json({
      error: error.message || "Bir hata meydana geldi.",
    });
  }
}

async function getChannelsByID(req, res) {
  try {
    const channel = await channel_service.getChannelsByID(req.params.id);
    return res.status(200).json({
      channel,
      message: "İşlem başarıyla gerçekleşti.",
    });
  } catch (error) {
    return res.status(400).json({
      error: error.message || "Bir hata meydana geldi.",
    });
  }
}

async function getMessages(req, res) {
  try {
    const messages = await channel_service.getMessages(req.params.id);
    return res.status(200).json({
      messages: messages.messages,
      message: "İşlem başarıyla gerçekleşti.",
    });
  } catch (error) {
    return res.status(400).json({
      error: error.message || "Bir hata meydana geldi.",
    });
  }
}

module.exports = {create, message, getChannels, getChannelsByID, getMessages}