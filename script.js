let input = document.getElementById('input');
let result = document.getElementById('result');
let inputType = document.getElementById('inputType');
let resultType = document.getElementById('resultType');
let option_from,option_to;

input.addEventListener("keyup",myResult);
inputType.addEventListener("change",myResult);
resultType.addEventListener("change",myResult);

option_from = inputType.value;
option_to   = resultType.value;

function myResult(){
	option_from = inputType.value;
	option_to = resultType.value;

// Tonne Counting Start 
	if(option_from === "Tonne" && option_to==="Kilogram"){
		result.value = Number(input.value) * 1000

	}
	else if(option_from === "Tonne" && option_to==="Gram"){
		result.value = Number(input.value) * 1 + "e+" + 6 
	}
	
	else if(option_from === "Tonne" && option_to==="Milligram"){
		result.value = Number(input.value) * 1 + "e+" + 9 

	}
	else if(option_from === "Tonne" && option_to==="microgram"){
		result.value = Number(input.value) * 1 + "e+" + 12;

	}
	else if(option_from === "Tonne" && option_to==="Imperial"){
		result.value = Number(input.value) /  1.016 ;

	}
	else if(option_from === "Tonne" && option_to==="US"){
		result.value = Number(input.value) * 1.102; 

	}
	else if(option_from === "Tonne" && option_to==="Stone"){
		result.value = Number(input.value) * 157; 

	}
	else if(option_from === "Tonne" && option_to==="Pound"){
		result.value = Number(input.value) * 2205; 

	}
	else if(option_from === "Tonne" && option_to==="Ounce"){
		result.value = Number(input.value) * 35274; 

	}


// Tonne Counting End 



// Kilogram Counting start  

if(option_from === "Kilogram" && option_to==="Tonne"){
	result.value = Number(input.value) / 1000;
}
else if(option_from === "Kilogram" && option_to==="Gram"){

		result.value = Number(input.value) * 1000;
 }
 else if(option_from === "Kilogram" && option_to==="Milligram"){
		result.value = input.value * 1 + "e+" + 6
	}

	else if(option_from === "Kilogram" && option_to==="microgram"){
		result.value = input.value * 1 + "e+" + 9
	}
	else if(option_from === "Kilogram" && option_to==="Imperial"){
		result.value = input.value / 1016
	}
	
	else if(option_from === "Kilogram" && option_to==="US"){
		result.value = input.value / 907
	}
	else if(option_from === "Kilogram" && option_to==="Stone"){
		result.value = input.value / 6.35
	}
	else if(option_from === "Kilogram" && option_to==="Pound"){
		result.value = input.value * 2.205
	}
	else if(option_from === "Kilogram" && option_to==="Ounce"){
		result.value = input.value * 35.274; 
	}

// Kilogram Counting end  

// Gram Counting Start 

if(option_from === "Gram" && option_to==="Tonne"){
	result.value = Number(input.value) / 1 +"e-"+6
}
else if(option_from === "Gram" && option_to==="Kilogram"){

		result.value = Number(input.value) / 1000;
 }

 else if(option_from === "Gram" && option_to==="Milligram"){
		result.value = input.value * 1000
	}

	else if(option_from === "Gram" && option_to==="microgram"){
		result.value = input.value * 1 + "e+" + 6
	}
	else if(option_from === "Gram" && option_to==="Imperial"){
		result.value = input.value / 1.016 + "e-" +6
	}
	
	else if(option_from === "Gram" && option_to==="US"){
		result.value = input.value /907185
	}
	else if(option_from === "Gram" && option_to==="Stone"){
		result.value = input.value / 6350
	}
	else if(option_from === "Gram" && option_to==="Pound"){
		result.value = input.value / 454
	}
	else if(option_from === "Gram" && option_to==="Ounce"){
		result.value = input.value / 28.35; 
	}

// Gram Counting End 


// Milligram Counting Start  

if(option_from === "Milligram" && option_to==="Tonne"){
	result.value = Number(input.value) / 1 + "e+"+ 9; 
}
else if(option_from === "Milligram" && option_to==="Kilogram"){

		result.value = Number(input.value) / 1 + "e+"+ 6
 }

 else if(option_from === "Milligram" && option_to==="Gram"){
		result.value = input.value / 1000
	}

	else if(option_from === "Milligram" && option_to==="microgram"){
		result.value = input.value * 1000
	}
	else if(option_from === "Milligram" && option_to==="Imperial"){
		result.value = input.value / 1.016 + "e+" +9
	}
	
	else if(option_from === "Milligram" && option_to==="US"){
		result.value = input.value /9.072 + "e+"+8
	}
	else if(option_from === "Milligram" && option_to==="Stone"){
		result.value = input.value / 6.35 +"e+"+6
	}
	else if(option_from === "Milligram" && option_to==="Pound"){
		result.value = input.value / 453592
	}
	else if(option_from === "Milligram" && option_to==="Ounce"){
		result.value = input.value / 28350; 
	}

// Milligram Counting End 



// microgram Counting Start  

if(option_from === "microgram" && option_to==="Tonne"){
	result.value = Number(input.value) / 1 + "e+"+ 12; 
}
else if(option_from === "microgram" && option_to==="Kilogram"){

		result.value = Number(input.value) / 1 + "e+"+ 9;
 }

 else if(option_from === "microgram" && option_to==="Gram"){
		result.value = input.value / 1 + "e+" + 6;
	}

	else if(option_from === "microgram" && option_to==="Milligram"){
		result.value = input.value / 1000
	}
	else if(option_from === "microgram" && option_to==="Imperial"){
		result.value = input.value /  1.016 +"e+" +12
	}
	
	else if(option_from === "microgram" && option_to==="US"){
		result.value = input.value /9.072 + "e+"+11
	}
	else if(option_from === "microgram" && option_to==="Stone"){
		result.value = input.value / 6.35 + " e+" +9
	}
	else if(option_from === "microgram" && option_to==="Pound"){
		result.value = input.value /4.536 +" e" +8
	}
	else if(option_from === "microgram" && option_to==="Ounce"){
		result.value = input.value /  2.835 + "e+" +7		; 
	}

// microgram Counting End 



// Imperial Counting Start  

if(option_from === "Imperial" && option_to==="Tonne"){
	result.value = Number(input.value) * 1.016; 
}
else if(option_from === "Imperial" && option_to==="Kilogram"){

		result.value = Number(input.value) * 1016; 
 }

 else if(option_from === "Imperial" && option_to==="Gram"){
		result.value = input.value *  1.016 +"e+"+6

	}

	else if(option_from === "Imperial" && option_to==="Milligram"){
		result.value = input.value *1.016 + "e+" +9
	}
	else if(option_from === "Imperial" && option_to==="microgram"){
		result.value = input.value * 1.016 +"e+"+12
	}
	
	
	else if(option_from === "Imperial" && option_to==="US"){
		result.value = input.value * 1.12

	}
	else if(option_from === "Imperial" && option_to==="Stone"){
		result.value = input.value * 160
	}
	else if(option_from === "Imperial" && option_to==="Pound"){
		result.value = input.value * 2240
	}
	else if(option_from === "Imperial" && option_to==="Ounce"){
		result.value = input.value * 35840	; 
	}

// Imperial Counting End 




// Us Ton Counting Start  

if(option_from === "Us" && option_to==="Tonne"){
	result.value = Number(input.value) /1.102 ;
}
else if(option_from === "Us" && option_to==="Kilogram"){

		result.value = Number(input.value) * 907; 
 }

 else if(option_from === "Us" && option_to==="Gram"){
		result.value = input.value * 907185

	}

	else if(option_from === "Us" && option_to==="Milligram"){
		result.value = input.value * 9.072 +" e+"+8
	}
	else if(option_from === "Us" && option_to==="microgram"){
		result.value = input.value * 9.072 + "e+" +11
	}
	
	
	else if(option_from === "Us" && option_to==="Imperial"){
		result.value = input.value /  1.12

	}
	else if(option_from === "Us" && option_to==="Stone"){
		result.value = input.value * 143
	}
	else if(option_from === "Us" && option_to==="Pound"){
		result.value = input.value * 2000
	}
	else if(option_from === "Us" && option_to==="Ounce"){
		result.value = input.value * 32000	; 
	}

// Us Ton Counting End 



//Stone Counting Start  

if(option_from === "Stone" && option_to==="Tonne"){
	result.value = Number(input.value) /157;
}
else if(option_from === "Stone" && option_to==="Kilogram"){

		result.value = Number(input.value) * 6.35; 
 }

 else if(option_from === "Stone" && option_to==="Gram"){
		result.value = input.value * 6350

	}

	else if(option_from === "Stone" && option_to==="Milligram"){
		result.value = input.value * 6.35 + "e+" +6
	}
	else if(option_from === "Stone" && option_to==="microgram"){
		result.value = input.value * 6.35+ "e+" +9
	}
	
	
	else if(option_from === "Stone" && option_to==="Imperial"){
		result.value = input.value / 160

	}
	else if(option_from === "Stone" && option_to==="US"){
		result.value = input.value /143
	}
	else if(option_from === "Stone" && option_to==="Pound"){
		result.value = input.value * 14
	}
	else if(option_from === "Stone" && option_to==="Ounce"){
		result.value = input.value * 224	; 
	}

// Us Ton Counting End


//Pound Counting Start  

if(option_from === "Pound" && option_to==="Tonne"){
	result.value = Number(input.value) /2205;
}
else if(option_from === "Pound" && option_to==="Kilogram"){

		result.value = Number(input.value) /2.205 
 }

 else if(option_from === "Pound" && option_to==="Gram"){
		result.value = input.value * 454

	}

	else if(option_from === "Pound" && option_to==="Milligram"){
		result.value = input.value * 453592
	}
	else if(option_from === "Pound" && option_to==="microgram"){
		result.value = input.value *  4.536 + "e+"+8
	}
	
	
	else if(option_from === "Pound" && option_to==="Imperial"){
		result.value = input.value / 2240

	}
	else if(option_from === "Pound" && option_to==="US"){
		result.value = input.value /2000
	}
	else if(option_from === "Pound" && option_to==="Pound"){
		result.value = input.value /14
	}
	else if(option_from === "Pound" && option_to==="Ounce"){
		result.value = input.value * 16	; 
	}

// Pound Counting End



//Ounce Counting Start  

if(option_from === "Ounce" && option_to==="Tonne"){
	result.value = Number(input.value) /35274;
}
else if(option_from === "Ounce" && option_to==="Kilogram"){

		result.value = Number(input.value) /35.274
 }

 else if(option_from === "Ounce" && option_to==="Gram"){
		result.value = input.value * 28.35

	}

	else if(option_from === "Ounce" && option_to==="Milligram"){
		result.value = input.value * 28350
	}
	else if(option_from === "Ounce" && option_to==="microgram"){
		result.value = input.value *  2.835 + "e+" +7
	}
	
	
	else if(option_from === "Ounce" && option_to==="Imperial"){
		result.value = input.value / 35840

	}
	else if(option_from === "Ounce" && option_to==="US"){
		result.value = input.value /32000
	}
	else if(option_from === "Ounce" && option_to==="Stone"){
		result.value = input.value /224
	}
	else if(option_from === "Ounce" && option_to==="Pound"){
		result.value = input.value / 16	; 
	}

// Ounce Counting End
}