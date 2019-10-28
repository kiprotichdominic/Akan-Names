//hide the alert button
document.getElementById("alert1").style.display = "none";
document.getElementById("alert2").style.display = "none";
//declare an array for my names
var femaleAkanNames = [
	"Akosua, <img src='https://bit.ly/2JsWQ5t' height='200px'>",
	"Adwoa, <img src='https://bit.ly/369OsS7' height='200px'>",
	"Abenaa, <img src='https://bit.ly/2MRihiN' height='200px'>",
	"Akua, <img src='https://bit.ly/2Poskxu' height='200px'>",
	"Yaa, <img src='https://bit.ly/2PoBN7T' height='200px'>",
	"Afua, <img src='https://bit.ly/2pj47xU' height='200px'>",
	"Ama, <img src='https://bit.ly/348GTcI' height='200px'>"
];
var maleAkanNames = [
	"Kwasi, <img src='https://bit.ly/2omOfdc' height='200px'>",
	"Kwadwo, <img src='https://bit.ly/31SWwmV' height='200px'>",
	"Kwabena, <img src='https://bit.ly/2PphxDi' height='200px'>",
	"Kwaku, <img src='https://bit.ly/3683NCG' height='200px'>",
	"Yaw, <img src='https://bit.ly/36eVwx0' height='200px'>",
	"Kofi, <img src='https://bit.ly/2JsXMH1' height='200px'>",
	"Kwame, <img src='https://bit.ly/2BRxDNG' height='200px'>"
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
//calling functions
function getAkanName() {
	var year = parseInt(document.getElementById("year").value);
	var month = parseInt(document.getElementById("month").value);
	var day = parseInt(document.getElementById("day").value);
	var male = document.getElementById("male");
	var female = document.getElementById("female");

	//validate date
	if (day <= 0 || day >= 32) {
		alert(
			"Be serious, that can't be correct. Console your guardian or parent for correct !!!DATE!!!"
		);
		document.getElementById("allertme").style.display = "none";
	}
	var day = new Date(year + "/" + month + "/" + day);
	//storing date in variable date of birth
	var dateOfBirth = day.getDay();
	if (male.checked == true) {
		document.getElementById("alert1").style.display = "block";
		document.getElementById("span1").innerHTML =
			"Awesome! You were born on, " + daysWeek[dateOfBirth];
		document.getElementById("span2").innerHTML =
			"your Akan Name is " + maleAkanNames[dateOfBirth];
	} else if (female.checked == true) {
		document.getElementById("alert1").style.display = "block";
		document.getElementById("span1").innerHTML = daysWeek[dateOfBirth];
		document.getElementById("span2").innerHTML = femaleAkanNames[dateOfBirth];
	}
}
//refresh button

function refreshPage() {
	window.location.reload();
}
