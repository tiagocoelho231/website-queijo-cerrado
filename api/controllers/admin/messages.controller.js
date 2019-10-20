const Message = require('../../models/message.model');

exports.index = async (req, res) => {
  const { filter, limit } = req.body;
  try {
    const data = await Message.find({ filter }, 'name email phone createdAt', { limit });
    const total = await Message.countDocuments();
    return res.json({ total, data });
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