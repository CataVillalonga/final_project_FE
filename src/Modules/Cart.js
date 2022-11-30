export const addToCart = async (username, products) => {
  const response = await fetch('/api/carts', {
    method:'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({username, products})
  });
   const data = await response.json();
   return data[0];

};
export const getCart = async (username) => {

  const response = await fetch(`/api/carts/${username}`)
   const data = await response.json();
   return data[0];

};

  export const deleteItem = async (username, products) => {

    const response = await fetch('/api/carts', {
      method:'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username, products})
    });
    const data = await response.json();
    return data[0];

  };

  export const deleteAllCart = async (username) => {

    const response = await fetch('/api/carts', {
      method:'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username})
    });
  };
  
export default {addToCart, getCart, deleteItem, deleteAllCart};
// const getProducts = async url => {
//   const response = await fetch(url);
//   const data = await response.json();
//   setData(data);
// };
