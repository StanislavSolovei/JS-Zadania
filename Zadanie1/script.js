let ilosc = document.getElementById("paliwo");
    let benzyn = document.getElementById("1");
    let napedowy = document.getElementById("2");
    let wynik = document.getElementById("wynik");
function liczenie(){
    if(benzyn.checked){
        let benzyn = 5
        let result = ilosc.value * benzyn
        wynik.innerHTML = "Koszt paliwa: " + result + " zł" 
    }
    if(napedowy.checked){
        let napedowy = 6
        let result = ilosc.value * napedowy
        wynik.innerHTML = "Koszt paliwa: " + result + " zł" 
    }
}