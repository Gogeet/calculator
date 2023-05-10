var rank = "Not selected";
var rankOutput = document.getElementById("rank");

var used = 0;
var available = 0;

var index = [0, 0, 0, 0, 0, 0];
var lvls = [8, 8, 8, 8, 8, 8];
var curmods = [1, -1, -1, -1, -1, -1];

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

var AVoutput = document.getElementById("available");
var USoutput = document.getElementById("used");

USoutput.textContent = used;
AVoutput.textContent = available;

var STRlevel = document.getElementById("STRlevel");
var DEXlevel = document.getElementById("DEXlevel");
var CONlevel = document.getElementById("CONlevel");
var INTlevel = document.getElementById("INTlevel");
var WILlevel = document.getElementById("WILlevel");
var CHAlevel = document.getElementById("CHAlevel");

var STRmod = document.getElementById("STRmod");
var DEXmod = document.getElementById("DEXmod");
var CONmod = document.getElementById("CONmod");
var INTmod = document.getElementById("INTmod");
var WILmod = document.getElementById("WILmod");
var CHAmod = document.getElementById("CHAmod");

STRlevel.textContent = lvls[0];
DEXlevel.textContent = lvls[1];
CONlevel.textContent = lvls[2];
INTlevel.textContent = lvls[3];
WILlevel.textContent = lvls[4];
CHAlevel.textContent = lvls[5];

STRmod.textContent = curmods[0];
DEXmod.textContent = curmods[1];
CONmod.textContent = curmods[2];
INTmod.textContent = curmods[3];
WILmod.textContent = curmods[4];
CHAmod.textContent = curmods[5];



var strADD = document.getElementById("strADD");
var dexADD = document.getElementById("dexADD");
var conADD = document.getElementById("conADD");
var intADD = document.getElementById("intADD");
var wilADD = document.getElementById("wilADD");
var chaADD = document.getElementById("chaADD");
  strADD.innerHTML = "+";
  dexADD.innerHTML = "+";
  conADD.innerHTML = "+";
  intADD.innerHTML = "+";
  wilADD.innerHTML = "+";
  chaADD.innerHTML = "+";

var strREM = document.getElementById("strREM");
var dexREM = document.getElementById("dexREM");
var conREM = document.getElementById("conREM");
var intREM = document.getElementById("intREM");
var wilREM = document.getElementById("wilREM");
var chaREM = document.getElementById("chaREM");
  strREM.innerHTML = "-";
  dexREM.innerHTML = "-";
  conREM.innerHTML = "-";
  intREM.innerHTML = "-";
  wilREM.innerHTML = "-";
  chaREM.innerHTML = "-";

  strREM.style.display = "inline-block";
  dexREM.style.display = "inline-block";
  conREM.style.display = "inline-block";
  intREM.style.display = "inline-block";
  wilREM.style.display = "inline-block";
  chaREM.style.display = "inline-block";

var buttonAco1 = document.createElement("button");
var buttonAco2 = document.createElement("button");
var buttonAco3 = document.createElement("button");
var buttonAco4 = document.createElement("button");
var buttonAco5 = document.createElement("button");
  buttonAco1.innerHTML = "I";
  buttonAco2.innerHTML = "II";
  buttonAco3.innerHTML = "III";
  buttonAco4.innerHTML = "IV";
  buttonAco5.innerHTML = "V";


var buttonNeo1 = document.createElement("button");
var buttonNeo2 = document.createElement("button");
var buttonNeo3 = document.createElement("button");
  buttonNeo1.innerHTML = "I";
  buttonNeo2.innerHTML = "II";
  buttonNeo3.innerHTML = "III";

var buttonApp1 = document.createElement("button");
var buttonApp2 = document.createElement("button");
var buttonApp3 = document.createElement("button");
var buttonApp4 = document.createElement("button");
var buttonApp5 = document.createElement("button");
  buttonApp1.innerHTML = "I";
  buttonApp2.innerHTML = "II";
  buttonApp3.innerHTML = "III";
  buttonApp4.innerHTML = "IV";
  buttonApp5.innerHTML = "V";

