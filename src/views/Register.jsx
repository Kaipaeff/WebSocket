const React = require('react');
const Layout = require('./Layout');

function Login() {
  return (
    <Layout>
      <hr />
      <h1>Регистрация</h1>
      <hr />
      <form action="/register" method='POST' className='loginForm'>
        <label htmlFor="login" className="loginLabel">Login</label>
        <input name='login' className='loginInput' placeholder='Введите логин'/>
        <label htmlFor="password" className="passwordLabel">Password</label>
        <input name='password' className='passwordInput' placeholder='Введите пароль'/>
        <button type='submit' className='loginBtn'>Регистрация</button>
      </form>
      <hr />
    </Layout>
  )
}

module.exports = Login;
