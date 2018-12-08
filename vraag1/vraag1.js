function isPriem(getal)
{
    if(getal == 1) return false;
    for(var i = 2; i < getal; i++)
        if(getal % i == 0) return false;
    return true;
}

function isGeldigeInput(input)
{
    if(isNaN(input)) return input + " is geen nummer";
    if(input <= 0) return input + " is geen strikt positief getal";
    return "";
}

function schrijfNaarPagina(tekst, className)
{
    var div = document.getElementById("console");
    var p = document.createElement("p");
    p.innerHTML = tekst;
    p.className = className;
    div.appendChild(p);
}

function vraagEnBeoordeelGetallen()
{
    var getal = prompt("Geef een strikt positief getal ('stop' om te stoppen)");
    getal = getal.toLowerCase();
    while(getal != "stop")
    {
        var feedback = isGeldigeInput(getal);
        if(feedback != "")
            alert(feedback);
        else
            if(isPriem(getal))
                schrijfNaarPagina(getal + " is een priemgetal", "priem");
            else
                schrijfNaarPagina(getal + " is geen priemgetal", "geenPriem");
        
        getal = prompt("Geef nog een strikt positief getal ('stop' om te stoppen)");
        getal = getal.toLowerCase();
    }
    alert("Gedaan!");
}

setTimeout(vraagEnBeoordeelGetallen, 1000);
//window.onload = vraagEnBeoordeelGetallen; // werkt niet - javascript wordt uitgevoerd voor/tijdens laden