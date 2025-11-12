/******************************************************************************
OPPGAVE 1

Din første oppgave er å koble denne JavaScript-filen til index.html-filen
ved å bruke en av metodene vi viste i første forelesning.

<-- Finn index.html-filen i filutforskeren og koble den til denne filen,
javascript.js
******************************************************************************/

// Løs denne oppgaven i index.html

/******************************************************************************
OPPGAVE 2

I forrige undervisning lærte vi hvordan man lager variabler som kan holde ulike
typer verdier. Lag noen variabler med følgende datatyper:
- String (tekst)
- Number (tall)
- Boolean (sann/usann)
- Array (liste)

Du kan velge hva innholdet i variablene skal være. Prøv å bruke både let og 
const når du definerer variablene.
******************************************************************************/

// Skriv koden for oppgave 2 her

string
let tekst ="tekst";
//console.log(tekst);


number
const numberOfUmbrellasAtHome = 5;
//console.log(numberOfUmbrellasAtHome);


boolean
let itsRaining = true
if(itsRaining)
  /*  {
    console.log("take an umbrella");
} else {
    console.log("enjoy the sunshine")
}
*/

Array
let orderOfCounting = [1,2,3]
//console.log(orderOfCounting);


/******************************************************************************
OPPGAVE 3

Prøv ut noen av operatorene vi så på i forrige forelesning:
- Matematiske operatorer: +, -, /, *
- Forkortede operatorer: ++, --, +=, -=

Skriv noen eksempler der du tester disse operatorene.
******************************************************************************/

// Skriv koden for oppgave 3 her

let sum = 10+10;
//console.log(sum);

let sum2 = 3**3;
//console.log(sum2);

let sum3 = 3;
sum3++;
//console.log(sum3);



/******************************************************************************
OPPGAVE 4

Skriv en IF/ELSE-betingelse som sjekker følgende:
1. At userName ikke er tom ("").
2. At userAge er 18 eller eldre.
3. At userIsBlocked er false.

(TIPS: Bruk && (logisk OG) for å sjekke alle tre betingelsene i én IF-setning.)

- Hvis alle disse betingelsene er oppfylt, skal du sette variabelen
userIsLoggedIn til true og goToPage til "/home". Deretter skriver du ut en 
velkomstmelding med console.log.

- Hvis noen av betingelsene IKKE er oppfylt, skal du skrive ut en feilmelding
med console.log.

Prøv å endre verdiene på variablene for å sikre at IF/ELSE-setningen din 
håndterer alle tilfeller korrekt.
******************************************************************************/

let userName = "";
let userAge = 18;
let userIsLoggedIn = false;
let userIsBlocked = false;
let goToPage = "";

// Skriv koden for oppgave 4 her

const welcome = "Welcome in!";
const errorMsg = "Error";

if (userName && userAge <= 18 && !userIsBlocked ){
    goToPage="./home";  
    userIsLoggedIn = true;
    userIsLoggedIn = !userIsLoggedIn;
    console.log(welcome);
}else{
    console.log(errorMsg);
}
//fant ikke ut av denne. 




/******************************************************************************
OPPGAVE 5

Lag en variabel kalt userTitle og sett innholdet til å være:
- "Mr." hvis userMale er true, eller
- "Mrs." hvis userMale er false.

Bruk en ternary conditional for dette:

const variabel = betingelse ? "hvis sann" : "hvis usann";

Prøv å endre userMale til både true og false og bruk console.log for å sjekke
at betingelsen din fungerer som den skal.
******************************************************************************/



// Skriv koden for oppgave 5 her

const userMale = false;
const userTitle = userMale ? "Mr." : "Mrs.";
console.log(userTitle);


