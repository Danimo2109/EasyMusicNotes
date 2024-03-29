Notenliste=["C1","D1","E1","F1","G1","A1","H1","Cis","Dis","Fis","Gis","Ais","Des","Es","Ges","As","b1"];
Länge=Notenliste.length -1;
AnzahlDerNoten=6;

function noteNameFromFileName(bildDateiName) {
    let lastSlashPosition =bildDateiName.lastIndexOf("/") //Wir brauchen den letzten Slash, weil danach der Notenname kommt. 
    notenName=bildDateiName.substr (lastSlashPosition + 1,3).replace (".", ""); // Aus der Bilddatei wird der Notenname rausgeschnitten. Und zwar ab der ersten Position nach dem Slash (deswegen +1). 
                                                                            // Der Notenname kann max. 3 Zeichen lang sein. Sollte der Name jedoch nur 2 Zeichen lang sein, würde danach ein Punkt(von ".png") kommen, da
                                                                            // der Punkt in dem Fall das dritte Zeichen nach dem Slash wäre und er deshalb durch nichts ersetzt wird.
    return notenName
}
 
function Random_buttons(params) {// In dieser Funktion werden die unteren Notennamen generiert
    // Alle Knöpfe als nicht beschriftet markieren
    for (let index = 0; index < Knöpfe.length/*28*/; index++) { // Diese Schleife läuft über die Knöpfe unten
      Knöpfe[index].written=false
    } 
    // Erst beschriften wir zufällige Knöpfe mit den angezeigten Noten. So ist sichergestellt, dass die angezeigten Noten 
    // geraten werden können
    desk=document.getElementById("desk"); // 
    Noten=desk.getElementsByClassName("note");
    for (let notenNummer = 0; notenNummer < Noten.length /*5*/; notenNummer++){ //Die Schleife läuft über alle Noten
        
        imgId= "card" + notenNummer + "img"; // Die imgId der Note wird aus card + Notennummer + img zusammengesetzt
        Img = document.getElementById (imgId) // Img wird genommen
        bildDateiName= Img.src; // Die Bilddatei wird genommen
        notenName=noteNameFromFileName(bildDateiName)
        randomButtunNumber=Math.trunc(notenNummer*Knöpfe.length/Notenliste.length)+Math.trunc(Math.random()*Knöpfe.length/Notenliste.length)
        var Knopf;
        do{
          Knopf = Knöpfe[Math.trunc(notenNummer*Knöpfe.length/Notenliste.length)+Math.trunc(Math.random()*Knöpfe.length/Notenliste.length)] // Wir nehmen einen zufälligen Knopf
        }
        while (Knopf.written)
        Knopf.innerHTML=notenName  // Wir nehmen den Notennamen und setzten ihn in den Knopf
        Knopf.written=true     
    }

    // Danach fühlen wir noch nicht beschrifteten Knöpfe mit zufälligen Noten
    for (let index = 0; index < Knöpfe.length/*28*/; index++) { // Diese Schleife läuft über die Knöpfe unten
        const Knopf = Knöpfe[index]; // Knopf, bei dem die Schleife gerade ist
        if (!Knopf.written){
          Knopf.innerHTML=Notenliste[Math.round(Math.random()*Länge)]; // Wir nehmen eine zufällige Note aus der Notenliste und packen sie in den Knopf    
        }   
    } 
}


function handclick1(){
   Randomnotennummer=Math.round(Math.random()*Länge); 
   Randomnote=Notenliste[Randomnotennummer];
    console.log("Text "+Randomnote+" ausgewählt"+" mit der Nummer"+ Randomnotennummer);
    img=document.getElementById("card0img");
    img.src="cards/"+Randomnote+".png"
    Random_buttons()
}

function handclick2(){
    Randomnotennummer=Math.round(Math.random()*Länge);
    Randomnote=Notenliste[Randomnotennummer];
    console.log("Text"+Randomnote+"ausgewählt"+"mit der Nummer"+ Randomnotennummer);
    img=document.getElementById("card1img");
    img.src="cards/"+Randomnote+".png"
    Random_buttons()
}


