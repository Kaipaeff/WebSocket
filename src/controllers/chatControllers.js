const renderTemplate = require('../lib/renderTemplate');
const Chat = require('../views/Chat');

const renderChat = (req, res) => {
  renderTemplate(Chat, null, res);
}


module.exports = { renderChat };
