export function render(data) {
  const container = document.createElement('div');
  container.classList.add('container', 'd-flex', 'justify-content-between', 'flex-wrap', 'py-4');

  for (const product of data.products) {
    const box = document.createElement('div');
    const boxProducts = document.createElement('div');
    const title = document.createElement('h2');
    const picture = document.createElement('img');
    const price = document.createElement('p');

    box.style.width = '30%';
    box.classList.add('card', 'm-2');
    boxProducts.classList.add('card-body');
    title.classList.add('card-title');
    picture.classList.add('card-img-top');
    price.classList.add('card-text');

    box.append(boxProducts);
    boxProducts.append(picture);
    boxProducts.append(title);
    boxProducts.append(price);

    title.textContent = product.name;
    price.textContent = product.price;
    picture.src = product.image;    

    container.append(box);
  };

  return container;
};

export function renderError(data) {
  const boxToast = document.getElementById('boxToast');
  const liveToast = document.createElement('div');
  const toastBody = document.createElement('div');
  liveToast.classList.add('hint');
  toastBody.classList.add('toast-body');
  toastBody.textContent = data;
  boxToast.append(liveToast);
  liveToast.append(toastBody);
  
  setTimeout(() => {
    liveToast.remove();
  }, 5000);

  return boxToast;
};

