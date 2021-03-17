var cards = document.getElementsByClassName("card");
var botones = document.getElementsByClassName("card__boton");
var contadores = new Array(botones.length);
var imagenes = document.getElementsByClassName("card__imagen");
var ids = new Array(cards.length);

for (let i = 0; i < ids.length; i++)
{
	ids[i] = cards[i].id;
}
ids.sort();
for (let i = 0; i < ids.length; i++)
{
	let temp = document.getElementById(ids[i]);
	temp.style.order = i;
}


//Busqueda
var input = document.getElementById("barra");
input.onchange = function() {
	var txt = input.value;
	txt = txt.toUpperCase();
	if (input.value != "")
	{
		for (var i = 0; i < cards.length; i++)
		{
			cards[i].classList.add('ocultar');
			let mostrar = false;

			for (let j = 0; j < cards[i].classList.length; j++)
			{
				if (cards[i].classList[j] == 'card'  || cards[i].classList[j] == 'ocultar')
				{
					continue;
				}
				let cardTxt = cards[i].classList[j];
				while (cardTxt.includes('_'))
				{
					cardTxt = cardTxt.replace("_", " ");
				}
				cardTxt = cardTxt.toUpperCase();
				if (cardTxt.includes(txt))
				{
					mostrar = true;
				}
			}

			if (mostrar)
			{
				cards[i].classList.remove('ocultar');
			}
		}
	}
	else
	{
		for (var i = 0; i < cards.length; i++)
		{
			cards[i].classList.remove('ocultar');
		}
	}
}


//Ver links
function reiniciar()
{
	for (var i = 0; i < contadores.length; i++)
	{
		volver(i);
	}
}
reiniciar();


function tarjeta(num)
{
	for (var i = 0; i < botones.length; i++)
	{
		var indice = i;
		if (num == botones[i].parentNode.id)
		{
			break;
		}
	}

	if (contadores[indice] == 0) {
		reiniciar();
		ver(indice);
	}
	else
	{
		volver(indice);
	}
}

function ver(ind)
{
	imagenes[ind].classList.add("invisible");
	contadores[ind] = 1;

	botones[ind].style.transform = "scaleX(-1)";
	var span = botones[ind].getElementsByTagName("span");
	span[0].style.transform = "scaleX(-1)";
	span[0].innerHTML = "Volver";
}

function volver(ind)
{
	imagenes[ind].classList.remove("invisible");
	contadores[ind] = 0;

	botones[ind].style.transform = "scaleX(1)";
	var span = botones[ind].getElementsByTagName("span");
	span[0].style.transform = "scaleX(1)";
	span[0].innerHTML = "Links";
}
