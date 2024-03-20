// Object Oriented Java Script

// OOP, sau Programare Orientată pe Obiect (în engleză, Object-Oriented Programming), 
// este o paradigmă de programare care utilizează conceptul de obiecte pentru a organiza și structura codul sursă. 

 class Product {
    constructor(productName, price, stockQuantity) {
        this.productName = productName;
        this.price = price;
        this.stockQuantity = stockQuantity;
        
    }
 }

 const product1 = new Product('Geanta', 750, 1000);

 const product2 = {
    productName: 'Geanta',
    price: 750,
    stockQuantity: 1000
 }

const product3 = new Product('Hat', 350, 300);
 
console.log(product1);
console.log(product2);
console.log(product3);