var buttonLor1 = document.createElement("button");
var buttonLor2 = document.createElement("button");
var buttonLor3 = document.createElement("button");
var buttonLor4 = document.createElement("button");
var buttonLor5 = document.createElement("button");
  buttonLor1.innerHTML = "I";
  buttonLor2.innerHTML = "II";
  buttonLor3.innerHTML = "III";
  buttonLor4.innerHTML = "IV";
  buttonLor5.innerHTML = "V";

var buttonDar1 = document.createElement("button");
var buttonDar2 = document.createElement("button");
var buttonDar3 = document.createElement("button");
  buttonDar1.innerHTML = "I";
  buttonDar2.innerHTML = "II";
  buttonDar3.innerHTML = "III";

buttonAco1.onclick = function() { 
  available = 10;
  THP = 5;
  EHP = (THP + curmods[2]) * 4;
  EHPoutput.textContent = EHP;
  AVoutput.textContent = available;
  rank = "Acolyte I";
  rankOutput.textContent = rank;
};
buttonAco2.onclick = function() { 
  available = 14;
  THP = 5;
  EHP = (THP + curmods[2]) * 4;
  EHPoutput.textContent = EHP;
  AVoutput.textContent = available;
  rank = "Acolyte II";
  rankOutput.textContent = rank;
};
buttonAco3.onclick = function() { 
  available = 18;
  THP = 5;
  EHP = (THP + curmods[2]) * 4;
  EHPoutput.textContent = EHP;
  AVoutput.textContent = available;
  rank = "Acolyte III";
  rankOutput.textContent = rank;
};
buttonAco4.onclick = function() { 
  available = 22;
  THP = 5;
  EHP = (THP + curmods[2]) * 4;
  EHPoutput.textContent = EHP;
  AVoutput.textContent = available;
  rank = "Acolyte IV";
  rankOutput.textContent = rank;
};
buttonAco5.onclick = function() { 
  available = 25;
  THP = 5;
  EHP = (THP + curmods[2]) * 4;
  EHPoutput.textContent = EHP;
  AVoutput.textContent = available;
  rank = "Acolyte V";
  rankOutput.textContent = rank;
};

buttonNeo1.onclick = function() { 
  available = 27;
  THP = 10;
  EHP = (THP + curmods[2]) * 4;
  EHPoutput.textContent = EHP;
  AVoutput.textContent = available;
  rank = "Neophyte I";
  rankOutput.textContent = rank;
};
buttonNeo2.onclick = function() { 
  available = 30;
  THP = 10;
  EHP = (THP + curmods[2]) * 4;
  EHPoutput.textContent = EHP;
  AVoutput.textContent = available;
  rank = "Neophyte II";
  rankOutput.textContent = rank;
};
buttonNeo3.onclick = function() { 
  available = 35;
  THP = 10;
  EHP = (THP + curmods[2]) * 4;
  EHPoutput.textContent = EHP;
  AVoutput.textContent = available;
  rank = "Neophyte III";
  rankOutput.textContent = rank;
};

buttonApp1.onclick = function() { 
  available = 38;
  THP = 10;
  EHP = (THP + curmods[2]) * 4;
  EHPoutput.textContent = EHP;
  AVoutput.textContent = available;
  rank = "Apprentice I";
  rankOutput.textContent = rank;
};
buttonApp2.onclick = function() { 
  available = 40;
  THP = 12;
  EHP = (THP + curmods[2]) * 4;
  EHPoutput.textContent = EHP;
  AVoutput.textContent = available;
  rank = "Apprentice II";
  rankOutput.textContent = rank;
};
buttonApp3.onclick = function() { 
  available = 43;
  THP = 13;
  EHP = (THP + curmods[2]) * 4;
  EHPoutput.textContent = EHP;
  AVoutput.textContent = available;
  rank = "Apprentice III";
  rankOutput.textContent = rank;
};
buttonApp4.onclick = function() { 
  available = 46;
  THP = 14;
  EHP = (THP + curmods[2]) * 4;
  EHPoutput.textContent = EHP;
  AVoutput.textContent = available;
  rank = "Apprentice IV";
  rankOutput.textContent = rank;
};
buttonApp5.onclick = function() { 
  available = 50;
  THP = 15;
  EHP = (THP + curmods[2]) * 4;
  EHPoutput.textContent = EHP;
  AVoutput.textContent = available;
  rank = "Apprentice V";
  rankOutput.textContent = rank;
};

