console.log('hello');

/**
 * OOP, sau Programare Orientată pe Obiect (în engleză, Object-Oriented Programming), 
 * este o paradigmă de programare care utilizează conceptul de obiecte pentru a organiza și structura codul sursă. 
OOP este bazată pe ideea că un program poate fi văzut ca o colecție de obiecte individuale, 
fiecare dintre acestea având propriile sale caracteristici și funcționalități.
Pentru a putea implementa paradigma OOP JavaScript oferă posibilitatea
 de a crea clase ce ne permit crearea de obiecte într-un mod facil.
 */

 // OOP Clase
 // Clasele sunt tipare pentru obiecte și sunt folosite pentru a crea obiecte cu proprietăți și comportament similar.
// PascalCase

/**
 * Sintaxa: class NumeClasa { constructor(){} alteMembre… }
class - defineste începutul definiției unei clase;
NumeClasa - numele dat de noi clasei (trebuie sa fie un nume reprezentativ pentru clasa). Acesta trebuie sa respecte notația PascalCase;
constructor - este o metoda (funcție ce aparține clasei) ce se apelează în momentul creării unui nou obiect din clasa și are rol de initializare obiect
 */

class Product {
    constructor(productName, price, stockQuantity) {
        this.productName = productName;
        this.price = price;
        this.stockQuantity = stockQuantity;
    }

    addToStock(quantity) {
        this.stockQuantity += quantity;
        this.logStockToConsole();
    }

    removeFromStock(quantity) {
        this.stockQuantity -= quantity;
        this.logStockToConsole();
    }

    logStockToConsole() {
        console.log(`Current stock for ${this.productName} is now ${this.stockQuantity}.`);
    }
}

/**
 * Metodele sunt funcții asociate cu un obiect/clasa și pot fi apelate pentru a efectua anumite acțiuni pe obiect sau pentru a returna o valoare. 
 * Metodele sunt definite în interiorul claselor, nu au nevoie de 
 * cuvantul cheie function ca în cazul funcțiilor și sunt utilizate pentru a organiza și a realiza operațiuni specifice asociate cu o clasa sau un obiect creat din acea clasa.
Metodele au acces la cuvantul special this care in contextul unei clase reprezinta instanta 
(obiectul) curent pe care se apeleaza metoda cu toate proprietățile initializate in constructor.
 */
const bike = new Product('Bicicleta', 750, 1000);

const product4 = {
    productNmae: 'Bicicleta',
    price: 750,
    stockQuantity: 1000
}

const laptop = new Product('Laptop', 2500, 300);

console.log(bike);
console.log(product4);
console.log(laptop);

bike.addToStock(100);
console.log(bike);

laptop.removeFromStock(55);
console.log(laptop);

laptop.addToStock(250);
laptop.removeFromStock(100);
laptop.addToStock(120);


