//hide the alert for name
document.getElementById("alert1").style.display = "none";
//declare an array for my names
var femaleAkanNames = [
	"Akosua",
	"Adwoa",
	"Abenaa",
	"Akua",
	"Yaa",
	"Afua",
	"Ama"
];
var maleAkanNames = [
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

	var day = new Date(year + "--" + month + "--" + day);

	var dateOfBirth = day.getDay();

	var akanName;

	// conditions using if else statements
	if (gender === "male") {
		akanName = maleAkanNames[dateOfBirth];
	} else {
		akanName = femaleAkanNames[dateOfBirth];
	}
	document.getElementById("alert1").style.display = "block";
	document.getElementById("span1").innerHTML = daysWeek[dateOfBirth];
	document.getElementById("span2").innerHTML = akanName;
}

function getGender() {
	var gender = document.getElementsByName("gender");

	for (i = 0; i < gender.length; i++) {
		if (gender[i].checked) {
			return gender[i].value;
		}
	}
}
