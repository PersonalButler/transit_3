
const display = document.querySelector('h2');
const date = document.getElementById('date');
const days = document.getElementById('days');
const start = 20;
let seconds = start;
let expirationMinutes = 58;
let timeSuffix = 'AM';

const d = new Date().toLocaleString();

const map1 = new Map();

map1.set('1', 'Jan');
map1.set('2', 'Feb');
map1.set('3', 'Mar');
map1.set('4', 'Apr');
map1.set('5', 'May');
map1.set('6', 'Jun');
map1.set('7', 'Jul');
map1.set('8', 'Aug');
map1.set('9', 'Sep');
map1.set('10', 'Oct');
map1.set('11', 'Nov');
map1.set('12', 'Dec');


Date.prototype.today = function () { 
    return ((this.getDate() < 10)?"0":"") + this.getDate() +"/"+(((this.getMonth()+1) < 10)?"0":"") + (this.getMonth()+1) +"/"+ this.getFullYear();
}

Date.prototype.timeNow = function () {
     return ((this.getHours() < 10)?"0":"") + this.getHours() +":"+ ((this.getMinutes() < 10)?"0":"") + this.getMinutes() +":"+ ((this.getSeconds() < 10)?"0":"") + this.getSeconds();
}

Date.prototype.curSeconds = function () {
	return ((this.getSeconds() < 10)?"0":"") + this.getSeconds();
}


var newDate = new Date();
var datetime =  newDate.timeNow();

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

let day = weekday[newDate.getDay()];



let dateString = datetime.toString();
let secondsString = dateString.substring(6);
let minutesString = dateString.substring(3,5);
let hoursString = dateString.substring(0,2);

let dateSeconds = parseInt(secondsString);
let dateMinutes = parseInt(minutesString);
let dateHours = parseInt (hoursString);
if (dateHours==12)
	timeSuffix='PM';
if (dateHours==0)
	dateHours = dateHours+12;
if (dateHours>12){
	dateHours=dateHours-12;
	timeSuffix = 'PM';
}



function updateCountdown(){
	if (expirationMinutes==48)
		expirationMinutes=58;

	if (seconds<10)
	display.innerHTML = 'Expires in ' + expirationMinutes+':0' + seconds;
	else
		display.innerHTML = 'Expires in ' + expirationMinutes + ':'+seconds;
	seconds = seconds -1;



	if (seconds==-1){
		seconds=59;
		expirationMinutes = expirationMinutes -1;
	}
	
	if (dateSeconds==60){
		dateSeconds=0;
		dateMinutes = dateMinutes+1;
		if (dateMinutes==60){
			dateMinutes=0;
			dateHours = dateHours+1;
		}
	}



	if (dateSeconds<10||dateMinutes<10||dateHours<10){
		if (dateSeconds<10&&dateMinutes<10&&dateHours<10)
	date.innerHTML =  '0' + dateHours +':0'+ dateMinutes + ':0' + dateSeconds + " " + timeSuffix;
		else if (dateSeconds<10&&dateMinutes<10&&dateHours>=10)
			date.innerHTML =  dateHours +':0'+ dateMinutes + ':0' + dateSeconds + " " + timeSuffix;
		else if (dateSeconds<10&&dateMinutes>=10&&dateHours<10)
			date.innerHTML =  '0' + dateHours + ':' + dateMinutes + ':0' + dateSeconds + " " + timeSuffix;
		else if (dateSeconds>=10&&dateMinutes<10&&dateHours<10)
			date.innerHTML =  '0' + dateHours +':0'+ dateMinutes + ':' + dateSeconds + " " + timeSuffix;
		else if (dateSeconds<10&&dateMinutes>=10&&dateHours>=10)
			date.innerHTML =  dateHours +':'+ dateMinutes + ':0' + dateSeconds + " " + timeSuffix;
		else if (dateSeconds>=10&&dateMinutes>=10&&dateHours<10)
			date.innerHTML =  '0'+ dateHours +':'+ dateMinutes + ':' + dateSeconds + " " + timeSuffix;
		else if (dateSeconds>=10&&dateMinutes<10&&dateHours>=10)
			date.innerHTML =  dateHours +':0'+ dateMinutes + ':' + dateSeconds + " " + timeSuffix;
		

	}
	else {
	date.innerHTML =  dateHours +':'+ dateMinutes + ':' + dateSeconds + " " + timeSuffix;
	}
	dateSeconds=dateSeconds +1;
	// fix this 
	let dayString = "dayString";
	let monthString = "monthString";
	let yearString = "yearString";


	if (d.charAt(1)=='/'){
		monthString=d.substring(0,1);
		if (d.charAt(3)=='/'){
		dayString='0'+d.substring (2,3);
		yearString = d.substring (4,8);
		}
		else{
		dayString=d.substring (2,4);
		yearString = d.substring (5,9);
		}
	}

	else {
		monthString=d.substring(0,2);
		if (d.charAt(4)=='/'){
		dayString='0'+d.substring (3,4);
		yearString = d.substring (5,9);
		}
		else{
		dayString=d.substring (3,5);
		yearString = d.substring (6,10);
		}
	}
	
	
	let monthName = map1.get(monthString);
	days.innerHTML = day + ', ' + monthName + ' ' + dayString + ', ' + yearString;


}

setInterval(updateCountdown, 1000);

//updateCountdowntime();