buttonLor1.onclick = function() { 
  available = 52;
  THP = 17;
  EHP = (THP + curmods[2]) * 4;
  EHPoutput.textContent = EHP;
  AVoutput.textContent = available;
  rank = "Lord I";
  rankOutput.textContent = rank;
};
buttonLor2.onclick = function() { 
  available = 58;
  THP = 19;
  EHP = (THP + curmods[2]) * 4;
  EHPoutput.textContent = EHP;
  AVoutput.textContent = available;
  rank = "Lord II";
  rankOutput.textContent = rank;
};
buttonLor3.onclick = function() { 
  available = 63;
  THP = 22;
  EHP = (THP + curmods[2]) * 4;
  EHPoutput.textContent = EHP;
  AVoutput.textContent = available;
  rank = "Lord III";
  rankOutput.textContent = rank;
};
buttonLor4.onclick = function() { 
  available = 68;
  THP = 23;
  EHP = (THP + curmods[2]) * 4;
  EHPoutput.textContent = EHP;
  AVoutput.textContent = available;
  rank = "Lord IV";
  rankOutput.textContent = rank;
};
buttonLor5.onclick = function() { 
  available = 72;
  THP = 25;
  EHP = (THP + curmods[2]) * 4;
  EHPoutput.textContent = EHP;
  AVoutput.textContent = available;
  rank = "Lord V";
  rankOutput.textContent = rank;
};

buttonDar1.onclick = function() { 
  available = 75;
  THP = 30;
  EHP = (THP + curmods[2]) * 4;
  EHPoutput.textContent = EHP;
  AVoutput.textContent = available;
  rank = "Darth I";
  rankOutput.textContent = rank;
};
buttonDar2.onclick = function() { 
  available = 80;
  THP = 35;
  EHP = (THP + curmods[2]) * 4;
  EHPoutput.textContent = EHP;
  AVoutput.textContent = available;
  rank = "Darth II";
  rankOutput.textContent = rank;
};
buttonDar3.onclick = function() { 
  available = 85;
  THP = 40;
  EHP = (THP + curmods[2]) * 4;
  EHPoutput.textContent = EHP;
  AVoutput.textContent = available;
  rank = "Darth III";
  rankOutput.textContent = rank;
};

function changeLevel(stat, add) {
  if(add) {
    if(index[stat] < 12) {
      used = used + cost[index[stat]];
      index[stat] = index[stat] + 1;
      lvls[stat] = lvls[stat] + 1;
      curmods[stat] = mods[index[stat]];
    }
  } else {
    if(index[stat] > 0) {
      used = used - cost[index[stat] - 1];
      index[stat] = index[stat] - 1;
      lvls[stat] = lvls[stat] - 1;
      curmods[stat] = mods[index[stat]];
    }
  }

  USoutput.textContent = used;

  STRlevel.textContent = lvls[0];
  DEXlevel.textContent = lvls[1];
  CONlevel.textContent = lvls[2];
  INTlevel.textContent = lvls[3];
  WILlevel.textContent = lvls[4];
  CHAlevel.textContent = lvls[5];

  if(curmods[0] > 0) {
    STRmod.textContent = "+" + curmods[0];
  } else {
    STRmod.textContent = curmods[0];
  }

  if(curmods[1] > 0) {
    DEXmod.textContent = "+" + curmods[1];
  } else {
    DEXmod.textContent = curmods[1];
  }

  if(curmods[2] > 0) {
    CONmod.textContent = "+" + curmods[2];
  } else {
    CONmod.textContent = curmods[2];
  }

  if(curmods[3] > 0) {
    INTmod.textContent = "+" + curmods[3];
  } else {
    INTmod.textContent = curmods[3];
  }

  if(curmods[4] > 0) {
    WILmod.textContent = "+" + curmods[4];
  } else {
    WILmod.textContent = curmods[4];
  }

  if(curmods[5] > 0) {
    CHAmod.textContent = "+" + curmods[5];
  } else {
    CHAmod.textContent = curmods[5];
  }

  EHP = (THP + curmods[2]) * 4;
  EHPoutput.textContent = EHP;

  INI = curmods[1];
  INIoutput.textContent = INI;

  DEF = 10 + curmods[1];
  DEFoutput.textContent = DEF;

  RES = 10 + curmods[4] + curmods[5];
  RESoutput.textContent = RES;
};

