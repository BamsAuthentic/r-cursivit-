// ============================================================
// PARTIE 1 : PRISE DE DÉCISION
// ============================================================

// ── Tâche 1 : Vérificateur d'année bissextile ──────────────
function estAnneeBissextile(annee) {
  if (annee % 400 === 0) {
    return `${annee} est une année bissextile  (divisible par 400)`;
  } else if (annee % 100 === 0) {
    return `${annee} n'est PAS une année bissextile  (divisible par 100 mais pas par 400)`;
  } else if (annee % 4 === 0) {
    return `${annee} est une année bissextile  (divisible par 4)`;
  } else {
    return `${annee} n'est PAS une année bissextile ❌`;
  }
}

console.log("=== VÉRIFICATEUR D'ANNÉE BISSEXTILE ===");
console.log(estAnneeBissextile(2000)); // bissextile (÷ 400)
console.log(estAnneeBissextile(1900)); // pas bissextile (÷ 100)
console.log(estAnneeBissextile(2024)); // bissextile (÷ 4)
console.log(estAnneeBissextile(2023)); // pas bissextile


// ── Tâche 2 : Tarification des billets ────────────────────
function prixBillet(age) {
  let categorie, prix;

  if (age <= 12) {
    categorie = "Enfant";
    prix = 10;
  } else if (age <= 17) {
    categorie = "Adolescent";
    prix = 15;
  } else {
    categorie = "Adulte";
    prix = 20;
  }

  return `Âge : ${age} ans → Catégorie : ${categorie} → Prix : ${prix}$`;
}

console.log("\n=== TARIFICATION DES BILLETS ===");
console.log(prixBillet(8));   // Enfant
console.log(prixBillet(15));  // Adolescent
console.log(prixBillet(30));  // Adulte
console.log(prixBillet(12));  // Enfant (limite)
console.log(prixBillet(18));  // Adulte (limite)


// ============================================================
// PARTIE 2 : RÉCURSIVITÉ
// ============================================================

// ── Tâche 1 : Suite de Fibonacci ──────────────────────────
function fibonacci(n) {
  // Cas de base
  if (n === 0) return 0;
  if (n === 1) return 1;
  // Appel récursif
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log("\n=== SUITE DE FIBONACCI ===");
for (let i = 0; i <= 10; i++) {
  process.stdout.write(`F(${i})=${fibonacci(i)}  `);
}
console.log(); // saut de ligne

console.log(`\nLe 10ème nombre de Fibonacci est : ${fibonacci(10)}`);
console.log(`Le 15ème nombre de Fibonacci est : ${fibonacci(15)}`);


// ── Tâche 2 : Vérificateur de palindrome ──────────────────
function estPalindrome(chaine) {
  // Nettoyage : minuscules, suppression des non-lettres/chiffres
  const propre = chaine.toLowerCase().replace(/[^a-z0-9]/g, "");

  function verifier(str, gauche, droite) {
    // Cas de base : si les indices se croisent, c'est un palindrome
    if (gauche >= droite) return true;
    // Si les caractères aux extrémités diffèrent → pas un palindrome
    if (str[gauche] !== str[droite]) return false;
    // Appel récursif en avançant vers le centre
    return verifier(str, gauche + 1, droite - 1);
  }

  const resultat = verifier(propre, 0, propre.length - 1);
  return `"${chaine}" → ${resultat ? " PALINDROME" : " PAS un palindrome"}`;
}

console.log("\n=== VÉRIFICATEUR DE PALINDROMES ===");
console.log(estPalindrome("Radar"));
console.log(estPalindrome("Bonjour"));
console.log(estPalindrome("A man a plan a canal Panama"));
console.log(estPalindrome("Kayak"));
console.log(estPalindrome("JavaScript"));
