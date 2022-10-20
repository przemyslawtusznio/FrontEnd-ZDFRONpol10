// BLOK HTTP

//1. GET

// a) XMLHttpRequest
const XMLGetRequest = () => {
    const request = new XMLHttpRequest();
    console.log(request);

    // open (konfiguracja)
    request.open("GET", 'https://jsonplaceholder.typicode.com/todos/1'); //nasz url to endpoint

    //send (wysyłanie requesta)
    request.send();

    //onload (oczekiwanie i reakcja na response)
    request.onload = function(){
    const obj = JSON.parse(request.response);
    console.log(obj);
        //JSON.parse() // JSON => JS obj
        //JSON.stringify() // JS obj => JSON
    }

    // error handling
    request.onerror = function(){
        console.error("Something went wrong!");
        // tu np Logika odpowiadające za wyświetlanie wiadomości o błędzie na stronie
    }

}
//XMLGetRequest(); - zakomentowaliśmy wywołanie żeby nie spamiło consoli

// b) Fetch API + then chain
const FetchGetRequest = function() {
    //fetch domyślnie działa na metodzie GET
    //fetch zwraca Promise
    //fetch to open i send a than to onload (dużo krótszy zapis)
    fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => {
        console.log(response);
        return response.json(); //rozpakowanie surowych danych z response i zwraca Promis, który zwraca gotowy obiekt (zwraca gotowy do użycia obiekt) - .json()
    })
    .then((data) => {
        console.log(data);
        //... wyświetlamy rozpakowane pliki
    })
    .catch((err) => {
        console.error(err);
    });
}
// FetchGetRequest(); - zakomentowaliśmy wywołanie żeby nie spamiło consoli

// c) Fetch API - async/await
const FetchGetRequestAsync = async function () {
    try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    console.log(response);
    const data = await response.json();
    console.log(data);
} catch (err) {
    console.error(err.message);
}
}
// FetchGetRequestAsync(); - zakomentowaliśmy wywołanie żeby nie spamiło consoli

// 2. POST

// a) XMLHttpRequest
const XMLPostRequest = () => {
    const request = new XMLHttpRequest();
  
    const body = JSON.stringify({
      title: "Fetching is awesome!",
      body: "Just a placeholder post.",
      userId: 15,
    });
    console.log(body);

    request.open("POST", "https://jsonplaceholder.typicode.com/posts");
    request.send(body);
  
    
    request.onreadystatechange = function () {
      console.log(request.response);
    };
    request.onerror = function(){
        console.error("Something went wrong!");
  };
}
  // XMLPostRequest(); - zakomentowaliśmy wywołanie żeby nie spamiło consoli

  // b) Fetch API + then chain
  const FetchPostRequest = () => {

    const options = {
        method: "POST",
        body: JSON.stringify({
            title: "I prefere Axios over Fetch API",
            body: "But Fetch API is also good!",
            userID: 20,
        })
    };

    fetch("https://jsonplaceholder.typicode.com/posts", options)
    .then((res) => 
        console.log(res.status));
//    .then((res) => {
//        return res.json();
//    })
//    .then((data) => console.log(data));
  }
  //FetchPostRequest(); - zakomentowaliśmy wywołanie żeby nie spamiło consoli

// c) Fetch API - async/await
const FetchPostRequestAsync = async function () {

    const options = {
        method: "POST",
        body: JSON.stringify({
            title: "I prefere Axios over Fetch API",
            body: "But Fetch API is also good!",
            userID: 20,
        })
    };

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", options);
        console.log(response);
        const data = await response.json();
        console.log(data);
    } catch (err) {
        console.error(err.message);
    }
}
//FetchPostRequestAsync(); - zakomentowaliśmy wywołanie żeby nie spamiło consoli

// 3. DELETE

// a) XMLHttpRequest
const XMLDeleteRequest = () => {
    const request = new XMLHttpRequest();
    console.log(request);
    request.open("DELETE", "https://jsonplaceholder.typicode.com/posts/1");
    request.send();
    request.onload = function() {
        const obj = JSON.parse(request.response);
        console.log(obj);
    }
    request.onerror = function(){
        console.error("Something went wrong!");
    }
}

// XMLDeleteRequest();

// b) Fetch API + then chain
const FetchDeleteRequest = function(){
    const option = {
        method: "DELETE",
    }
    fetch("https://jsonplaceholder.typicode.com/posts/1", options)
    .then((response) => {
        console.log(response);
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.error(err);
    })
}

// FetchDeleteRequest();

// c) Fetch API - async/await
const FetchDeleteRequestAsync = async function () {

    const options = {
        method: "DELETE",
        };

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", options);
        console.log(response);
        const data = await response.json();
        console.log(data);
    } catch (err) {
        console.error(err.message);
    }
}
// FetchDeleteRequestAsync();

// 4. PUT
// Aktualizacja i nadpisywanie istniejących danych

// a) XMLHttpRequest
const XMLPutRequest = () => {
    const request = new XMLHttpRequest();
  
    const body = JSON.stringify({
      title: "Fetching is awesome!",
      body: "Just a placeholder post.",
      userId: 15,
    });
    console.log(body);

    request.open("PUT", "https://jsonplaceholder.typicode.com/posts/1");
    request.send(body);
  
    
    request.onload = function () {
      console.log(request.response);
    };
    request.onerror = function(){
        console.error("Something went wrong!");
  };
}
// XMLPutRequest();

// b) Fetch API + then chain
const FetchPutRequest = () => {

    const options = {
        method: "PUT",
        body: JSON.stringify({
            title: "I prefere Axios over Fetch API",
            body: "But Fetch API is also good!",
            userID: 20,
        })
    };

    fetch("https://jsonplaceholder.typicode.com/posts/1", options)
    .then((res) => 
        console.log(res.status));
    
  }
// FetchPutRequest();

// c) Fetch API - async/await
const FetchPutRequestAsync = async function () {

    const options = {
        method: "PUT",
        body: JSON.stringify({
            title: "I prefere Axios over Fetch API",
            body: "But Fetch API is also good!",
            userID: 20,
        })
    };

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", options);
        console.log(response);
        const data = await response.json();
        console.log(data);
    } catch (err) {
        console.error(err.message);
    }
}
// FetchPutRequestAsync();



// 5. PATCH
//Metoda bliźniacza do PUT

// a) XMLHttpRequest
const XMLPatchRequest = () => {
    const request = new XMLHttpRequest();
  
    const body = JSON.stringify({
      title: "Fetching is awesome!",
    });
    console.log(body);

    request.open("PATCH", "https://jsonplaceholder.typicode.com/posts/1");
    request.send(body);
  
    
    request.onload = function () {
      console.log(request.response);
    };
    request.onerror = function(){
        console.error("Something went wrong!");
  };
}
// XMLPatchRequest();

// b) Fetch API + then chain
const FetchPatchRequest = () => {

    const options = {
        method: "PATCH",
        body: JSON.stringify({
            title: "I prefere Axios over Fetch API",
        })
    };

    fetch("https://jsonplaceholder.typicode.com/posts/1", options)
    .then((res) => 
        console.log(res.status))
    .catch((err) => {
        console.error(err);
    });
  }
// FetchPutRequest();

// c) Fetch API + async/await
const FetchPatchRequestAsync = async function () {

    const options = {
        method: "PATCH",
        body: JSON.stringify({
            title: "I prefere Axios over Fetch API",
        })
    };

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", options);
        console.log(response);
        const data = await response.json();
        console.log(data);
    } catch (err) {
        console.error(err.message);
    }
}
// FetchPatchRequestAsync();