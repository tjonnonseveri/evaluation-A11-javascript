function encodePassword(password, encodeFunction) {
	// Écrire le code ici
}

function encodeRot8(password) {
	// Écrire le code ici
}

function encodeRot16(password) {
	// Écrire le code ici
}

console.log(encodePassword("abc", encodeRot8)); // Résultat attendu: "ijk";
console.log(encodePassword("abc", encodeRot16)); // Résultat attendu: "qrs";
console.log(encodePassword("xyz", encodeRot8)); // Résultat attendu: "fgh";
console.log(encodePassword("xyz", encodeRot16)); // Résultat attendu: "nop";