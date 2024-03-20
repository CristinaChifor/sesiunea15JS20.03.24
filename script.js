// Object Oriented Java Script

// OOP, sau Programare Orientată pe Obiect (în engleză, Object-Oriented Programming), 
// este o paradigmă de programare care utilizează conceptul de obiecte pentru a organiza și structura codul sursă. 

 class Product {
    constructor(productName, price, stockQuantity) {
        this.productName = productName;
        this.price = price;
        this.stockQuantity = stockQuantity;
        
    }

    addToStock(quantity) {
        this.stockQuantity += quantity;
    }

    removeFromStock(quantity) {
        this.stockQuantity -= quantity;
        this.logStockToConsole();
    }

    logStockToConsole() {
        console.log(`Current Stock for ${this.productName} is now ${this.stockQuantity}.`);

    }

 }

 class DiscountProduct extends Product {
    constructor(productName, price, stockQuantity, discount) {
        super(productName, price, stockQuantity);
        this.discount = discount;
    }

    getDiscountedPrice() {
        let price = this.price - (this.price * this.discount/100);
        return price;
    }

    logDiscountedPrice() {
        let discountedPrice = this.getDiscountedPrice();
        console.log(`Price with discount for ${discountedPrice} is ${this.productName}.`);
    }
 }

 const geanta = new Product('Geanta', 750, 1000);

 const product2 = {
    productName: 'Geanta',
    price: 750,
    stockQuantity: 1000
 }

const hat = new Product('Hat', 350, 300);
 
console.log(geanta);
console.log(geanta);
console.log(hat);

geanta.addToStock(100);
console.log(geanta);

hat.removeFromStock(200);
console.log(hat);

hat.addToStock(300);
hat.removeFromStock(300);
hat.addToStock(200);

const smartPhone = new DiscountProduct('Smartphone', 3000, 200, 20);
console.log(smartPhone);

smartPhone.removeFromStock(23);
 const phoneDiscountedPrice = smartPhone.getDiscountedPrice();
 console.log(`Price with discount for ${smartPhone.productName} is ${phoneDiscountedPrice}.`);
 smartPhone.logDiscountedPrice;


// Metodele sunt funcții asociate cu un obiect/clasa și pot fi apelate pentru a efectua anumite acțiuni pe obiect sau pentru a returna o valoare.
// Metodele sunt definite în interiorul claselor, nu au nevoie de cuvantul cheie function ca în cazul funcțiilor și sunt utilizate pentru a organiza și a realiza operațiuni specifice asociate cu o clasa sau un obiect creat din acea clasa.


// Mostenirea este un concept fundamental în OOP și se referă la capacitatea de a defini proprietăți și functionalitati comune ale unor clase într-o singura clasa numita clasa părinte pe care ulterior aceste clase le pot mosteni (extinde), astfel eliminand repetitia  
// Mostenirea se realizeaza prin cuvintele cheie extends și super.
// extends se folosește pentru a specifica clasa din care noua clasa mosteneste proprietățile
// super() - se folosește pentru a apela constructorul clasei părinte
// Sintaxa: class ClasaCopil extends ClasaParinte { constructor() { super() } }

