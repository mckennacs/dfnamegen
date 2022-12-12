class Dwarf {
	constructor(first, last) {
		this.first = first;
		this.last = last;
	}

	generateName() {
		let fullName = this.first + " " + this.last;
		console.log(fullName);
	}
}

const dwarfLanguage = [
	"Aban",
	"Adil",
	"Alåth",
	"Asmel",
	"Asob",
	"Ast",
	"Astesh",
];

let randIndex = Math.floor(Math.random() * dwarfLanguage.length);
let randIndex2 = Math.floor(Math.random() * dwarfLanguage.length);
var firstName = dwarfLanguage[randIndex];
var lastName = dwarfLanguage[randIndex2];

var randomDwarf = new Dwarf(firstName, lastName);
randomDwarf.generateName();
