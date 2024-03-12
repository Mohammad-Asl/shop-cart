const foodList = [
    {
        id:1,
        title:'Chicken momo',
        img:'./src/assets/images.jpg',
        price:10.50,
        count: 1
    },
    {
        id:2,
        title:'Spicy Mexican Potatoes',
        img:'./src/assets/images (1).jpg',
        price:8.50,
        count: 1
    },
    {
        id:3,
        title:'Breakfast',
        img:'./src/assets/images (2).jpg',
        price:6,
        count: 1
    }
]

function getProductData(id) {
    let foodData = foodList.find((food) => food.id === id)
  
    return foodData
  }

  export { foodList , getProductData }
