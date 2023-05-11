var rank = "Not selected";
var rankOutput = document.getElementById("rank");

var prof = 0;
var profOutput = document.getElementById("prof");

var used = 0;
var available = 0;
var AVoutput = document.getElementById("available");
var USoutput = document.getElementById("used");

var index = [0, 0, 0, 0, 0, 0];
var lvls = [8, 8, 8, 8, 8, 8];
var curmods = [-1, -1, -1, -1, -1, -1];

var cost = [1, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6];
var mods = [-1, -1, 0, 0, +1, +1, +2, +2, +3, +3, +4, +4, +5];

var THP = 0;
var EHP = 0;
var DEF = 0;
var INI = 0;
var RES = 0;
var EHPoutput = document.getElementById("hp");
var DEFoutput = document.getElementById("def");
var RESoutput = document.getElementById("res");
var INIoutput = document.getElementById("ini");
var INPoutput = document.getElementById("iniProf");

var active_rank_button = null;
var active_level_button = null;

const availables = [
	[10, 14, 18, 22, 25],
	[27, 30, 35],
	[38, 40, 43, 46, 50],
	[52, 58, 63, 68, 72],
	[75, 80, 85]
];
const THPs = [
	[5, 5, 5, 5, 5],
	[10, 10, 10],
	[10, 12, 13, 14, 15],
	[17, 19, 22, 23, 25],
	[30, 35, 40]
];
const profs = [
	[1, 2, 2, 2, 2],
	[2, 2, 2],
	[2, 2, 3, 3, 3],
	[3, 4, 4, 4, 4],
	[4, 5, 5]
];
const ranks = ["Acolyte ", "Neophyte ", "Apprentice ", "Lord ", "Darth "];
const level_text = [" I ", " II ", " III ", " IV ", " V "];

USoutput.textContent = used;
AVoutput.textContent = available;


//Abilities: STR/DEX/CON/INT/WIL/CHA, with LEVEL/MOD distribution
const abilityLevels = [
	[document.getElementById("STRlevel"), document.getElementById("STRmod")],
	[document.getElementById("DEXlevel"), document.getElementById("DEXmod")],
	[document.getElementById("CONlevel"), document.getElementById("CONmod")],
	[document.getElementById("INTlevel"), document.getElementById("INTmod")],
	[document.getElementById("WILlevel"), document.getElementById("WILmod")],
	[document.getElementById("CHAlevel"), document.getElementById("CHAmod")]
];

for (let i = 0; i < 6; i++) {
	abilityLevels[i][0].textContent = lvls[i];
	abilityLevels[i][0].textContent = curmods[i];

}

//Skill buttons: STR/DEX/CON/INT/WIL/CHA, with ADD/REMOVE distribution
const skill_buttons = [
	[document.getElementById("strADD"), document.getElementById("strREM")],
	[document.getElementById("dexADD"), document.getElementById("dexREM")],
	[document.getElementById("conADD"), document.getElementById("conREM")],
	[document.getElementById("intADD"), document.getElementById("intREM")],
	[document.getElementById("wilADD"), document.getElementById("wilREM")],
	[document.getElementById("chaADD"), document.getElementById("chaREM")]
]

const reset_button = document.getElementById("reset");
reset_button.innerHTML = "RESET POINTS";

for (let i = 0; i < 6; i++) {
	skill_buttons[i][0].innerHTML = "+";
	skill_buttons[i][1].innerHTML = "-";
}

//Rank buttons: ACO/NEO/APP/LOR/DAR
const rank_buttons = [
	document.createElement("button"),
	document.createElement("button"),
	document.createElement("button"),
	document.createElement("button"),
	document.createElement("button")
];

function text_refresh() {
	if (used > available) {
		USoutput.style.color = "red";
	} else {
		USoutput.style.color = "black";
	}

	rankOutput.textContent = rank;

	EHP = 4 * (THP + curmods[2]);
	EHPoutput.textContent = EHP;

	INI = curmods[1] + curmods[4];
	INIoutput.textContent = INI;
	INPoutput.textContent = INI + prof;

	DEF = 10 + curmods[1];
	DEFoutput.textContent = DEF;

	RES = 10 + curmods[4] + curmods[5];
	RESoutput.textContent = RES;

	AVoutput.textContent = available;
	USoutput.textContent = used;
	profOutput.textContent = prof;

	for(let i = 0; i < abilityLevels.length; i++) {
		abilityLevels[i][0].textContent = lvls[i];
		abilityLevels[i][1].textContent = curmods[i];
	}
}

function reset_skills() {
	index = [0, 0, 0, 0, 0, 0];
	lvls = [8, 8, 8, 8, 8, 8];
	curmods = [-1, -1, -1, -1, -1, -1];
	used = 0;

	text_refresh();
}

for (let i = 0; i < rank_buttons.length; i++) {
	rank_buttons[i].innerHTML = ranks[i].slice(0, -1);
	rank_buttons[i].style.display = 'inline-block;';
	rank_buttons[i].style.margin = '0 5px';
	rank_buttons[i].style.padding = '5 10px';
	rank_buttons[i].style.backgroundColor = 'none';
	rank_buttons[i].style.border = '1px solid black';
	rank_buttons[i].style.borderRadius = '4px';
	rank_buttons[i].style.boxShadow = '0 0 3px rgba(0, 0, 0, 0.3)';
	rank_buttons[i].style.fontSize = '20px';
	rank_buttons[i].style.cursor = 'pointer';
	document.getElementById("rank_buttons").appendChild(rank_buttons[i]);
}

