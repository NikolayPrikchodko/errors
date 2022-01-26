import { render, renderError } from './render.js';
import { getApiProduct } from './api.js';

function renderPage() {
  const appContainer = document.getElementById('products');
  const spinner = document.getElementById('spinner');
  const dataProducts = getApiProduct();
  dataProducts.then((data) => {
    appContainer.append(render(data));
    spinner.style.display = 'none';
  }).catch(err => {
    if (err.message == 404) {
      renderError('Список товаров пуст');
      spinner.style.display = 'none';
    } else if (err.message == 500) {
      for (let i = 0; i < 2; ++i) {
        if (err.message == 500) {
          getApiProduct();
        }
      };
      renderError('Произошла ошибка, попробуйте обновить страницу позже');
      spinner.style.display = 'none';
    } else {
      renderError('Произошла ошибка, попробуйте обновить страницу позже');
      spinner.style.display = 'none';
    }
  });


};

renderPage();

window.addEventListener('load', function () {
  if (!navigator.onLine) {
    renderError('Произошла ошибка, проверьте подключение к интернету');
  } else {
    renderError('Подключение к интернету восстановленно');
  }
  console.log(navigator.onLine);
})




