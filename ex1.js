function changeProfile() {
	// call all functions to change profile
	NameToJob();
	educationToAchievements();
	oldToNewImage();
	changeBodyBackgroundColor();
}

function NameToJob() {
	document.getElementById("NumePrenume").innerHTML = "Computer Programming - Microsoft";
}

function educationToAchievements() {
	var r1 = document.getElementById("realizare_r1");
	var l1 = document.getElementById("link_r1");
	r1.innerHTML = "Internship 01.06.2024 - 24.09.2024";
	l1.innerHTML = "https://careers.microsoft.com/students/us/en/usuniversityinternship";

	var r2 = document.getElementById("realizare_r2");
	var l2 = document.getElementById("link_r2");
	r2.innerHTML = "Cea mai buna lucrare de licenta 26.06.2026";
	l2.innerHTML = "https://etti.utcluj.ro/finalizare-studii.html";

	var r3 = document.getElementById("realizare_r3");
	var l3 = document.getElementById("link_r3");
	r3.innerHTML = "Infiintare SRL 09.07.2026";
	l3.innerHTML = "https://www.onrc.ro/index.php/ro/";
}

function oldToNewImage() {
	var img = document.getElementById("pozaprofil");
	img.src = "./windows.jpg";
	img.style.opacity = 0.95;
	img.style.borderWidth = '10px';
    img.style.borderStyle = 'solid';
    img.style.borderColor = 'red';
	img.style.right='100px'
	
	
	
}

function changeBodyBackgroundColor() {
	var body = document.getElementById("body");
	body.style.backgroundColor  = "#e1f0e5";
	body.style.fontFamily="Verdana";
	
}

function AddNewItem() {
	addBirthDate();
	createEmailTextBox();
}

function addBirthDate() {
	var tag = document.createElement("h3");
	tag.id = "date-years";
	var text = document.createTextNode("09-07-2003");
	var element = document.getElementById("birthdate");
	tag.appendChild(text);
	element.appendChild(tag);
	document.getElementById("birthdate").addEventListener("mouseover", birthToYears);
	document.getElementById("birthdate").addEventListener("mouseout", handleMouseOut);
}

function birthToYears() {
	var currentTime = new Date();
	var vv = document.getElementById("date-years");
	var year = currentTime.getFullYear()
	var numYears = Number(year) - Number(vv.innerHTML.slice(-4));
	vv.innerHTML = "Varsta: " + numYears;
}

function handleMouseOut() {
		document.getElementById("date-years").innerHTML = '09-07-2003';
	}

function createEmailTextBox() {
	var input = document.createElement("input");
	input.type = "email";
	input.id = "email-box";
	input.value = "erdei.ra.tudor@student.utcluj.ro";
	input.style.width = "300px";
	input.addEventListener("mouseover", validateEmail);
	document.getElementById("birthdate").appendChild(input);
}

function validateEmail() {
	var input = document.getElementById("email-box");
  	var validRegex = /^\S+@\S+\.\S+$/;
  	if (input.value.match(validRegex)) {
  		console.log("Adresa de mail valida!");

  	} else {
    	alert("Adresa de email invalida!");
  	}
}