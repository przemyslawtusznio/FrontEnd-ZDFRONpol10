// 1. SELEKTORY

// a) document.querySelector()
// Przyjmuje jako argument selektor CSSowy, zwraca pierwszy pasujący element, jeżeli nie znajdzie nic to zwraca null.

// Wybieranie po ID
const navH1 = document.querySelector("#nav-h1");
// console.log(navH1);
// console.log(typeof navH1);

// Wybieranie po klasie
const firstNavSpan = document.querySelector(".nav-span");
// console.log(firstNavSpan);

// Wybieranie po tagu
const nav = document.querySelector("nav");
// console.log(nav);


// b) document.querySelectorAll()
// Przyjmuje jako argment selektor CSSowy, zwraca Nodelist (używamy ... aby mieć większy dostęp), jeżeli nie znajdzie nic to zwraca null.

const navSpans = document.querySelectorAll(".nav-span");
// console.log(...navSpans);
// navSpans.forEach((el) => console.log(el));

// c) document.getElementById()
const contentDiv = document.getElementById("content");
//console.log(contentDiv);

// d) document.getElementByClassName()
// Zwraca elementy w formie HTMLCollection - wszystkie elementy danej klassy - używwamy ... aby mieć większy dostęp
const navSpans2 = document.getElementsByClassName("nav-span");
// console.log(navSpans2);
const navS = [...navSpans2];
// console.log(navS);



// 2. SUB-SELEKTORY

// a) elementDivChildren
// Dostęp do wszystkich node'ów dzieci danego elementu.
const contentDivChildren = contentDiv.childNodes;
// console.log(contentDivChildren);

// - childElementCount
// console.log(contentDiv.childElementCount);
// console.log(document.childNodes);

// b) element.firstElementChild
// Dostęp do pierwszego dziecka danego elementu
const contentDivFirstChild = contentDiv.firstElementChild;
// console.log(contentDivFirstChild);

// c) element.LastElementChild
// Dostęp do ostatniego dziecka danego elementu
const contentDivLastChild = contentDiv.lastElementChild;
// console.log(contentDivLastChild);

// d) element.nextElementSibling
// Dostęp do sąsiedniego elementu danego elementu
// console.log(contentDivFirstChild.nextElementSibling);

// e) element.parentElement
// Dostep do elementu rodzica dla danego elementu
// console.log(contentDivLastChild.parentElement);

// Zadanie 1. Zapisz w zmiennych wszystkie elementy wystepujące w naszym dokumencie HTML. Staraj się nie modyfikować samego kodu HTML, lecz jeżeli będzie to konieczne, zrób to. Postaraj się wykorzystać wszystkie poznane metody wyboru elementów.

// BODY
const body = document.body;
//console.log(body);

// NAV
// a) document.querySelector
const nav1 = document.querySelector("nav");
// console.log(nav1);

//H1
// a) document.querySelector ID
const h1 = document.querySelector("#nav-h1");
// console.log(h1);

// b) element.firstElementChild
const h1FirstChild = nav.firstElementChild;
// console.log(h1FirstChild);

// c) document.getElementById
const h1ById = document.getElementById("nav-h1");
// console.log(h1ById);


// SPAN
// a) getElementByClassName
const [firstSpan, secondSpan, thirdSpan, fourthSpan]  = document.getElementsByClassName("nav-span");
// console.log(firstSpan);
// console.log(secondSpan);
// console.log(thirdSpan);
// console.log(fourthSpan);

const contentDiv1 = document.getElementById("content");
const [firstArticle, secondArticle, thirdArticle, fourthArticle] =
  contentDiv1.children;
const firstH2 = firstArticle.firstElementChild;
const firstParagraph = firstArticle.lastElementChild;
const list1 = document.querySelector("ul");
const [firstLi, secondLi, thirdLi] = list1.children;


// 3.TWORZENIE I DODAWANIE ELEMENTÓW

