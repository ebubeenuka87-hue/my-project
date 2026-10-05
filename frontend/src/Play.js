const electonics = [
    {id:1, name: "laptop", price:5000},
    {id:2, name: "tv", price:2500},
    {id:3, name: "phone", price:1700},
]

 let result = electonics.filter((product) => product.price > 2000)
console.log(result)