const items = [
    {
      id: 1,
      name: 'Hoodies',
      price: 14.00,
      image: 'assets/images/featured1.png',
      category: 'hoodies',
      quantity: 10
    },
    {
      id: 2,
      name: 'Shirts',
      price: 24.00,
      image: 'assets/images/featured2.png',
      category: 'shirts',
      quantity: 15
    },
    {
      id: 3,
      name: 'Sweatshirts',
      price: 24.00,
      image: 'assets/images/featured3.png',
      category: 'shirts',
      quantity: 20
    },
  ]

  let id = [];
  for(let i in items){
    if(!id.includes(items[i].name)){
      let quantity = items.filter((itemActual)=> itemActual.name === items[i].name);
      console.log(quantity);
      id.push({id: items[i].id, name: items[i].name, quantity: quantity.length});
      console.log(id);
    }
  }


  let filter = document.getElementById("filter");
  id.map((id)=>{
    filter.innerHTML += `
    <div >
      <h3 id="${id.name}">${id.name}</h3>
      <p><span>${id.quantity} </span>products</p>
    </div>
    `
  })

  
  let newArray = items;
  let cardContainer = document.getElementById("cards-container");
  function cardGenerator(items){
    items.map((itemActual)=>{
      cardContainer.innerHTML += `
      <div class="card">
          <div class="top-card">
            <img src="${itemActual.image}" alt="">
            <span class="buttom">+</span>
          </div>
          <div class="bottom-card">
            <span class="precio">$ ${itemActual.price}.00</span>
            <span class="stock">Stock: ${itemActual.quantity}</span>
          </div>
          <span class="category">${itemActual.category}</span>
      </div>
      `
      cardContainer.classList.add("card-container")
    })
  }
  cardGenerator(newArray);

  id.forEach((id)=>{
    document.getElementById(`${id.name}`).onclick = function(){
      newArray = items.filter((itemActual)=> itemActual.name === id.name)
      cardContainer.innerHTML = ``;
      cardGenerator(newArray)
    }
    document.getElementById("show-all").onclick = function(){
      cardContainer.innerHTML = ``;
      cardGenerator(items);
    }
  })


 