// a) document.createElement()
//Tworzy element w zależności od podanego argumentu, do argumentu wchodzi nazwa tagu
const additionalLi = document.createElement("li");
additionalLi.textContent = 'document.querySelectorAll("cssSelectorHere")';
// console.log(additionalLi);

// b) element.appendChild()
// Dodaje podany w argumencie element jako ostatnie dziecko elementu, na którym metoda została wywołana
list1.appendChild(additionalLi);

// c) element.insertBefore()
// Dodaje podany w argumencie element w określonym miejscu

const li2 = document.createElement('li');
li2.textContent = "123";

list1.insertBefore(li2, list1.childNodes[2]);

// d) string + element.insertAdjacentHTML()
const html = '<li id="li-to-remove">Element inserted using insertAdjacentHTML method.</li>'
list1.insertAdjacentHTML("beforeend", html);


// 4. USUWANIE ELEMENTÓW

// a) Czyszczenie zawartości elementów przy pomocy innerHTML
// console.log(firstArticle.innerHTML);
// firstArticle.innerHTML = "";

// b) element.remove()
const liToRemove = document.getElementById("li-to-remove");
// console.log(liToRemove);
liToRemove.remove();

// c)element.removeChild()
// Usuwa podany element dziecko z elementu, na którym metoda została wywołana.
// list1.removeChild(list1.firstElementChild);
// list1.removeChild(list1.children[2]);


// 5. ZAMIANA ELEMENTÓW

// a) element.replaceChild()
// Metoda wywoływana na elemencie rodzicu, pierwszy argument to element nowy (do wstawienia), drugi argument to element stary (do usunięcia).
const li3 = document.createElement('li');
li3.textContent = "This is a replaced element.";
list1.replaceChild(li3, list1.children[1]);


// 6. KLONOWANIE ELEMENTÓW

// a) element.cloneNode()
// a.1) 
const shallowClonedLi = li3.cloneNode(false)
// console.log(li3);
// console.log(shallowClonedLi);


// true - kopia głęboka (kopiuje wszystko)
// false - kopia płytka (kopiuje tagi z atrybutami wewnątrz)

// a.2)
const deepClonedLi = li3.cloneNode(true);
// console.log(li3);
// console.log(deepClonedLi);


// 7. AKTUALIZACJA/DODAWANIE/USUWANIE ZAWARTOŚCI

// a) element.textContent
// Dostęp do zawartości tekstowej danego elementu
// deepClonedLi.textContent = "123";
// console.log(deepClonedLi.textContent);

// b) element.innerText
// Dostęp do zawartości tekstowej danego elementu
// deepClonedLi.innerText = "321";
// console.log(deepClonedLi);
 
// c) element.innerHTML
// Usuwanie całego elementu i jednocześnie dodawanie nowego/nowej treści
// console.log(firstArticle.innerHTML)
// firstArticle.innerHTML = "<h3>123</h3>";

// d) emelent.appendChild()
// Modyfikacja elementu poprzez dodanie kolejnego elementu jako ostatniego dziecka.


// 8. DODAWANIE/AKTUALIZACJA/USUWANIE ATRYBUTÓW ELEMENTÓW

// a) element.attributes
// console.log(navH1Element.attributes);

// b) element.setAttribute()
// Metoda służy do dodawaniu atrybutów, pierwszy argument to nazwa atrybutu, drugi argument to wartość atrybutu.
// deepClonedLi.setAttribute("id", "deep-cloned");
// console.log(deepClonedLi);

//c) element.removeAttribute()
// deepClonedLi.removeAttribute("id");
// console.log(deepClonedLi);


// Zadanie 2. 
// a) Usuń wszystkie elementy HTML z body (nie stosuj innerHTML - wykorzystaj na każdym elemencie metodę romove).
const elToRomoveNr1 = document.querySelector("nav")
elToRomoveNr1.remove();