strADD.onclick = function() {
  changeLevel(0, true);
}
dexADD.onclick = function() {
  changeLevel(1, true);
}
conADD.onclick = function() {
  changeLevel(2, true);
}
intADD.onclick = function() {
  changeLevel(3, true);
}
wilADD.onclick = function() {
  changeLevel(4, true);
}
chaADD.onclick = function() {
  changeLevel(5, true);
}

strREM.onclick = function() {
  changeLevel(0, false);
}
dexREM.onclick = function() {
  changeLevel(1, false);
}
conREM.onclick = function() {
  changeLevel(2, false);
}
intREM.onclick = function() {
  changeLevel(3, false);
}
wilREM.onclick = function() {
  changeLevel(4, false);
}
chaREM.onclick = function() {
  changeLevel(5, false);
}

function addButton(number) {
  switch (number) {
    case 1:
      buttonAco1.style.display = 'inline-block';
      buttonAco2.style.display = 'inline-block';
      buttonAco3.style.display = 'inline-block';
      buttonAco4.style.display = 'inline-block';
      buttonAco5.style.display = 'inline-block';

      buttonNeo1.style.display = 'none';
      buttonNeo2.style.display = 'none';
      buttonNeo3.style.display = 'none';

      buttonApp1.style.display = 'none';
      buttonApp2.style.display = 'none';
      buttonApp3.style.display = 'none';
      buttonApp4.style.display = 'none';
      buttonApp5.style.display = 'none';

      buttonLor1.style.display = 'none';
      buttonLor2.style.display = 'none';
      buttonLor3.style.display = 'none';
      buttonLor4.style.display = 'none';
      buttonLor5.style.display = 'none';

      buttonDar1.style.display = 'none';
      buttonDar2.style.display = 'none';
      buttonDar3.style.display = 'none';
      break;

    case 2:
      buttonAco1.style.display = 'none';
      buttonAco2.style.display = 'none';
      buttonAco3.style.display = 'none';
      buttonAco4.style.display = 'none';
      buttonAco5.style.display = 'none';

      buttonNeo1.style.display = 'inline-block';
      buttonNeo2.style.display = 'inline-block';
      buttonNeo3.style.display = 'inline-block';

      buttonApp1.style.display = 'none';
      buttonApp2.style.display = 'none';
      buttonApp3.style.display = 'none';
      buttonApp4.style.display = 'none';
      buttonApp5.style.display = 'none';

      buttonLor1.style.display = 'none';
      buttonLor2.style.display = 'none';
      buttonLor3.style.display = 'none';
      buttonLor4.style.display = 'none';
      buttonLor5.style.display = 'none';

      buttonDar1.style.display = 'none';
      buttonDar2.style.display = 'none';
      buttonDar3.style.display = 'none';
      break;

    case 3:
      buttonAco1.style.display = 'none';
      buttonAco2.style.display = 'none';
      buttonAco3.style.display = 'none';
      buttonAco4.style.display = 'none';
      buttonAco5.style.display = 'none';

      buttonNeo1.style.display = 'none';
      buttonNeo2.style.display = 'none';
      buttonNeo3.style.display = 'none';

      buttonApp1.style.display = 'inline-block';
      buttonApp2.style.display = 'inline-block';
      buttonApp3.style.display = 'inline-block';
      buttonApp4.style.display = 'inline-block';
      buttonApp5.style.display = 'inline-block';

      buttonLor1.style.display = 'none';
      buttonLor2.style.display = 'none';
      buttonLor3.style.display = 'none';
      buttonLor4.style.display = 'none';
      buttonLor5.style.display = 'none';

      buttonDar1.style.display = 'none';
      buttonDar2.style.display = 'none';
      buttonDar3.style.display = 'none';
      break;

    case 4:
      buttonAco1.style.display = 'none';
      buttonAco2.style.display = 'none';
      buttonAco3.style.display = 'none';
      buttonAco4.style.display = 'none';
      buttonAco5.style.display = 'none';

      buttonNeo1.style.display = 'none';
      buttonNeo2.style.display = 'none';
      buttonNeo3.style.display = 'none';

      buttonApp1.style.display = 'none';
      buttonApp2.style.display = 'none';
      buttonApp3.style.display = 'none';
      buttonApp4.style.display = 'none';
      buttonApp5.style.display = 'none';

      buttonLor1.style.display = 'inline-block';
      buttonLor2.style.display = 'inline-block';
      buttonLor3.style.display = 'inline-block';
      buttonLor4.style.display = 'inline-block';
      buttonLor5.style.display = 'inline-block';

      buttonDar1.style.display = 'none';
      buttonDar2.style.display = 'none';
      buttonDar3.style.display = 'none';
      break;

    default:
      buttonAco1.style.display = 'none';
      buttonAco2.style.display = 'none';
      buttonAco3.style.display = 'none';
      buttonAco4.style.display = 'none';
      buttonAco5.style.display = 'none';

      buttonNeo1.style.display = 'none';
      buttonNeo2.style.display = 'none';
      buttonNeo3.style.display = 'none';

      buttonApp1.style.display = 'none';
      buttonApp2.style.display = 'none';
      buttonApp3.style.display = 'none';
      buttonApp4.style.display = 'none';
      buttonApp5.style.display = 'none';

      buttonLor1.style.display = 'none';
      buttonLor2.style.display = 'none';
      buttonLor3.style.display = 'none';
      buttonLor4.style.display = 'none';
      buttonLor5.style.display = 'none';

      buttonDar1.style.display = 'inline-block';
      buttonDar2.style.display = 'inline-block';
      buttonDar3.style.display = 'inline-block';
      break;
  }
  document.getElementById("buttons").appendChild(buttonAco1);
  document.getElementById("buttons").appendChild(buttonAco2);
  document.getElementById("buttons").appendChild(buttonAco3);
  document.getElementById("buttons").appendChild(buttonAco4);
  document.getElementById("buttons").appendChild(buttonAco5);

  document.getElementById("buttons").appendChild(buttonNeo1);
  document.getElementById("buttons").appendChild(buttonNeo2);
  document.getElementById("buttons").appendChild(buttonNeo3);

  document.getElementById("buttons").appendChild(buttonApp1);
  document.getElementById("buttons").appendChild(buttonApp2);
  document.getElementById("buttons").appendChild(buttonApp3);
  document.getElementById("buttons").appendChild(buttonApp4);
  document.getElementById("buttons").appendChild(buttonApp5);

  document.getElementById("buttons").appendChild(buttonLor1);
  document.getElementById("buttons").appendChild(buttonLor2);
  document.getElementById("buttons").appendChild(buttonLor3);
  document.getElementById("buttons").appendChild(buttonLor4);
  document.getElementById("buttons").appendChild(buttonLor5);

  document.getElementById("buttons").appendChild(buttonDar1);
  document.getElementById("buttons").appendChild(buttonDar2);
  document.getElementById("buttons").appendChild(buttonDar3);
};
rankOutput.textContent = rank;

EHPoutput.textContent = EHP;

INI = curmods[1];
INIoutput.textContent = INI;

DEF = 10 + curmods[1];
DEFoutput.textContent = DEF;

RES = 10 + curmods[4] + curmods[5];
RESoutput.textContent = RES;

AVoutput.textContent = available;
USoutput.textContent = used;

STRlevel.textContent = lvls[0];
STRmod.textContent = curmods[0];
DEXlevel.textContent = lvls[1];
DEXmod.textContent = curmods[1];
CONlevel.textContent = lvls[2];
CONmod.textContent = curmods[2];
INTlevel.textContent = lvls[3];
INTmod.textContent = curmods[3];
WILlevel.textContent = lvls[4];
WILmod.textContent = curmods[4];
CHAlevel.textContent = lvls[5];
CHAmod.textContent = curmods[5];