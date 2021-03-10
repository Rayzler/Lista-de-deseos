function reiniciar()
{
	contador_713 = 0;
	boton_713.classList.remove("invisible");

	contador_714 = 0;
	boton_714.classList.remove("invisible");

	contador_715 = 0;
	boton_715.classList.remove("invisible");

	contador_717 = 0;
	boton_717.classList.remove("invisible");

	contador_823 = 0;
	boton_823.classList.remove("invisible");

	contador_824 = 0;
	boton_824.classList.remove("invisible");

	contador_826 = 0;
	boton_826.classList.remove("invisible");
}

//50s Wanda
var wanda50s = document.getElementById("713");
var boton_713 = document.getElementById('50s-Wanda');
var contador_713 = 0;
function cambio_713()
{
	if (contador_713 == 0)
	{
		reiniciar();
		boton_713.classList.add('invisible');
		contador_713 = 1;
	}
	else
	{
		boton_713.classList.remove("invisible");
		contador_713 = 0;
	}
}
wanda50s.addEventListener("click", cambio_713, true);

//50s Vision
var vision50s = document.getElementById("714");
var boton_714 = document.getElementById('50s-Vision');
var contador_714 = 0;
function cambio_714()
{
	if (contador_714 == 0)
	{
		reiniciar();
		boton_714.classList.add('invisible');
		contador_714 = 1;
	}
	else
	{
		boton_714.classList.remove("invisible");
		contador_714 = 0;
	}
}
vision50s.addEventListener("click", cambio_714, true);

//Halloween Wanda
var halloweenWanda = document.getElementById("715");
var boton_715 = document.getElementById('Halloween-Wanda');
var contador_715 = 0;

function cambio_715()
{
	if (contador_715 == 0)
	{
		reiniciar();
		boton_715.classList.add('invisible');
		contador_715 = 1;
	}
	else
	{
		boton_715.classList.remove("invisible");
		contador_715 = 0;
	}
}
halloweenWanda.addEventListener("click", cambio_715, true);

//70s Wanda
var wanda70s = document.getElementById("717");
var boton_717 = document.getElementById('70s-Wanda');
var contador_717 = 0;

function cambio_717()
{
	if (contador_717 == 0)
	{
		reiniciar();
		boton_717.classList.add('invisible');
		contador_717 = 1;
	}
	else
	{
		boton_717.classList.remove("invisible");
		contador_717 = 0;
	}
}
wanda70s.addEventListener("click", cambio_717, true);

//Scarlet Witch
var scarletWitch = document.getElementById("823");
var boton_823 = document.getElementById('Scarlet-Witch');
var contador_823 = 0;

function cambio_823()
{
	if (contador_823 == 0)
	{
		reiniciar();
		boton_823.classList.add('invisible');
		contador_823 = 1;
	}
	else
	{
		boton_823.classList.remove("invisible");
		contador_823 = 0;
	}
}
scarletWitch.addEventListener("click", cambio_823, true);

//The Vision
var theVision = document.getElementById("824");
var boton_824 = document.getElementById('The-Vision');
var contador_824 = 0;

function cambio_824()
{
	if (contador_824 == 0)
	{
		reiniciar();
		boton_824.classList.add('invisible');
		contador_824 = 1;
	}
	else
	{
		boton_824.classList.remove("invisible");
		contador_824 = 0;
	}
}
theVision.addEventListener("click", cambio_824, true);

//Agatha Harkness
var agathaHarkness = document.getElementById("826");
var boton_826 = document.getElementById('Agatha-Harkness');
var contador_826 = 0;

function cambio_826()
{
	if (contador_826 == 0)
	{
		reiniciar();
		boton_826.classList.add('invisible');
		contador_826 = 1;
	}
	else
	{
		boton_826.classList.remove("invisible");
		contador_826 = 0;
	}
}
agathaHarkness.addEventListener("click", cambio_826, true);