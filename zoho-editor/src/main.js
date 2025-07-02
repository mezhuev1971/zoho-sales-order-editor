const App = () => {
  return React.createElement('div', {className: 'app'},
    React.createElement('h1', null, 'Редактор заказов Zoho'),
    React.createElement('p', null, 'Интерфейс готов к работе!')
  );
};

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(React.createElement(App));