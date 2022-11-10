const React = require('react');
const Layout = require('./Layout');

function Home({newUser}) {
  return (
    <Layout newUser={newUser}>
      <hr />
      <h1>
        Домашняя страница
      </h1>
      <hr />
      <h3>Данный проект создан для демонстрирации работы технологии WebSocket</h3>
    </Layout>
  );
};

module.exports = Home;
