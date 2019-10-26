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
function getYourkanName() {
	var year = parseInt(document.getElementById("year").value);
	var month = parseInt(document.getElementById("month").value);
	var day = parseInt(document.getElementById("day").value);
	var gender = getGender();
	var date = new date(year + "/" + month + "/" + day);
	var dateOfBirth = date.getDaysWeek();
	var getYourkanName;

	if (gender === "male") {
		getYourkanName = maleAkanName[dateOfBirth];
	} else {
		getYourkanName = femaleAkanName[dateOfBirth];
	}
	alert(
		"Awesome! You were born on " +
			daysWeek[dateOfBirth] + 
			" and your Akan name is " +
			getYourkanName
	);
}

