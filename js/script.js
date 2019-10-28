//hide the alert for name
document.getElementById("alert1").style.display = "none";
//declare an array for my names
var femaleAkanNames = [
	"Akosua, <img src='/images/akosua.jpg' height='200px'>",
	"Adwoa, <img src='/images/adwoa.jpg' height='200px'>",
	"Abenaa, <img src='/images/abena.jpeg' height='200px'>",
	"Akua, <img src='/images/akua.jpeg' height='200px'>",
	"Yaa, <img src='/images/yaa.jpeg' height='200px'>",
	"Afua, <img src='/images/afua.jpg' height='200px'>",
	"Ama, <img src='/images/ama.jpeg' height='200px'>"
];
var maleAkanNames = [
	"Kwasi, <img src='/images/kwasi.jpg' height='200px'>",
	"Kwadwo, <img src='/images/kwadwo.jpg' height='200px'>",
	"Kwabena, <img src='/images/kwabena.jpeg' height='200px'>",
	"Kwaku, <img src='/images/kwaku.jpg' height='200px'>",
	"Yaw, <img src='/images/yaw.jpg' height='200px'>",
	"Kofi, <img src='/images/kofi.jpeg' height='200px'>",
	"Kwame, <img src='/images/kwame.jpeg' height='200px'>"
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

	var day = new Date(year + "-" + month + "-" + day);

	var dateOfBirth = day.getDay();

	var akanName;

	// conditions using if else statements when radio button is checked
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
