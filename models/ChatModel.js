const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
    members: Array,
    chatName: String,
    chatAvatar: String,
}, { timestamps: true, });

const ChatModel = mongoose.model("Chat", chatSchema);
module.exports = ChatModel;