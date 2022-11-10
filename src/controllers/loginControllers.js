const bcrypt = require('bcrypt');

const renderTemplate = require('../lib/renderTemplate');
const Login = require('../views/Login');

const { User } = require('../../db/models');

const renderLogin = (req, res) => {
  renderTemplate(Login, null, res);
};


const loginUser = async (req, res) => {
  const { login, password } = req.body;
  try {
    const user = await User.findOne({ where: { login } });
    if (user) {
      const passCheck = await bcrypt.compare(password, user.password);

      if (passCheck) {
        req.session.newUser = user.login;
        req.session.save(() => {
          res.redirect('/chat');
        })
      } else {
        res.redirect('/login');
      }
    } else {
      res.redirect('/login');
      }
  } catch (error) {
    res.send(`Error ${error}`);
  }
}

module.exports = { renderLogin, loginUser };


