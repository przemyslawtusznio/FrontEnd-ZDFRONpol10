const fetchStocks = async () => {
    const response = await fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=57SJ44HBV21TM29E`
    );
    console.log(response);
    const data = await response.json();
    console.log(data);
    const tables = Object.entries(data["Time Series (5min)"]);
    console.log(tables);
    const dates = tables.map((el) => el[0]);
    console.log(dates);
    const values = tables.map((el) => el[1]);
    console.log(values);
    const lowValues = values.map((el)=>+el["3. low"]);
    console.log(lowValues);
    const highValues = values.map((el)=>+el["2. high"]);
    console.log(highValues);
    const min = Math.min(...lowValues);
    console.log(min);
    const max = Math.max(...highValues);
    console.log(max);
    const amplitude = max - min;
    console.log(amplitude);
};
  // https://www.alphavantage.co
  // /query?
  // function=TIME_SERIES_INTRADAY
  // &symbol=IBM
  // &interval=5min
  // &apikey=57SJ44HBV21TM29E
  // fetchStocks();

// Zadanie 1.
// a) wyciągnij z otrzymanego obiektu obiekt 'Time Series (5min)
// b) rozbij ten obiekt na 2 listy: klucze i wartości
// c) z listy wartości powyciągaj wartości low (pole '3. low')
// d) odszukaj z tej listy najmniejszą wartość i wyświetl ją do konsoli
// e) z listy wartości powyciągaj wartości high (pole '2. high')
// f) odszukaj z tej listy największą wartość i wyświetl ją do konsoli
// g) oblicz amplitude tych wartości (różnica między wartością najwięszką a najmniejszą)