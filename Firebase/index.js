import renderHomePage from "./components/HomePage/renderHomePage.js";
import renderLoginPage from "./components/LoginPage/renderLoginPage.js";
import { auth } from "./firebaseConfig.js";
import{ signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js"
import renderTodoForm from "./components/TodoForm/renderTodoForm.js";
import renderTodoPage from "./components/TodoPage/renderTodoPage.js";
import renderTeamPage from "./components/TeamPage/renderTeamPage.js";
import renderStoragePage from "./components/StoragePage/renderStoragePage.js";

// Selecting the content section
const contentContainer = document.querySelector(".content");

// Selecting navbar anchors
const homeButton = document.getElementById("home-anchor");
const todosButton = document.getElementById("todos-anchor");
const storageButton = document.getElementById("storage-anchor");
const publicButton = document.getElementById("public-anchor");
const loginButton = document.getElementById("login-anchor");

// Reacting to auth state change 
onAuthStateChanged(auth, (user) => {
    if (user){
        console.log(`User is logged in (${user.email}), onAuthStateChanged`)
        loginButton.textContent = "Log out";
        const h2 = document.querySelector("h2");
        console.log(h2.textContent);
        if (h2.textContent === "Welcome!") {
            const storageRef = ref(storage, `/user/${auth.currentUser.uid}/avatar`);
            getDownloadURL(storageRef)
            .then((url) => {
            const img = document.createElement("img");
            img.setAttribute("src", url);
            contentContainer.appendChild(img);
      })
        }
    } else {
        console.log("No user logged in, onAuthStateChanged");
        loginButton.textContent = "Log in"; 
    }
})

// Rendering the home page on initial page load
renderHomePage();

// Navbar buttons listeners

// Home button
homeButton.addEventListener("click", function() {
    renderHomePage();
});

//Login button
loginButton.addEventListener("click", function() {
    if (auth.currentUser) {
        signOut(auth)
        .then (() => renderHomePage())
        .catch((err) => console.log(err))
    } else {
        renderLoginPage();
    }
})

//Todos Button
todosButton.addEventListener("click", function() {
    contentContainer.innerHTML ="";
    const user = auth.currentUser;
    user ? renderTodoPage() : renderLoginPage();
})

//Public Button
publicButton.addEventListener("click", function(event){
    renderTeamPage();
})

//Storage Button
storageButton.addEventListener("click", function(event) {
    renderStoragePage();
})