const Message = require('../../models/message.model');

exports.index = async (req, res) => {
  const { filter, limit } = req.body;
  try {
    const messages = await Message.find({ filter }, null, { limit });
    return res.json({ total: messages.length, limit, data: messages });
  } catch (err) {
    res.status(400).send(err);
  }
}

exports.view = async (req, res) => {
  const { id } = req.params;
  try {
    const message = await Message.findById(id);
    return res.json(message);
  } catch (error) {
    res.status(400).send(err);
  }
}

exports.remove = async (req, res) => {
  const { id } = req.params;
  try {
    const message = await Message.findByIdAndDelete(id);
    return res.json(message);
  } catch (error) {
    res.status(400).send(err);
  }
}