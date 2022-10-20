// 1. PODSTAWOWE TYPY DANYCH

// a) NUMBER
let age: number;

age = 40;
// age = "lalala" - BŁĄD
//age = true - BŁĄD

// b) STRING
const firstName = "John";
//firstName = 50 - BŁAD
//firstName = true - BŁĄD

// c) BOOLEAN
let bool = true;
bool = false;
//bool = 123 - BŁĄD
//bool = "string" - BŁAD


// 2. TYPOWANIE FUNKCJI

const add = (num1: number, num2: number): number => {
    return num1 + num2;
};

function add2(num1: number, num2: number): number {
    return num1 + num2;
}

const add3 = function(num1: number, num2: number): number {
    return num1 + num2;
}

const logToConsole = (thingToDisplay: number): void => {
    console.log(thingToDisplay);
}
//funkcja nie zwraca nic dlatego musimy użyć słowa void


// 3. ELEMENTY HTML

// a) selektory
const categoryList: HTMLUListElement = document.querySelector(".categories");
// console.log(categoryList);

const input: HTMLInputElement = document.querySelector("#name");
// console.log(input.value);

const button = document.querySelector("button");
// console.log(button);
//w przypadku jak nie używamy . i # to TS wie, że to jest dany znacznik i odrazu nadaje mu typ na ten znacznik

// b) event Listenery
button.addEventListener("click", function(event: MouseEvent) {
//    console.log("Klik button");
})


// 4. UNION TYPES

let test: string | number | boolean;
test = "test";
test = 21;
test = true;


// 5. TYPE ALIAS

type Test = string | number | boolean;

let test1: Test;
let test2: Test;
let test3: Test;
let test4: Test;

type Category = "sport" | "education" | "work" | "lige";
let category: Category;
category = "sport";
category = "work";
// category = "gym" - BŁĄD;
// category = 21 - BŁĄD;
// category = true - BŁĄD;


// 6. TYPOWANIE OBIEKTÓW

// type Person = { name:string; surname: string; age: number }; - nie można zmieniać i rozszerzać NIEMODYFIKOWALNY!!!
interface Person { name:string; surname: string; age: number } // - można dowolnie modyfikować i rozszerzać!!!
interface Person { married?: boolean} // - ? pole opcjonalne

let john: Person = {
    name: "John",
    surname: "Smith",
    age: 30,
    married: true,
}

let sarah: Person = {
    name: "Sarah",
    surname: "Smith",
    age: 30,
    married: true,
}

// type Programmer = { name:string; surname: string; age: number, language: string, experience: number };
interface Programmer extends Person { language: string, experience: number }
let kevin: Programmer = {
    name: "Kevin",
    surname: "Smith",
    age: 30,
    language: "Python",
    experience: 4,
}

// 7. TYPOWANIE LIST

let list: (number | string )[] = [1, 2, 3, 4, 5, 6, 7, 8];
list = ["123", "321"];
list = ["123", 321];


// 8. LISTA OBIEKTÓW

const objList: Programmer[] = [
    {
    name: "Kevin",
    surname: "Smith",
    age: 30,
    language: "Python",
    experience: 4,
},
{
    name: "John",
    surname: "Smith",
    age: 43,
    language: "Python",
    experience: 15,
},
];

// Zad 1. Napisz funkcję która będzie obliczała cene w zależności od tego czy zniżka jest przyznana czy nie.
// Nazwa: calculatePrice
// Parametry: originalPrice (liczba), hasDiscount (prawda/fałsz)
// Funkcjonalność: Jeżeli parametr hasDiscount jest równy true, zwróc liczbę originalPrice pomniejszoną o 23%, jeżeli hasDiscount jest równy false, zwróc originalPrice bez żadnych modyfikacji.

const discount = true;
const price = 100;

const calculatePrice = function(originalPrice: number, hasDiscount: boolean): number {
    if (hasDiscount) {
        return originalPrice*0.77;
    } else {
        return originalPrice;
    }
}

// console.log(calculatePrice(price, discount));








// Zad 2.
// 1. Dodaj event listener na button (click)
// 2. Wylosuj czy użytkownik ma zniżke czy nie (Math.random())
// 3. Ściągnij wartość z inputu textowego, od razu zmień typ pozyskanej wartości na number
// 4. Wykonaj console.log `You have to pay *wywołanie funkcji calculatePrice, argumenty to wartości z pkt 2 i 3, ${}`

//TYPE INFERENCE

// button.addEventListener("click", function() {
//     const discount2 = Math.random() > 0.5 ? true : false;
//     const price2 = +input.value;
// 
//     console.log(`You have to pay ${calculatePrice(price2, discount2)}`);
// })