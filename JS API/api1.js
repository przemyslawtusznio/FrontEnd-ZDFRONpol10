const fetchFootballData = async () => {
    const options = {
        method: "GET",
        headers: {
            "X-Auth-Token": "bfbbf9c1bd8f40bcaf0246b1e9bfa678",
        }
    }
    const res = await fetch("https://api.football-data.org/v2/competitions/CL/standings", options);
    console.log(res);
    const data = await res.json();
    console.log(data);
    
}
fetchFootballData();

// Zadanie 1
// a) znajdź i wypisz nazwę rozgrywek
// b) znajdź i wypisz sezon jako string (format np. Sezon 1977/78, Sezon 2001/2002), można to zrobić przy pomocy daty rozpoczęcia i zakończenia sezonu (pamiętaj o metodzie slice)