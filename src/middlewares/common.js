const checkUser = (req, res, next) => {
  if (req.session.newUser === 'Admin') {
    next();
  } else {
    res.redirect('/')
  }
}

module.exports = { checkUser }
