//hide the alert for name
document.getElementById("alert1").style.display = "none";
//declare an array for my names
var femaleAkanName = [
	"Akosua",
	"Adwoa",
	"Abenaa",
	"Akua",
	"Yaa",
	"Afua",
	"Ama"
];
var maleAkanName = [
	"Kwasi",
	"Kwadwo",
	"Kwabena",
	"Kwaku",
	"Yaw",
	"Kofi",
	"Kwame"
];

var daysWeek = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];
// declare a function
function getYourAkanName() {
	var year = parseInt(document.getElementById("year").value);
	var month = parseInt(document.getElementById("month").value);
	var day = parseInt(document.getElementById("day").value);

	var gender = getGender();

	var date = new date(year + "/" + month + "/" + day);

	var dateOfBirth = date.getDaysWeek();
	var getYourAkanName;
	// conditions usimng if else statements
	if (gender === "male") {
		getYourAkanName = maleAkanName[dateOfBirth];
	} else {
		getYourAkanName = femaleAkanName[dateOfBirth];
	}
}

function getYourAkanName() {
	document.getElementById("alert1").style.display = "block";
	document.getElementById("span1").innerHTML = "ghjskdsj";
	document.getElementById("span2").innerHTML = "dsksks";
}

function getGender() {
	var yourGender = document.getElementsById("gender");

	for (i = 0; i < yourGender.length; i++) {
		if (yourGender[i].checked) {
			return yourGender[i].value;
		}
	}
}
