export const addToCart = async (username, products) => {
  const response = await fetch('https://cikcreloaded.cyclic.app/api/carts', {
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
  const response = await fetch(`https://cikcreloaded.cyclic.app/api/carts/${username}`)
   const data = await response.json();
   return data[0];
};

export const deleteItem = async (username, products) => {
    const response = await fetch('https://cikcreloaded.cyclic.app/api/carts', {
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
    await fetch('https://cikcreloaded.cyclic.app/api/carts', {
      method:'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username})
    });
  };

  export const totalPrice = productArr => {
    let total = 0;
    productArr.forEach(obj => {
      total += obj.price;
    });
    return total;
  };
  export const numericPrice = (price) => {
    const str = price.replace(/[^A-Z0-9]/ig, "");
    const newPrice = Number(str);
    return newPrice;
  }
  
export const cartFunc = { addToCart, getCart, deleteItem, deleteAllCart, totalPrice, numericPrice };

export default cartFunc;

