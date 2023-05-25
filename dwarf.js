class Dwarf {
	constructor(first, middle, last) {
		this.first = first;
		this.middle = middle;
		this.last = last;
	}

	combineName() {
		let fullName = this.first + " " + this.middle + this.last.toLowerCase();
		return fullName;
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
	"Asën",
	"Athel",
	"Atír",
	"Atîs",
	"Avuz",
	"Ber",
	"Besmar",
	"Bim",
	"Bomrek",
	"Bëmbul",
	"Catten",
	"Cerol",
	"Cilob",
	"Cog",
	"Dakost",
	"Dastot",
	"Datan",
	"Deduk",
	"Degël",
	"Deler",
	"Dodók",
	"Domas",
	"Doren",
	"Ducim",
	"Dumat",
	"Dumed",
	"Dîshmab",
	"Dôbar",
	"Edzul",
	"Eshtân",
	"Goden",
	"Ingish",
	"Kogsak",
	"Kosoth",
	"Kûbuk",
	"Litast",
	"Lòr",
	"Momuz",
	"Mûthkat",
	"Oddom",
	"Meng",
	"Mörul",
	"Onget",
	"Rakust",
	"Rigòth",
	"Sarvesh",
	"Shem",
	"Sibrek",
	"Sigun",
	"Sodel",
	"Thob",
	"Thîkut",
	"Udib",
	"Urvad",
	"Vabôk",
	"Zaneg",
	"Zuglar",
	"Zutthan",
	"Èzum",
	"Ïteb",
	"Ùshrir",
];

const professions = [
	"Miner",
	"Woodworker",
	"Bowyer",
	"Stoneworker",
	"Engraver",
	"Mason",
	"Animal Caretaker",
	"Trapper",
	"Bone Doctor",
	"Crutch-walker",
	"Surgeon",
	"Cheese maker",
	"Gelder",
	"Potash maker",
	"Shearer",
	"Thresher",
	"Soaper",
	"Mechanic",
	"Pump Operator",
	"Comedian",
	"Flatterer",
	"Indimidator",
	"Judge of intent",
	"Liar",
	"Knife user",
	"Crossbowman",
	"Wreslter",
	"Maceman",
	"Misc. object user",
	"Ranger",
	"Doctor",
	"Farmer",
	"Fisherdwarf",
	"Metalsmith",
	"Jeweler",
	"Craftsdwarf",
	"Engineer",
	"Administrator",
	"Scholar",
];

const dwarfButton = document.getElementById("dwarf-btn");
dwarfButton.addEventListener("click", createName);

const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", clearList);

const dwarfNames = document.getElementById("dwarf-names");
const flashTiming = setInterval(flashText, 1000);

function flashText() {
	let currentLine = dwarfNames.lastElementChild;
	currentLine.style.color =
		currentLine.style.color == "white" ? "#00FF00" : "white";
}

function clearList() {
	document.location.reload();
}

function makeRandomDwarf() {
	let nameParts = [];

	for (let i = 0; i < 3; i++) {
		nameParts[i] =
			dwarfLanguage[Math.floor(Math.random() * dwarfLanguage.length)];
	}
	let randomDwarf = new Dwarf(nameParts[0], nameParts[1], nameParts[2]);
	return randomDwarf;
}

function generateJob() {
	let job = professions[Math.floor(Math.random() * professions.length)];
	return job;
}

function generateName() {
	let nameParts = [];

	for (let i = 0; i < 3; i++) {
		nameParts[i] =
			dwarfLanguage[Math.floor(Math.random() * dwarfLanguage.length)];
	}
	let randomDwarf = new Dwarf(
		nameParts[0],
		nameParts[1],
		nameParts[2]
	).combineName();

	return randomDwarf;
}

function createName(dwarf, job) {
	job = generateJob();
	dwarf = generateName();

	let cursor = document.getElementById("cursor");
	let listName = document.createElement("li");

	let skillScore = Math.floor(Math.random() * 100);
	let skillLevel;

	if (skillScore < 50) {
		nameColor = "white";
		skillLevel = "Adequate";
	} else if (skillScore >= 50 && skillScore < 70) {
		nameColor = "#008080";
		skillLevel = "Proficient";
	} else if (skillScore >= 70 && skillScore < 80) {
		nameColor = "#00FFFF";
		skillLevel = "Accomplished";
	} else if (skillScore >= 80 && skillScore < 90) {
		nameColor = "#7BFF00";
		skillLevel = "Grand Master";
	} else if (skillScore >= 90) {
		nameColor = "#F400A1";
		skillLevel = "Legendary";
		listName.classList.add("legendary");
	}

	listName.innerText = dwarf + ", " + skillLevel + " " + job;
	listName.style.color = nameColor;

	dwarfNames.insertBefore(listName, cursor);
}
