//declare an array for my names
const femaleAkanName = [
	"Akosua",
	"Adwoa",
	"Abenaa",
	"Akua",
	"Yaa",
	"Afua",
	"Ama"
];
const maleAkanName = [
	"Kwasi",
	"Kwadwo",
	"Kwabena",
	"Kwaku",
	"Yaw",
	"Kofi",
	"Kwame"
];

function maleAkanName() {
	var day = parseInt(document.getElementById("day")).value;
	var year = parseInt(document.getElementById("year")).value;
	var month = parseInt(document.getElementById("month")).value;
}
function femaleAkanName() {
	var day = parseInt(document.getElementById("day")).value;
	var year = parseInt(document.getElementById("year")).value;
	var month = parseInt(document.getElementById("month")).value;
}
function getWeekDay(century, year, month, date) {
	WeekDay =
		(century / 4 -
			2 * century -
			1 +
			(5 * year) / 4 +
			(26 * (month + 1)) / 10 +
			date) %
		7;
	alert(dayOfWeek.value);
}