const elToRomoveNr2 = document.getElementById("content");
elToRomoveNr2.remove();

// b) Odtwórz intefrfejs przy pomocy wcześniej podanych metod (document.createElement, element.appendChild, itd...).

// Pasek nawigacyjny
const createNav = document.createElement("nav");
document.body.appendChild(createNav);

const createH1 = document.createElement("h1");
createH1.textContent = "DOM";
createH1.setAttribute("id", "nav-h1");
createNav.appendChild(createH1);

const createSpan1 = document.createElement("span");
createSpan1.textContent = "Home";
createSpan1.setAttribute("class", "nav-span");
createNav.appendChild(createSpan1);

const createSpan2 = document.createElement("span");
createSpan2.textContent = "Page 1";
createSpan2.setAttribute("class", "nav-span");
createNav.appendChild(createSpan2);

const createSpan3 = document.createElement("span");
createSpan3.textContent = "Page 2";
createSpan3.setAttribute("class", "nav-span");
createNav.appendChild(createSpan3);

const createSpan4 = document.createElement("span");
createSpan4.textContent = "Page 3";
createSpan4.setAttribute("class", "nav-span");
createNav.appendChild(createSpan4);


const renderHomePage = () => {
// DIV z resztą zawartości
const createDiv = document.createElement("div");
createDiv.setAttribute("id", "content");
document.body.appendChild(createDiv);


// Article 1
const createArticle1 = document.createElement("article");
const createArticle1H2 = document.createElement("h2");
createArticle1H2.textContent = "Introduction to JavaScript's Document Object Model.";
const createArticle1P = document.createElement("p");
createArticle1P.textContent = "The Document Object Model (DOM) is the data representation of theobjects that comprise the structure and content of a document on the web. This guide will introduce the DOM, look at how the DOM represents an HTML document in memory and how to use APIs to create web content and applications.";
createArticle1P.setAttribute("class", "article-paragraph");
createDiv.appendChild(createArticle1);
createArticle1.appendChild(createArticle1H2);
createArticle1.appendChild(createArticle1P);

// Article 2
const createArticle2 = document.createElement("article");
const createArticle2H2 = document.createElement("h2");
createArticle2H2.textContent = "What's DOM?";
const createArticle2P = document.createElement("p");
createArticle2P.textContent = "The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page. A web page is a document that can be either displayed in the browser window or as the HTML source. In both cases, it is the same document but the Document Object Model (DOM) representation allows it to be manipulated. As an object-oriented representation of the web page, it can be modified with a scripting language such as JavaScript.";
createArticle2P.setAttribute("class", "article-paragraph");
createDiv.appendChild(createArticle2);
createArticle2.appendChild(createArticle2H2);
createArticle2.appendChild(createArticle2P);

// Article 3
const createArticle3 = document.createElement("article");
const createArticle3H2 = document.createElement("h2");
createArticle3H2.textContent = "DOM and JavaScript.";
const createArticle3P = document.createElement("p");
createArticle3P.textContent = "The DOM is not a programming language, but without it, the JavaScript language wouldn't have any model or notion of web pages, HTML documents, SVG documents, and their component parts. The document as a whole, the head, tables within the document, table headers, text within the table cells, and all other elements in a document are parts of the document object model for that document. They can all be accessed and manipulated using the DOM and a scripting language like JavaScript. The DOM is not part of the JavaScript language, but is instead a Web API used to build websites. JavaScript can also be used in other contexts. For example, Node.js runs JavaScript programs on a computer, but provides a different set of APIs, and the DOM API is not a core part of the Node.js runtime. The DOM was designed to be independent of any particular programming language, making the structural representation of the document available from a single, consistent API. Even if most web developers will only use the DOM through JavaScript, implementations of the DOM can be built for any language.";
createArticle3P.setAttribute("class", "article-paragraph");
createDiv.appendChild(createArticle3);
createArticle3.appendChild(createArticle3H2);
createArticle3.appendChild(createArticle3P);

// Article 4
const createArticle4 = document.createElement("article");
const createArticle4H2 = document.createElement("h2");
createArticle4H2.textContent = "How to access the DOM?";
const createArticle4P = document.createElement("p");
createArticle4P.textContent = "You don't have to install anything additional, just JavaScript will do. We have a few methods called 'selectors', these methods are used to access DOM elements and are found on the global 'document' object, which is an object representation of the whole HTML document. Here are some of them:";
createArticle4P.setAttribute("class", "article-paragraph");
createDiv.appendChild(createArticle4);
createArticle4.appendChild(createArticle4H2);
createArticle4.appendChild(createArticle4P);

//Tu musze dokończyć kod - dodanie po dwukropku listy sskładającej się z 3 podpunkutów oraz dodatkowo utworzyć 2 pętle do stworzenia 4 artykułów i listy 3 jako zamiennik pisania jedno po drugim

}
renderHomePage();



