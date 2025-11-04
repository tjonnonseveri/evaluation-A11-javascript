function getReduction(price, age) {
	if (age <= 25 && age > 18) {
		return price - price * 0.3;
	}
	if (age <= 18 && age > 5) {
		return price - price * 0.5;
	}
	if (age <= 5) {
		return 0;
	}
}

console.log(getReduction(10, 5)); // Résultat attendu: 0
console.log(getReduction(150, 25)); // Résultat attendu: 45
