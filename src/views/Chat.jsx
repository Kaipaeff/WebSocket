const React = require('react');
const Layout = require('./Layout');

function Chat() {
  return (
    <Layout>
      <hr />
      <script defer src='/js/chat.js'></script>
      <h1>Страница чата</h1>
      <hr />
      <h3 id="users">Количество пользователей в чате: 1</h3>
      <form className='chatForm' name='chatForm'>
        <label htmlFor="chatInput" className="loginLabel">Message</label>
        <input name='chatInput' className='chatInput' placeholder='Введите сообщение'/>
        <button name='chatBtn' type='submit' className='loginBtn' disabled >Отправить</button>
      </form>
      <hr />
      <div id='divChat' />
    </Layout>
  );
};

module.exports = Chat;
