function opinia(autor, wiadomosc, data){
    return "<div class='opinia row my-5'> <div class='text col-md-8 col-xs-12'>" + autor + ": " + wiadomosc+ "</div>" + "<div class='godzina col-md-2 col-xs-12'>" + data +"</div>";
}

document.getElementById('autor').addEventListener("click", function(){
    alert("Autor strony: Igor\nKlasa: I TD");
})

document.getElementById('wirus').addEventListener("click", function(){
    window.open(window.location.href);
})

if(document.getElementById('edytuj')){
    document.getElementById('edytuj').addEventListener("click", function(){
        document.getElementById("opis").innerText = prompt("Wprowadz nowy opis"); 
    })
}

if(document.getElementById('dodaj')){
    document.getElementById('dodaj').addEventListener("click", function(){
        var nazwa = document.getElementById("nazwa").value;
        var wiadomosc = document.getElementById("wiadomosc").value;
        var lista = document.getElementById("lista");
        var data = new Date;

        var rok = data.getFullYear();
        var miesiac = data.getMonth();
        var dzien = data.getDay();

        var godzina = data.getHours();
        var minuty = data.getMinutes();


        if(wiadomosc.length==0){
            alert("Wprowadz wiadomosc");
        }else{
            var akcept = confirm("Czy opublikować opinie?");

            if(lista.innerText == "Brak opini"  &&akcept){
                lista.innerHTML = "";
            }
        
            if(akcept){
                lista.innerHTML += opinia(nazwa, wiadomosc, ( godzina+":"+minuty+ " "+miesiac+"."+dzien+"."+rok));
            }
        }
    })
}