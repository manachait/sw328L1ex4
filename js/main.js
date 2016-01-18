function calculate(){
    var cel = document.getElementById("celcius");
	var far = ((cel.value * 9)/5) + 32;
	var kel = parseFloat(cel.value) + 273.15;
	document.getElementById("farenheit").innerHTML = "It equals " + far + " Farenheit";
	document.getElementById("kelvin").innerHTML = "It equals " + kel + " Kelvin";
}