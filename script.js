// Zadání
// Pokud se přihlásíte jako student například na Fakultu Informačních Technologí ČVUT, bude vám informačním systémem automaticky přidělen e-mail, který se vytvoří z vašeho jména a příjmení. Z vašeho příjmení se vezme pět prvních znaků a z vašeho křestního jména první tři. Výsledek se převede na malá písmena a připojí se doména fit.cvut.cz. Pro jméno Jana Procházková tak vznikne adresa prochjan@fit.cvut.cz.

// Vytvořte webovou stránku, která požádá uživatele nejdříve o jeho křestní jméno a pak příjmení, obojí bez diakritiky.
// Pomocí metody trim zajistěte, že ve jméně ani příjmení nebudou na začátku ani na konci žádné bílé znaky.
// Pomocí metody slice vyřízněte ze jména i příjmení příslušné části.
// Pomocí interpolace řetězců sestavte výslednou adresu a vypište ji do stránky.

const jmeno = (prompt("Zadej jméno bez diakritiky:")).trim()
const prijmeni = (prompt("Zadej příjmení bez diakritiky")).trim()

document.body.innerHTML += `${prijmeni.slice(0,5)}${jmeno.slice(0,3)}@fit.cvut.cz`