// Zadanie 3. 
// a) Stwórz funkcję displayForm()
// W funkcji:
// b) Stwórz element <form> i nadaj mi id 'contact-form'
// c) Stwórz element <h2> i nadaj mu textContent 'Contact us!'
// d) stwórz element <input> i nadaj mu type'email' oraz id 'contact-form-input-email'
// e) stwórz element <textarea> i nadaj mu id 'contact-form-textarea'
// f) stwórz element <button> i nadaj mu type 'submit', id 'contact-form-submit-button' oraz textContent na 'Send'
// g) podepnij wszystkie elementy (przy pomocy metody appendChild) do elementu form, a sam form podepnij do diva content
// h) testowo wywołaj funkcję


// a)
const displayForm = () => {
// b)
  const form = document.createElement("form");
  form.setAttribute('id', 'contact-form');
  console.log(form);
// c)
  const h2 = document.createElement("h2");
  h2.textContent = "Contact us!";
  console.log(h2);
// d)
  const input = document.createElement("input");
  input.setAttribute('type', 'email');
  input.setAttribute('id', 'contact-form-input-email');
  console.log(input);
// e)
  const textarea = document.createElement("textarea");
  textarea.setAttribute('id', 'contact-form-textarea');
  console.log(textarea);
// f)
  const button = document.createElement("button");
  button.setAttribute('type', 'submit');
  button.setAttribute('id', 'contact-form-submit-button');
  button.textContent = "Send";
  console.log(button);
// g)
form.appendChild(h2);
form.appendChild(input);
form.appendChild(textarea);
form.appendChild(button);
const div = document.getElementById("content");
div.appendChild(form);
console.log(div);
form.addEventListener("submit", function (event) {
  event.preventDefault(); //TYLKO PRZY REAGOWANIU NA SUBMIT - zatrzymuje refresch strony
  console.log(event);
  const inputValue = input.value;
  const textareaValue = textarea.value;
  console.log(inputValue);
  console.log(textareaValue);
})
}
// f)
// displayForm();



// const secondButton = document.createElement("button");
// secondButton.textContent = "Click";
// document.body.appendChild(secondButton);
// secondButton.addEventListener("click", function () {
//   console.log("Clicked!");
// });


const navButtons = document.getElementsByClassName("nav-span");

navButtons[1].addEventListener("click", function () {
  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = "";
  displayForm();
})

//  navButtons[0].addEventListener("click", function () {
//  const contentDiv = document.getElementById("content");
//  contentDiv.innerHTML = "";
//  renderHomePage();
//  })






