const React = require('react');

const Layout = require('./Layout');

function Secret() {
  return (
    <Layout>
      <hr />
      <h1>Secret page</h1>
      <hr />
      <h3>Данная страница доступна только для пользователей с правами доступа "Администратор"</h3>
    </Layout>
  )
}

module.exports = Secret;
 