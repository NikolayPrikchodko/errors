export async function getApiProduct() {
  const errors = [];  
  const respons = await fetch('http://localhost:3000/api/products');
  
  if (respons.status === 404) {
    errors.push(respons.status)
  } else if (respons.status === 500) {
    errors.push(respons.status)
  } 

  if (errors.length) {
    const err = new Error();
    err.message = errors;
    throw err;
  }

  const data = await respons.json();
  return data;
}