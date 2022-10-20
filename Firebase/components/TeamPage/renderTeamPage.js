// 1. Importy: renderTodoForm; collection, addDoc, getDocs ("gstatic.com/firebasejs/9.8.2/firebase-firestore.js"); obiekt firestore z firebaseConfig
// W funkcji:
// 2. Wybranie i czyszczenie content container
// 3. Stwórz element <h2>, textContent "Your team's todos.", od razu podepnij do content containera
// 4. Wywołaj funkcję renderTodoFrom, wynik zapisz do zmiennej
// 5. Nadaj todo formowi id 'teams-todo-form', od razu podepnij do content containera
// 6. Na todoForm nadaj EL na submit.
// W EL:
// 7. Wybierz todoInput i ściągnij z niego value (id 'todo-input')
// 8. Wybranie i ściągnięcie value z odpowiedniego radio inputa
// 9. Użyj funkcji addDoc do wrzucenia danych do bazy, dodać thena za addDoc żeby potwierdzić poprawność działania funckji, dodaj też catcha
// FUNKCJA COLLECTION: collection(firestore, "teams")

import renderTodoForm from "../TodoForm/renderTodoForm.js";
import { collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js"
import { firestore } from "../../firebaseConfig.js";


export default function () {
    const contentContainer = document.querySelector('.content');
    contentContainer.innerHTML = "";

    const h2 = document.createElement ("h2");
    h2.textContent = "Your team's todos.";
    contentContainer.appendChild(h2);

    const todoForm = renderTodoForm();
    todoForm.setAttribute ("id", "teams-todo-form");
    contentContainer.appendChild(todoForm);

    todoForm.addEventListener ("submit", function (event) {
        event.preventDefault();

        const todoText = document.getElementById("todo-input").value;

        const radios = [...document.getElementsByName("category")];
        const category = radios.find(el => el.checked).value;

        addDoc(collection(firestore, "teams"), {
            todoText,
            category,
        }).then(() => console.log("Pushed the data to Firestore"))
        .catch(() => console.log("Failed to push the data to Firestore"));
    })

// 1. Stwórz element <ul>, id "teams-todo-list"
// 2. Stwórz funkcję asynchroniczną, nazwij ją readDocData.
// W funkcji readDocData:
// 3. Wywołaj funkcję getDocs i ściągnij dane z kolekcji "teams". Wynik wywołania zapisz do zmiennej querySnapshot, pamiętaj o await!
// 4. Na zmiennej querySnapshot wywołaj forEach'a (w parametrze będzie miał doc, (doc) => {...}). W forEach'u stwórz zmienną docs i zapisz w niej wynik wyowołania metody data() na parametrze doc (const docs = doc.data())
// 5. Console.log(docs) żeby zobaczyć co to jest
// 6. Stwórz element <li>, w textContent ma się znaleźć todoText i category
// 7. Podepnij li (pkt 6) do ul (pkt 1).
// ==KONIEC FOREACH I FUNKCJI READDOCDATA==
// 8. Wywołanie readDocData
// 9. Podepnij ul (pkt 1) do content container.

    const ul = document.createElement("ul");
    ul.setAttribute("id", "teams-todo-list");

    const readDocData = async () => {
        try {
        const querySnapshot = await getDocs(collection(firestore, "teams"));
        querySnapshot.forEach((doc) => {
            const docs = doc.data(); 
            console.log(docs);
            const li = document.createElement("li");
            li.textContent = `${docs.todoText} (${docs.category})`;
            ul.appendChild(li);
        })
    } catch (err) {
        console.error(err);
    }
    }
    readDocData();
    contentContainer.appendChild(ul);
}