// Zadanie 4.
// a) Stwórz funkcję renderCalculator.
// b) Stwórz element <form> i ustaw jego id na "calculator"
// c) Stwórz 2 elementy <input>, obu nadaj type 'number', pierwszemu nadaj id 'first-number-input', a drugiemu 'second-number-input
// d) Stwórz element <select>
// e) Stwórz zwykły array: ["+", "-", "*", "/"], nazwij go 'options'
// f) Metodą map przejedź po arrayu options i zapisz wynik do zmiennej optionElements
// *w metodzie map: 
// *stwórz element <options>
// *nadaj mu atrybut value na aktualny element, po którym iterujesz (pierwszy parametr metody map)
// *nadaj mu textCpontent na aktualny element, po którym iterujesz (pierwszy parametr metody map)
// *zwróć element przy pomocy słowa kluczowego return
// g) Wywołaj metodę forEach na liście optionElements
// *w motodzie forEach:
// *podepnij element, po którym aktualnie iterujesz (pierwszy parametr motody forEach do wcześniej stworzonego elementu <select> (.appendChild))
// h) Stwórz element <button>
// *nadaj mu typ 'submit'
// *nadaju mu id 'calculator-submit-button'
// *nadaj mu textContent 'GO'
// i) Stwórz element <span>
// *nadaj mu id 'result-span'
// j) Stwórz element <h2>
// *nadaju mu textContent 'Calculator'
// k) Podepnij wszystkie stworzone elementy do elementu <form> za pomocą metody appendChild, w kolejności
// *h2
// *Input1
// *Input2
// *select
// *submit button
// *result span
// l) Podepnij element form do content div (wybierz go przy pomocy grtElementById, id: "content")
// m) Stwórz nową podstronę i tam wyświetl kalkulator (wywołanie funkcji renderCalculator)


// navButtons[2].addEventListener('click', () => {
//   contentDiv.innerHTML = ...
// })

// a)
const renderCalculator = () => {
// b)
  const form = document.createElement ("form");
  form.setAttribute ('id', 'calculator');
  console.log(form);
// c)
  const input1 = document.createElement ('input');
  input1.setAttribute ('type', 'number');
  input1.setAttribute ('id', 'first-number-input');
  console.log(input1);
  const input2 = document.createElement ('input');
  input2.setAttribute ('type', 'number');
  input2.setAttribute ('id', 'second-number-input');
  console.log(input2);
// d)
  const select = document.createElement ("select");
  console.log(select);
// e)
  const options = ["+", "-", "*", "/"];
  console.log(options);
// f)
  const optionElements = options.map ((el) => {
    console.log(el);
    const option = document.createElement("option");
    option.setAttribute('value', el);
    option.textContent = el;
    return option;
  })
  console.log(optionElements[0]);
  console.log(optionElements[1]);
  console.log(optionElements[2]);
  console.log(optionElements[3]);
// g)
  optionElements.forEach((option) => select.appendChild(option));
  console.log(select);
// h)
const button = document.createElement("button");
button.setAttribute('type', 'submit');
button.setAttribute('id', 'calculator-submit-button');
button.textContent = "GO";
console.log(button);
// i)
const span = document.createElement("span");
span.setAttribute('id', 'result-span');
console.log(span);
// j)
const h2 = document.createElement("h2");
h2.textContent = "Calculator";
console.log(h2);
// k)
form.appendChild(h2);
form.appendChild(input1);
form.appendChild(input2);
form.appendChild(select);
form.appendChild(button);
form.appendChild(span);
// l)
const anotherContentDiv = document.getElementById("content");
anotherContentDiv.appendChild(form);
form.addEventListener("submit", function (event){
  event.preventDefault();
  const input1Value = +input1.value;
  const input2Value = +input2.value;
  const selectValue = select.value;
  if(selectValue === "+") span.textContent = input1Value + input2Value;
  if(selectValue === "-") span.textContent = input1Value - input2Value; 
  if(selectValue === "*") span.textContent = input1Value * input2Value; 
  if(selectValue === "/") span.textContent = input1Value / input2Value; 
})
}

// m)
navButtons[2].addEventListener("click", function () {
  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = "";
  renderCalculator();
})