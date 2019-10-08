const Message = require('../../models/message.model');

exports.index = async (_req, res) => {
  try {

    const messages = await Message.find();

    return res.json(messages);

  } catch (err) {
    res.status(400).send(err);
  }
}

exports.view = async (req, res) => {

  const { id } = req.params;

  const messageFind = await Message.findById(id);

  return res.json(messageFind);
}

exports.remove = async (req, res) => {

  const { id } = req.params;

  const messageFind = await Message.findByIdAndDelete(id);

  return res.json(messageFind);
}