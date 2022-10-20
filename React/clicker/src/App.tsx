import { useState } from 'react'; // nie jest to wymagane - może go tu nie być - jest to konwencja używa się jako standard 
import Display from './components/Display/Display';
import Manipulator from './components/Manipulator/Manipulator';

// useX - jakiś hook 

// 3 rzeczy któe pwoodują refresh komponentu:
// a) zmiana stanu komponentu (useState)
// b) zmiana stanu aplikacji (stan zarządzany pezez redux)
// c) zmiana wartości propsów


function App() {
// HOOKI TYLKO NA TOP SCOPE W KOMPONENTACH FUNKCYJNYCH
  const [count, setCount] = useState(0);
// jeżeli zmienia się stan (aktualnizacja wartości zmiennej count), komponent app sie odświeży, znaczy to, żr zmiana wartości zmiennej stanowej powoduje refresh komponentu w którym ta zmienna stanowa została zainicjowana

//  count to zaminna stanowa (wartość), pudełko na dane
// setCount to dedykowana dla count funkcja, której zadaniem jest zmiana wartości zmiennej count

  return (
  <div className="App">
    <Display numberToDisplay = {count} />  
    <Manipulator setCount = {setCount} />
    
  </div>
);
}



//<Display x={y}/> -> Display({x: y})
//props działą tylko w dół z komponentu rodzica do komponentów dzieci


export default App;
