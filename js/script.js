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
function getMyAkanName() {
	var year = parseInt(document.getElementById("year").value);
	var month = parseInt(document.getElementById("month").value);
	var day = parseInt(document.getElementById("day").value);
	var gender = getGender();
	var date = new date(year + "/" + month + "/" + day);
	var dateOfBirth = date.getDay();
	var akanName;
}
alert("You were born on" + daysWeek[dateOfBirth] + "and");