function handclick3(){
    Randomnotennummer=Math.round(Math.random()*Länge);
    Randomnote=Notenliste[Randomnotennummer];
    console.log("Text"+Randomnote+"ausgewählt"+"mit der Nummer"+ Randomnotennummer);
    img=document.getElementById("card2img");
    img.src="cards/"+Randomnote+".png"
    Random_buttons()
}


function handclick4(){
    Randomnotennummer=Math.round(Math.random()*Länge);
    Randomnote=Notenliste[Randomnotennummer];
    console.log("Text"+Randomnote+"ausgewählt"+"mit der Nummer"+Randomnotennummer);
    img=document.getElementById("card3img");
    img.src="cards/"+Randomnote+".png"
    Random_buttons()

}


function handclick5(){
    Randomnotennummer=Math.round(Math.random()*Länge);
    Randomnote=Notenliste[Randomnotennummer];
    console.log("Text"+Randomnote+"ausgewählt"+"mit der Nummer"+Randomnotennummer);
    img=document.getElementById("card4img");
    img.src="cards/"+Randomnote+".png" 
    Random_buttons()

}
function handclick5(){
    Randomnotennummer=Math.round(Math.random()*Länge);
    Randomnote=Notenliste[Randomnotennummer];
    console.log("Text"+Randomnote+"ausgewählt"+"mit der Nummer"+Randomnotennummer);
    img=document.getElementById("card5img");
    img.src="cards/"+Randomnote+".png" 
    Random_buttons()

}
var notekey="violin"
function handclick6(){
    img=document.getElementById("notekey");
    if (notekey=="violin"){
        img.src="images/Bass.png";
        notekey="bass"

    }
    else {
        img.src="images/Violin.png"
        notekey="violin"

    }
    
}

function randomNotes(){
    handclick2()
    handclick3()
    handclick4()
    handclick5()
    handclick1()
    handclick7()
}

onload=function(){
    noteletter=document.getElementById("noteletter");
    Knöpfe=noteletter.getElementsByClassName("text");
    randomNotes()
    Random_buttons()
    showScore("score-panel", 0)
}
var markedNote=0;// Die erste Note ist null und wird markiert
var score=0;//Der Anfangspunktestand beträgt null

function notePressed(p) {
    pressedNoteName=p.target.innerText
    markedImg = document.getElementById ("card" + markedNote + "img");// Es wird img von der markierten Note ausgewählt
    imgId= "card" + markedNote + "img";
    markedImg = document.getElementById (imgId)
    src= markedImg.src;
    markedNoteName=noteNameFromFileName(src); 
    markedNote = markedNote + 1;// Die Markierung geht auf die nächste Note
    if (markedNote == AnzahlDerNoten){// Sobald es keine Note mehr gibt, die markiert werden kann, wird wieder die Note null markiert und alles wiederholt sich
       markedNote = 0// Die Markierung überträgt sich auf die erste Note
       randomNotes() // neue zufällige Noten
    }
    markedDiv = document.getElementById ("card" + markedNote)// Es wird div von der markierten Note ausgewählt
    markedDiv.classList.add("marked")// Die Höhe wird verändert / Die Note wird markiert  
    for (let index=0; index <AnzahlDerNoten ; index++){// Das ist eine Schleife, die bei der ersten Note beginnt und bis zur 6. Note verläuft
        if (index != markedNote){// Index ist nicht gleich zur markierten Note
            markedDiv = document.getElementById("card" + index)// Es wird die Karte ausgewählt
            markedDiv.classList.remove("marked")// Alle Noten, die nicht ausgewählt sind, nehmen normale Größe an
        }
    }

if (markedNoteName==pressedNoteName){// Es wird überprüft, ob die richtige Note gedrückt wurde.
    score ++ //Wenn die richtige Note gedrückt wurde, bekommt man einen Punkt.
}
else{
    score --// Wenn jedoch die falsche Note gedrückt wurde, wird ein Punkt abgezogen.
}
showScore("score-panel", score)
points = document.getElementById("points")
points.value = score

if (score >= 25){// Sobald die Maximalpunktzahl, 50, erreicht wird,...
    points.value="YOU WON!"//...Erscheint "YOU WON!"
}
}

