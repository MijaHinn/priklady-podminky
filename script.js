console.log('%c JavaScript funguje ', 'background:black;color:yellow;');

/*
Příklad 1: Sudé a liché číslo
Zadání: Napište program, který zjistí, zda zadané číslo je sudé nebo liché, a výsledek vypíše na konzoli.
*/

const cislo = 13;

if ((cislo % 2) === 1) {
    console.log("Číslo je liché")
} else {
    console.log("Číslo je sudé")
}

/*
Příklad 2: Kontrola věku
Zadání: Napište program, který zkontroluje, zda je zadaný věk uživatele 18 let nebo více. Podle toho vypíše na konzoli, zda je uživatel starší nebo mladší 18 let.
*/

const vek = 15;

if (vek < 18) {
    console.log("Uživatel je mladší 18 let");
} else {
    console.log("Uživatel je starší 18 let");
}

/*
Příklad 3: Porovnání čísel
Zadání: Napište program, který porovná dvě zadaná čísla a na konzoli vypíše, zda je první číslo větší, menší, nebo rovno druhému číslu.
*/

const cislo1 = 9;
const cislo2 = 5;

if (cislo1 < cislo2) {
    console.log("První číslo je menší než druhé");
} else if (cislo1 === cislo2) {
    console.log("První číslo se rovná druhému");
} else {
    console.log("První číslo je větší než druhé");
}

/*
Příklad 4: Roční období
Zadání: Napište program, který podle zadaného čísla měsíce (1-12) určí, do jakého ročního období měsíc patří (jaro, léto, podzim, zima), a výsledek vypíše na konzoli. Pokud je zadaný neplatný měsíc, program vypíše na konzoli chybovou zprávu.
*/

const mesic = 1;

if ((mesic <= 2) || (mesic === 12)) {
    console.log("Zima");
} else if ((mesic >= 3) && (mesic <= 5)) {
    console.log("Jaro");
} else if ((mesic >= 6) && (mesic <= 8)) {
    console.log("Léto");
} else if ((mesic >= 9) && (mesic <= 11)) {
    console.log("Podzim");
} else {
    console.log("Neplatné číslo měsíce");
}

/*
Příklad 5: Základní kalkulačka
Zadání: Napište základní kalkulačku, která podle zadané operace (+, -, *, /) provede výpočet se dvěma zadanými čísly a výsledek vypíše na konzoli. Symbol operace bude uložený v proměnné jako textový řetězec.
*/

const cis1 = 2;
const cis2 = 5;

const operace = "*";

if (operace === "+") {
    console.log(cis1 + cis2);
} else if (operace === "-") {
    console.log(cis1 - cis2);
} else if (operace === "*") {
    console.log(cis1 * cis2);
} else if (operace === "/") {
    console.log(cis1 / cis2);
}