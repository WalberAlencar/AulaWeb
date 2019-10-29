const largura = window.screen.availWidth;
let posicao = 0;
let aumentar = true;

let Frame = 0;

const Urso = [
	'/urso/img/chara-1.png',
	'/urso/img/chara-2.png',
	'/urso/img/chara-3.png',
];

setInterval( () => {

	if (posicao > (largura + 200)) {
		return false;
	}
	document.getElementById("urso").src = Urso[Frame];
	document.getElementById("urso").style = "left: " + posicao + "px;";
	posicao += 2;
	Frame++;
	if (Frame > 2) {
		Frame = 0;
	}
	if (window.screen.availWidth < posicao) posicao = 0;
}, 100);