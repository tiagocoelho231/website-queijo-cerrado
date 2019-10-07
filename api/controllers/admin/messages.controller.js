const Message = require('../../models/message.model');

exports.index = async (req, res) => {
  try {

    const messages = await Message.find();

    return res.json(messages);
    
  } catch (err) {
    res.status(400).send(err);
  }
}

exports.view = async (req, res) => {

  const { message_id } = req.params;

  const messageFind = await Message.findById(message_id);

  return res.json(messageFind);
}

exports.remove = async (req, res) => {

  const { message_id } = req.params;

  const messageFind = await Message.findByIdAndDelete(message_id);

  return res.json(messageFind);
}