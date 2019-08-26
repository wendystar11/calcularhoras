function calcular(){
		horas= document.getElementById("horas").value;		
		hr = parseFloat(horas);
		minutos = hr*60/1;
		
		
		document.getElementById("minutos").value = minutos;
	} 
	