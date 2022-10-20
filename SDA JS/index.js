let count = 0;
let sum = 0;
let max = -9999999999; //czy liczba podana przez użytkownika jest
//większa od maxa? i dalej jak max był np 7 to petla zapyta czy
//liczba jest większa od 7?
let min = 9999999999; //analogicznie tylko na odwrót
while (true) {
  let number = parseInt(prompt("Podaj liczbę całkowitą"));
  if (number === 0) {
    break;
  }
  count++;
  sum = sum + number;
  if (number > max) {
    console.log ("Weszło" + "number")
    max = number; //i jeżeli podany number jest większy od max
    //to number podstawia się za max
  }
  if (number < min) {
    min = number; //analogicznie
  }
}

console.log(sum / count);
console.log(max + min);

// rozpoczynamy pętle, pytamy użytkownika o liczbę całkowitą,
//podał 1 program patrzy czy liczba jest równa 0 - nie jest więc
//program znowu pyta o liczbę (a pod spodem do count dodaje 1 -
//jest to ilość zapytań użytkownika - jak poda 0 to nie bedzie
//policzone)... użytkownik podał 0 program patrzy, że liczba jest
// równa 0 wtedy przechodzi d obreak

//sum początkowo jest 0 po przjściu pętli użytkownik podał 5 więc
//0 + 5 to 5 i od teraz sum jest 5, następnie użytkownik podaje
//6 i teraz aktualne sum jest 5 i dodajemy 6 i wychodzi 11 itd...
