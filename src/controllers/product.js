
    const products = [
        {
            id: 1,
            title: "Reloj negro",
            price: 1000,
            is_offer: false
        },
        {
            id: 2,
            title: "Reloj Plata",
            price: 2000,
            is_offer: true
        },
        {
            id: 3,
            title: "Reloj oro",
            price: 2500,
            is_offer: false
        }
        
    ];

const getproducts = (req, res) => {

    res.json(products);
 
 }
//des esta forma filtra por id//
//ojo con el == del filter//
 const getproduct = (req, res) => {

    const id = req.params.id

  const product = products.filter((p) => p.id == id)
    
  res.json(product);

}

const searchproducts = (req, res) => {

    const id = req.query.id
    
    if (id != null) {
        const product = products.filter((p) => p.id == id)

        return res.json(product);
    }
    
    return res.json(products);
 
 }

 module.exports = {
    getproducts,
    getproduct,
    searchproducts
 };