reset_button.addEventListener("mouseleave", () => {
	reset_button.style.backgroundColor = '#F0F0F0'; });
reset_button.addEventListener("mouseenter", () => {
	reset_button.style.backgroundColor = 'rgba(128, 128, 128, 0.5)';
});

reset_button.addEventListener("click", function() {
	reset_skills();
});

for (let i = 0; i < rank_buttons.length; i++) {
	rank_buttons[i].addEventListener("mouseleave", () => {
		rank_buttons[i].style.backgroundColor = '#F0F0F0';
	});
	rank_buttons[i].addEventListener("mouseenter", () => {
		rank_buttons[i].style.backgroundColor = 'rgba(128, 128, 128, 0.5)';
	});

	rank_buttons[i].addEventListener("click", function() {
		addButton(i);
	});
	
	text_refresh();
}

const level_buttons = [
	[
		document.createElement("button"),
		document.createElement("button"),
		document.createElement("button"),
		document.createElement("button"),
		document.createElement("button")
	],
	[
		document.createElement("button"),
		document.createElement("button"),
		document.createElement("button")
	],
	[
		document.createElement("button"),
		document.createElement("button"),
		document.createElement("button"),
		document.createElement("button"),
		document.createElement("button")
	],
	[
		document.createElement("button"),
		document.createElement("button"),
		document.createElement("button"),
		document.createElement("button"),
		document.createElement("button")
	],
	[
		document.createElement("button"),
		document.createElement("button"),
		document.createElement("button")
	]
];

for (let i = 0; i < level_buttons.length; i++) {
	for (let j = 0; j < level_buttons[i].length; j++) {
		level_buttons[i][j].innerHTML = level_text[j];
	}
}


for (let i = 0; i < level_buttons.length; i++) {
	for (let j = 0; j < level_buttons[i].length; j++) {
		level_buttons[i][j].addEventListener("mouseenter", () => {
			level_buttons[i][j].style.backgroundColor = 'rgba(128, 128, 128, 0.5)';
		});
		level_buttons[i][j].addEventListener("mouseleave", () => {
			level_buttons[i][j].style.backgroundColor = '#F0F0F0';
		});
		level_buttons[i][j].addEventListener("click", function() {
			available = availables[i][j];
			THP = THPs[i][j];
			AVoutput.textContent = available;
			prof = profs[i][j];
			rank = ranks[i] + level_text[j];

			text_refresh();
		})
	}
}

function changeLevel(stat, add) {
	if (add) {
		if (index[stat] < 12) {
			used = used + cost[index[stat]];
			index[stat] = index[stat] + 1;
			lvls[stat] = lvls[stat] + 1;
			curmods[stat] = mods[index[stat]];
		}
	} else {
		if (index[stat] > 0) {
			used = used - cost[index[stat] - 1];
			index[stat] = index[stat] - 1;
			lvls[stat] = lvls[stat] - 1;
			curmods[stat] = mods[index[stat]];
		}
	}

	for (let i = 0; i < abilityLevels.length; i++) {
		abilityLevels[i][0].textContent = lvls[i];
		if (curmods > 0) {
			abilityLevels[i][1].textContent = "+" + curmods[i];
		} else {
			abilityLevels[i][1].textContent = curmods[i];
		}
	}
	text_refresh();
};


for (let i = 0; i < skill_buttons.length; i++) {
	for (let j = 0; j < skill_buttons[i].length; j++) {
		skill_buttons[i][j].addEventListener("click", function() {
			if (j == 0) {
				changeLevel(i, true);
			} else {
				changeLevel(i, false);
			}
		});
	}
}

function addButton(number) {
	for (let i = 0; i < level_buttons.length; i++) {
		for (let j = 0; j < level_buttons[i].length; j++) {
			if (i == number) {
				level_buttons[i][j].style.display = 'inline-block';
				level_buttons[i][j].style.margin = '0 5px';
				level_buttons[i][j].style.padding = '5 10px';
				level_buttons[i][j].style.backgroundColor = 'none';
				level_buttons[i][j].style.border = '1px solid black';
				level_buttons[i][j].style.borderRadius = '4px';
				level_buttons[i][j].style.boxShadow = '0 0 3px rgba(0, 0, 0, 0.3)';
				level_buttons[i][j].style.fontSize = '16px';
				level_buttons[i][j].style.cursor = 'pointer';
			} else {
				level_buttons[i][j].style.display = 'none';
			}
			document.getElementById("level_buttons").appendChild(level_buttons[i][j]);
			text_refresh();
		}
	}
};

text_refresh();


for (let i = 0; i < abilityLevels.length; i++) {
	abilityLevels[i][0].textContent = lvls[i];
	if (curmods > 0) {
		abilityLevels[i][1].textContent = "+" + curmods[i];
	} else {
		abilityLevels[i][1].textContent = curmods[i];
	}
}