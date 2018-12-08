function isPriem(getal)
{
    for(var i = 2; i < getal; i++)
        if(getal % i == 0) return false;
    return true;
}

function vraagEnBeoordeelGetallen()
{
    var getal = prompt("Geef een strikt positief getal ('stop' om te stoppen)");
    getal = getal.toLowerCase();
    while(getal != "stop")
    {
        while(isNaN(getal) && getal != "stop")
        {
            getal = prompt(getal + " is geen getal. Geef een getal! ('stop' om te stoppen)");
        }
        if(!isNaN(getal))
        {
            alert("we hebben al een getal");
            while(getal <= 0 && getal != "stop")
            {
                getal = prompt(getal + " is geen strikt positief getal. Geef een strikt positief getal! ('stop' om te stoppen)");
            }
            if(!isNaN(getal))
            {
                if(isPriem(getal))
                    alert(getal + " is een priemgetal");
                else
                    alert(getal + " is geen priemgetal");
            }
            getal = prompt("Geef nog een strikt positief getal ('stop' om te stoppen)");
        }
    }
}

setTimeout(vraagEnBeoordeelGetallen, 1000);
//window.onload = vraagEnBeoordeelGetallen; // werkt niet - javascript wordt uitgevoerd voor/tijdens laden