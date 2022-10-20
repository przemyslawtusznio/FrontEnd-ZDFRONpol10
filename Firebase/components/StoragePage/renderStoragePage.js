// 1. Importy: storage z firebaseConfig; uploadBytes, ref ("gstatic.com/firebasejs/9.8.2/firebase-storage.js")
// W funkcji:
// 2. Wybranie i czyszczenie content containera
// 3. Stwórz element <h2>, textContent 'Upload your profile photo!', od razu podepnij pod content container.
// 4. Stwórz element <form>, id "file-form".
// 5. Stwórz element <input>, id 'file-input', type 'file', accept "image/png, image/jpeg"
// 6. Stwórz element <button>, id "file-form-submit-button", type "submit", textContent "Upload your file"
// 7. Do form (pkt 4) podepnij input i submit button
// 8. Do content containera podepnij form
// 9. Funkcję zaimportuj do index.js, podepnij event listener do storage buttona i tam wywołuj renderStoragePage

import { storage, auth } from "../../firebaseConfig.js";
import { uploadBytes, ref } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-storage.js";


export default function () {
    const contentContainer = document.querySelector(".content");
    contentContainer.innerHTML ="";

    const h2 = document.createElement("h2");
    h2.textContent = "Upload your profile photo!";
    contentContainer.appendChild(h2);

    const form = document.createElement("form");
    form.setAttribute("id", "file-form");

    const input = document.createElement("input");
    input.setAttribute("id", "file-input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/png, image/jpeg");

    const button = document.createElement("button");
    button.setAttribute("id", "file-form-submit-button");
    button.setAttribute("type", "submit");
    button.textContent = "Upload your file";

    form.appendChild(input);
    form.appendChild(button);

    contentContainer.appendChild(form);

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const storageRef = ref(storage, `/users/${auth.currentUser.uid}/avatar`)

        const file = input.files[0];
        uploadBytes(storageRef, file)
        .then(() => console.log("File uploaded"))
        .catch(() => console.log("Failed to upload the file"));
    })
}

