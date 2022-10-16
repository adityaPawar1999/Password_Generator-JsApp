const lengthSlider = document.querySelector(".pass-length input");
options = document.querySelectorAll(".option input");
generateBtn = document.querySelector(".generate-btn");
passIndicator = document.querySelector(".pass-indicator");
copyIcon = document.querySelector(".input-box span");
passwordInput = document.querySelector(".input-box input")

const charcters = {
	lowercase : "abcdefghijklmnopqrstuvwxyz",  // here all name that are gives are id names that given in html
	uppercase : "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
	numbers : "01233456789",
	symbols : "!@#$%^&*()_+~`<>?:{},./;'[];",
	exc_duplicate : false
}

const generatePassword = () => {
	let staticPassword= "";
	randomPassword = "";
	passLength = lengthSlider.value;

	options.forEach(option => {			//looping through each options checkbox
		if(option.checked){            // if option is checked
			// if chechbox id isn't exc-duplicate && spaces
			if (option.id !== "exc-duplicate" && option.id !== "spaces") {
				//adding particular key value from charcters object of staticPassword
				staticPassword += charcters[option.id];
			}else if(option.id === "spaces"){       //if chechbox id is spaces
				staticPassword += '   ${}'     // adding spaces at the begining % end of the staticPasssword
			}else{     //else
				exc_duplicate = true;
			}
		}
	});  	 


	for (let i = 0; i < passLength; i++) {
		randomPassword += staticPassword[Math.floor(Math.random()* staticPassword.length )];
	}
	passwordInput.value = randomPassword;
}
const updatePassIndicator = () =>{
	passIndicator.id = lengthSlider.value <= 8 ? "weak" : lengthSlider.value <= 15 ? "medium" : "strong"; 	  
}
const updateSlider = () => {
	document.querySelector(".pass-length span").innerText = lengthSlider.value;
	generatePassword();
	updatePassIndicator();
} 
updateSlider();

const copyPassword = () => {
	navigator.clipboard.writeText(passwordInput.value);
	copyIcon.innerText= "check";
	setTimeout(() => {
		copyIcon.innerText = "copy_all"
	}, 1500)
}
lengthSlider.addEventListener("input", updateSlider);
generateBtn.addEventListener("click",generatePassword);
copyIcon.addEventListener("click",copyPassword);
