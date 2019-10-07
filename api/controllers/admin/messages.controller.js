const Message = require('../../models/message.model');

exports.index = async (req, res) => {
  const { range, sort } = req.query;
  console.log('req.query', req.query)
  try {
    const messages = await Message.find({ limit: range }, {}, { sort });
    messages
    res.send(messages);
  } catch (err) {
    res.status(400).send(err);
  }
}

exports.view = async (req, res) => { }

exports.remove = async (req, res) => { }