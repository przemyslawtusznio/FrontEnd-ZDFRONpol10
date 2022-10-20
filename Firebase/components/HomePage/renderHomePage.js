// W funkcji poniżej:
// 1. Przy użyciu querySelector wybierz sekcje o klasie "content" i odrazu wyczyść przy pomocy innerHTML.
// 2. Stwórz element <h2> i nadaj mu textContent "Welcome".
// 3. Stwórz paragraf <p> i nadaj mu textContent "This is a simple web page written in vanilla JavaScript, used as a practice project in frontend courses at Software Development Academy. Block subject: Firebase.".
// 4. Podepnij h2 i p do sekcji "content"
export default function () {
    const contentContainer = document.querySelector(".content");
    contentContainer.innerHTML = "";
    const h2 = document.createElement("h2");
    h2.textContent = "Welcome!";
    const p = document.createElement("p");
    p.textContent =
      "This is a simple web page written in vanilla JavaScript, used as a practice project in frontend courses at Software Development Academy. Block subject: Firebase.";
    contentContainer.appendChild(h2);
    contentContainer.appendChild(p);
  }

