const React = require('react');
const Layout = require('./Layout');

function Login({user}) {
  return (
    <Layout>
      <hr />
      <h1>Авторизация</h1>
      <hr />
      <form action="/login" method='POST' className='loginForm'>
        <label htmlFor="login" className="loginLabel">Login</label>
        <input name='login' className='loginInput' placeholder='Введите логин'/>
        <label htmlFor="password" className="passwordLabel">Password</label>
        <input name='password' className='passwordInput' placeholder='Введите пароль'/>
        <button type='submit' className='loginBtn'>Войти</button>
      </form>
      <hr />
      <h3 id='goodUser'></h3>
    </Layout>
  )
}

module.exports = Login;
