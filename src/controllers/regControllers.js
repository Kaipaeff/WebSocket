const bcrypt = require('bcrypt');

const renderTemplate = require('../lib/renderTemplate');
const Register = require('../views/Register');

const { User } = require('../../db/models');

const renderRegister = (req, res) => {
  renderTemplate(Register, null, res);
};

const regUser = async (req, res) => {
  const { login, password } = req.body;
  try {
    const hash = await bcrypt.hash(password, 10);
    const newUser = await User.create({ login, password: hash });
    req.session.newUser = newUser.login;
    req.session.save(() => {
      res.redirect('/');
    });
  } catch (error) {
    res.send(`Error create user: ${error}`);
  }
}


module.exports = { renderRegister, regUser };
