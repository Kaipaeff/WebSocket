const renderTemplate = require('../lib/renderTemplate');
const Home = require('../views/Home');
const Secret = require('../views/Secret');

const renderHome = (req, res) => {
  const newUser = req.session?.newUser;
  renderTemplate(Home, { newUser }, res);
}

const renderSecret = (req, res) => {
  renderTemplate(Secret, null, res);
}

module.exports = { renderHome, renderSecret };
