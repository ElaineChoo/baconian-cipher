let baconian = {
	A: "aaaaa",
	B: "aaaab",
	C: "aaaba",
	D: "aaabb",
	E: "aabaa",
	F: "aabab",
	G: "aabba",
	H: "aabbb",
	I: "abaaa",
	K: "abaab",
	L: "ababa",
	M: "ababb",
	N: "abbaa",
	O: "abbab",
	P: "abbba",
	Q: "abbbb",
	R: "baaaa",
	S: "baaab",
	T: "baaba",
	U: "baabb",
	W: "babaa",
	X: "babab",
	Y: "babba",
	Z: "babbb"
};

//encode baconian
let inputStr = process.argv[2].toUpperCase();

let inputArray = inputStr.split(' ');
inputArray = inputArray.join('');
console.log(inputArray);
let encodedArray = [];

for (let i = 0; i < inputArray.length; i++) {
	
	// for (let j = 0; j < baconian.length; j++) {
	// 	if (inputArray[i] === baconian[j]) {
	// 		encodedArray.push(baconian[j])
	// 	}
	// }
	if (inputArray[i] === "J") {
		encodedArray.push("abaaa");
	}
	else if (inputArray[i] === "V") {
		encodedArray.push("baabb");
	}
	else {
		for (let key in baconian) {
			if (inputArray[i] === key) {
				encodedArray.push(baconian[key]);
			}
		}
	}
}

let encodedStr = encodedArray.join(' ');

console.log (encodedStr);